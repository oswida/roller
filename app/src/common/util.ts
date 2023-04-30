import {
  compress,
  compressToBase64,
  decompress,
  decompressFromBase64,
} from "@eonasdan/lz-string";
import { appSettings } from "./storage";
import { spaceSize, sprinkles } from "./theme.css";
import { RollInfo } from "./types";

export const createSpaceVariants = (name: string) => {
  const result: Record<string, any> = {};
  Object.keys(spaceSize).forEach((it) => {
    result[it] = sprinkles({ [name]: it });
  });
  return result;
};

export const compressData = (data: any) => {
  return compress(JSON.stringify(data)) as string;
};

export const compressData64 = (data: any) => {
  return compressToBase64(JSON.stringify(data));
};

export const decompressData = (data: any) => {
  const d = decompress(data);
  return JSON.parse(d);
};

export const decompressData64 = (data: any) => {
  const d = decompressFromBase64(data);
  return JSON.parse(d);
};

export const exportData = (data: any, filename: string) => {
  if (!data) return;
  const print = JSON.stringify(data, null, "\t");
  const link = document.createElement("a");
  link.download = filename;
  link.href = "data:text/json;charset=utf-8," + encodeURIComponent(print);
  link.click();
};

export const importData = (callback: (data: any) => void) => {
  const el = document.createElement("input");
  el.setAttribute("type", "file");
  el.setAttribute("accept", "application/json");
  el.addEventListener("change", function () {
    if (!this.files || this.files.length === 0) return;
    const reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      callback(JSON.parse(event.target.result));
    });
    reader.readAsText(this.files[0]);
  });
  el.click();
};

export const prettyNow = () => {
  var date = new Date();
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const prettyToday = () => {
  var date = new Date();
  return date
    .toLocaleTimeString(navigator.language, {
      day: "2-digit",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replaceAll(",", "_")
    .replaceAll(" ", "_");
};

export const createRollInfo = (result: any, comment?: string) => {
  const r: Record<string, number[]> = {};
  const dice = result.notation.split("+");
  result.sets.forEach((set: any) => {
    const id = set.type;
    r[id] = set.rolls.map((r: any) => r.value);
  });
  return {
    user: appSettings().userName,
    userColor: appSettings().userColor,
    rollTotal: result.total,
    rollResults: r,
    rollDice: dice,
    diceColor: "",
    diceMaterial: "",
    tstamp: prettyNow(),
    comment: comment,
  } as RollInfo;
};

export const diceColorSet: string[] = [
  "acid",
  "air",
  "astralsea",
  "black",
  "bloodmoon",
  "breebaby",
  "bronze",
  "dragons",
  "earth",
  "fire",
  "force",
  "glitterparty",
  "ice",
  "inspired",
  "lightning",
  "necrotic",
  "starynight",
  "swrpg_abi",
  "swrpg_dif",
  "swrpg_pro",
  "thunder",
  "water",
  "white",
];

export const diceMaterialSet = [
  "cloudy",
  "cloudy_2",
  "fire",
  "marble",
  "water",
  "ice",
  "paper",
  "speckles",
  "glitter",
  "stainedglass",
  "wood",
  "metal",
  "dragon",
  "bronze01",
  "bronze02",
  "bronze03",
  "bronze04",
  "none",
];
