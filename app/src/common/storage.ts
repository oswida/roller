import { createMemo } from "solid-js";
import { setStorageSize } from "./state";
import {
  AppSettings,
  RollInfo,
  RoomInfo,
  StorageItem,
  emptyAppSettings,
} from "./types";
import { compressData, decompressData } from "./util";
import { createLocalStorage } from "@solid-primitives/storage";

export const rollerSettingsKey = "settings";
export const rollerRoomsKey = "rooms";

export const [appStore, setAppStore, { remove, clear, toJSON }] =
  createLocalStorage({
    prefix: "roller",
    serializer: (value: StorageItem, key: string) => {
      return compressData(value);
    },
    deserializer: (value: string, key: string) => {
      switch (key) {
        case "settings":
          return decompressData(value) as AppSettings;
        case "rooms":
          return decompressData(value) as Record<string, RoomInfo>;
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
  const keys = [rollerSettingsKey, rollerRoomsKey];
  keys.forEach((k) => {
    const data = localStorage.getItem(`roller.${k}`);
    size += data ? data.length : 0;
  });
  setStorageSize(size);
  return size;
};

export const appSettings = () => {
  let settings = appStore.settings as AppSettings;
  if (!settings) {
    settings = emptyAppSettings;
    setAppStore(rollerSettingsKey, settings);
  }
  return settings;
};

export const appRooms = () => {
  let rooms = appStore.rooms as Record<string, RoomInfo>;
  if (!rooms) {
    rooms = {
      [appSettings().currentRoom]: {
        id: appSettings().currentRoom,
        name: "Default room",
        rolls: [],
      },
    };
    setAppStore(rollerRoomsKey, rooms);
  }
  return rooms;
};

export const currentRoomName = () => {
  const settings = appSettings();
  if (!settings) return "";
  if (settings.currentRoom == "") return "";
  const rooms = appRooms();
  if (!rooms[settings.currentRoom]) return "";
  return rooms[settings.currentRoom].name;
};
