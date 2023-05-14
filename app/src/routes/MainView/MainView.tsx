import { Show, createEffect, onCleanup } from "solid-js";
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
import { FaSolidCircleInfo } from "solid-icons/fa";


export const MainView = () => {
  let mainRef: HTMLDivElement;
  let selRef: HTMLDivElement;
  let barRef: HTMLDivElement;
  let chatRef: HTMLDivElement;
  let rollRef: HTMLDivElement;

  const adjustSize = () => {
    if (!mainRef || !selRef || !barRef || !chatRef || !rollRef) return;
    const delta = barRef.getBoundingClientRect().height + selRef.getBoundingClientRect().height + 60; // 40 - button height
    chatRef.style.height = `calc(100vh - ${delta}px)`;
    rollRef.style.height = `calc(100vh - ${delta}px + 60px)`;
  }

  window.addEventListener("resize", () => adjustSize());
  onCleanup(() => {
    window.removeEventListener("resize", () => adjustSize());
  });

  createEffect(() => {
    if (!mainRef || !selRef || !barRef || !chatRef || !rollRef) return;
    adjustSize();
  });


  createEffect(() => {
    if (netConnectionStatus()) toast("Connected to server", { icon: <FaSolidCircleInfo /> });
    else toast("Disconnected from server", { icon: <FaSolidCircleInfo /> });
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar ref={(e: any) => barRef = e} />
      <Flex>
        <Show when={!appSettings().rightLayout}>
          <ChatView ref={(e: any) => chatRef = e} />
        </Show>
        <RollView ref={(e: any) => rollRef = e} />
        <Show when={appSettings().rightLayout}>
          <ChatView ref={(e: any) => chatRef = e} />
        </Show>
      </Flex>
      <DiceSelector ref={(e: any) => selRef = e} />
    </div>
  );
};
