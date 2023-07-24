import { Component, Show } from "solid-js";
import { chatRootStyle } from "./styles.css";
import { RollsContent } from "./RollsContent";
import { DefsContent } from "./DefsContent";
import { chatViewTab } from "~/common";

type Props = {
  chatRef: (e: any) => void;
  csRef: (e: any) => void;
  adjustSize: () => void;
};

export const ChatView: Component<Props> = (props) => {
  return (
    <div class={chatRootStyle}>
      <Show when={chatViewTab() == "rolls"}>
        <RollsContent ref={props.chatRef} adjustSize={props.adjustSize} />
      </Show>
      <Show when={chatViewTab() == "cs"}>
        <DefsContent ref={props.csRef} adjustSize={props.adjustSize} />
      </Show>
    </div>
  );
};
