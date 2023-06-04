import { v4 as uuid } from "uuid";
import { RadioItem } from "~/component";
import { appSettings } from "./storage";
import { colorType } from "./theme.css";

// Settings

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
      credentials: "",
      serverUri: "",
    },
    currentRoom: "",
    diceColor: "white",
    diceMaterial: "none",
    csAdjustHeight: true,
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
    rolls: [],
  } as RoomInfo;
};

// Network

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

export const SuccessRules: RadioItem[] = [
  { id: "", label: "None" },
  { id: "pbta:standard", label: "Standard PBTA" },
  { id: "pio3s:standard", label: "Pio 3S" },
  { id: "pio3s:hard", label: "Pio 3S Hard" },
  { id: "total:ueq", label: "Total under/equal" },
  { id: "total:oeq", label: "Total over/equal" },
];

// Whiteboard

export type WhiteboardState = {
  tool: string;
  stroke: string;
  fill: string;
  width: number;
};

export const initialWhiteboardState: WhiteboardState = {
  tool: "select",
  stroke: "#ffffff",
  fill: "transparent",
  width: 1,
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

export const emptyCsInfo = () => {
  return {
    id: uuid(),
    owner: appSettings().userIdent,
    name: "charsheet",
    template: "",
    values: {},
    shared: false,
  } as CsInfo;
};

// New templates

export type CharTemplateItemRoll = {
  notation: string;
  successRule?: string;
  valType: "modifier" | "target";
  comment?: string;
  iconColor?: string;
  hasInput?: boolean;
  inputLabel?: string;
}

type CharTemplateItemType = "text" | "attr" | "check" |
  "resource" | "state_resource" | "state_resource_square" |
  "resource_square" | "attr_max";

export type CharTemplateItem = {
  id: string;
  name: string;
  itype: CharTemplateItemType;
  text?: string;
  limit?: number;
  rolls?: CharTemplateItemRoll[];
  color?: string;
  hint?: string;
  labels?: string[];
}

export type CharTemplateSection = {
  title: string;
  items: CharTemplateItem[];
}

export type CharTemplate = {
  id: string;
  game: string;
  name: string;
  sections: CharTemplateSection[];
}

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

// Boards
export type BoardInfo = {
  id: string;
  owner: string;
  name: string;
  bkguri: string;
  objects: string;
  shared?: boolean;
};

export const emptyBoardInfo = () => {
  return {
    id: uuid(),
    owner: appSettings().userIdent,
    name: "",
    bkguri: "",
    objects: "",
    shared: false,
  } as BoardInfo;
};

// Storage

export type StorageItem =
  | AppSettings
  | Record<string, RoomInfo>
  | Record<string, RollDefInfo>
  | Record<string, CsInfo>
  | Record<string, BoardInfo>
  | string;

// Misc
export type SelectOption = {
  label: string;
  value: string;
};

export type RefProps = {
  ref: any;
};
