import { TextField } from "@kobalte/core";
import { Component, ComponentProps } from "solid-js";
import { inputFieldStyle, inputRootStyle } from "./styles.css";

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
      <TextField.Label>{label}</TextField.Label>
      <TextField.Input
        class={inputFieldStyle}
        title={tooltip}
        placeholder={placeholder}
        {...rest}
      />{" "}
      {/* or <TextField.TextArea /> */}
    </TextField.Root>
  );
};
