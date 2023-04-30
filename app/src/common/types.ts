import { v4 as uuid } from "uuid";

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
};

export const emptyAppSettings: AppSettings = {
  userIdent: uuid(),
  userName: "Anonymous",
  userColor: "",
  network: { type: "mqtt", credentials: "", serverUri: "" },
  currentRoom: uuid(),
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
