import {
  FaSolidClipboardUser,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
} from "solid-icons/fa";
import { Component, Show, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  appRooms,
  appSettings,
  currentRoom,
  diceColorSet,
  diceMaterialSet,
  emptyRoomInfo,
  generateSerialKeys,
  mqttConnectionStatus,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  storageSize,
} from "~/common";
import { Button, Dialog, Flex, Popover, Select, Text } from "~/component";
import { SettingsView } from "../../view/SettingsView";
import { RoomSettingsView } from "../../view/SettingsView/RoomSettingsView";
import { topbarStyle } from "./styles.css";
import { Navigate, useNavigate } from "@solidjs/router";

export const TopBar: Component = () => {
  const navigate = useNavigate();

  const username = createMemo(() => {
    return appSettings().userName;
  });
  const currentDiceColor = createMemo(() => {
    return appSettings().diceColor;
  });

  const currentDiceMaterial = createMemo(() => {
    return appSettings().diceMaterial;
  });

  const diceColorChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceColor = value;
    saveToStorage(rollerSettingsKey, data);
  };

  const diceMaterialChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceMaterial = value;
    saveToStorage(rollerSettingsKey, data);
  };

  const createRoom = () => {
    const room = emptyRoomInfo();
    room.name = `room-${generateSerialKeys(4, "-")}`;
    room.owner = appSettings().userIdent;
    const newState = { ...appRooms() };
    newState[room.id] = room;
    saveToStorage(rollerRoomsKey, newState);
    const na = { ...appSettings() };
    na.currentRoom = room.id;
    saveToStorage(rollerSettingsKey, na);
  };

  const roomName = createMemo(() => {
    const room = currentRoom();
    if (!room) return "";
    return room.name;
  });

  const roomList = createMemo(() => {
    return Object.values(appRooms()).map((v) => v.name);
  });

  const changeRoom = (name: string) => {
    const r = Object.values(appRooms()).filter((it) => it.name == name);
    if (r.length <= 0) return;
    const na = { ...appSettings() };
    na.currentRoom = r[0].id;
    saveToStorage(rollerSettingsKey, na);
  };

  return (
    <div class={topbarStyle}>
      <Flex gap="medium" center>
        <Popover
          trigger={<FaSolidUser style={{ height: "1.5em", width: "1.5em" }} />}
          title="Settings"
        >
          <SettingsView />
        </Popover>
        <Dynamic component={"Text"}>{username()}</Dynamic>
        <Popover
          trigger={
            <FaSolidClipboardUser style={{ height: "1.5em", width: "1.5em" }} />
          }
          title="Room"
        >
          <RoomSettingsView />
        </Popover>
        <Dynamic
          component={Select}
          options={roomList}
          selected={roomName}
          onChange={changeRoom}
        />
        <Button variant="icon" onClick={createRoom}>
          <FaSolidPlus />
        </Button>
      </Flex>
      <Flex gap="large" center>
        <Flex>
          <Text fontSize="smaller" colorSchema="secondary">
            Color set
          </Text>
          <Select
            options={() => diceColorSet}
            selected={currentDiceColor}
            onChange={diceColorChange}
          ></Select>
          <Text fontSize="smaller" colorSchema="secondary">
            Material
          </Text>
          <Select
            options={() => diceMaterialSet}
            selected={currentDiceMaterial}
            onChange={diceMaterialChange}
          ></Select>
        </Flex>
        <Show when={mqttConnectionStatus()}>
          <Dynamic component={"div"} title={currentRoom()?.id}>
            <FaSolidPlug />
          </Dynamic>
        </Show>
        <Text colorSchema="secondary" fontSize="small">
          {(storageSize() / 1000).toFixed(2)} kB
        </Text>
      </Flex>
    </div>
  );
};
