import { netDeleteRoom, netPublish, netUpdateRoom, netUpdateUser } from "./net";
import { appDefs, appRooms, loggedUser, setAppDefs, setAppRolls, setAppRooms, setCurrentCs, setLoggedUser } from "./state";
import { CsInfo, RollDefInfo, RoomInfo, UserInfo, topicCsInfo } from "./types";
import { netTopic } from "./util";


export const currentRoom = () => {
  const settings = loggedUser()?.settings;
  if (!settings) return undefined;
  if (!settings.currentRoom || settings.currentRoom == "") return undefined;
  const rooms = appRooms();
  if (!rooms[settings.currentRoom]) return undefined;
  return rooms[settings.currentRoom];
};


export const updateLoggedUser = (lu: UserInfo) => {
  setLoggedUser({ ...lu });
  netUpdateUser(lu.name, lu.color, lu.settings);
}

export const updateLoggedUserSetting = (name: string, value: any) => {
  const lu = loggedUser();
  if (!lu) return;
  if (!lu.settings) lu.settings = {};
  lu.settings[name] = value;
  updateLoggedUser(lu);
}

export const updateCsStorage = (data: CsInfo) => {
  netPublish(netTopic(topicCsInfo), data);
}

export const removeCsFromStorage = (id: string) => {
  setCurrentCs(undefined);
}

export const updateRollDefStorage = (data: RollDefInfo) => {
  const newState = { ...appDefs() };
  newState[data.id] = data;
  setAppDefs(newState);
  // net
}

export const removeRollDefFromStorage = (id: string) => {
  const newState = { ...appDefs() };
  delete newState[id];
  setAppDefs(newState);
  // net
}

export const updateRoomStorage = (data: RoomInfo) => {
  const newState = { ...appRooms() };
  newState[data.id] = { ...data };
  setAppRooms(newState);
  netUpdateRoom(data);
  return newState;
}

export const removeRoomFromStorage = (room: RoomInfo) => {
  const newState = { ...appRooms() };
  delete newState[room.id];
  setAppRooms(newState);
  updateLoggedUserSetting("rooms", Object.values(newState).map(it => it.id));
  updateLoggedUserSetting("currentRoom", undefined);
  netDeleteRoom(room);
  setAppRolls({});
}