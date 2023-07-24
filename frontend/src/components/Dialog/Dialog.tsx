import { Dialog as Dlg } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { ParentComponent, splitProps } from "solid-js";
import {
  dialogCloseButtonStyle,
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOverlayStyle,
  dialogPositionerStyle,
  dialogRootStyle,
  dialogTitleStyle,
  dialogTriggerStyle,
} from "./styles.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

export const DialogTrigger: ParentComponent<Dlg.DialogTriggerProps> = (
  props
) => {
  const [local, rest] = splitProps(props, ["children", "title"]);
  return (
    <Tooltip>
      <TooltipTrigger>
        <Dlg.Trigger class={dialogTriggerStyle({})} {...rest}>
          {local.children}
        </Dlg.Trigger>
      </TooltipTrigger>
      <TooltipContent>{local.title}</TooltipContent>
    </Tooltip>
  );
};

type ContentProps = Dlg.DialogContentProps;

export const DialogContent: ParentComponent<ContentProps> = (props) => {
  const [local, rest] = splitProps(props, ["children", "title"]);
  return (
    <Dlg.Portal>
      <Dlg.Overlay class={dialogOverlayStyle} />
      <div class={dialogPositionerStyle}>
        <Dlg.Content class={dialogRootStyle} {...rest}>
          <div class={dialogHeaderStyle}>
            <Dlg.Title class={dialogTitleStyle}>{props.title}</Dlg.Title>
            <Dlg.CloseButton class={dialogCloseButtonStyle}>
              <FaSolidXmark />
            </Dlg.CloseButton>
          </div>
          <Dlg.Description class={dialogContentStyle}>
            {props.children}
          </Dlg.Description>
        </Dlg.Content>
      </div>
    </Dlg.Portal>
  );
};

export const Dialog = Dlg.Root;
