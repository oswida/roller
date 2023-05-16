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
  open?: () => boolean;
  onOpenChange?: (value: boolean) => void
};

export const Dialog: ParentComponent<Props> = ({
  dialogTitle,
  trigger,
  children,
  open,
  onOpenChange
}) => {
  return (
    <Dlg.Root open={open ? open() : undefined} onOpenChange={onOpenChange}>
      <Dlg.Trigger class={buttonStyle({})}>
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
