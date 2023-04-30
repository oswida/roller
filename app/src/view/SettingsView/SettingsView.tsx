import { Component, createMemo } from "solid-js";
import {
  SelectOption,
  appRooms,
  appSettings,
  currentRoomName,
  diceColorSet,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
} from "~/common";
import { Flex, Input, Select } from "~/component";

export const SettingsView: Component = () => {
  const updateName = (value: string) => {
    const data = { ...appSettings() };
    data.userName = value;
    saveToStorage(rollerSettingsKey, data);
    // TODO publish
  };

  const updateRoom = (value: string) => {
    const data = { ...appRooms() };
    if (!data[appSettings().currentRoom]) return;
    data[appSettings().currentRoom].name = value;
    saveToStorage(rollerRoomsKey, data);
    // TODO publish
  };

  return (
    <Flex direction="column">
      <Input
        label="User name"
        title="User name"
        value={appSettings().userName}
        onChange={(e) => updateName(e.target.value)}
      />
      <Input
        label="Room name"
        value={currentRoomName()}
        onChange={(e) => updateRoom(e.target.value)}
      />
    </Flex>
  );
};
