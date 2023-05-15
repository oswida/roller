import { Component, Show, createEffect, createSignal, onMount } from "solid-js";
import {
  RefProps,
} from "~/common";
import { chatRootStyle } from "./styles.css";
import { RollsContent } from "./RollsContent";
import { CsContent } from "./CsContent";

type Props = {
  chatRef: (e: any) => void;
  csRef: (e: any) => void;
  adjustSize: () => void;
}

export const ChatView: Component<Props> = ({ chatRef, csRef, adjustSize }) => {
  const [activeTab, setActiveTab] = createSignal("rolls");


  return (
    <div class={chatRootStyle}>
      <Show when={activeTab() == "rolls"}>
        <RollsContent ref={chatRef} changeTab={setActiveTab} adjustSize={adjustSize} />
      </Show>
      <Show when={activeTab() == "cs"}>
        <CsContent ref={csRef} changeTab={setActiveTab} adjustSize={adjustSize} />
      </Show>
    </div>
  );
};
