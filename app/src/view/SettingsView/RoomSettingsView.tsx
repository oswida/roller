import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidShareNodes } from "solid-icons/fa";
import { Component } from "solid-js";
import toast from "solid-toast";
import {
  appRooms,
  appSettings,
  currentRoom,
  rollerRoomsKey,
  saveToStorage,
  topicRoomInfo,
} from "~/common";
import { netPublish, netSessionLink } from "~/common/net";
import { Flex, Input, Text } from "~/component";
import { buttonStyle } from "~/component/Button/styles.css";

export const RoomSettingsView: Component = () => {
  const updateRoom = (field: "name" | "bkguri", value: string) => {
    const data = { ...appRooms() };
    if (!data[appSettings().currentRoom]) return;
    data[appSettings().currentRoom][field] = value;
    saveToStorage(rollerRoomsKey, data);
    netPublish(topicRoomInfo, data[appSettings().currentRoom]);
  };

  return (
    <Flex direction="column" gap="large">
      <Input
        label="Room name"
        value={currentRoom()?.name}
        onChange={(e) => updateRoom("name", e.target.value)}
        style={{ width: "20em" }}
      />
      <Input
        label="Room background URI"
        value={currentRoom()?.bkguri}
        onChange={(e) => updateRoom("bkguri", e.target.value)}
        style={{ width: "20em" }}
      />
      <CopyToClipboard
        text={netSessionLink()}
        options={{ debug: true }}
        onCopy={() => {
          toast("Session link copied to clipboard");
        }}
        eventTrigger="onClick"
      >
        <div class={buttonStyle({ variant: "ghost" })} title="Copy room link">
          <FaSolidShareNodes />
          <Text>Share link </Text>
        </div>
      </CopyToClipboard>
    </Flex>
  );
};
