import { Component, ComponentProps, ParentComponent } from "solid-js";
import { flexStyle } from "./styles.css";
import { themeSpaceType } from "~/common/theme.css";

type Props = {
  direction?: "row" | "column";
  gap?: themeSpaceType;
  center?: boolean;
};

export const Flex: ParentComponent<Props & ComponentProps<"div">> = ({
  children,
  direction,
  gap,
  center,
  ...rest
}) => {
  return (
    <div
      class={flexStyle({ direction: direction, gap: gap, center: center })}
      {...rest}
    >
      {children}
    </div>
  );
};
