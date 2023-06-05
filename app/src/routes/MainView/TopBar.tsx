import { BsPersonBadge } from "solid-icons/bs";
import {
  FaSolidChalkboardUser,
  FaSolidNetworkWired,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
} from "solid-icons/fa";
import { Component, Show, createEffect, createMemo, createSignal, on } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  RefProps,
  appRooms,
  appSettings,
  connectedUsers,
  csPanelVisible,
  currentRoom,
  emptyRoomInfo,
  generateSerialKeys,
  netConnectionStatus,
  netLoadCs,
  netLoadRolls,
  netUpdateRoom,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  setCsPanelVisible,
  storageSize,
} from "~/common";
import { Button, Flex, Popover, Select, SelectItem, Text } from "~/component";
import { RoomConnectView } from "~/view/SettingsView/RoomConnectView";
import { SettingsView } from "../../view/SettingsView";
import { RoomSettingsView } from "../../view/SettingsView/RoomSettingsView";
import { topbarItemStyle, topbarStyle } from "./styles.css";

export const TopBar: Component<RefProps> = ({ ref }) => {
  const [roomSettingOpen, setRoomSettingsOpen] = createSignal(false);
  const [roomConnectOpen, setRoomConnectOpen] = createSignal(false);
  const [userSettingOpen, setUserSettingsOpen] = createSignal(false);

  const username = createMemo(() => {
    return appSettings().userName;
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
    netUpdateRoom(room);
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

  createEffect(on(currentRoom, () => {
    const room = currentRoom();
    if (!room) return;
    netLoadRolls(room.id); // load stored rolls
    netLoadCs(room.id); // load shared charsheets
  }));

  return (
    <div class={topbarStyle} ref={ref}>
      <Flex gap="large">
        <Flex class={topbarItemStyle}>
          <Popover
            modal={true}
            trigger={<FaSolidUser style={{ height: "1.5em", width: "1.5em" }} />}
            title="User settings"
            open={userSettingOpen}
            onOpenChange={setUserSettingsOpen}
          >
            <SettingsView onOpenChange={setUserSettingsOpen} />
          </Popover>
          <Dynamic component={"Text"}>{username()}</Dynamic>
        </Flex>

        <Flex class={topbarItemStyle}>
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
              <FaSolidPlug style={{ height: "1.5em", width: "1.5em" }} />
            }
            title="Connect to room"
            open={roomConnectOpen}
            onOpenChange={setRoomConnectOpen}
          >
            <RoomConnectView onOpenChange={setRoomConnectOpen} />
          </Popover>
        </Flex>

        <Flex gap="medium" class={topbarItemStyle}>
          <Button
            variant="icon"
            toggled={csPanelVisible}
            onClick={() => setCsPanelVisible(!csPanelVisible())}
          >
            <BsPersonBadge size={25} />
          </Button>
          <Text>Charsheets</Text>
        </Flex>

      </Flex>



      <Flex gap="large" center>
        <Show when={netConnectionStatus()}>
          <Dynamic component={"div"} title={Object.values(connectedUsers()).join("\n")}>
            <FaSolidNetworkWired style={{ fill: "currentcolor" }} />
          </Dynamic>
        </Show>
        <Text colorSchema="secondary" fontSize="small">
          {(storageSize() / 1000).toFixed(2)} kB
        </Text>
      </Flex>
    </div>
  );
};
