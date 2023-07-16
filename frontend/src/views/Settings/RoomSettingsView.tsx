import { CopyToClipboard } from "solid-copy-to-clipboard";
import {
  FaSolidArrowRight,
  FaSolidCircleInfo,
  FaSolidCircleStop,
  FaSolidShareNodes,
  FaSolidTrash,
} from "solid-icons/fa";
import { Component, Show, createMemo, createSignal } from "solid-js";
import toast from "solid-toast";
import {
  appRooms,
  appSettings,
  centDeleteRoom,
  centPublish,
  centUpdateRoom,
  currentRoom,
  netTopic,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  setAppRolls,
  topicRoomInfo,
} from "~/common";
import { themeVars } from "~/common/theme.css";
import {
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  Flex,
  Input,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components";
import { buttonStyle } from "~/components/Button/styles.css";

type Props = {
  onOpenChange: (value: boolean) => void;
};

export const RoomSettingsView: Component<Props> = ({ onOpenChange }) => {
  let passRef: HTMLInputElement;
  const [delConfirmOpen, setDelConfirmOpen] = createSignal(false);

  const updateRoom = (field: "name" | "bkguri" | "owner", value: string) => {
    const data = { ...appRooms() };
    if (!data[appSettings().currentRoom]) return;
    const isOwner = currentRoom()?.owner == appSettings().userIdent;
    data[appSettings().currentRoom][field] = value;
    saveToStorage(rollerRoomsKey, data);
    centUpdateRoom(data[appSettings().currentRoom]);
    if (isOwner)
      centPublish(netTopic(topicRoomInfo), data[appSettings().currentRoom]);
  };

  const passOwnership = () => {
    if (!passRef || !passRef.value || passRef.value.trim() == "") return;
    updateRoom("owner", passRef.value);
    onOpenChange(false);
  };

  const roomName = createMemo(() => {
    const room = currentRoom();
    if (!room) return "";
    return room.name;
  });

  const roomBkg = createMemo(() => {
    const room = currentRoom();
    if (!room) return "";
    return room.bkguri ? room.bkguri : "";
  });

  const deleteRoom = () => {
    setDelConfirmOpen(false);
    const room = currentRoom();
    if (!room || room.owner !== appSettings().userIdent) {
      toast("Cannot delete room. Room can be deleted only by an owner.", {
        icon: <FaSolidCircleStop />,
      });
      return;
    }
    const newState = { ...appRooms() };
    delete newState[room.id];
    saveToStorage(rollerRoomsKey, newState);
    const ns = { ...appSettings() };
    ns.currentRoom = "";
    if (Object.values(newState).length > 0) {
      ns.currentRoom = Object.values(newState)[0].id;
    }
    saveToStorage(rollerSettingsKey, ns);
    onOpenChange(false);
    centDeleteRoom(room);
    setAppRolls({});
  };

  const roomId = createMemo(() => {
    const room = currentRoom();
    if (!room) return "";
    return room.id;
  });

  return (
    <Flex direction="column" gap="large">
      <Show when={appSettings().userIdent == currentRoom()?.owner}>
        <Input
          label="Room name"
          currentValue={() => roomName()}
          onChange={(e) => updateRoom("name", e.target.value)}
          style={{ width: "20em" }}
        />
      </Show>
      <Input
        label="Room background URI"
        currentValue={() => roomBkg()}
        onChange={(e) => updateRoom("bkguri", e.target.value)}
        style={{ width: "20em" }}
      />
      <Flex style={{ "justify-content": "space-between" }}>
        <CopyToClipboard
          text={roomId()}
          options={{ debug: true }}
          onCopy={() => {
            toast("Room ID copied to clipboard", {
              icon: <FaSolidCircleInfo />,
            });
            onOpenChange(false);
          }}
          eventTrigger="onClick"
        >
          <div class={buttonStyle({ variant: "ghost" })} title="Copy room id">
            <FaSolidShareNodes style={{ fill: "currentcolor" }} />
            <Text>Copy room ID </Text>
          </div>
        </CopyToClipboard>
        <Show when={appSettings().userIdent == currentRoom()?.owner}>
          <Alert onOpenChange={setDelConfirmOpen} open={delConfirmOpen()}>
            <AlertTrigger>
              <Flex gap="medium" center>
                <Tooltip>
                  <TooltipTrigger>
                    <FaSolidTrash style={{ fill: themeVars.danger600 }} />
                  </TooltipTrigger>
                  <TooltipContent>Delete room</TooltipContent>
                </Tooltip>
              </Flex>
            </AlertTrigger>
            <AlertContent title="Delete room">
              <Text>Are you sure? </Text>
              <Text>Delete room {currentRoom()?.name}?</Text>
              <Flex center gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setDelConfirmOpen(false)}>Cancel</Button>
                <Button onClick={deleteRoom}>Delete</Button>
              </Flex>
            </AlertContent>
          </Alert>
        </Show>
      </Flex>
      <Show when={appSettings().userIdent == currentRoom()?.owner}>
        <Flex center>
          <Input
            label="Pass ownership to user"
            style={{ flex: 1, width: "16em" }}
            ref={(e) => (passRef = e)}
          />
          <Button variant="icon" onClick={passOwnership}>
            <FaSolidArrowRight />
          </Button>
        </Flex>
      </Show>
    </Flex>
  );
};
