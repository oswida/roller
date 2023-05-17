import { v4 as uuid } from "uuid";
import { colorType } from "./theme.css";
import { RollResult } from "./rollinfo";

export type SelectOption = {
  label: string;
  value: string;
};

export type AppSettings = {
  userIdent: string;
  userName: string;
  userColor: string;
  network: {
    type: "mqtt" | "cent";
    serverUri: string;
    credentials: string;
  };
  currentRoom: string;
  diceColor: string;
  diceMaterial: string;
  rightLayout?: boolean;
  appTheme?: string;
  showRollSuccess?: boolean;
  showRollTotal?: boolean;
  smallerDice?: boolean;
};

export const emptyAppSettings = () => {
  return {
    userIdent: uuid(),
    userName: "Anonymous",
    userColor: colorType.primary,
    network: {
      type: "cent",
      // credentials: decompressData64(mqttC),
      // serverUri: decompressData64(mqttS),
      credentials: "",
      serverUri: "",
    },
    currentRoom: "",
    diceColor: "white",
    diceMaterial: "none",
  } as AppSettings;
};

export type RollInfo = {
  user: string;
  userColor: string;
  tstamp: string;
  realtstamp: number;
  result: RollResult;
  diceColor: string;
  diceMaterial: string;
  comment?: string;
  successRule?: string;
};

export type NetRollInfo = {
  user: string;
  userColor: string;
  tstamp: string;
  realtstamp: number;
  result: string;
  diceColor: string;
  diceMaterial: string;
  comment?: string;
  successRule?: string;
};

export type RoomInfo = {
  id: string;
  name: string;
  owner: string;
  bkguri?: string;
  rolls: RollInfo[];
};

export type NetRoomInfo = {
  id: string;
  name: string;
  owner: string;
  bkguri?: string;
  rolls: NetRollInfo[];
};

export const emptyRoomInfo = (rid?: string) => {
  return {
    id: rid ? rid : uuid(),
    name: "",
    owner: "",
    bkguri: "",
    rolls: [],
  } as RoomInfo;
};

export type StorageItem = AppSettings | Record<string, RoomInfo> | Record<string, RollDefInfo> | string;

export type NetMessage = {
  sender: string;
  data: any;
};

export type CentMessage = {
  sender: string;
  room: string;
  data: any;
};

export const topicRoomInfo = "room_info";
export const topicRollInfo = "roll_info";
export const topicRoomUpdateRequest = "room_update";
export const topicRoomConnect = "room_connect";

export type RefProps = {
  ref: any;
}

export type RollDefInfo = {
  id: string;
  name: string;
  dice: string;
  modifier: number;
  successRule: string;
}

export const emptyRollDefInfo = () => {
  return {
    id: uuid(),
    dice: "2k6",
    name: "Roll definition",
    successRule: "",
    modifier: 0,
  } as RollDefInfo
}