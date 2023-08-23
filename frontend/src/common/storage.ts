import { createLocalStorage } from "@solid-primitives/storage";
import { appRooms, loggedUser, setStorageSize } from "./state";
import { RollDefInfo, StorageItem } from "./types";
import { compressData, decompressData } from "./util";

export const rollerDefsKey = "defs";

const STORE_PREFIX = "roller3";

export const [appStore, setAppStore, { remove, clear, toJSON }] =
  createLocalStorage({
    prefix: STORE_PREFIX,
    serializer: (value: StorageItem, key: string) => {
      return compressData(value);
    },
    deserializer: (value: string, key: string) => {
      switch (key) {
        case "defs":
          return decompressData(value) as Record<string, RollDefInfo>;
        default:
          return decompressData(value) as string;
      }
    },
  });

export const saveToStorage = (key: string, data: any) => {
  setAppStore(key, data);
  updateStoreSize();
};

export const updateStoreSize = () => {
  let size = 0;
  const keys = [rollerDefsKey];
  keys.forEach((k) => {
    const data = localStorage.getItem(`${STORE_PREFIX}.${k}`);
    size += data ? data.length : 0;
  });
  setStorageSize(size);
  return size;
};

export const appDefs = () => {
  let defs = appStore.defs as Record<string, RollDefInfo>;
  if (!defs) {
    defs = {};
    setAppStore(rollerDefsKey, defs);
  }
  return defs;
};

export const currentRoom = () => {
  const settings = loggedUser()?.settings;
  if (!settings) return undefined;
  if (!settings.currentRoom || settings.currentRoom == "") return undefined;
  const rooms = appRooms();
  if (!rooms[settings.currentRoom]) return undefined;
  return rooms[settings.currentRoom];
};
