import { Match, Switch } from "solid-js";
import { rightLayout } from "~/common";
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
        <Switch>
          <Match when={rightLayout()}>
            <RollView />
            <ChatView />
          </Match>
          <Match when={!rightLayout()}>
            <ChatView />
            <RollView />
          </Match>
        </Switch>
      </Flex>
      <DiceSelector />
    </div>
  );
};
