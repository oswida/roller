import { FaSolidCircleInfo } from "solid-icons/fa";
import { Show, createEffect } from "solid-js";
import toast from "solid-toast";
import { currentRoom, mainViewPanel, netConnectionStatus, netLoadCs, netLoadRolls } from "~/common";
import { CsPanel } from "../CsPanel";
import { RollPanel } from "../RollPanel";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";

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
      <Show when={mainViewPanel() == "cs"}>
        <CsPanel />
      </Show>
      <RollPanel visible={() => mainViewPanel() == "dice"} />
    </div>
  );
};
