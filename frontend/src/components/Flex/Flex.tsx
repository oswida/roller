import { Component, ComponentProps, ParentComponent } from "solid-js";
import { flexStyle } from "./styles.css";
import { themeSpaceType } from "~/common/theme.css";

type Props = {
  direction?: "row" | "column";
  gap?: themeSpaceType;
  justify?: "center" | "start" | "end" | "space" | "evenly";
  align?: "center" | "start" | "end";
  grow?: boolean;
};

export const Flex: ParentComponent<Props & ComponentProps<"div">> = ({
  children,
  direction,
  gap,
  justify,
  align,
  grow,
  ...rest
}) => {
  return (
    <div
      class={flexStyle({
        direction: direction,
        gap: gap,
        justify: justify,
        align: align,
        grow: grow,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
