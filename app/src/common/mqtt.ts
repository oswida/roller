// import { Client, Message } from "paho-mqtt";
import mqtt from "mqtt/dist/mqtt";
import { mqttClient, setMqttClient, setMqttConnectionStatus } from "./state";
import {
  appRooms,
  appSettings,
  currentRoom,
  rollerRoomsKey,
  saveToStorage,
} from "./storage";
import {
  NetMessage,
  RollInfo,
  RoomInfo,
  topicRollInfo,
  topicRoomInfo,
  topicRoomUpdateRequest,
} from "./types";
import {
  animateRemoteRoll,
  compressData64,
  decompressData64,
  updateRolls,
} from "./util";

export const mqttPack = (sender: string, payload: any) => {
  const msg: NetMessage = {
    sender: sender,
    data: payload,
  };
  return compressData64(msg);
};

export const mqttUnpack = (payload: any) => {
  const d = decompressData64(payload);
  return d as NetMessage;
};

export const mqttTopic = (name: string, roomId?: string) => {
  let room: RoomInfo | undefined;
  if (roomId !== undefined) {
    room = appRooms()[roomId];
  } else {
    room = currentRoom();
  }
  if (!room) return "";
  return `${room.id}/${name}`;
};

export const mqttPublish = (topic: string, payload: any) => {
  const client = mqttClient();
  if (!client) {
    // console.log("publish: mqtt client not present", client);
    return;
  }
  client.publish(
    mqttTopic(topic),
    mqttPack(appSettings().userIdent, payload),
    {},
    (err: any) => {
      if (err) {
        console.error("publish error", err);
      }
    }
  );
};

export const mqttProcess = (topic: string, payload: string) => {
  const m = mqttUnpack(payload);
  const ident = appSettings().userIdent;

  if (m.sender == ident) {
    return; // own message
  }
  switch (topic) {
    case mqttTopic(topicRoomInfo):
      const room = m.data as RoomInfo;
      if (!room) return;
      const newState = { ...appRooms() };
      newState[room.id] = room;
      saveToStorage(rollerRoomsKey, newState);
      break;
    case mqttTopic(topicRollInfo):
      const info = m.data as RollInfo;
      if (!info) return;
      updateRolls(info);
      animateRemoteRoll(info);
      break;
    case mqttTopic(topicRoomUpdateRequest):
      const id = m.data as string;
      if (appRooms()[id].owner == appSettings().userIdent) {
        mqttPublish(topicRoomInfo, appRooms()[id]);
      }
      break;
    default:
      // console.log("Ignoring message for topic", topic, m);
      break;
  }
};

export const mqttDisconnect = () => {
  const cl = mqttClient();
  if (!cl) return;
  cl.end();
  setMqttClient(undefined);
  setMqttConnectionStatus(false);
};

export const mqttConnect = () => {
  const ident = appSettings().userIdent;
  const env = appSettings().network;
  if (env.serverUri == "") {
    console.error("Server not defined");
    return;
  }
  const cl = mqttClient();
  if (cl) {
    cl.end();
  }

  try {
    let un = "";
    let pw = "";
    const creds = env.credentials;
    if (creds) {
      const parts = creds.split(":");
      un = parts[0];
      pw = parts[1];
    }

    const client = mqtt.connect(env.serverUri, {
      username: un,
      password: pw,
      clientId: appSettings().userIdent,
    });

    if (!client) {
      console.log("Cannot connect to MQTT server");
      return;
    }
    setMqttClient(client);

    client.on("connect", (e: any) => {
      // Subscribe to all defined rooms
      Object.values(appRooms()).forEach((room) => {
        const topic = mqttTopic("+", room.id);
        if (topic && topic != "") {
          client.subscribe(topic, (err, granted) => {
            if (err) {
              console.error("subscribe", topic, err);
            }
          });
        }
      });
      setMqttConnectionStatus(true);
    });

    client.on("disconnect", (e: any) => {
      setMqttClient(undefined);
      setMqttConnectionStatus(false);
    });

    client.on("message", (topic: string, payload: Buffer, packet: any) => {
      mqttProcess(topic, payload.toString());
    });
  } catch (e: any) {
    console.error(e);
  }
};

export const mqttS =
  "EQdwzmBcD00OwBYBGC4FYCmAzAHFrAzAnrgEwCM2cGpBAhnQMYAMazAnAHRimcYCunABYBLAG4YAtgEdOjADYB7fgBNIODQmgyALjuBA";
export const mqttC = "EQJwrgDghg1gXAQQDZQLawPYBcoHYBMwQA==";

export const mqttClientLink = () => {
  const room = currentRoom();
  if (!room) return "";
  return `${window.location}connect?r=${encodeURIComponent(room.id)}`;
};
