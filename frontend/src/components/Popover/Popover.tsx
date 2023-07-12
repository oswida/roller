import { Popover as Pop } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { For, JSX, ParentComponent, Show } from "solid-js";
import { buttonStyle } from "../Button/styles.css";
import {
  popoverCloseButtonStyle,
  popoverContentStyle,
  popoverHeaderStyle,
  popoverTriggerStyle,
} from "./styles.css";
import { Text } from "../Text";
import { Flex } from "../Flex";

type Props = {
  title?: string;
  trigger: any;
  open?: () => boolean;
  onOpenChange?: (value: boolean) => void;
  modal?: boolean;
  headerActions?: JSX.Element;
};

export const Popover: ParentComponent<Props> = ({
  children,
  title,
  trigger,
  open,
  onOpenChange,
  modal,
  headerActions,
}) => {
  return (
    <Pop.Root
      open={open ? open() : undefined}
      onOpenChange={onOpenChange}
      modal={modal}
    >
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
            <Flex gap="medium">
              <Show when={headerActions}>{headerActions}</Show>
              <Pop.CloseButton class={popoverCloseButtonStyle}>
                <FaSolidXmark />
              </Pop.CloseButton>
            </Flex>
          </div>
          <Pop.Description>{children}</Pop.Description>
        </Pop.Content>
      </Pop.Portal>
    </Pop.Root>
  );
};
