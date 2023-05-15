import { Show, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import {
  appSettings,
  currentRoom,
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
  let chatRef: HTMLDivElement | undefined;
  let csRef: HTMLDivElement | undefined;
  let rollRef: HTMLDivElement;

  const [rect, setRect] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handler = (event: Event) => {
    setRect({ height: window.innerHeight, width: window.innerWidth });
    adjustSize();
  };

  onMount(() => {
    window.addEventListener('resize', handler);
    adjustSize();
  });

  onCleanup(() => {
    window.removeEventListener('resize', handler);
  })

  const adjustSize = () => {
    if (!mainRef || !selRef || !barRef || !rollRef) {
      console.log("main", mainRef, "sel", selRef, "bar", barRef);
      return;
    }
    const delta = barRef.getBoundingClientRect().height + selRef.getBoundingClientRect().height + 60; // 40 - button height
    if (chatRef) chatRef.style.height = `calc(100vh - ${delta}px)`;
    if (csRef) csRef.style.height = `calc(100vh - ${delta}px)`;
    rollRef.style.height = `calc(100vh - ${delta}px + 60px)`;
  }


  createEffect(() => {
    if (netConnectionStatus()) toast("Connected to server", { icon: <FaSolidCircleInfo /> });
    else toast("Disconnected from server", { icon: <FaSolidCircleInfo /> });
  });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar ref={(e: any) => barRef = e} />
      <Flex>
        <Show when={!appSettings().rightLayout}>
          <ChatView chatRef={(e) => chatRef = e} csRef={(e) => csRef = e} adjustSize={adjustSize} />
        </Show>
        <RollView ref={(e: any) => rollRef = e} />
        <Show when={appSettings().rightLayout}>
          <ChatView chatRef={(e) => chatRef = e} csRef={(e) => csRef = e} adjustSize={adjustSize} />
        </Show>
      </Flex>
      <DiceSelector ref={(e: any) => selRef = e} />
    </div>
  );
};
