import { Component, For, createMemo } from "solid-js";
import { Button, Flex, Text } from "~/component";
import { chatListStyle, chatRootStyle } from "./styles.css";
import { ChatItem } from "./ChatItem";
import { appRooms, appSettings, rollerRoomsKey, saveToStorage } from "~/common";
import { FaSolidTrash } from "solid-icons/fa";

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
  };

  return (
    <div class={chatRootStyle}>
      <Flex gap="large" style={{ "justify-content": "space-between" }}>
        <Text>Rolls</Text>
        <Button onClick={clearRolls}>
          <FaSolidTrash />
        </Button>
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
