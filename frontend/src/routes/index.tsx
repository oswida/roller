import { Show, onCleanup, onMount } from "solid-js";
import { Toaster } from "solid-toast";
import { centLoadRolls, csPanelVisible, currentRoom } from "~/common";
import { Flex } from "~/components";
import { CsPanel, RollPanel, TopBar } from "~/views";
import { appStyle, mainStyle } from "./styles.css";

export default function Home() {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  const visibilityHandler = () => {
    let state = document.visibilityState;
    const room = currentRoom();
    if (!room) return;
    if (state === "visible") centLoadRolls(room.id);
  };

  onMount(() => {
    document.addEventListener("visibilitychange", visibilityHandler);
  });

  onCleanup(() => {
    document.removeEventListener("visibilitychange", visibilityHandler);
  });

  return (
    <main class={appStyle}>
      <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
        <TopBar ref={(e: any) => (barRef = e)} />
        <Flex style={{ width: "100vw" }}>
          <RollPanel visible={() => true} />
          <Show when={csPanelVisible()}>
            <CsPanel />
          </Show>
        </Flex>
        <Toaster />
      </div>
    </main>
  );
}
