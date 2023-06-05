import { Popover as Pop } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { ParentComponent } from "solid-js";
import { buttonStyle } from "../Button/styles.css";
import {
  popoverContentStyle,
  popoverHeaderStyle,
  popoverTriggerStyle,
} from "./styles.css";
import { Text } from "~/component";

type Props = {
  title?: string;
  trigger: any;
  open?: () => boolean;
  onOpenChange?: (value: boolean) => void;
  modal?: boolean;
};

export const Popover: ParentComponent<Props> = ({
  children,
  title,
  trigger,
  open,
  onOpenChange,
  modal,
}) => {
  return (
    <Pop.Root open={open ? open() : undefined} onOpenChange={onOpenChange} modal={modal}>
      <Pop.Trigger class={popoverTriggerStyle} title={title}>
        {trigger}
      </Pop.Trigger>
      <Pop.Portal>
        <Pop.Content class={popoverContentStyle}>
          <Pop.Arrow />
          <div class={popoverHeaderStyle}>
            <Text>
              <b>{title}</b>
            </Text>
            <Pop.CloseButton class={buttonStyle({ variant: "icon" })}>
              <FaSolidXmark />
            </Pop.CloseButton>
          </div>
          <Pop.Description>{children}</Pop.Description>
        </Pop.Content>
      </Pop.Portal>
    </Pop.Root>
  );
};
