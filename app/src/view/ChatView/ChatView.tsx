import {
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidTrash,
} from "solid-icons/fa";
import { Component, For, Show, createMemo } from "solid-js";
import {
  RollInfo,
  appRooms,
  appSettings,
  currentRoom,
  exportData,
  importData,
  netPublish,
  netUpdateRoom,
  prettyToday,
  rollerRoomsKey,
  saveToStorage,
  topicRoomInfo,
} from "~/common";
import { Button, Flex, Text } from "~/component";
import { ChatItem } from "./ChatItem";
import { chatListStyle, chatRootStyle } from "./styles.css";
import toast from "solid-toast";

export const ChatView: Component = () => {
  const items = createMemo(() => {
    const data = appRooms();
    const settings = appSettings();
    if (!data || settings.currentRoom === "" || !data[settings.currentRoom])
      return [];
    return data[settings.currentRoom].rolls;
  });

  const clearRolls = () => {
    const data = { ...appRooms() };
    if (appSettings().currentRoom == "") return;
    data[appSettings().currentRoom].rolls = [];
    saveToStorage(rollerRoomsKey, data);
    toast("Rolls cleared");
    netUpdateRoom(data[appSettings().currentRoom]);
  };

  const importRolls = () => {
    importData((data: any) => {
      const room = currentRoom();
      if (!room) return;
      const newState = { ...appRooms() };
      newState[room.id].rolls = data as RollInfo[];
      saveToStorage(rollerRoomsKey, newState);
      netPublish(topicRoomInfo, newState[room.id]);
      toast("Rolls imported");
    });
  };

  const exportRolls = () => {
    const room = currentRoom();
    if (!room) return;
    const filename = `rolls-${prettyToday()}.json`;
    exportData(room.rolls, filename);
    toast("Rolls exported");
  };

  return (
    <div class={chatRootStyle}>
      <Flex gap="large" style={{ "justify-content": "space-between" }}>
        <Text>Rolls</Text>
        <Show when={appSettings().userIdent == currentRoom()?.owner}>
          <Flex>
            <Button title="Import rolls" onClick={importRolls}>
              <FaSolidFileImport />
            </Button>
            <Button title="Export rolls" onClick={exportRolls}>
              <FaSolidFileExport />
            </Button>
            <Button title="Clear rolls" onClick={clearRolls}>
              <FaSolidTrash />
            </Button>
          </Flex>
        </Show>
      </Flex>
      <div class={chatListStyle}>
        <For each={items()}>
          {(it) => (
            <Flex direction="column">
              <ChatItem item={it} />
            </Flex>
          )}
        </For>
      </div>
    </div>
  );
};
