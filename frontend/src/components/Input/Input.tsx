import { TextField } from "@kobalte/core";
import { Component, ComponentProps, Show, splitProps } from "solid-js";
import { inputFieldStyle, inputLabelStyle, inputRootStyle } from "./styles.css";
import { Flex } from "../Flex";
import { Text } from "../Text";

type Props = {
  label?: string;
  tooltip?: string;
  placeholder?: string;
};

export const Input: Component<Props & ComponentProps<"input">> = (props) => {
  const [local, rest] = splitProps(props, [
    "label",
    "tooltip",
    "placeholder",
  ]);
  return (
    <TextField.Root class={inputRootStyle}>
      <Flex direction="column" gap="small">
        <Show when={local.label}>
          <TextField.Label>
            <div class={inputLabelStyle}>
              <Show when={local.label}>{local.label}</Show>
            </div>
          </TextField.Label>
        </Show>
        <TextField.Input
          class={inputFieldStyle}
          title={local.tooltip}
          placeholder={local.placeholder}
          {...rest}
        />
      </Flex>
    </TextField.Root>
  );
};
