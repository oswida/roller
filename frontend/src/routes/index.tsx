import { Show, onCleanup, onMount } from "solid-js";
import { Toaster } from "solid-toast";
import { centLoadRolls, currentRightPanel, currentRoom } from "~/common";
import { Flex } from "~/components";
import { CsPanel, RollPanel, TopBar } from "~/views";
import { appStyle, mainStyle } from "./styles.css";
import { HdPanel } from "~/views/HdPanel";
import { ifvisible } from "@rosskevin/ifvisible";

export default function Home() {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  const visibilityHandler = () => {
    const room = currentRoom();
    if (!room) return;
    console.log("Loading rolls for ", room.name);
    centLoadRolls(room.id);
  };

  ifvisible.on("wakeup", () => {
    visibilityHandler();
  });

  // onMount(() => {
  //   document.addEventListener("visibilitychange", visibilityHandler, false);
  // });

  // onCleanup(() => {
  //   document.removeEventListener("visibilitychange", visibilityHandler);
  // });

  return (
    <main class={appStyle}>
      <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
        <TopBar ref={(e: any) => (barRef = e)} />
        <Flex style={{ width: "100vw" }}>
          <RollPanel visible={() => true} />
          <Show when={currentRightPanel() === "cs"}>
            <CsPanel />
          </Show>
          <Show when={currentRightPanel() === "hd"}>
            <HdPanel />
          </Show>
        </Flex>
        <Toaster />
      </div>
    </main>
  );
}
