import { Component, ComponentProps, ParentComponent } from "solid-js";
import { flexStyle } from "./styles.css";
import { spaceType } from "~/common";

type Props = {
  direction?: "row" | "column";
  gap?: spaceType;
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
