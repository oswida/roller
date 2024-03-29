import {
  Component,
  ComponentProps,
  JSX,
  ParentComponent,
  ParentProps,
} from "solid-js";
import { Button as Btn } from "@kobalte/core";
import { buttonStyle } from "./styles.css";

type Props = {
  variant?: "ghost" | "flat" | "icon" | "bigicon";
};

export const Button: ParentComponent<Props & ComponentProps<"button">> = ({
  children,
  variant,
  disabled,
  ...rest
}) => {
  return (
    <Btn.Root
      class={buttonStyle({ variant: variant })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Btn.Root>
  );
};
