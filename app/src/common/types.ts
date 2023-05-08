import { v4 as uuid } from "uuid";
import { mqttC, mqttS } from "./mqtt";
import { colorType } from "./theme.css";
import { decompressData64 } from "./util";

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
  rightLayout?: boolean;
  appTheme?: string;
};

export const emptyAppSettings = () => {
  return {
    userIdent: uuid(),
    userName: "Anonymous",
    userColor: colorType.primary,
    network: {
      type: "mqtt",
      credentials: decompressData64(mqttC),
      serverUri: decompressData64(mqttS),
    },
    currentRoom: uuid(),
    diceColor: "white",
    diceMaterial: "none",
  } as AppSettings;
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
  owner: string;
  bkguri?: string;
  rolls: RollInfo[];
};

export type StorageItem = AppSettings | Record<string, RoomInfo> | string;

export type NetMessage = {
  sender: string;
  data: any;
};

export const topicRoomInfo = "room_info";
export const topicRollInfo = "roll_info";
