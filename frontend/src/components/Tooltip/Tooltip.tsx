import { Tooltip as Ttip } from "@kobalte/core";
import { ParentComponent } from "solid-js";
import { tooltipRootStyle, tooltipTriggerStyle } from "./styles.css";

export const Tooltip = Ttip.Root;

export const TooltipTrigger: ParentComponent<Ttip.TooltipTriggerProps> = ({
  children,
  ...rest
}) => {
  return (
    <Ttip.Trigger class={tooltipTriggerStyle} {...rest}>
      {children}
    </Ttip.Trigger>
  );
};

export const TooltipContent: ParentComponent<Ttip.TooltipContentProps> = ({
  children,
  ...rest
}) => {
  return (
    <Ttip.Portal>
      <Ttip.Content class={tooltipRootStyle} {...rest}>
        <Ttip.Arrow />
        {children}
      </Ttip.Content>
    </Ttip.Portal>
  );
};
