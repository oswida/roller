import { Dialog as Dlg } from "@kobalte/core";
import { ParentComponent } from "solid-js";
import {
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOverlayStyle,
  dialogPositionerStyle,
  dialogRootStyle,
} from "./styles.css";
import { FaSolidXmark } from "solid-icons/fa";
import { buttonStyle } from "../Button/styles.css";
import { Text } from "~/component";

type Props = {
  title: string;
  trigger: any;
};

export const Dialog: ParentComponent<Props> = ({
  title,
  trigger,
  children,
}) => {
  return (
    <Dlg.Root>
      <Dlg.Trigger class={buttonStyle({ variant: "icon" })}>
        {trigger}
      </Dlg.Trigger>
      <Dlg.Portal>
        <Dlg.Overlay class={dialogOverlayStyle} />
        <div class={dialogPositionerStyle}>
          <Dlg.Content class={dialogRootStyle}>
            <div class={dialogHeaderStyle}>
              <Text>
                <b>{title}</b>
              </Text>
              <Dlg.CloseButton class={buttonStyle({ variant: "icon" })}>
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
