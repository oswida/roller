import { Popover as Pop } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { JSX, ParentComponent, Show } from "solid-js";
import {
  popoverCloseButtonStyle,
  popoverContentStyle,
  popoverHeaderStyle,
  popoverTriggerStyle,
} from "./styles.css";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

export const Popover = Pop.Root;

export const PopoverTrigger: ParentComponent<Pop.PopoverTriggerProps> = ({
  children,
  title,
  ...rest
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Pop.Trigger class={popoverTriggerStyle} {...rest}>
          {children}
        </Pop.Trigger>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};

type Props = {
  headerActions?: JSX.Element;
};

export const PopoverContent: ParentComponent<
  Pop.PopoverContentProps & Props
> = ({ children, title, headerActions, ...rest }) => {
  return (
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
  );
};
