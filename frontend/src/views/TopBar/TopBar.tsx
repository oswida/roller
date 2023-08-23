import { BsPersonBadge } from "solid-icons/bs";
import {
  FaSolidChalkboardUser,
  FaSolidDoorOpen,
  FaSolidNetworkWired,
  FaSolidPlug,
  FaSolidPlus,
  FaSolidUser,
  FaSolidUserPlus,
} from "solid-icons/fa";
import {
  Component,
  For,
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
  centConnectionStatus,
  netDisconnect,
  netLoadCs,
  netLoadRolls,
  connectedUsers,
  currentRightPanel,
  currentRoom,
  emptyRoomInfo,
  generateSerialKeys,
  loggedUser,
  rolling,
  setCurrentRightPanel,
  setLoggedUser,
  updateLoggedUserSetting,
  updateRoomStorage,
  UserCreateInfo,
  netCreateUser,
} from "~/common";
import {
  Button,
  Dialog,
  DialogButtons,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
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
import toast from "solid-toast";

export const TopBar: Component<RefProps> = (props) => {
  const [roomSettingOpen, setRoomSettingsOpen] = createSignal(false);
  const [roomConnectOpen, setRoomConnectOpen] = createSignal(false);
  const [userSettingOpen, setUserSettingsOpen] = createSignal(false);

  const username = createMemo(() => {
    const lu = loggedUser();
    if (!lu) return "";
    return lu.name;
  });

  const createRoom = () => {
    const ident = loggedUser()?.id;
    if (!ident) return;
    const room = emptyRoomInfo();
    room.name = `room-${generateSerialKeys(4, "-")}`;
    room.owner = ident;

    const rooms = updateRoomStorage(room);
    updateLoggedUserSetting("rooms", Object.values(rooms).map(r => r.id));
    updateLoggedUserSetting("currentRoom", room.id);
  };

  const selectedRoom = createMemo(() => {
    const room = currentRoom();
    if (!room) return undefined;
    const list = Object.values(appRooms()).map(
      (v) => ({ id: v.id, label: v.name } as SelectItem)
    );
    const rs = list.find((r) => r.id == room.id);
    if (rs) return rs;
    return undefined;
  });

  const roomList = createMemo(() => {
    return Object.values(appRooms()).map(
      (v) => ({ id: v.id, label: v.name } as SelectItem)
    );
  });

  const changeRoom = (item: SelectItem) => {
    if (!item) return;
    const r = Object.values(appRooms()).find((it) => it.id == item.id);
    if (!r) return;
    updateLoggedUserSetting("currentRoom", r.id);
  };

  createEffect(
    on(currentRoom, () => {
      const room = currentRoom();
      if (!room) return;
      activateRoomSubscriptions();
      netLoadRolls(room.id); // load stored rolls
      netLoadCs(room.id); // load shared charsheets
    })
  );

  const logout = () => {
    setLoggedUser(undefined);
    netDisconnect();
  };

  const toggleRightPanel = (panel: string) => {
    const rp = currentRightPanel();
    if (rp == panel) {
      setCurrentRightPanel("");
      return;
    }
    setCurrentRightPanel("");
    setCurrentRightPanel(panel);
  };



  const [createInfo, setCreateInfo] = createSignal<UserCreateInfo>({
    name: "",
    pass: "",
    repeatPass: "",
  });

  const adduser = () => {
    if (createInfo().name.trim() == "" || createInfo().pass.trim() == "" || createInfo().repeatPass.trim() == "") {
      toast("User data cannot be empty");
      return;
    }
    if (createInfo().pass !== createInfo().repeatPass) {
      toast("Passwords do not match");
      return;
    }
    netCreateUser(createInfo());
  }

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
              <PopoverTrigger title="Room settings">
                <FaSolidChalkboardUser
                  style={{ height: "1.5em", width: "1.5em" }}
                />
              </PopoverTrigger>
              <PopoverContent title={currentRoom()?.name}>
                <RoomSettingsView onOpenChange={setRoomSettingsOpen} />
              </PopoverContent>
            </Popover>
            <Select
              options={roomList}
              selected={selectedRoom}
              onChange={changeRoom}
            />
          </Show>
          <Show when={roomList().length <= 0}>
            <FaSolidChalkboardUser
              title="Rooms"
              style={{ height: "1.5em", width: "1.5em" }}
              fill="currentColor"
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
            <Show when={currentRightPanel() === "cs"}>
              <Text colorSchema="accent"> Charsheets</Text>
            </Show>
          </Flex>
        </Show>
      </Flex>

      <Flex gap="large" align="center" justify="center">
        <Show when={loggedUser()?.is_admin}>
          <Dialog>
            <DialogTrigger>
              <Button variant="icon" title="Add user" >
                <FaSolidUserPlus />
              </Button>
            </DialogTrigger>
            <DialogContent title="Create new user">
              <Input label="User name"
                onChange={(e: any) => setCreateInfo((prev) => ({ ...prev, name: e.target.value }))} />
              <Input label="Password" type="password"
                onChange={(e: any) => setCreateInfo((prev) => ({ ...prev, pass: e.target.value }))} />
              <Input label="Repeat password" type="password"
                onChange={(e: any) => setCreateInfo((prev) => ({ ...prev, repeatPass: e.target.value }))} />
              <DialogButtons>
                <Text>Cancel</Text>
                <Text onClick={adduser}>Create</Text>
              </DialogButtons>
            </DialogContent>
          </Dialog>
        </Show>

        <Show when={centConnectionStatus() && Object.values(connectedUsers()).length > 0}>
          <Tooltip>
            <TooltipTrigger>
              <FaSolidNetworkWired style={{ fill: "currentcolor" }} />
            </TooltipTrigger>
            <TooltipContent>
              <For each={Object.values(connectedUsers())}>{(it) => (<Text>{it}</Text>)}</For>
            </TooltipContent>
          </Tooltip>
        </Show>
        <Button variant="icon" title="Logout" onClick={logout}>
          <FaSolidDoorOpen />
        </Button>
      </Flex>
    </div>
  );
};
