import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import {
  appCs,
  appRooms,
  centClient,
  centConnectionStatus,
  connectedUsers,
  csShared,
  currentCs,
  loggedUser,
  setAppCs,
  setAppRolls,
  setAppRooms,
  setCentClient,
  setCentConnectionStatus,
  setConnectedUsers,
  setCsShared,
  setCurrentCs,
  setLoggedUser,
  updateRolls,
} from "./state";
import { currentRoom } from "./storage";
import {
  CentMessage,
  CsInfo,
  NetRollInfo,
  RollInfo,
  RoomInfo,
  UserCreateInfo,
  UserInfo,
  topicCsInfo,
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

export const shouldIgnoreMsg = (data: CentMessage | undefined) => {
  return (
    !data || data.sender == loggedUser()?.id || data.room !== currentRoom()?.id
  );
};

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
  if (shouldIgnoreMsg(data)) return;
  netLoadRolls(data.room);
};

const processRollInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (shouldIgnoreMsg(data)) return;
  const info = Net2HostRollInfo(data.data as NetRollInfo);
  updateRolls(info);
  animateRemoteRoll(info);
};

const processRoomInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (!data || data.sender == loggedUser()?.id) return;
  const info = data.data as RoomInfo;
  if (!appRooms()[info.id]) return;
  netLoadRooms([info.id]);
};

const processCsInfo = (ctx: PublicationContext) => {
  const data = ctx.data as CentMessage;
  if (!data || data.sender == loggedUser()?.id) return;
  const room = currentRoom();
  if (!room || data.room !== room.id) return;
  const info = data.data as CsInfo;
  if (!info.shared) {
    // sharing off
    if (info.owner !== loggedUser()?.id) {
      const ns = { ...appCs() };
      delete ns[info.id];
      setAppCs(ns);
      if (currentCs()?.id == info.id) setCurrentCs(undefined);
    }
  } else {
    netLoadCs(room.id, [info.id]);
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
      [ctx.info.user]: ctx.info.connInfo,
    }));
  });
  sub.on("leave", (ctx: any) => {
    const ns = { ...connectedUsers() };
    delete ns[ctx.info.user];
    setConnectedUsers(ns);
  });
  sub.subscribe();
  sub.presence().then((data: any) => {
    const ns: Record<string, string> = {};
    Object.values(data.clients).forEach((it: any) => {
      ns[it.user] = it.connInfo;
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
};

export const netConnect = (username: string, passwd: string) => {
  const centrifuge = new Centrifuge(serverAddress(), {
    name: username,
    data: passwd,
    maxReconnectDelay: 60000,
    minReconnectDelay: 60000,
    maxServerPingDelay: 10000,
  });
  if (!centrifuge) return;
  centrifuge.on("connected", function (ctx) {
    if (ctx.data) {
      centrifuge
        .rpc("userinfo", "")
        .then((resp: any) => {
          const lu = { ...resp.data };
          console.log("user", lu);
          if (!lu.settings)
            lu.settings = {
              appTheme: "blue",
              appFont: "Roboto",
            };
          if (!lu.settings.appTheme) lu.settings.appTheme = "blue";
          if (!lu.settings.appFont) lu.settings.appFont = "Lato";
          setLoggedUser(lu as UserInfo);
          netLoadRooms(lu.settings.rooms);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setCentClient(centrifuge);
    setCentConnectionStatus(true);

    const exists = centrifuge.getSubscription(topicRoomInfo);
    if (!exists) {
      const sub = centrifuge.newSubscription(topicRoomInfo);
      sub.on("publication", (ctx) => {
        processRoomInfo(ctx);
      });
      sub.subscribe();
    }
  });
  centrifuge.on("disconnected", (ctx) => {
    setCentConnectionStatus(false);
    setConnectedUsers({});
    setLoggedUser(undefined);
  });
  centrifuge.on("error", (err: any) => {
    console.error("centrifuge error", err, Date.now());
  });
  centrifuge.connect();
};

export const netDisconnect = () => {
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

export const netPublish = (topic: string, payload: any) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const ident = loggedUser()?.id;
  if (!ident) return;
  try {
    client
      .publish(topic, centPack(ident, payload))
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

export const netLoadRooms = (ids?: string[]) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
    room: "",
    data: ids ? ids : [],
  } as CentMessage;
  client
    .rpc("room_list", msg)
    .then((result) => {
      const data = result.data as any[];
      if (data) {
        const newState = { ...appRooms() };
        data.forEach((r) => {
          newState[r.id] = r;
          newState[r.id].owner = r.edges.owner.id;
        });

        const receivedIds = data.map((r) => r.id);
        const toCheck = ids ? ids : Object.values(appRooms()).map((r) => r.id);
        toCheck.forEach((id) => {
          if (!receivedIds.includes(id)) delete newState[id]; // room has been deleted
        });

        setAppRooms(newState);
        const room = currentRoom();
        if (room) {
          netLoadCs(room.id);
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const netDeleteRoom = (room: RoomInfo) => {
  const client = centClient();
  if (!client || room.owner !== loggedUser()?.id) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
    room: room.id,
    data: room,
  } as CentMessage;
  client
    .rpc("room_delete", msg)
    .then((result) => {
      netLoadRooms(loggedUser()?.settings.rooms);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const netUpdateRoom = (room: RoomInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
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

// Charsheets

export const netLoadCs = (roomId: string, ids?: string[]) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
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
            newState[id].owner !== loggedUser()?.id
          ) {
            delete newState[id]; // charsheet has been deleted
          }
        });
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
        setAppCs(newState);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const netDeleteCs = (roomId: string, info: CsInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
    room: roomId,
    data: info,
  } as CentMessage;
  client
    .rpc("cs_delete", msg)
    .then((result) => {
      netLoadCs(roomId);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const netUpdateCs = (roomId: string, info: CsInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
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

// Rolls

export const netLoadRolls = (roomId: string) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
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

export const netClearRolls = (roomId: string) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
    room: roomId,
    data: [],
  } as CentMessage;
  client
    .rpc("roll_clear", msg)
    .then((result) => {
      netLoadRolls(roomId);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const netUpdateRoll = (roomId: string, info: NetRollInfo) => {
  const client = centClient();
  if (!client) {
    return;
  }
  const msg = {
    sender: loggedUser()?.id,
    room: roomId,
    data: info,
  } as CentMessage;
  client
    .rpc("roll_update", msg)
    .then((result) => { })
    .catch((err) => {
      console.error(err);
    });
};

// Init

export const netInit = (username: string, passwd: string) => {
  if (!centConnectionStatus()) netConnect(username, passwd);
};

export const netUpdateUser = (
  name: string,
  color: string,
  settings: Record<string, any>
) => {
  const client = centClient();
  if (!client) {
    return;
  }
  client
    .rpc("user_update", {
      name: name,
      color: color,
      settings: settings,
    })
    .then((result) => {

    })
    .catch((err) => {
      console.error(err);
    });
};


export const netCreateUser = (info: UserCreateInfo) => {
  const client = centClient();
  if (!client) return;
  client
    .rpc("user_create", info)
    .then((result) => {
      console.log("User created", result);
    })
    .catch((err) => {
      console.error(err);
    });
};