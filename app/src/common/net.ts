import {
  mqttClientLink,
  mqttConnect,
  mqttDisconnect,
  mqttPublish,
  mqttTopic,
} from "./mqtt";
import { mqttClient } from "./state";
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
      const cl = mqttClient();
      if (!cl) return;
      return mqttPublish(topic, payload);
    default:
      console.log("unsupported net type");
      return "";
  }
};
