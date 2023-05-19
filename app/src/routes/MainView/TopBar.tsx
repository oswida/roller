import { BsFilePerson } from "solid-icons/bs";
import {
  FaSolidChalkboardUser,
  FaSolidDiceD20,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
} from "solid-icons/fa";
import { TbPlugConnected } from "solid-icons/tb";
import { Component, Show, createMemo, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  RefProps,
  appRooms,
  appSettings,
  currentRoom,
  diceColorSet,
  diceMaterialSet,
  emptyRoomInfo,
  generateSerialKeys,
  mainViewPanel,
  netConnectionStatus,
  netCreateRoom,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  setMainViewPanel,
  storageSize,
  taskQueue,
} from "~/common";
import { Button, Flex, Popover, Select, SelectItem, Text } from "~/component";
import { RoomConnectView } from "~/view/SettingsView/RoomConnectView";
import { SettingsView } from "../../view/SettingsView";
import { RoomSettingsView } from "../../view/SettingsView/RoomSettingsView";
import { topbarStyle } from "./styles.css";

export const TopBar: Component<RefProps> = ({ ref }) => {
  const [roomSettingOpen, setRoomSettingsOpen] = createSignal(false);
  const [roomConnectOpen, setRoomConnectOpen] = createSignal(false);
  const [userSettingOpen, setUserSettingsOpen] = createSignal(false);

  const username = createMemo(() => {
    return appSettings().userName;
  });

  const colorList = createMemo(() => {
    return diceColorSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const materialList = createMemo(() => {
    return diceMaterialSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const currentDiceColor = createMemo(() => {
    const r = colorList().filter((it) => it.id == appSettings().diceColor);
    if (r.length > 0) return r[0];
    return undefined;
  });

  const currentDiceMaterial = createMemo(() => {
    const r = materialList().filter(
      (it) => it.id == appSettings().diceMaterial
    );
    if (r.length > 0) return r[0];
    return undefined;
  });

  const diceColorChange = (value: SelectItem) => {
    const data = { ...appSettings() };
    data.diceColor = value.id;
    saveToStorage(rollerSettingsKey, data);
  };

  const diceMaterialChange = (value: SelectItem) => {
    const data = { ...appSettings() };
    data.diceMaterial = value.id;
    saveToStorage(rollerSettingsKey, data);
  };

  const pendingRolls = createMemo(() => {
    const q = taskQueue();
    if (!q) return 0;
    return q.length;
  });

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

  const selectedRoom = createMemo(() => {
    const room = currentRoom();
    if (!room) return undefined;
    const list = Object.values(appRooms()).map(
      (v) => ({ id: v.id, label: v.name } as SelectItem)
    );
    const rs = list.filter((r) => r.id == room.id);
    if (rs.length > 0) return rs[0];
    return undefined;
  });

  const roomList = createMemo(() => {
    return Object.values(appRooms()).map(
      (v) => ({ id: v.id, label: v.name } as SelectItem)
    );
  });

  const changeRoom = (item: SelectItem) => {
    if (!item) return;
    const r = Object.values(appRooms()).filter((it) => it.id == item.id);
    if (r.length <= 0) return;
    const na = { ...appSettings() };
    na.currentRoom = r[0].id;
    saveToStorage(rollerSettingsKey, na);
  };

  return (
    <div class={topbarStyle} ref={ref}>
      <Flex gap="medium" center>
        <Popover
          trigger={<FaSolidUser style={{ height: "1.5em", width: "1.5em" }} />}
          title="User settings"
          open={userSettingOpen}
          onOpenChange={setUserSettingsOpen}
        >
          <SettingsView onOpenChange={setUserSettingsOpen} />
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
            selected={selectedRoom}
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

      <Flex gap="medium">
        <Button
          variant="icon"
          toggled={mainViewPanel() == "dice"}
          onClick={() => setMainViewPanel("dice")}
        >
          <FaSolidDiceD20 size={25} />
        </Button>
        <Button
          variant="icon"
          toggled={mainViewPanel() == "cs"}
          onClick={() => setMainViewPanel("cs")}
        >
          <BsFilePerson size={25} />
        </Button>
      </Flex>

      <Flex gap="large" center>
        <Flex>
          <Text fontSize="smaller" colorSchema="secondary">
            Color set
          </Text>
          <Select
            options={colorList}
            selected={currentDiceColor}
            onChange={diceColorChange}
          ></Select>
          <Text fontSize="smaller" colorSchema="secondary">
            Material
          </Text>
          <Select
            options={materialList}
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
        <Dynamic component={Text} colorSchema="secondary" fontSize="small">
          PR: {pendingRolls()}
        </Dynamic>
      </Flex>
    </div>
  );
};
