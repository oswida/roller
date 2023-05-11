import {
  FaSolidChalkboardUser,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
} from "solid-icons/fa";
import { TbPlugConnected } from "solid-icons/tb";
import { Component, Show, createMemo, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  appRooms,
  appSettings,
  currentRoom,
  diceColorSet,
  diceMaterialSet,
  emptyRoomInfo,
  generateSerialKeys,
  netConnectionStatus,
  netCreateRoom,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  storageSize,
} from "~/common";
import { Button, Flex, Popover, Select, Text } from "~/component";
import { SettingsView } from "../../view/SettingsView";
import { RoomSettingsView } from "../../view/SettingsView/RoomSettingsView";
import { topbarStyle } from "./styles.css";
import { RoomConnectView } from "~/view/SettingsView/RoomConnectView";

export const TopBar: Component = () => {
  const [roomSettingOpen, setRoomSettingsOpen] = createSignal(false);
  const [roomConnectOpen, setRoomConnectOpen] = createSignal(false);

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
    netCreateRoom(room);
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
        <Show when={roomList().length > 0}>
          <Popover
            trigger={
              <FaSolidChalkboardUser
                style={{ height: "1.5em", width: "1.5em" }}
              />
            }
            title="Rooms"
            open={roomSettingOpen}
            onOpenChange={setRoomSettingsOpen}
          >
            <RoomSettingsView onOpenChange={setRoomSettingsOpen} />
          </Popover>
          <Dynamic
            component={Select}
            options={roomList}
            selected={roomName}
            onChange={changeRoom}
          />
        </Show>
        <Show when={roomList().length <= 0}>
          <FaSolidChalkboardUser
            title="Rooms"
            style={{ height: "1.5em", width: "1.5em" }}
          />
        </Show>
        <Button variant="icon" title="Create room" onClick={createRoom}>
          <FaSolidPlus />
        </Button>
        <Popover
          trigger={
            <TbPlugConnected style={{ height: "1.5em", width: "1.5em" }} />
          }
          title="Connect to room"
          open={roomConnectOpen}
          onOpenChange={setRoomConnectOpen}
        >
          <RoomConnectView onOpenChange={setRoomConnectOpen} />
        </Popover>
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
        <Show when={netConnectionStatus()}>
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
