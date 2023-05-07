import { TextField } from "@kobalte/core";
import { Component, ComponentProps } from "solid-js";
import { inputFieldStyle, inputRootStyle } from "./styles.css";
import { Flex } from "../Flex";
import { Text } from "../Text";

type Props = {
  label?: string;
  tooltip?: string;
  placeholder?: string;
};

export const Input: Component<Props & ComponentProps<"input">> = ({
  label,
  tooltip,
  placeholder,
  ...rest
}) => {
  return (
    <TextField.Root class={inputRootStyle}>
      <Flex direction="column" gap="small">
        <TextField.Label>
          <Text fontSize="smaller" colorSchema="secondary">
            {label}
          </Text>
        </TextField.Label>
        <TextField.Input
          class={inputFieldStyle}
          title={tooltip}
          placeholder={placeholder}
          {...rest}
        />
      </Flex>
    </TextField.Root>
  );
};
