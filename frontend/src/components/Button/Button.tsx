import { ComponentProps, ParentComponent, splitProps } from "solid-js";
import { Button as Btn } from "@kobalte/core";
import { buttonStyle } from "./styles.css";

type Props = {
  variant?: "full" | "icon";
  toggled?: boolean;
};

export const Button: ParentComponent<Props & ComponentProps<"button">> = (
  props
) => {
  const [local, rest] = splitProps(props, ["variant", "children", "toggled"]);
  return (
    <Btn.Root
      class={buttonStyle({
        variant: local.variant,
        toggled: local.toggled,
      })}
      {...rest}
    >
      {local.children}
    </Btn.Root>
  );
};
