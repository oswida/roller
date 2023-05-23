import { createLocalStorage } from "@solid-primitives/storage";
import { setStorageSize } from "./state";
import {
  AppSettings,
  BoardInfo,
  CsInfo,
  RollDefInfo,
  RoomInfo,
  StorageItem,
  emptyAppSettings,
} from "./types";
import { compressData, decompressData } from "./util";

export const rollerSettingsKey = "settings";
export const rollerRoomsKey = "rooms";
export const rollerDefsKey = "defs";
export const rollerCsKey = "cs";
export const rollerBoardKey = "board";

export const [appStore, setAppStore, { remove, clear, toJSON }] =
  createLocalStorage({
    prefix: "roller2",
    serializer: (value: StorageItem, key: string) => {
      return compressData(value);
    },
    deserializer: (value: string, key: string) => {
      switch (key) {
        case "settings":
          return decompressData(value) as AppSettings;
        case "rooms":
          return decompressData(value) as Record<string, RoomInfo>;
        case "defs":
          return decompressData(value) as Record<string, RollDefInfo>;
        case "cs":
          return decompressData(value) as Record<string, CsInfo>;
        case "board":
          return decompressData(value) as Record<string, BoardInfo>;
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
  const keys = [
    rollerSettingsKey,
    rollerRoomsKey,
    rollerBoardKey,
    rollerCsKey,
    rollerDefsKey,
  ];
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
    settings = emptyAppSettings();
    setAppStore(rollerSettingsKey, settings);
  }
  return settings;
};

export const appRooms = () => {
  let rooms = appStore.rooms as Record<string, RoomInfo>;
  if (!rooms) {
    rooms = {};
    setAppStore(rollerRoomsKey, rooms);
  }
  return rooms;
};

export const appDefs = () => {
  let defs = appStore.defs as Record<string, RollDefInfo>;
  if (!defs) {
    defs = {};
    setAppStore(rollerDefsKey, defs);
  }
  return defs;
};

export const appCs = () => {
  let cs = appStore.cs as Record<string, CsInfo>;
  if (!cs) {
    cs = {};
    setAppStore(rollerCsKey, cs);
  }
  return cs;
};

export const appBoards = () => {
  let board = appStore.board as Record<string, BoardInfo>;
  if (!board) {
    board = {};
    setAppStore(rollerBoardKey, board);
  }
  return board;
};

export const currentRoom = () => {
  const settings = appSettings();
  if (!settings) return undefined;
  if (settings.currentRoom == "") return undefined;
  const rooms = appRooms();
  if (!rooms[settings.currentRoom]) return undefined;
  return rooms[settings.currentRoom];
};

// --- mutations

export const updateRoomStorage = (item: RoomInfo) => {
  const newState = { ...appRooms() };
  newState[item.id] = item;
  saveToStorage(rollerRoomsKey, newState);
};

export const updateCsStorage = (item: CsInfo) => {
  const newState = { ...appCs() };
  newState[item.id] = item;
  console.log("updating cs storage with", newState);
  saveToStorage(rollerCsKey, newState);
};

export const deleteCsStorage = (id: string) => {
  const newState = { ...appCs() };
  delete newState[id];
  saveToStorage(rollerCsKey, newState);
};

export const updateBoardStorage = (item: BoardInfo) => {
  const newState = { ...appBoards() };
  newState[item.id] = item;
  saveToStorage(rollerBoardKey, newState);
};

export const deleteBoardStorage = (id: string) => {
  const newState = { ...appBoards() };
  delete newState[id];
  saveToStorage(rollerBoardKey, newState);
};
