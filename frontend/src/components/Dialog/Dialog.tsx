import { Dialog as Dlg } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { ComponentProps, ParentComponent } from "solid-js";
import { buttonStyle } from "../Button/styles.css";
import {
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOverlayStyle,
  dialogPositionerStyle,
  dialogRootStyle,
  dialogTitleStyle,
} from "./styles.css";

type Props = {
  dialogTitle: () => string;
  trigger?: any;
  triggerStyle?: any;
  triggerHint?: string;
  open?: () => boolean;
  onOpenChange?: (value: boolean) => void;
  modal?: boolean;
};

export const Dialog: ParentComponent<Props & ComponentProps<"div">> = ({
  dialogTitle,
  trigger,
  children,
  open,
  onOpenChange,
  triggerStyle,
  triggerHint,
  modal,
  ...rest
}) => {
  return (
    <Dlg.Root
      open={open ? open() : undefined}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <Dlg.Trigger
        class={buttonStyle({})}
        style={triggerStyle}
        title={triggerHint}
      >
        {trigger}
      </Dlg.Trigger>
      <Dlg.Portal>
        <Dlg.Overlay class={dialogOverlayStyle} />
        <div class={dialogPositionerStyle}>
          <Dlg.Content class={dialogRootStyle} {...rest}>
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
