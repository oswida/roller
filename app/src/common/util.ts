import {
  compress,
  compressToBase64,
  decompress,
  decompressFromBase64,
} from "@eonasdan/lz-string";
import { diceBox, setAnimating, setRollComment } from "./state";
import {
  appRooms,
  appSettings,
  rollerRoomsKey,
  saveToStorage,
} from "./storage";
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
    diceColor: appSettings().diceColor,
    diceTexture: appSettings().diceTexture,
    tstamp: prettyToday(),
    comment: comment,
    realtstamp: Date.now(),
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
  "swrpg_boo",
  "swrpg_abi",
  "swrpg_pro",
  "swrpg_set",
  "swrpg_dif",
  "swrpg_cha",
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
  "plastic",
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
];

export const updateRolls = (info: RollInfo) => {
  const data = { ...appRooms() };
  const settings = appSettings();
  if (settings.currentRoom === "") return;
  data[settings.currentRoom].rolls = [
    info,
    ...data[settings.currentRoom].rolls,
  ];
  setRollComment("");
  saveToStorage(rollerRoomsKey, data);
};

export const animateRemoteRoll = async (info: RollInfo) => {
  setAnimating(true);
  const db = diceBox();
  if (!db) return;
  const s = appSettings();
  await db.updateConfig({
    theme_colorset: info.diceColor,
    theme_texture: info.diceTexture,
    theme_material: "none",
  });
  const results: number[] = [];
  Object.keys(info.rollResults).forEach((key) => {
    const values = info.rollResults[key];
    values.forEach((v) => results.push(v));
  });
  const r = `${info.rollDice.join("+")}@${results.join(",")}`;
  await db.add(r);
  await db.updateConfig({
    theme_colorset: s.diceColor,
    theme_texture: s.diceTexture,
    theme_material: "none",
  });
  setAnimating(false);
};

export const generateSerialKeys = (length: number, separator: string) => {
  separator = separator || "-";
  var license = new Array(length + 1)
    .join((Math.random().toString(36) + "00000000000000000").slice(2, 18))
    .slice(0, length);
  return license
    .toUpperCase()
    .replace(/(\w{4})/g, "$1" + separator)
    .substring(0, length + Math.round(length / 4) - 1);
};
