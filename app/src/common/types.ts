import { v4 as uuid } from "uuid";
import { RadioItem, SelectItem } from "~/component";
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
  } as AppSettings;
};

// Publish PDUs

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
  successTarget?: number;
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
  successTarget?: number;
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
export const topicRoomUpdateRequest = "room_update";
export const topicRoomConnect = "room_connect";
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
  brush: string;
  fill: string;
  width: number;
};

export const initialWhiteboardState: WhiteboardState = {
  tool: "select",
  brush: "white",
  fill: "transparent",
  width: 0,
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

export type CsRoll = {
  type: "mod" | "target"; // use field value as a modifier or roll target
  dice: string; // dice notation
  srule: string; // success rule
  comment?: string; // roll comment
  hasInput?: boolean; // if we should ask for input before roll
  inputLabel?: string; // input label if we are asking
};

export type CsField = {
  id: string;
  name: string;
  rect: [number, number, number, number];
  type: "attr" | "rect-check" | "text" | "circle-check";
  rolls?: CsRoll[];
  fontSize?: number;
  stroke?: string;
  textAlign?: "center" | "left" | "right";
  info?: string;
};

export type CsPage = {
  img: string;
  pos: number;
  fields: CsField[];
};

export type CsTemplate = {
  id: string;
  game: string;
  name: string;
  pageHeight: number;
  pageWidth: number;
  fieldColor: string;
  fieldStroke: string;
  fieldFontSize: number;
  pages: CsPage[];
};

export type CsCheckData = {
  value: boolean;
  disabled: boolean;
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
