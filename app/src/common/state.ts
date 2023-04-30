import { createSign } from "crypto";
import { createSignal, createMemo } from "solid-js";
import { RollInfo } from "./types";

export const [storageSize, setStorageSize] = createSignal(0);

export const [dicePool, setDicePool] = createSignal<Record<string, number>>({});
export const [diceBox, setDiceBox] = createSignal<any>(undefined);

// export const [chatData, setChatData] = createSignal<RollInfo[]>([]);
export const [rollComment, setRollComment] = createSignal("");
