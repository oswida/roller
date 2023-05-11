import { createMemo } from "solid-js";
import {
  centClientLink,
  centConnect,
  centCreateRoom,
  centDeleteRoom,
  centDisconnect,
  centLoadRooms,
  centPublish,
  centUpdateRoom,
} from "./centrifuge";
import {
  mqttClientLink,
  mqttConnect,
  mqttDisconnect,
  mqttPublish,
} from "./mqtt";
import { centConnectionStatus, mqttConnectionStatus } from "./state";
import { appSettings } from "./storage";
import { RoomInfo } from "./types";

export const netInit = () => {
  if (!netConnectionStatus()) netConnect();
};

export const netSessionLink = () => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttClientLink();
    case "cent":
      return centClientLink();
    default:
      console.log("unsupported net type");
      return "";
  }
};

export const netConnect = () => {
  switch (appSettings().network.type) {
    case "mqtt":
      mqttConnect();
      break;
    case "cent":
      centConnect();
      break;
    default:
      console.log("unsupported net type");
      break;
  }
};

export const netDisconnect = () => {
  switch (appSettings().network.type) {
    case "mqtt":
      mqttDisconnect();
      break;
    case "cent":
      centDisconnect();
      break;
    default:
      console.log("unsupported net type");
      break;
  }
};

export const netPublish = (topic: string, payload: any) => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttPublish(topic, payload);
    case "cent":
      return centPublish(topic, payload);
    default:
      console.log("unsupported net type");
      return "";
  }
};

export const netConnectionStatus = createMemo(() => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttConnectionStatus();
    case "cent":
      return centConnectionStatus();
    default:
      return false;
  }
});

export const netCreateRoom = (room: RoomInfo) => {
  switch (appSettings().network.type) {
    case "cent":
      centCreateRoom(room);
      break;
    default:
      break;
  }
};

export const netDeleteRoom = (room: RoomInfo) => {
  switch (appSettings().network.type) {
    case "cent":
      centDeleteRoom(room);
      break;
    default:
      break;
  }
};

export const netUpdateRoom = (room: RoomInfo) => {
  switch (appSettings().network.type) {
    case "cent":
      centUpdateRoom(room);
      break;
    default:
      break;
  }
};

export const netLoadRoom = (id: string) => {
  switch (appSettings().network.type) {
    case "cent":
      centLoadRooms([id]);
      break;
    default:
      break;
  }
};
