import { v4 as uuid } from "uuid";

// Settings

export type AppSettings = {
  userIdent: string;
  userName: string;
  userColor: string;
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
    userColor: "white",
    currentRoom: "",
    diceColor: "white",
    diceMaterial: "none",
  } as AppSettings;
};

// Publish PDUs

export type RollInfo = {
  id: string;
  userId: string;
  user: string;
  userColor: string;
  tstamp: string;
  realtstamp: number;
  result: RollResult;
  diceColor: string;
  diceMaterial: string;
  comment?: string;
  successRule?: string;
  successTarget?: number;
  private?: boolean;
  revealed?: boolean;
};

export type NetRollInfo = {
  id: string;
  userId: string;
  user: string;
  userColor: string;
  tstamp: string;
  realtstamp: number;
  result: string;
  diceColor: string;
  diceMaterial: string;
  comment?: string;
  successRule?: string;
  successTarget?: number;
  private?: boolean;
  revealed?: boolean;
};

export type RoomInfo = {
  id: string;
  name: string;
  owner: string;
  bkguri?: string;
};

export const emptyRoomInfo = (rid?: string) => {
  return {
    id: rid ? rid : uuid(),
    name: "",
    owner: "",
    bkguri: "",
  } as RoomInfo;
};

// Network

export type CentMessage = {
  sender: string;
  room: string;
  data: any;
};

export const topicRoomInfo = "room_info";
export const topicRollInfo = "roll_info";
export const topicRollUpdate = "roll_update";
export const topicCsInfo = "cs_info";

// Roll definitions

export type RollDefInfo = {
  id: string;
  name: string;
  dice: string;
  modifier: number;
  successRule: string;
  successTarget: string;
};

export const emptyRollDefInfo = () => {
  return {
    id: uuid(),
    dice: "2k6",
    name: "Roll definition",
    successRule: "",
    successTarget: "",
    modifier: 0,
  } as RollDefInfo;
};

// Charsheets

export type CsInfo = {
  id: string;
  owner: string;
  name: string;
  template: string;
  values: Record<string, any>;
  shared?: boolean;
};

export const emptyCsInfo = (id: string) => {
  return {
    id: uuid(),
    owner: id,
    name: "charsheet",
    template: "",
    values: {},
    shared: false,
  } as CsInfo;
};

// charsheet templates

export type CharTemplateItemRoll = {
  notation: string;
  successRule?: string;
  valType: "modifier" | "target";
  comment?: string;
  iconColor?: string;
  hasInput?: boolean;
  inputLabel?: string;
};

type CharTemplateItemType =
  | "text"
  | "attr"
  | "check"
  | "resource"
  | "state_resource"
  | "state_resource_square"
  | "resource_square"
  | "attr_max"
  | "label"
  | "computed";

export type CharTemplateItem = {
  id: string; // item unique id
  name: string; // item name
  itype: CharTemplateItemType; // control type
  text?: string;
  limit?: number; // limit for resource controls and text lines
  rolls?: CharTemplateItemRoll[]; // rolls to perform, creates roll icons
  color?: string;
  hint?: string;
  labels?: string[];
  compute?: (item: CharTemplateItem, values: Record<string, any>) => string; // function for 'computed' type
};

export type CharTemplateSection = {
  title: string;
  items: CharTemplateItem[];
};

export type CharTemplate = {
  id: string;
  game: string;
  name: string;
  sections: CharTemplateSection[];
  computeDeps?: Record<string, string[]>;
};

// Dice roll

export type RollDetail = {
  type: string; // "d6"
  sides: number; // 6
  id: number; // roll identifier in set, 0
  value: number;
  label: string; // "6"
  reason: string; // "natural"
};

export type RollSet = {
  num: number; // number of dice
  type: string; // "d6"
  sides: number; // 6
  rolls: RollDetail[];
  total: number;
};

export type RollResult = {
  notation: string;
  sets: RollSet[];
  modifier: number;
  total: number;
};

// Storage

export type StorageItem =
  | AppSettings
  | Record<string, RoomInfo>
  | Record<string, RollDefInfo>
  | Record<string, CsInfo>
  | string;

// Misc
export type SelectOption = {
  label: string;
  value: string;
};

export type RefProps = {
  ref: any;
};
