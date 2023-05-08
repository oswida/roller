import { createSign } from "crypto";
import { createSignal, createMemo } from "solid-js";
import { RollInfo } from "./types";
import mqtt from "mqtt/dist/mqtt";

export const [storageSize, setStorageSize] = createSignal(0);

export const [dicePool, setDicePool] = createSignal<Record<string, number>>({});
export const [diceBox, setDiceBox] = createSignal<any>(undefined);

export const [rollComment, setRollComment] = createSignal("");
export const [rolling, setRolling] = createSignal(false);
export const [animating, setAnimating] = createSignal(false);

export const [roomUsers, setRoomUsers] = createSignal<Record<string, string[]>>(
  {}
);

// Mqtt
export const [mqttConnectionStatus, setMqttConnectionStatus] =
  createSignal(false);
export const [mqttClient, setMqttClient] = createSignal<
  mqtt.MqttClient | undefined
>(undefined);

export const [rightLayout, setRightLayout] = createSignal(false);
