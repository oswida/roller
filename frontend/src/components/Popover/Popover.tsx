import { Popover as Pop } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { JSX, ParentComponent, Show, splitProps } from "solid-js";
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

export const PopoverTrigger: ParentComponent<Pop.PopoverTriggerProps> = (
  props
) => {
  const [local, rest] = splitProps(props, ["children", "title"]);

  return (
    <Tooltip>
      <TooltipTrigger>
        <Pop.Trigger class={popoverTriggerStyle} {...rest}>
          {local.children}
        </Pop.Trigger>
      </TooltipTrigger>
      <TooltipContent>{local.title}</TooltipContent>
    </Tooltip>
  );
};

type Props = {
  headerActions?: JSX.Element;
};

export const PopoverContent: ParentComponent<
  Pop.PopoverContentProps & Props
> = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "title",
    "headerActions",
  ]);
  return (
    <Pop.Portal>
      <Pop.Content class={popoverContentStyle}>
        <Pop.Arrow />
        <div class={popoverHeaderStyle}>
          <Text>
            <b>{local.title}</b>
          </Text>
          <Flex gap="medium">
            <Show when={local.headerActions}>{local.headerActions}</Show>
            <Pop.CloseButton class={popoverCloseButtonStyle}>
              <FaSolidXmark />
            </Pop.CloseButton>
          </Flex>
        </div>
        <Pop.Description {...rest}>{local.children}</Pop.Description>
      </Pop.Content>
    </Pop.Portal>
  );
};
