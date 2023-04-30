import { Component, For, createMemo } from "solid-js";
import { Flex, Text } from "~/component";
import { chatListStyle, chatRootStyle } from "./styles.css";
import { ChatItem } from "./ChatItem";
import { appRooms, appSettings } from "~/common";

export const ChatView: Component = () => {
  const items = createMemo(() => {
    const data = appRooms();
    const settings = appSettings();
    if (!data || settings.currentRoom === "") return [];
    return data[settings.currentRoom].rolls;
  });

  return (
    <div class={chatRootStyle}>
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
