import { Dialog as Dlg } from "@kobalte/core";
import { ParentComponent } from "solid-js";
import {
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOverlayStyle,
  dialogPositionerStyle,
  dialogRootStyle,
  dialogTitleStyle,
} from "./styles.css";
import { FaSolidXmark } from "solid-icons/fa";
import { buttonStyle } from "../Button/styles.css";
import { Text } from "~/component";

type Props = {
  dialogTitle: () => string;
  trigger?: any;
  triggerStyle?: any;
  triggerHint?: string;
  open?: () => boolean;
  onOpenChange?: (value: boolean) => void;
  modal?: boolean;
};

export const Dialog: ParentComponent<Props> = ({
  dialogTitle,
  trigger,
  children,
  open,
  onOpenChange,
  triggerStyle,
  triggerHint,
  modal
}) => {
  return (
    <Dlg.Root open={open ? open() : undefined}
      onOpenChange={onOpenChange} modal={modal}>
      <Dlg.Trigger class={buttonStyle({})} style={triggerStyle} title={triggerHint}>
        {trigger}
      </Dlg.Trigger>
      <Dlg.Portal>
        <Dlg.Overlay class={dialogOverlayStyle} />
        <div class={dialogPositionerStyle}>
          <Dlg.Content class={dialogRootStyle}>
            <div class={dialogHeaderStyle}>
              <Dlg.Title class={dialogTitleStyle}>{dialogTitle()}</Dlg.Title>
              <Dlg.CloseButton class={buttonStyle({})}>
                <FaSolidXmark />
              </Dlg.CloseButton>
            </div>
            <Dlg.Description class={dialogContentStyle}>
              {children}
            </Dlg.Description>
          </Dlg.Content>
        </div>
      </Dlg.Portal>
    </Dlg.Root>
  );
};
