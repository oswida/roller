import { Centrifuge } from "centrifuge";
import { centClient, setCentClient } from "./state";
import { appSettings, currentRoom } from "./storage";
import { CentMessage, topicRollInfo } from "./types";

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

export const centConnect = () => {
  const s = appSettings();
  if (!appSettings) return;
  const centrifuge = new Centrifuge(s.network.serverUri);
  if (!centrifuge) return;
  centrifuge.on("connected", function (ctx) {
    setCentClient(centrifuge);
    const sub = centrifuge.newSubscription(topicRollInfo);
    sub.on("publication", (ctx) => {
      console.log("roll info", ctx.data);
    });
  });
  centrifuge.connect();
};

export const centDisconnect = () => {
  const cl = centClient();
  if (!cl) return;
  cl.disconnect();
};

export const centPublish = (topic: string, payload: any) => {
  const client = centClient();
  if (!client) {
    return;
  }
  client
    .publish(topic, centPack(appSettings().userIdent, payload))
    .then(() => {
      console.log("message sent");
    })
    .catch((err) => console.error(err));
};

export const centClientLink = () => {
  const room = currentRoom();
  if (!room) return "";
  return `${window.location}connect?r=${encodeURIComponent(room.id)}`;
};
