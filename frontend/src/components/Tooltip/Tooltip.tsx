import { Tooltip as Ttip } from "@kobalte/core";
import { ParentComponent, Show } from "solid-js";
import { parseMarkdown } from "~/common";
import { tooltipRootStyle, tooltipTriggerStyle } from "./styles.css";

type Props = {
  text: string;
  markdown?: boolean;
};

// trigger as children
export const Tooltip: ParentComponent<Props> = ({
  children,
  text,
  markdown,
}) => {
  return (
    <Ttip.Root>
      <Ttip.Trigger class={tooltipTriggerStyle} style={{ color: "inherit" }}>
        {children}
      </Ttip.Trigger>
      <Ttip.Portal>
        <Ttip.Content class={tooltipRootStyle}>
          <Ttip.Arrow />
          <Show when={!markdown}>{text}</Show>
          <Show when={markdown}>
            <div innerHTML={parseMarkdown(text)}></div>
          </Show>
        </Ttip.Content>
      </Ttip.Portal>
    </Ttip.Root>
  );
};
