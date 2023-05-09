import { Navigate, useSearchParams } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import {
  RoomInfo,
  appRooms,
  appSettings,
  currentRoom,
  decompressData64,
  emptyRoomInfo,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  topicRoomUpdateRequest,
} from "~/common";
import {
  netConnect,
  netConnectionsStatus,
  netDisconnect,
  netPublish,
} from "~/common/net";

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
  }

  createEffect(() => {
    const room = currentRoom();
    if (!room || room.id !== id) return;
    const suffix = `connect?r=${id}`;
    window.location.href = window.location.href.replace(suffix, "");
    window.location.reload();
  });

  return <div></div>;
};
