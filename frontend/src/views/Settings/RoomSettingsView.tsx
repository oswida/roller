import { CopyToClipboard } from "solid-copy-to-clipboard";
import {
  FaSolidArrowRight,
  FaSolidShareNodes,
  FaSolidTrash,
} from "solid-icons/fa";
import { Component, Show, createMemo, createSignal } from "solid-js";
import { RoomData, setStateCurrentRoom, setStateNotify, setStateRooms, stateCurrentRoom, stateCurrentUser, stateRooms } from "~/common";
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
  showToast,
} from "~/components";
import { buttonStyle } from "~/components/Button/styles.css";
import { removeRoom, updateRoom } from "~/net";

type Props = {
  onOpenChange: (value: boolean) => void;
};

export const RoomSettingsView: Component<Props> = (props) => {
  const [delConfirmOpen, setDelConfirmOpen] = createSignal(false);
  const [passOwnerId, setPassOwnerId] = createSignal("");

  const updateList = (room: RoomData) => {
    const list = { ...stateRooms() };
    const item = Object.values(list).find((it) => it.id === room.id);
    if (item) {
      list[item.id] = { ...room };
      setStateRooms(list);
    }
  }

  const update = (field: "name" | "bkguri" | "owner", value: string) => {
    const data = { ...stateRooms() };
    const room = stateCurrentRoom();
    if (!room) return;
    switch (field) {
      case "name": room.name = value; break;
      case "bkguri": room.background = value; break;
      case "owner": room.owner = value; break;
    }
    updateRoom(room.id, room);
    setStateCurrentRoom({ ...room });
    updateList(room);
    // TODO: if (isOwner()) netPublish(netTopic(topicRoomInfo), room);
  };

  const isOwner = createMemo(() => {
    const cu = stateCurrentUser();
    if (!cu) return false;
    const cr = stateCurrentRoom();
    if (!cr) return false;
    return cu.id === cr.owner;
  });

  const passOwnership = () => {
    if (passOwnerId().trim() == "") return;
    const cr = stateCurrentRoom();
    if (!cr) return;
    cr.owner = passOwnerId();
    updateRoom(cr.id, { ...cr });
    setStateCurrentRoom({ ...cr });
  };

  const remove = () => {
    setDelConfirmOpen(false);
    const room = stateCurrentRoom();
    if (!room || room.owner !== stateCurrentUser()?.id) {
      showToast({ message: "Cannot delete room. Room can be deleted only by an owner.", id: 1 });
      return;
    }
    props.onOpenChange(false);
    removeRoom(room.id);
    updateList(room);
    // TODO : publish remove
  };


  return (
    <Flex direction="column" gap="large" >
      <Show when={isOwner()}>
        <Input
          label="Room name"
          value={stateCurrentRoom()?.name}
          onChange={(e) => update("name", e.target.value)}
          style={{ width: "20em" }}
        />
        <Input
          label="Room background URI"
          value={stateCurrentRoom()?.background}
          onChange={(e) => update("bkguri", e.target.value)}
          style={{ width: "20em" }}
        />
      </Show>
      <Flex justify="space" grow>
        <CopyToClipboard
          text={stateCurrentRoom() ? stateCurrentRoom()!.id : ""}
          options={{ debug: true }}
          onCopy={() => {
            props.onOpenChange(false);
            showToast({ message: "Room ID copied to clipboard", id: 1 });
          }}
          eventTrigger="onClick"
        >
          <div class={buttonStyle({})} title="Copy room id">
            <FaSolidShareNodes style={{ fill: "currentcolor" }} />
            <Text>Copy room ID </Text>
          </div>
        </CopyToClipboard>
        <Show when={isOwner()}>
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
              <Text>Delete room {stateCurrentRoom()?.name}?</Text>
              <Flex
                align="center"
                justify="center"
                gap="large"
                style={{ "margin-top": "10px" }}
              >
                <Button onClick={() => setDelConfirmOpen(false)}>Cancel</Button>
                <Button onClick={remove}>Delete</Button>
              </Flex>
            </AlertContent>
          </Alert>
        </Show>
      </Flex>
      <Show when={isOwner()}>
        <Flex align="end" justify="space" grow>
          <Input
            label="Pass ownership to user"
            style={{ flex: 1, width: "16em" }}
            onInput={(e: any) => { setPassOwnerId(e.target.value) }}
          />
          <Button onClick={passOwnership}>
            <FaSolidArrowRight />
          </Button>
        </Flex>
      </Show>
    </Flex>
  );
};
