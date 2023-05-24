import { FaSolidCircleInfo } from "solid-icons/fa";
import { Show, createEffect } from "solid-js";
import toast from "solid-toast";
import { mainViewPanel, netConnectionStatus } from "~/common";
import { BoardPanel } from "../BoardPanel";
import { CsPanel } from "../CsPanel";
import { RollPanel } from "../RollPanel";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";

export const MainView = () => {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  createEffect(() => {
    if (netConnectionStatus())
      toast("Connected to server", {
        icon: <FaSolidCircleInfo />,
        position: "bottom-right",
      });
    else
      toast("Disconnected from server", {
        icon: <FaSolidCircleInfo />,
        position: "bottom-right",
      });
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar ref={(e: any) => (barRef = e)} />
      <Show when={mainViewPanel() == "cs"}>
        <CsPanel />
      </Show>
      <Show when={mainViewPanel() == "board"}>
        <BoardPanel />
      </Show>
      <RollPanel visible={() => mainViewPanel() == "dice"} />
    </div>
  );
};
