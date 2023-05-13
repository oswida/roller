import {
  compress,
  compressToBase64,
  decompress,
  decompressFromBase64,
} from "@eonasdan/lz-string";
import {
  appRooms,
  appSettings,
  rollerRoomsKey,
  saveToStorage,
} from "./storage";
import { spaceSize, sprinkles } from "./theme.css";
import { NetRollInfo, NetRoomInfo, RollInfo, RoomInfo } from "./types";
import { diceBox, setRollComment, setAnimating, rolling, setTaskQueue, taskQueue, setTaskMutex, taskMutex } from "./state";
import { rollNotationWithResults } from "./rollinfo";
import Queue from "queue";
import { Mutex } from "async-mutex";

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
  "bronze01",
  "bronze02",
  "bronze03",
  "bronze04",
  "cloudy_2",
  "cloudy",
  "dragon",
  "fire",
  "glitter",
  "ice",
  "marble",
  "metal",
  "none",
  "paper",
  "speckles",
  "stainedglass",
  "water",
  "wood",
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
  if (rolling()) return;
  setAnimating(true);
  const db = diceBox();
  if (!db) return;
  const s = appSettings();
  await db.updateConfig({
    theme_colorset: info.diceColor,
    theme_texture: info.diceMaterial,
  });
  const notation = rollNotationWithResults(info.result);
  await db.add(notation);
  await db.updateConfig({
    theme_colorset: s.diceColor,
    theme_texture: s.diceMaterial,
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


export const Net2HostRollInfo = (info: NetRollInfo) => {
  return { ...info, result: decompressData64(info.result) } as RollInfo;
}

export const Host2NetRollInfo = (info: RollInfo) => {
  return { ...info, result: compressData64(info.result) } as NetRollInfo;
}

export const Net2HostRoomInfo = (room: NetRoomInfo) => {
  return { ...room, rolls: room.rolls.map((r) => Net2HostRollInfo(r)) } as RoomInfo;
}

export const Host2NetRoomInfo = (room: RoomInfo) => {
  return { ...room, rolls: room.rolls.map((r) => Host2NetRollInfo(r)) } as NetRoomInfo;
}


export const queueInit = () => {
  const q = new Queue({ autostart: true, concurrency: 1 });
  setTaskQueue(q);
}

export const enrollTask = (f: () => void) => {
  const q = taskQueue();
  const mutex = new Mutex();
  setTaskMutex(mutex);
  if (!q) {
    console.error("Cannot find task queue");
    return;
  }
  q.push(cb => {
    const mux = taskMutex();
    if (!mux) {
      console.error("cannot find mutex!");
      if (cb) cb(new Error("cannot find mutex"));
      return;
    }
    mux.runExclusive(f);
    if (cb) cb();
  });
}