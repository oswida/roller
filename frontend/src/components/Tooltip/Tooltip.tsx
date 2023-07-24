import { Tooltip as Ttip } from "@kobalte/core";
import { ParentComponent, splitProps } from "solid-js";
import { tooltipRootStyle, tooltipTriggerStyle } from "./styles.css";

export const Tooltip = Ttip.Root;

export const TooltipTrigger: ParentComponent<Ttip.TooltipTriggerProps> = (
  props
) => {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <Ttip.Trigger class={tooltipTriggerStyle} {...rest}>
      {local.children}
    </Ttip.Trigger>
  );
};

export const TooltipContent: ParentComponent<Ttip.TooltipContentProps> = (
  props
) => {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <Ttip.Portal>
      <Ttip.Content class={tooltipRootStyle} {...rest}>
        <Ttip.Arrow />
        {local.children}
      </Ttip.Content>
    </Ttip.Portal>
  );
};
