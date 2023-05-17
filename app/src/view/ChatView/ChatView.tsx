import { Component, Show, createSignal } from "solid-js";
import { chatRootStyle } from "./styles.css";
import { RollsContent } from "./RollsContent";
import { DefsContent } from "./DefsContent";
import { chatViewTab } from "~/common";

type Props = {
  chatRef: (e: any) => void;
  csRef: (e: any) => void;
  adjustSize: () => void;
}

export const ChatView: Component<Props> = ({ chatRef, csRef, adjustSize }) => {

  return (
    <div class={chatRootStyle}>
      <Show when={chatViewTab() == "rolls"}>
        <RollsContent ref={chatRef} adjustSize={adjustSize} />
      </Show>
      <Show when={chatViewTab() == "cs"}>
        <DefsContent ref={csRef} adjustSize={adjustSize} />
      </Show>
    </div>
  );
};
