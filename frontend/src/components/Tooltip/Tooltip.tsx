import { Tooltip as Ttip } from "@kobalte/core";
import { tooltipRootStyle, tooltipTriggerStyle } from "./styles.css";
import { ParentComponent, JSXElement } from "solid-js";

type Props = {
  trigger?: JSXElement;
};

export const Tooltip: ParentComponent<Props> = ({ children, trigger }) => {
  return (
    <Ttip.Root>
      <Ttip.Trigger class={tooltipTriggerStyle}>{trigger}</Ttip.Trigger>
      <Ttip.Portal>
        <Ttip.Content class={tooltipRootStyle}>
          <Ttip.Arrow />
          {children}
        </Ttip.Content>
      </Ttip.Portal>
    </Ttip.Root>
  );
};
