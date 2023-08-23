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
  centDeleteRoom,
  centPublish,
  centUpdateRoom,
  currentRoom,
  loggedUser,
  netTopic,
  netUpdateUser,
  setAppRolls,
  setAppRooms,
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

export const RoomSettingsView: Component<Props> = (props) => {
  let passRef: HTMLInputElement;
  const [delConfirmOpen, setDelConfirmOpen] = createSignal(false);

  const updateRoom = (field: "name" | "bkguri" | "owner", value: string) => {
    const data = { ...appRooms() };
    if (!data[loggedUser()?.settings.currentRoom]) return;
    const isOwner = currentRoom()?.owner == loggedUser()?.id;
    data[loggedUser()?.settings.currentRoom][field] = value;
    setAppRooms(data);
    centUpdateRoom(data[loggedUser()?.settings.currentRoom]);
    if (isOwner)
      centPublish(
        netTopic(topicRoomInfo),
        data[loggedUser()?.settings.currentRoom]
      );
  };

  const passOwnership = () => {
    if (!passRef || !passRef.value || passRef.value.trim() == "") return;
    updateRoom("owner", passRef.value);
    props.onOpenChange(false);
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
    if (!room || room.owner !== loggedUser()?.id) {
      toast("Cannot delete room. Room can be deleted only by an owner.", {
        icon: <FaSolidCircleStop />,
      });
      return;
    }
    const newState = { ...appRooms() };
    delete newState[room.id];
    const lu = loggedUser();
    if (!lu) return;
    if (!lu.settings) lu.settings = {};
    if (!lu.settings.rooms) lu.settings.rooms = Object.keys(newState);
    lu.settings.currentRoom = undefined;
    if (Object.values(newState).length > 0) {
      lu.settings.currentRoom = Object.values(newState)[0].id;
    }
    netUpdateUser(lu.name, lu.color, lu.settings);
    props.onOpenChange(false);
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
      <Show when={loggedUser()?.id == currentRoom()?.owner}>
        <Input
          label="Room name"
          value={roomName()}
          onChange={(e) => updateRoom("name", e.target.value)}
          style={{ width: "20em" }}
        />
      </Show>
      <Input
        label="Room background URI"
        value={roomBkg()}
        onChange={(e) => updateRoom("bkguri", e.target.value)}
        style={{ width: "20em" }}
      />
      <Flex justify="space" grow>
        <CopyToClipboard
          text={roomId()}
          options={{ debug: true }}
          onCopy={() => {
            toast("Room ID copied to clipboard", {
              icon: <FaSolidCircleInfo />,
            });
            props.onOpenChange(false);
          }}
          eventTrigger="onClick"
        >
          <div class={buttonStyle({})} title="Copy room id">
            <FaSolidShareNodes style={{ fill: "currentcolor" }} />
            <Text>Copy room ID </Text>
          </div>
        </CopyToClipboard>
        <Show when={loggedUser()?.id == currentRoom()?.owner}>
          <Alert onOpenChange={setDelConfirmOpen} open={delConfirmOpen()}>
            <AlertTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button>
                    <FaSolidTrash style={{ fill: themeVars.danger600 }} />
                    <Text>Delete room</Text>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Delete room</TooltipContent>
              </Tooltip>
            </AlertTrigger>
            <AlertContent title="Delete room">
              <Text>Are you sure? </Text>
              <Text>Delete room {currentRoom()?.name}?</Text>
              <Flex
                align="center"
                justify="center"
                gap="large"
                style={{ "margin-top": "10px" }}
              >
                <Button onClick={() => setDelConfirmOpen(false)}>Cancel</Button>
                <Button onClick={deleteRoom}>Delete</Button>
              </Flex>
            </AlertContent>
          </Alert>
        </Show>
      </Flex>
      <Show when={loggedUser()?.id == currentRoom()?.owner}>
        <Flex align="end" justify="space" grow>
          <Input
            label="Pass ownership to user"
            style={{ flex: 1, width: "16em" }}
            ref={(e) => (passRef = e)}
          />
          <Button onClick={passOwnership}>
            <FaSolidArrowRight />
          </Button>
        </Flex>
      </Show>
    </Flex>
  );
};
