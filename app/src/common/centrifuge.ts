import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import { centClient, setCentClient, setCentConnectionStatus } from "./state";
import {
  appCs,
  appRooms,
  appSettings,
  currentRoom,
  rollerCsKey,
  rollerRoomsKey,
  saveToStorage,
} from "./storage";
import {
  CentMessage,
  CsInfo,
  NetRollInfo,
  NetRoomInfo,
  RoomInfo,
  topicCsInfo,
  topicRollInfo,
  topicRoomInfo,
} from "./types";
import {
  Host2NetRoomInfo,
  Net2HostRollInfo,
  Net2HostRoomInfo,
  animateRemoteRoll,
  enrollTask,
  updateRolls,
} from "./util";

export const centPack = (sender: string, payload: any) => {
  const room = currentRoom();
  if (!room) return;
  const msg: CentMessage = {
    sender: sender,
    data: payload,
    room: room.id,
  };
  return msg;
};

export const centUnpack = (payload: any) => {
  return payload as CentMessage;
};

const processRollInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (
    !data ||
    data.sender == appSettings().userIdent ||
    data.room !== currentRoom()?.id
  )
    return;
  const info = Net2HostRollInfo(data.data as NetRollInfo);
  updateRolls(info);
  animateRemoteRoll(info);
};

const processRoomInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (!data || data.sender == appSettings().userIdent) return;
  const info = data.data as RoomInfo;
  if (!appRooms()[info.id]) return;
  centLoadRooms([info.id]);
};

const processCsInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (!data || data.sender == appSettings().userIdent) return;
  const room = currentRoom();
  if (!room || data.room !== room.id) return;
  const info = data.data as CsInfo;
  if (!info.shared && info.owner !== appSettings().userIdent) {
    // sharing off
    const ns = { ...appCs() };
    delete ns[info.id];
    saveToStorage(rollerCsKey, ns);
  } else {
    centLoadCs(room.id, [info.id]);
  }
};

export const serverAddress = () => {
  // DEV version
  //const addr = "ws://localhost:5000/connection/websocket";
  // PROD version
  // const addr =  `wss://${window.location.host}/connection/websocket`;
  const schema = import.meta.env.DEV ? "ws" : "wss";
  const host = import.meta.env.DEV ? "localhost:5000" : window.location.host;
  const addr = `${schema}://${host}/connection/websocket`;
  console.log("server address", addr);
  return addr;
};

export const centConnect = () => {
  const s = appSettings();
  if (!appSettings) return;
  const centrifuge = new Centrifuge(serverAddress());
  if (!centrifuge) return;
  centrifuge.on("connected", function (ctx) {
    setCentClient(centrifuge);
    setCentConnectionStatus(true);
    centLoadRooms();
    const sub = centrifuge.newSubscription(topicRollInfo);
    sub.on("publication", (ctx) => {
      enrollTask(() => processRollInfo(ctx));
    });
    sub.subscribe();
    const sub2 = centrifuge.newSubscription(topicRoomInfo);
    sub2.on("publication", (ctx) => {
      processRoomInfo(ctx);
    });
    sub2.subscribe();
    const sub3 = centrifuge.newSubscription(topicCsInfo);
    sub3.on("publication", (ctx) => {
      processCsInfo(ctx);
    });
    sub3.subscribe();
  });
  centrifuge.on("disconnected", () => {
    setCentConnectionStatus(false);
  });
  centrifuge.connect();
};

export const centDisconnect = () => {
  const cl = centClient();
  if (!cl) return;
  cl.disconnect();
  setCentConnectionStatus(false);
};

export const centPublish = (topic: string, payload: any) => {
  const client = centClient();
  if (!client) {
    return;
  }
  client
    .publish(topic, centPack(appSettings().userIdent, payload))
    .then((result: PublishResult) => {
      // Message sent
    })
    .catch((err) => console.error(err));
};

export const centLoadRooms = (ids?: string[]) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: "",
    data: ids ? ids : Object.values(appRooms()).map((it) => it.id),
  } as CentMessage;
  client
    .rpc("room_list", msg)
    .then((result) => {
      const data = result.data as NetRoomInfo[];
      if (data) {
        const newState = { ...appRooms() };
        data.forEach((r) => (newState[r.id] = Net2HostRoomInfo(r)));

        const receivedIds = data.map((r) => r.id);
        const toCheck = ids ? ids : Object.values(appRooms()).map((r) => r.id);
        toCheck.forEach((id) => {
          if (!receivedIds.includes(id)) delete newState[id]; // room has been deleted
        });

        saveToStorage(rollerRoomsKey, newState);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centCreateRoom = (room: RoomInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: room.id,
    data: Host2NetRoomInfo(room),
  } as CentMessage;
  client
    .rpc("room_create", msg)
    .then((result) => {
      centLoadRooms();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centDeleteRoom = (room: RoomInfo) => {
  const client = centClient();
  if (!client || room.owner !== appSettings().userIdent) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: room.id,
    data: Host2NetRoomInfo(room),
  } as CentMessage;
  client
    .rpc("room_delete", msg)
    .then((result) => {
      centLoadRooms();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centUpdateRoom = (room: RoomInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: room.id,
    data: Host2NetRoomInfo(room),
  } as CentMessage;
  client
    .rpc("room_update", msg)
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

export const centLoadCs = (roomId: string, ids?: string[]) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: ids ? ids : Object.values(appCs()).map((it) => it.id),
  } as CentMessage;
  client
    .rpc("cs_list", msg)
    .then((result) => {
      const data = result.data as CsInfo[];
      if (data) {
        const newState = { ...appCs() };
        data.forEach((r) => (newState[r.id] = r));

        const receivedIds = data.map((r) => r.id);
        const toCheck = ids ? ids : Object.values(appCs()).map((r) => r.id);
        toCheck.forEach((id) => {
          if (!receivedIds.includes(id)) delete newState[id]; // charsheet has been deleted
        });
        saveToStorage(rollerCsKey, newState);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centDeleteCs = (roomId: string, info: CsInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: info,
  } as CentMessage;
  client
    .rpc("cs_delete", msg)
    .then((result) => {
      centLoadCs(roomId);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centUpdateCs = (roomId: string, info: CsInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: info,
  } as CentMessage;
  client
    .rpc("cs_update", msg)
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};
