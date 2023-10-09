import {
  Component, For, Show, createMemo, createSignal,
} from "solid-js";

import { topbarItemStyle, topbarStyle } from "./style.css";
import { FloatingPanel } from "~/components/FloatingPanel";
import { Flex } from "~/components/Flex";
import { Button } from "~/components/Button";
import { FaSolidChalkboardUser, FaSolidDoorOpen, FaSolidNetworkWired, FaSolidPlug, FaSolidPlus, FaSolidUser } from "solid-icons/fa";
import { setStateConnectedUsers, setStateCurrentRoom, setStateRooms, stateConnectedUsers, stateCurrentRoom, stateCurrentUser, stateNetClient, stateRooms } from "~/common";
import {
  Popover, PopoverContent, PopoverTrigger, Tooltip,
  TooltipContent, TooltipTrigger, Text, Select, SelectItem
} from "~/components";
import { UserSettingsView } from "../Settings/UserSettingsView";
import { logout, updateCurrentUser } from "~/net";
import { newRoom, updateRoom } from "~/net/room";
import { RoomSettingsView } from "../Settings/RoomSettingsView";
import { RoomConnectView } from "../Settings/RoomConnectView";


export const TopBar: Component = (props) => {
  const [roomSettingOpen, setRoomSettingsOpen] = createSignal(false);
  const [roomConnectOpen, setRoomConnectOpen] = createSignal(false);
  const [userSettingOpen, setUserSettingsOpen] = createSignal(false);

  const createRoom = () => {
    const cu = stateCurrentUser();
    if (!cu) return;
    const room = newRoom(cu.id);
    if (!room) return;
    if (!cu.settings["rooms"]) cu.settings["rooms"] = [];
    cu.settings["rooms"].push(room.id);
    updateCurrentUser({ ...cu });
    updateRoom(room.id, room);
    const newState = { ...stateRooms() };
    newState[room.id] = room;
    console.log("newstate", newState);
    setStateRooms(newState);
    setStateCurrentRoom(room);
  };

  const changeRoom = (item: SelectItem) => {
    if (!item) return;
    const r = Object.values(stateRooms()).find((it) => it.id == item.id);
    if (!r) return;
    setStateCurrentRoom({ ...r });
    const cu = stateCurrentUser();
    if (!cu) return;
    const ns: Record<string, string> = {};
    ns[cu.id] = cu.name;
    setStateConnectedUsers(ns);
    // TODO: publish room connection
  };

  const rooms = createMemo(() => {
    return Object.values(stateRooms());
  });


  // const logout = () => {
  //   setLoggedUser(undefined);
  //   netDisconnect();
  // };

  // const toggleRightPanel = (panel: string) => {
  //   const rp = currentRightPanel();
  //   if (rp == panel) {
  //     setCurrentRightPanel("");
  //     return;
  //   }
  //   setCurrentRightPanel("");
  //   setCurrentRightPanel(panel);
  // };


  return (
    <FloatingPanel left={5} top={5}>
      <div class={topbarStyle}>
        <Flex gap="large" align="center">
          <Tooltip>
            <TooltipTrigger>
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
                <Text>{stateCurrentUser()?.name}</Text>
              </Flex>
            </TooltipTrigger>
            <TooltipContent>User settings</TooltipContent>
          </Tooltip>


          <Flex class={topbarItemStyle}>
            <Show when={rooms().length > 0}>
              <Tooltip>
                <TooltipTrigger>
                  <Flex >
                    <Popover
                      open={roomSettingOpen()}
                      onOpenChange={setRoomSettingsOpen}
                    >
                      <PopoverTrigger title="Room settings">
                        <FaSolidChalkboardUser
                          style={{ height: "1.5em", width: "1.5em" }}
                        />
                      </PopoverTrigger>
                      <PopoverContent title={stateCurrentRoom()?.name}>
                        <RoomSettingsView onOpenChange={setRoomSettingsOpen} />
                      </PopoverContent>
                    </Popover>

                  </Flex>
                </TooltipTrigger>
                <TooltipContent>Room settings</TooltipContent>
              </Tooltip>
              <Select
                options={rooms()}
                selected={stateCurrentRoom()}
                onChange={changeRoom}
                optionValue="id"
                optionTextValue="name"
              />
            </Show>
            <Show when={rooms().length <= 0}>
              <FaSolidChalkboardUser
                title="Rooms"
                style={{ height: "1.5em", width: "1.5em" }}
                fill="currentColor"
              />
            </Show>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="icon" onClick={createRoom}>
                  <FaSolidPlus />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create room</TooltipContent>
            </Tooltip>


            <Tooltip>
              <TooltipTrigger>
                <Popover open={roomConnectOpen()} onOpenChange={setRoomConnectOpen}>
                  <PopoverTrigger title="Connect to room">
                    <FaSolidPlug style={{ height: "1.5em", width: "1.5em" }} />
                  </PopoverTrigger>
                  <PopoverContent title="Connect to room">
                    <RoomConnectView onOpenChange={setRoomConnectOpen} />
                  </PopoverContent>
                </Popover>
              </TooltipTrigger>
              <TooltipContent>Connect to room</TooltipContent>
            </Tooltip>
          </Flex>



          <Show when={stateNetClient() !== undefined && Object.values(stateConnectedUsers()).length > 0}>
            <Tooltip>
              <TooltipTrigger>
                <FaSolidNetworkWired style={{ fill: "currentcolor" }} />
              </TooltipTrigger>
              <TooltipContent>
                <For each={Object.values(stateConnectedUsers())}>{(it) => (<Text>{it}</Text>)}</For>
              </TooltipContent>
            </Tooltip>
          </Show>

          <Tooltip>
            <TooltipTrigger>
              <Button onClick={logout} variant="icon">
                <FaSolidDoorOpen style={{ height: "1.5em", width: "1.5em" }} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Logout</TooltipContent>
          </Tooltip>
        </Flex>
        {/* <Flex gap="large" align="center">
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
      </Flex> */}
      </div>
    </FloatingPanel>
  );
};
