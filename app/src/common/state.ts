import { createSignal } from "solid-js";
import mqtt from "mqtt/dist/mqtt";
import { Centrifuge } from "centrifuge";
import Queue from "queue";
import { Mutex } from "async-mutex";
import { CsInfo, WhiteboardState, initialWhiteboardState } from "./types";

export const [storageSize, setStorageSize] = createSignal(0);

export const [dicePool, setDicePool] = createSignal<Record<string, number>>({});
export const [diceBox, setDiceBox] = createSignal<any>(undefined);

export const [rollComment, setRollComment] = createSignal("");
export const [rolling, setRolling] = createSignal(false);
export const [animating, setAnimating] = createSignal(false);
export const [successRule, setSuccessRule] = createSignal<string | undefined>(
  ""
);
export const [successTarget, setSuccessTarget] = createSignal<number>(0);


export const [roomUsers, setRoomUsers] = createSignal<Record<string, string[]>>(
  {}
);

// Mqtt
export const [mqttConnectionStatus, setMqttConnectionStatus] =
  createSignal(false);
export const [mqttClient, setMqttClient] = createSignal<
  mqtt.MqttClient | undefined
>(undefined);

// Centrifuge
export const [centConnectionStatus, setCentConnectionStatus] =
  createSignal(false);
export const [centClient, setCentClient] = createSignal<Centrifuge | undefined>(
  undefined
);

// Task queue
export const [taskQueue, setTaskQueue] = createSignal<Queue | undefined>(
  undefined
);
export const [taskMutex, setTaskMutex] = createSignal<Mutex | undefined>(
  undefined
);

export const [chatViewTab, setChatViewTab] = createSignal("rolls");

export const [mainViewPanel, setMainViewPanel] = createSignal("dice");


// WhiteboardView
export const [wbState, setWbState] = createSignal<WhiteboardState>(
  initialWhiteboardState
);
export const [csCanvas, setCsCanvas] = createSignal<fabric.Canvas>();

export const [currentCs, setCurrentCs] = createSignal<CsInfo>();
export const [currentCsPage, setCurrentCsPage] = createSignal(0);

export const [csRollInputOpen, setCsRollInputOpen] = createSignal(false);
export const [csRollInputTitle, setCsRollInputTitle] = createSignal("");
export type CallbackFunc = (value: string) => void;
export const [csRollInputCallback, setCsRollInputCallback] = createSignal<CallbackFunc>((value: string) => { });