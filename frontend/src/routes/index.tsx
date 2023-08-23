import { Show, onCleanup, onMount } from "solid-js";
import { Toaster } from "solid-toast";
import { netLoadRolls, currentRightPanel, currentRoom, loggedUser } from "~/common";
import { Flex } from "~/components";
import { CsPanel, RollPanel, TopBar } from "~/views";
import { appStyle, mainStyle } from "./styles.css";
import { ifvisible } from "@rosskevin/ifvisible";
import { useNavigate } from "solid-start";

export default function Home() {
  let mainRef: HTMLDivElement;
  let barRef: HTMLDivElement;

  const visibilityHandler = () => {
    const room = currentRoom();
    if (!room) return;
    netLoadRolls(room.id);
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

        </Flex>
        <Toaster />
      </div>
    </main>
  );
}
