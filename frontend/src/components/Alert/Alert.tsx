import { JSXElement, ParentComponent, splitProps } from "solid-js";
import { AlertDialog } from "@kobalte/core";
import {
  dialogCloseButtonStyle,
  dialogPositionerStyle,
  dialogRootStyle,
  dialogTitleStyle,
  dialogTriggerStyle,
} from "../Dialog/styles.css";
import { dialogHeaderStyle } from "../Dialog/styles.css";
import { dialogOverlayStyle } from "../Dialog/styles.css";
import { dialogContentStyle } from "../Dialog/styles.css";
import { FaSolidXmark } from "solid-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

export const AlertTrigger: ParentComponent<
  AlertDialog.AlertDialogTriggerProps
> = (props) => {
  const [local, rest] = splitProps(props, ["children", "title"]);
  return (
    <Tooltip>
      <TooltipTrigger>
        <AlertDialog.Trigger class={dialogTriggerStyle({})} {...rest}>
          {local.children}
        </AlertDialog.Trigger>
      </TooltipTrigger>
      <TooltipContent>{local.title}</TooltipContent>
    </Tooltip>
  );
};

export const AlertContent: ParentComponent<
  AlertDialog.AlertDialogContentProps
> = (props) => {
  const [local, rest] = splitProps(props, ["title", "children"]);
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay class={dialogOverlayStyle} />
      <div class={dialogPositionerStyle}>
        <AlertDialog.Content class={dialogRootStyle} {...rest}>
          <div class={dialogHeaderStyle}>
            <AlertDialog.Title class={dialogTitleStyle}>
              {props.title}
            </AlertDialog.Title>
            <AlertDialog.CloseButton class={dialogCloseButtonStyle}>
              <FaSolidXmark />
            </AlertDialog.CloseButton>
          </div>
          <AlertDialog.Description class={dialogContentStyle}>
            {props.children}
          </AlertDialog.Description>
        </AlertDialog.Content>
      </div>
    </AlertDialog.Portal>
  );
};

export const Alert = AlertDialog.Root;
