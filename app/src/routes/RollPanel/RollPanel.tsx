import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";
import { TOPBAR_HEIGHT, appSettings } from "~/common";
import { Flex } from "~/component";
import { ChatView } from "~/view/ChatView";
import { DiceSelector } from "~/view/DiceSelector";
import { RollView } from "~/view/RollView";

type Props = {
  visible: () => boolean;
}

export const RollPanel: Component<Props> = ({ visible }) => {
  let selRef: HTMLDivElement;
  let chatRef: HTMLDivElement | undefined;
  let csRef: HTMLDivElement | undefined;
  let rollRef: HTMLDivElement;


  const [rect, setRect] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const adjustSize = () => {
    if (!selRef || !rollRef) {
      return;
    }
    const delta = TOPBAR_HEIGHT + selRef.getBoundingClientRect().height + 60; // 40 - button height
    if (chatRef) chatRef.style.height = `calc(100vh - ${delta}px)`;
    if (csRef) csRef.style.height = `calc(100vh - ${delta}px)`;
    rollRef.style.height = `calc(100vh - ${delta}px + 60px)`;
  };

  const handler = (event: Event) => {
    setRect({ height: window.innerHeight, width: window.innerWidth });
    adjustSize();
  };

  onMount(() => {
    window.addEventListener("resize", handler);
    adjustSize();
  });

  onCleanup(() => {
    window.removeEventListener("resize", handler);
  });

  return (
    <div style={{ visibility: visible() ? "visible" : "hidden" }}>
      <Flex>
        <Show when={!appSettings().rightLayout}>
          <ChatView
            chatRef={(e) => (chatRef = e)}
            csRef={(e) => (csRef = e)}
            adjustSize={adjustSize}
          />
        </Show>
        <RollView ref={(e: any) => (rollRef = e)} />
        <Show when={appSettings().rightLayout}>
          <ChatView
            chatRef={(e) => (chatRef = e)}
            csRef={(e) => (csRef = e)}
            adjustSize={adjustSize}
          />
        </Show>
      </Flex>
      <DiceSelector ref={(e: any) => (selRef = e)} />
    </div>
  );
};
