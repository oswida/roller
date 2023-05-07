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
  const updateRoom = (value: string) => {
    const data = { ...appRooms() };
    if (!data[appSettings().currentRoom]) return;
    data[appSettings().currentRoom].name = value;
    saveToStorage(rollerRoomsKey, data);
    netPublish(topicRoomInfo, data[appSettings().currentRoom]);
  };

  return (
    <Flex direction="column" gap="medium">
      <Input
        label="Room name"
        value={currentRoom()?.name}
        onChange={(e) => updateRoom(e.target.value)}
      />
      <Text>ID: {currentRoom()?.id}</Text>
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
