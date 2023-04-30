import { v4 as uuid } from "uuid";
import { colorType } from "./theme.css";

export type SelectOption = {
  label: string;
  value: string;
};

export type AppSettings = {
  userIdent: string;
  userName: string;
  userColor: string;
  network: {
    type: "mqtt";
    serverUri: string;
    credentials: string;
  };
  currentRoom: string;
  diceColor: string;
  diceMaterial: string;
};

export const emptyAppSettings: AppSettings = {
  userIdent: uuid(),
  userName: "Anonymous",
  userColor: colorType.primary,
  network: { type: "mqtt", credentials: "", serverUri: "" },
  currentRoom: uuid(),
  diceColor: "white",
  diceMaterial: "none",
};

export type RollInfo = {
  user: string;
  userColor: string;
  tstamp: string;
  rollTotal: number;
  rollDice: string[];
  rollResults: Record<string, number[]>;
  diceColor: string;
  diceMaterial: string;
  comment?: string;
};

export type RoomInfo = {
  id: string;
  name: string;
  rolls: RollInfo[];
};

export type StorageItem = AppSettings | Record<string, RoomInfo> | string;
