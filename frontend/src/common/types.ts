import { v4 as uuid } from "uuid";
import { themeFontFamilyType } from "./theme.css";

// Settings

export type themeType = "blue" | "blueDark" | "teal";

export type AppSettings = {
  userIdent: string;
  userName: string;
  userColor: string;
  currentRoom: string;
  diceColor: string;
  diceMaterial: string;
  rightLayout?: boolean;
  appTheme?: themeType;
  appFont?: themeFontFamilyType;
  showRollSuccess?: boolean;
  showRollTotal?: boolean;
  smallerDice?: boolean;
  strongerRoll?: boolean;
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
export const topicHandoutInfo = "handout_info";

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
  portraitUrl?: string;
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

export type CharTemplateItemRollVal =
  | "modifier"
  | "target"
  | "modifier_plus_mod"
  | "target_plus_mod";

export type ItemRollSuccessRule =
  | "pbta:standard"
  | "cairn:standard"
  | "cairn:hard"
  | "pio3s:standard"
  | "pio3s:hard"
  | "total:ueq" // under or equal
  | "total:oeq" // over or equal
  | "ironsworn:standard"
  | "ironsworn:glina";

export type CharTemplateItemRoll = {
  notation: string;
  successRule?: ItemRollSuccessRule;
  valType: CharTemplateItemRollVal;
  comment?: string;
  iconColor?: string;
  valField?: string; // field providing the value if not from the origin control
  labels?: string[]; // additional labels, used in _plus_mod as a modifier input
};

type CharTemplateItemType =
  | "row"
  | "text"
  | "text_check"
  | "text_check_circle"
  | "attr"
  | "attr_wide"
  | "check"
  | "check_circle"
  | "resource"
  | "state_resource"
  | "state_resource_square"
  | "resource_square"
  | "attr_max"
  | "label"
  | "computed"
  | "big_text"
  | "text_list"
  | "text_list_check"
  | "select"
  | "counter"
  | "counter_check";

export type CharTemplateItem = {
  id: string; // item unique id
  name?: string; // item name
  itype: CharTemplateItemType; // control type
  text?: string;
  limit?: number; // limit for resource controls and text lines
  rolls?: CharTemplateItemRoll[]; // rolls to perform, creates roll icons
  color?: string;
  hint?: string;
  labels?: string[]; // additional labels: resource, list of choices: select
  compute?: (item: CharTemplateItem, values: Record<string, any>) => string; // function for 'computed' type
  items?: CharTemplateItem[]; // children items
  initialValue?: any;
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

// Handouts

export type HandoutInfoType =
  | "text"
  | "clock"
  | "track"
  | "image"
  | "container";

export type HandoutInfo = {
  id: string;
  owner: string;
  name: string;
  htype: HandoutInfoType;
  value: any;
  description?: string;
  hint?: string;
  limit?: number;
  url?: string;
  shared?: boolean;
};

export const emptyHandoutInfo = (id: string, htype: HandoutInfoType) => {
  return {
    id: uuid(),
    owner: id,
    name: "handout",
    htype: htype,
    value: "",
    shared: false,
  } as HandoutInfo;
};
