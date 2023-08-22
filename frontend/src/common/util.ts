import {
  compress,
  compressToBase64,
  decompress,
  decompressFromBase64,
} from "@eonasdan/lz-string";
import { Mutex } from "async-mutex";
import Queue from "queue";
import {
  diceBox,
  loggedUser,
  rolling,
  setAnimating,
  setTaskMutex,
  setTaskQueue,
  taskMutex,
  taskQueue,
} from "./state";
import { currentRoom } from "./storage";
import {
  sprinkles,
  themeSpace,
  themeTokenType,
  themeTokens,
} from "./theme.css";
import { CsInfo, NetRollInfo, RollInfo, RollResult, RollSet } from "./types";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { blobToURL, fromBlob } from "image-resize-compress";

export const TOPBAR_HEIGHT = 50;

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
  try {
    return JSON.parse(d);
  } catch (e) {
    return undefined;
  }
};

export const exportData = (data: any, filename: string) => {
  if (!data) return;
  const print = JSON.stringify(data, null, "\t");
  const link = document.createElement("a");
  link.download = filename;
  link.href = "data:text/json;charset=utf-8," + encodeURIComponent(print);
  link.click();
};

export const importData = (callback: (data: any) => void, ext?: string) => {
  const el = document.createElement("input");
  el.setAttribute("type", "file");
  el.setAttribute("accept", ext ? ext : "application/json");
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

export const importImage = (
  callback: (data: any) => void,
  width?: number | undefined,
  height?: number | undefined
) => {
  const el = document.createElement("input");
  el.setAttribute("type", "file");
  el.setAttribute("accept", "image/png, image/jpeg");
  el.addEventListener("change", function () {
    if (!this.files || this.files.length === 0) return;
    fromBlob(this.files[0], 0.5, width ? width : "auto", height, "webp")
      .then((value: Blob) => {
        blobToURL(value).then((img: string) => {
          callback(img);
        });
      })
      .catch((e: any) => {
        console.error(e);
      });
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

export const rollNotationWithResults = (result: RollResult) => {
  try {
    const dice = result.notation.split("+");
    const diceRes: Record<string, RollSet> = {};
    result.sets.forEach((set) => {
      diceRes[`${set.num}${set.type}`] = set;
    });
    const dicePreset = dice.map((it) => {
      if (!diceRes[it] || !diceRes[it].rolls) return "";
      return diceRes[it].rolls.map((r) => r.value).join(",");
    });
    if (dicePreset.length > 0) {
      return `${result.notation}@${dicePreset.join(",")}`;
    }
    return result.notation;
  } catch (e: any) {
    return result.notation;
  }
};

export const animateRemoteRoll = async (info: RollInfo) => {
  if (rolling()) return;
  setAnimating(true);
  const db = diceBox();
  if (!db) return;
  await db.updateConfig({
    theme_colorset: info.diceColor,
    theme_texture: info.diceMaterial,
  });
  const notation = rollNotationWithResults(info.result);
  await db.add(notation);
  await db.updateConfig({
    theme_colorset: loggedUser()?.settings.diceColor,
    theme_texture: loggedUser()?.settings.diceMaterial,
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
};

export const Host2NetRollInfo = (info: RollInfo) => {
  return { ...info, result: compressData64(info.result) } as NetRollInfo;
};

export const queueInit = () => {
  const q = new Queue({ autostart: true, concurrency: 1 });
  setTaskQueue(q);
  const mutex = new Mutex();
  setTaskMutex(mutex);
};

export const enrollTask = (f: () => void) => {
  const q = taskQueue();
  if (!q) {
    console.error("Cannot find task queue");
    return;
  }
  q.push((cb) => {
    const mux = taskMutex();
    if (!mux) {
      console.error("cannot find mutex!");
      if (cb) cb(new Error("cannot find mutex"));
      return;
    }
    mux.runExclusive(f);
    if (cb) cb();
  });
};

export const isCsOwner = (cs: CsInfo | undefined) => {
  if (!cs) return false;
  return loggedUser()?.id === cs.owner;
};

export const netTopic = (name: string) => {
  const room = currentRoom();
  if (!room) return "";
  return `${name}_${room.id}`;
};

// utils

export const createSpaceVariants = (name: string) => {
  const result: Record<string, any> = {};
  Object.keys(themeSpace).forEach((it) => {
    result[it] = sprinkles({ [name]: it });
  });
  return result;
};

export const createColorVariants = () => {
  const result: Record<string, any> = {};
  Object.keys(themeTokens).forEach((it) => {
    result[it] = sprinkles({ color: it as themeTokenType });
  });
  return result;
};

export const createBackgroundVariants = () => {
  const result: Record<string, any> = {};
  Object.keys(themeTokens).forEach((it) => {
    result[it] = sprinkles({ backgroundColor: it as themeTokenType });
  });
  return result;
};

export const createFlexVariants = () => {
  const result: Record<string, any> = {};
  let x = 0.1;
  for (let i = 1; i <= 10; i++) {
    const y = Number.parseFloat(x.toFixed(2));
    result[`flex${i}`] = { flex: y };
    x += 0.1;
  }
  return result;
};

export const parseMarkdown = (data: string) => {
  const result = DOMPurify.sanitize(
    marked.parse(data, {
      headerIds: false,
      mangle: false,
      breaks: true,
      gfm: true,
    })
  )
    .replaceAll("<a", '<a class="markdown-anchor" target="_blank"')
    .replaceAll("<code", '<code class="markdown-code"')
    .replaceAll("<p", '<p class="markdown-p"')
    .replaceAll("<hr", '<hr class="markdown-hr"')
    .replaceAll("<blockquote", '<blockquote class="markdown-blockquote"')
    .replaceAll("<ul", '<ul class="markdown-ul"');
  return result;
};
