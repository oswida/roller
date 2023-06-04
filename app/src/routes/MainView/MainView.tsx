import { Show, createEffect } from "solid-js";
import { csPanelVisible, currentRoom, netLoadRolls } from "~/common";
import { RollPanel } from "../RollPanel";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";
import { CsPanel } from "../CsPanel";
import { Flex } from "~/component";

export const MainView = () => {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  createEffect(() => {
    document.addEventListener('visibilitychange', function (ev) {
      let state = document.visibilityState;
      const room = currentRoom();
      if (!room) return;
      if (state === "visible")
        netLoadRolls(room.id);
    });
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar ref={(e: any) => (barRef = e)} />
      <Flex style={{ width: "100vw" }}>
        <RollPanel visible={() => true} />
        <Show when={csPanelVisible()}>
          <CsPanel />
        </Show>
      </Flex>
    </div>
  );
};
