import { BsPersonBadge } from "solid-icons/bs";
import {
  FaSolidChalkboardUser,
  FaSolidNetworkWired,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
} from "solid-icons/fa";
import {
  Component,
  Show,
  createEffect,
  createMemo,
  createSignal,
  on,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  RefProps,
  activateRoomSubscriptions,
  appRooms,
  appSettings,
  centConnectionStatus,
  centLoadCs,
  centLoadRolls,
  centUpdateRoom,
  connectedUsers,
  currentRightPanel,
  currentRoom,
  emptyRoomInfo,
  generateSerialKeys,
  rollerRoomsKey,
  rollerSettingsKey,
  rolling,
  saveToStorage,
  setCurrentRightPanel,
  storageSize,
} from "~/common";
import {
  Button,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components";
import {
  RoomConnectView,
  RoomSettingsView,
  UserSettingsView,
} from "../Settings";
import { topbarItemStyle, topbarStyle } from "./style.css";
import { BiSolidNote } from "solid-icons/bi";

export const TopBar: Component<RefProps> = (props) => {
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
    centUpdateRoom(room);
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

  createEffect(
    on(currentRoom, () => {
      const room = currentRoom();
      if (!room) return;
      activateRoomSubscriptions();
      centLoadRolls(room.id); // load stored rolls
      centLoadCs(room.id); // load shared charsheets
    })
  );

  const toggleRightPanel = (panel: string) => {
    const rp = currentRightPanel();
    if (rp == panel) {
      setCurrentRightPanel("");
      return;
    }
    setCurrentRightPanel("");
    setCurrentRightPanel(panel);
  };

  return (
    <div class={topbarStyle} ref={props.ref}>
      <Flex gap="large" align="center">
        <Flex class={topbarItemStyle}>
          <Popover
            modal={true}
            open={userSettingOpen()}
            onOpenChange={setUserSettingsOpen}
          >
            <PopoverTrigger title="User settings">
              <FaSolidUser style={{ height: "1.5em", width: "1.5em" }} />
            </PopoverTrigger>
            <PopoverContent title="User settings">
              <UserSettingsView onOpenChange={setUserSettingsOpen} />
            </PopoverContent>
          </Popover>
          <Dynamic component={"Text"}>{username()}</Dynamic>
        </Flex>

        <Flex class={topbarItemStyle}>
          <Show when={roomList().length > 0}>
            <Popover
              open={roomSettingOpen()}
              onOpenChange={setRoomSettingsOpen}
            >
              <PopoverTrigger title="Rooms">
                <FaSolidChalkboardUser
                  style={{ height: "1.5em", width: "1.5em" }}
                />
              </PopoverTrigger>
              <PopoverContent title="Rooms">
                <RoomSettingsView onOpenChange={setRoomSettingsOpen} />
              </PopoverContent>
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
          <Popover open={roomConnectOpen()} onOpenChange={setRoomConnectOpen}>
            <PopoverTrigger title="Connect to room">
              <FaSolidPlug style={{ height: "1.5em", width: "1.5em" }} />
            </PopoverTrigger>
            <PopoverContent title="Connect to room">
              <RoomConnectView onOpenChange={setRoomConnectOpen} />
            </PopoverContent>
          </Popover>
        </Flex>

        <Show when={!rolling()}>
          <Flex gap="medium" align="center" class={topbarItemStyle}>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="icon"
                  toggled={currentRightPanel() === "cs"}
                  onClick={() => toggleRightPanel("cs")}
                >
                  <BsPersonBadge size={24} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Character sheets</TooltipContent>
            </Tooltip>
            {/* <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="icon"
                  toggled={currentRightPanel() === "hd"}
                  onClick={() => toggleRightPanel("hd")}
                >
                  <BiSolidNote size={24} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Handouts</TooltipContent>
            </Tooltip> */}
            <Show when={currentRightPanel() === "cs"}>
              <Text colorSchema="accent"> Charsheets</Text>
            </Show>
            <Show when={currentRightPanel() === "hd"}>
              <Text colorSchema="accent"> Handouts</Text>
            </Show>
          </Flex>
        </Show>
      </Flex>

      <Flex gap="large" align="center" justify="center">
        <Show when={centConnectionStatus()}>
          <Dynamic
            component={"div"}
            title={Object.values(connectedUsers()).join("\n")}
          >
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
