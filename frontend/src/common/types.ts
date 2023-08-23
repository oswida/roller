import { v4 as uuid } from "uuid";
import { themeFontFamilyType } from "./theme.css";

export type UserInfo = {
  id: string;
  name: string;
  login: string;
  color: string;
  edges: any;
  settings: Record<string, any>;
  is_admin: boolean;
};

export type UserCreateInfo = {
  name: string;
  pass: string;
  repeatPass: string;
}

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
  bkg?: string;
};

export const emptyRoomInfo = (rid?: string) => {
  return {
    id: rid ? rid : uuid(),
    name: "",
    owner: "",
    bkg: "",
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
  comment?: string;
  shared?: boolean;
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

export type CharTemplateItemType =
  | "row" // container for other items
  | "column" // container for other items
  | "text" // text input,  variants: check, circle_check, document (big text)
  | "attr" // attribute, variants: wide,max
  | "check" // checkbox, variants: circle
  | "resource" // inc/dec resource, variants: circle
  | "label" // text label
  | "computed" // auto-computed field
  | "list" // expandable list of texts, variants: check
  | "select" // list selection
  | "counter"; // counter, variants: check

export type CTIContainerData = {
  items?: CharTemplateItem[]; // children items
};

// for text and list
export type CTITextData = {
  check?: boolean;
  checkShape?: "circle" | "square";
  checkLabel?: string;
  large?: boolean;
  maxLines?: number;
  reverseHide?: boolean; // set if you want to hide text when selected
};

export type CTIAttrData = {
  wide?: boolean;
  withMax?: boolean;
};

export type CTICheckData = {
  shape?: "circle" | "square";
  dotLabel?: string;
};

export type CTIResourceData = {
  max: number;
  leftLabel?: string;
  rightLabel?: string;
  shape?: "circle" | "square";
  dotLabels?: string[];
};

export type CTIComputedData = {
  compute: (item: CharTemplateItem, values: Record<string, any>) => string; // function for 'computed' type
};

export type CTISelectData = {
  options: string[];
};

export type CTICounterData = {
  min: number;
  max: number;
  step?: number;
  check?: boolean;
  checkShape?: "circle" | "square";
};

export type CharTemplateItem = {
  id: string; // item unique id
  name?: string; // item name
  description?: string; // item description used to show some texts
  itype: CharTemplateItemType; // control type
  hint?: string; // item info shown as a tooltip
  initialValue?: any; // starting value
  rolls?: CharTemplateItemRoll[]; // rolls to perform, creates roll icons
  color?: string; // item color
  data?: // specific item data
  | CTIAttrData
  | CTICheckData
  | CTIComputedData
  | CTIContainerData
  | CTICounterData
  | CTIResourceData
  | CTISelectData
  | CTITextData;
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
  targetModifier?: number;
};

// Storage

export type StorageItem = Record<string, RollDefInfo> | string;

// Misc
export type SelectOption = {
  label: string;
  value: string;
};

export type RefProps = {
  ref: any;
};
