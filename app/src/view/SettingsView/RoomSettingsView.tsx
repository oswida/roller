import { CopyToClipboard } from "solid-copy-to-clipboard";
import {
  FaSolidShareNodes,
  FaSolidSkullCrossbones,
  FaSolidTrash,
} from "solid-icons/fa";
import { Component, createMemo } from "solid-js";
import toast from "solid-toast";
import {
  appRooms,
  appSettings,
  currentRoom,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
  topicRoomInfo,
} from "~/common";
import { netPublish, netSessionLink } from "~/common/net";
import { Button, Flex, Input, Text } from "~/component";
import { buttonStyle } from "~/component/Button/styles.css";

type Props = {
  onOpenChange: (value: boolean) => void;
};

export const RoomSettingsView: Component<Props> = ({ onOpenChange }) => {
  const updateRoom = (field: "name" | "bkguri", value: string) => {
    const data = { ...appRooms() };
    if (!data[appSettings().currentRoom]) return;
    data[appSettings().currentRoom][field] = value;
    saveToStorage(rollerRoomsKey, data);
    netPublish(topicRoomInfo, data[appSettings().currentRoom]);
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
    const room = currentRoom();
    if (!room) return "";
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
  };

  return (
    <Flex direction="column" gap="large">
      <Input
        label="Room name"
        currentValue={() => roomName()}
        onChange={(e) => updateRoom("name", e.target.value)}
        style={{ width: "20em" }}
      />
      <Input
        label="Room background URI"
        currentValue={() => roomBkg()}
        onChange={(e) => updateRoom("bkguri", e.target.value)}
        style={{ width: "20em" }}
      />
      <Flex style={{ "justify-content": "space-between" }}>
        <CopyToClipboard
          text={netSessionLink()}
          options={{ debug: true }}
          onCopy={() => {
            toast("Session link copied to clipboard");
            onOpenChange(false);
          }}
          eventTrigger="onClick"
        >
          <div class={buttonStyle({ variant: "ghost" })} title="Copy room link">
            <FaSolidShareNodes />
            <Text>Share link </Text>
          </div>
        </CopyToClipboard>
        <Button variant="ghost" onClick={deleteRoom}>
          <FaSolidTrash />
          <Text colorSchema="danger">Delete room</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
