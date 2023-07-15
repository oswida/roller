import { Dialog as Dlg } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { ComponentProps, ParentComponent, splitProps } from "solid-js";
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

export const DialogTrigger: ParentComponent<Dlg.DialogTriggerProps> = ({
  children,
  ...rest
}) => {
  return (
    <Dlg.Trigger class={dialogTriggerStyle({})} {...rest}>
      {children}
    </Dlg.Trigger>
  );
};

type ContentProps = Dlg.DialogContentProps;

export const DialogContent: ParentComponent<ContentProps> = ({
  children,
  title,
  ...rest
}) => {
  return (
    <Dlg.Portal>
      <Dlg.Overlay class={dialogOverlayStyle} />
      <div class={dialogPositionerStyle}>
        <Dlg.Content class={dialogRootStyle} {...rest}>
          <div class={dialogHeaderStyle}>
            <Dlg.Title class={dialogTitleStyle}>{title}</Dlg.Title>
            <Dlg.CloseButton class={dialogCloseButtonStyle}>
              <FaSolidXmark />
            </Dlg.CloseButton>
          </div>
          <Dlg.Description class={dialogContentStyle}>
            {children}
          </Dlg.Description>
        </Dlg.Content>
      </div>
    </Dlg.Portal>
  );
};

export const Dialog = Dlg.Root;
