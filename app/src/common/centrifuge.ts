import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import { appRolls, centClient, currentCs, setAppRolls, setCentClient, setCentConnectionStatus, setCurrentCs, updateRolls } from "./state";
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
  RollInfo,
  RoomInfo,
  topicCsInfo,
  topicRollInfo,
  topicRoomInfo,
} from "./types";
import {
  Net2HostRollInfo,
  animateRemoteRoll,
  enrollTask,
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
  if (!info.shared) {
    // sharing off
    if (info.owner !== appSettings().userIdent) {
      const ns = { ...appCs() };
      delete ns[info.id];
      saveToStorage(rollerCsKey, ns);
      if (currentCs()?.id == info.id) setCurrentCs(undefined);
    }
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
  const centrifuge = new Centrifuge(serverAddress(), {
    name: appSettings().userName,
    maxReconnectDelay: 60000,
    minReconnectDelay: 60000,
    maxServerPingDelay: 10000
  });
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
      enrollTask(() => processCsInfo(ctx));
      ;
    });
    sub3.subscribe();
  });
  centrifuge.on("disconnected", () => {
    setCentConnectionStatus(false);
  });
  centrifuge.on("error", (err: any) => {
    console.error("centrifuge error", err);
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
      const data = result.data as RoomInfo[];
      if (data) {
        const newState = { ...appRooms() };
        data.forEach((r) => (newState[r.id] = r));

        const receivedIds = data.map((r) => r.id);
        const toCheck = ids ? ids : Object.values(appRooms()).map((r) => r.id);
        toCheck.forEach((id) => {
          if (!receivedIds.includes(id)) delete newState[id]; // room has been deleted
        });

        saveToStorage(rollerRoomsKey, newState);
        const room = currentRoom();
        if (room) {
          centLoadCs(room.id);
        }
      }
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
    data: room,
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
    data: room,
  } as CentMessage;
  client
    .rpc("room_update", msg)
    .then((result) => { })
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
          if (!receivedIds.includes(id) && newState[id].shared && newState[id].owner !== appSettings().userIdent) {
            delete newState[id]; // charsheet has been deleted
          }
        });
        saveToStorage(rollerCsKey, newState);
        if (ids?.length == 1 && ids[0] == currentCs()?.id) {
          setCurrentCs(undefined);
          setCurrentCs(newState[ids[0]]);
        }
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
    .then((result) => { })
    .catch((err) => {
      console.error(err);
    });
};



export const centLoadRolls = (roomId: string) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: [],
  } as CentMessage;
  client
    .rpc("roll_list", msg)
    .then((result) => {
      const data = result.data as NetRollInfo[];
      if (data) {
        const newState: Record<string, RollInfo> = {};
        data.forEach((r) => (newState[r.id] = Net2HostRollInfo(r)));
        setAppRolls(newState);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centClearRolls = (roomId: string) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: [],
  } as CentMessage;
  client
    .rpc("roll_clear", msg)
    .then((result) => {
      centLoadRolls(roomId);
    })
    .catch((err) => {
      console.error(err);
    });
};