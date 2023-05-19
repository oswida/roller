import { Show, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import {
  appSettings,
  currentRoom,
  mainViewPanel,
  netConnectionStatus,
} from "~/common";
import { Flex } from "../../component/Flex";
import { ChatView } from "../../view/ChatView";
import { DiceSelector } from "../../view/DiceSelector";
import { RollView } from "../../view/RollView";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";
import toast from "solid-toast";
import { FaSolidCircleInfo } from "solid-icons/fa";
import { RollPanel } from "../RollPanel";
import { CsPanel } from "../CsPanel";

export const MainView = () => {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  createEffect(() => {
    if (netConnectionStatus())
      toast("Connected to server", { icon: <FaSolidCircleInfo /> });
    else toast("Disconnected from server", { icon: <FaSolidCircleInfo /> });
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar ref={(e: any) => (barRef = e)} />
      <Show when={mainViewPanel() == "dice"}>
        <RollPanel />
      </Show>
      <Show when={mainViewPanel() == "cs"}>
        <CsPanel />
      </Show>
    </div>
  );
};
