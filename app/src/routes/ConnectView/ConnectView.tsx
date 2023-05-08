import { Navigate, useSearchParams } from "@solidjs/router";
import { Component } from "solid-js";
import {
  RoomInfo,
  appRooms,
  appSettings,
  decompressData64,
  emptyRoomInfo,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  topicRoomUpdateRequest,
} from "~/common";
import { netConnect, netPublish } from "~/common/net";

export const ConnectView: Component = () => {
  const [params] = useSearchParams();

  let id = params.r;
  if (id.trim() !== "") {
    const newState = {
      ...appSettings(),
    };
    newState.currentRoom = id;
    saveToStorage(rollerSettingsKey, newState);
    const nr = { ...appRooms() };
    nr[id] = emptyRoomInfo(id);
    saveToStorage(rollerRoomsKey, nr);
    netConnect();
  }
  return <Navigate href={"/"}></Navigate>;
};
