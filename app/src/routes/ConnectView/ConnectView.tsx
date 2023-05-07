import { Navigate, useSearchParams } from "@solidjs/router";
import { Component } from "solid-js";
import {
  RoomInfo,
  appRooms,
  appSettings,
  decompressData64,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
} from "~/common";
import { netConnect } from "~/common/net";

export const ConnectView: Component = () => {
  const [params] = useSearchParams();

  let data = params.data;
  if (data.trim() !== "") {
    const dt = decompressData64(data);
    const newState = {
      ...appSettings(),
    };
    const room = dt.roomInfo as RoomInfo;
    newState.currentRoom = room.id;
    saveToStorage(rollerSettingsKey, newState);
    const nr = { ...appRooms() };
    nr[room.id] = room;
    saveToStorage(rollerRoomsKey, nr);
    netConnect();
  }
  return <Navigate href={"/"}></Navigate>;
};
