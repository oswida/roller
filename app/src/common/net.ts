import { createMemo } from "solid-js";
import {
  centClientLink,
  centConnect,
  centDisconnect,
  centPublish,
} from "./centrifuge";
import {
  mqttClientLink,
  mqttConnect,
  mqttDisconnect,
  mqttPublish,
} from "./mqtt";
import { centConnectionStatus, mqttConnectionStatus } from "./state";
import { appSettings } from "./storage";

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

export const netConnectionsStatus = createMemo(() => {
  switch (appSettings().network.type) {
    case "mqtt":
      return mqttConnectionStatus();
    case "cent":
      return centConnectionStatus();
    default:
      return false;
  }
});
