import { TextField } from "@kobalte/core";
import { Component, ComponentProps, Show, splitProps } from "solid-js";
import { inputFieldStyle, inputRootStyle } from "./styles.css";
import { Flex } from "../Flex";
import { Text } from "../Text";

type Props = {
  label?: string;
  tooltip?: string;
  placeholder?: string;
};

export const InputArea: Component<Props & ComponentProps<"textarea">> = (
  props
) => {
  const [local, rest] = splitProps(props, ["label", "tooltip", "placeholder"]);
  return (
    <TextField.Root class={inputRootStyle}>
      <Flex direction="column" gap="small">
        <TextField.Label>
          <Text fontSize="smaller" colorSchema="secondary">
            <Show when={local.label}>{local.label}</Show>
          </Text>
        </TextField.Label>
        <TextField.TextArea
          class={inputFieldStyle}
          title={local.tooltip}
          placeholder={local.placeholder}
          {...rest}
        />
      </Flex>
    </TextField.Root>
  );
};
