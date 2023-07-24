import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import {
  centClient,
  centConnectionStatus,
  connectedUsers,
  csShared,
  currentCs,
  handoutShared,
  setAppRolls,
  setCentClient,
  setCentConnectionStatus,
  setConnectedUsers,
  setCsShared,
  setCurrentCs,
  setHandoutShared,
  updateRolls,
} from "./state";
import {
  appCs,
  appHandouts,
  appRooms,
  appSettings,
  currentRoom,
  rollerCsKey,
  rollerHandoutKey,
  rollerRoomsKey,
  saveToStorage,
} from "./storage";
import {
  CentMessage,
  CsInfo,
  HandoutInfo,
  NetRollInfo,
  RollInfo,
  RoomInfo,
  topicCsInfo,
  topicHandoutInfo,
  topicRollInfo,
  topicRollUpdate,
  topicRoomInfo,
} from "./types";
import {
  Net2HostRollInfo,
  animateRemoteRoll,
  enrollTask,
  netTopic,
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

const processRollUpdate = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (
    !data ||
    data.sender == appSettings().userIdent ||
    data.room !== currentRoom()?.id
  )
    return;
  centLoadRolls(data.room);
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

const processHandoutInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (!data || data.sender == appSettings().userIdent) return;
  const room = currentRoom();
  if (!room || data.room !== room.id) return;
  const info = data.data as HandoutInfo;
  if (!info.shared) {
    // sharing off
    if (info.owner !== appSettings().userIdent) {
      const ns = { ...appCs() };
      delete ns[info.id];
      saveToStorage(rollerHandoutKey, ns);
    }
  } else {
    centLoadHandouts(room.id, [info.id]);
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
  return addr;
};

export const activateRoomSubscriptions = () => {
  const client = centClient();
  if (!client) return;

  Object.values(client.subscriptions()).forEach((sub) => {
    if (sub.channel !== topicRoomInfo) {
      sub.removeAllListeners();
      sub.unsubscribe();
      client.removeSubscription(sub);
    }
  });
  setConnectedUsers({});

  const sub = client.newSubscription(netTopic(topicRollInfo));
  sub.on("publication", (ctx) => {
    enrollTask(() => processRollInfo(ctx));
  });
  sub.on("join", (ctx: any) => {
    setConnectedUsers((prev) => ({
      ...prev,
      [ctx.info.connInfo]: ctx.info.user,
    }));
  });
  sub.on("leave", (ctx: any) => {
    const ns = { ...connectedUsers() };
    delete ns[ctx.info.connInfo];
    setConnectedUsers(ns);
  });
  sub.subscribe();
  sub.presence().then((data: any) => {
    const ns: Record<string, string> = {};
    Object.values(data.clients).forEach((it: any) => {
      ns[it.connInfo] = it.user;
    });
    setConnectedUsers(ns);
  });
  const sub3 = client.newSubscription(netTopic(topicCsInfo));
  sub3.on("publication", (ctx) => {
    enrollTask(() => processCsInfo(ctx));
  });
  sub3.subscribe();
  const sub4 = client.newSubscription(netTopic(topicRollUpdate));
  sub4.on("publication", (ctx) => {
    enrollTask(() => processRollUpdate(ctx));
  });
  sub4.subscribe();
  const sub5 = client.newSubscription(netTopic(topicHandoutInfo));
  sub5.on("publication", (ctx) => {
    enrollTask(() => processHandoutInfo(ctx));
  });
  sub5.subscribe();
};

export const centConnect = () => {
  const s = appSettings();
  if (!appSettings) return;

  const centrifuge = new Centrifuge(serverAddress(), {
    name: appSettings().userName,
    data: appSettings().userIdent,
    maxReconnectDelay: 60000,
    minReconnectDelay: 60000,
    maxServerPingDelay: 10000,
  });
  if (!centrifuge) return;
  centrifuge.on("connecting", function (ctx) {
    console.log("connecting to server", Date.now());
  });
  centrifuge.on("connected", function (ctx) {
    setCentClient(centrifuge);
    setCentConnectionStatus(true);
    centLoadRooms();
    const exists = centrifuge.getSubscription(topicRoomInfo);
    if (!exists) {
      const sub = centrifuge.newSubscription(topicRoomInfo);
      sub.on("publication", (ctx) => {
        processRoomInfo(ctx);
      });
      sub.subscribe();
    }
  });
  centrifuge.on("disconnected", () => {
    console.log("disconnected", Date.now());
    setCentConnectionStatus(false);
    setConnectedUsers({});
  });
  centrifuge.on("error", (err: any) => {
    console.error("centrifuge error", err, Date.now());
    centDisconnect(); // disconnect on any error, should reconnect.
  });
  centrifuge.connect();
};

export const centDisconnect = () => {
  const cl = centClient();
  if (!cl) return;
  Object.values(cl.subscriptions()).forEach((sub) => {
    sub.unsubscribe();
    sub.removeAllListeners();
    cl.removeSubscription(sub);
  });
  cl.disconnect();
  setCentConnectionStatus(false);
  setConnectedUsers({});
  setCentClient(undefined);
};

export const centPublish = (topic: string, payload: any) => {
  const client = centClient();
  if (!client) {
    return;
  }
  try {
    client
      .publish(topic, centPack(appSettings().userIdent, payload))
      .then((result: PublishResult) => {
        // Message sent
      })
      .catch((err) => {
        console.error("publish error", err);
      });
  } catch (err: any) {
    console.error("publish error", err);
  }
};

// Rooms

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
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

// Charsheets

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
          if (
            !receivedIds.includes(id) &&
            newState[id] &&
            newState[id].shared &&
            newState[id].owner !== appSettings().userIdent
          ) {
            delete newState[id]; // charsheet has been deleted
          }
        });
        saveToStorage(rollerCsKey, newState);
        const scs = { ...csShared() };
        data.forEach((v) => {
          if (v.shared) {
            scs[v.id] = roomId;
          }
        });
        setCsShared(scs);
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
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

// Rolls

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

export const centUpdateRoll = (roomId: string, info: NetRollInfo) => {
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
    .rpc("roll_update", msg)
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

// Handouts
export const centLoadHandouts = (roomId: string, ids?: string[]) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: appSettings().userIdent,
    room: roomId,
    data: ids ? ids : Object.values(appHandouts()).map((it) => it.id),
  } as CentMessage;
  client
    .rpc("handout_list", msg)
    .then((result) => {
      const data = result.data as HandoutInfo[];
      if (data) {
        const newState = { ...appHandouts() };
        data.forEach((r) => (newState[r.id] = r));

        const receivedIds = data.map((r) => r.id);
        const toCheck = ids
          ? ids
          : Object.values(appHandouts()).map((r) => r.id);
        toCheck.forEach((id) => {
          if (
            !receivedIds.includes(id) &&
            newState[id] &&
            newState[id].shared &&
            newState[id].owner !== appSettings().userIdent
          ) {
            delete newState[id]; // charsheet has been deleted
          }
        });
        saveToStorage(rollerHandoutKey, newState);
        const scs = { ...handoutShared() };
        data.forEach((v) => {
          if (v.shared) {
            scs[v.id] = roomId;
          }
        });
        setHandoutShared(scs);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centDeleteHandout = (roomId: string, info: HandoutInfo) => {
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
    .rpc("handout_delete", msg)
    .then((result) => {
      centLoadHandouts(roomId);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const centUpdateHandouts = (roomId: string, info: CsInfo) => {
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
    .rpc("handout_update", msg)
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

// Init

export const netInit = () => {
  if (!centConnectionStatus()) centConnect();
};
