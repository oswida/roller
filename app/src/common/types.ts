import { v4 as uuid } from "uuid";
import { colorType } from "./theme.css";
import { RollResult } from "./rollinfo";
import { RadioItem, SelectItem } from "~/component";

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

export type csTemplateId = "pio3s-romancja" | "";

export const csTemplateTypes: SelectItem[] = [
  { id: "pio3s-romancja", label: "Pio3S: Romancja" }
]

export type CsInfo = {
  id: string;
  name: string;
  template: csTemplateId;
  values: Record<string, any>;
};

export type StorageItem =
  | AppSettings
  | Record<string, RoomInfo>
  | Record<string, RollDefInfo>
  | Record<string, CsInfo>
  | string;

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
};

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

export type CsField = {
  id: string;
  name: string;
  rect: [number, number, number, number];
  type: "attr" | "rect-check" | "text" | "circle-check";
  roll?: {
    type: "mod" | "target";
    dice: string;
    srule: string;
    comment?: string;
  },
  fontSize?: number;
  stroke?: string,
  textAlign?: "center" | "left" | "right",
}

export type CsPage = {
  img: string;
  pos: number;
  fields: CsField[];
}

export type CsTemplate = {
  game: string;
  name: string;
  pageHeight: number;
  pageWidth: number;
  fieldColor: string;
  fieldStroke: string;
  fieldFontSize: number;
  pages: CsPage[];
}

export type CsCheckData = {
  value: boolean;
  disabled: boolean;
}

