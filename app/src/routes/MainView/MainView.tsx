import { Match, Show, Switch } from "solid-js";
import { appSettings } from "~/common";
import { Flex } from "../../component/Flex";
import { ChatView } from "../../view/ChatView";
import { DiceSelector } from "../../view/DiceSelector";
import { RollView } from "../../view/RollView";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";

export const MainView = () => {
  let mainRef: HTMLDivElement;

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
