import { Show, createEffect } from "solid-js";
import {
  appSettings,
  netConnectionStatus,
} from "~/common";
import { Flex } from "../../component/Flex";
import { ChatView } from "../../view/ChatView";
import { DiceSelector } from "../../view/DiceSelector";
import { RollView } from "../../view/RollView";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";
import toast from "solid-toast";

export const MainView = () => {
  let mainRef: HTMLDivElement;

  createEffect(() => {
    if (netConnectionStatus()) toast("Connected to server");
    else toast("Disconnected from server");
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
