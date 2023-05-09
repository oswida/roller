import { createMemo } from "solid-js";
import {
  mqttClientLink,
  mqttConnect,
  mqttDisconnect,
  mqttPublish,
} from "./mqtt";
import { mqttConnectionStatus } from "./state";
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

export const netConnectionsStatus = createMemo(() => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttConnectionStatus();
    default:
      return false;
  }
});
