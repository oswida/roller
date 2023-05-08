import { Show, createEffect } from "solid-js";
import {
  appSettings,
  currentRoom,
  mqttClient,
  netPublish,
  topicRoomUpdateRequest,
} from "~/common";
import { Flex } from "../../component/Flex";
import { ChatView } from "../../view/ChatView";
import { DiceSelector } from "../../view/DiceSelector";
import { RollView } from "../../view/RollView";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";

export const MainView = () => {
  let mainRef: HTMLDivElement;

  createEffect(() => {
    const room = currentRoom();
    if (!room) return;
    if (room.owner == "") {
      netPublish(topicRoomUpdateRequest, room.id);
    }
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar />
      <Flex>
        <Show when={!appSettings().rightLayout}>
          <ChatView />
        </Show>
        <RollView />
        <Show when={appSettings().rightLayout}>
          <ChatView />
        </Show>
      </Flex>
      <DiceSelector />
    </div>
  );
};
