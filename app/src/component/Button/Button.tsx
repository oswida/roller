import {
  ComponentProps,
  ParentComponent,
} from "solid-js";
import { Button as Btn } from "@kobalte/core";
import { buttonStyle } from "./styles.css";

type Props = {
  variant?: "ghost" | "flat" | "icon" | "bigicon" | "smallicon";
  colorSchema?: "primary" | "secondary" | "accent";
  toggled?: () => boolean;
};

export const Button: ParentComponent<Props & ComponentProps<"button">> = ({
  children,
  variant,
  disabled,
  toggled,
  colorSchema,
  ...rest
}) => {
  return (
    <Btn.Root
      class={buttonStyle({
        variant: variant,
        colorSchema: colorSchema,
        disabled: disabled ? disabled : false,
        toggled: toggled ? toggled() : undefined,
      })}
      {...rest}
      disabled={disabled}
    >
      {children}
    </Btn.Root>
  );
};
