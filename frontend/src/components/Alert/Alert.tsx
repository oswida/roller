import { JSXElement, ParentComponent } from "solid-js";
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

type Props = {
  onOpenChange: (value: boolean) => void;
  open: () => boolean;
  label: string;
  trigger?: JSXElement;
  triggerHint?: string;
};

export const AlertTrigger: ParentComponent<
  AlertDialog.AlertDialogTriggerProps
> = ({ children, title, ...rest }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <AlertDialog.Trigger class={dialogTriggerStyle({})} {...rest}>
          {children}{" "}
        </AlertDialog.Trigger>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};

export const AlertContent: ParentComponent<
  AlertDialog.AlertDialogContentProps
> = ({ title, children, ...rest }) => {
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay class={dialogOverlayStyle} />
      <div class={dialogPositionerStyle}>
        <AlertDialog.Content class={dialogRootStyle} {...rest}>
          <div class={dialogHeaderStyle}>
            <AlertDialog.Title class={dialogTitleStyle}>
              {title}
            </AlertDialog.Title>
            <AlertDialog.CloseButton class={dialogCloseButtonStyle}>
              <FaSolidXmark />
            </AlertDialog.CloseButton>
          </div>
          <AlertDialog.Description class={dialogContentStyle}>
            {children}
          </AlertDialog.Description>
        </AlertDialog.Content>
      </div>
    </AlertDialog.Portal>
  );
};

export const Alert = AlertDialog.Root;
