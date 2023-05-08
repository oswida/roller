import { createMemo } from "solid-js";
import {
  mqttChangeRoom,
  mqttClientLink,
  mqttConnect,
  mqttDisconnect,
  mqttPublish,
  mqttTopic,
} from "./mqtt";
import { mqttClient, mqttConnectionStatus } from "./state";
import { appSettings } from "./storage";

export const netSessionLink = () => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttClientLink();
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
    default:
      console.log("unsupported net type");
      break;
  }
};

export const netPublish = (topic: string, payload: any) => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttPublish(topic, payload);
    default:
      console.log("unsupported net type");
      return "";
  }
};

export const netChangeRoom = (id: string) => {
  switch (appSettings().network.type) {
    case "mqtt":
      const cl = mqttClient();
      if (!cl) return;
      return mqttChangeRoom(id);
    default:
      console.log("unsupported net type");
      return "";
  }
};

export const netConnectionsStatus = createMemo(() => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttConnectionStatus();
    default:
      return false;
  }
});
