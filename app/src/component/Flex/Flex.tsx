import { Component, ParentComponent } from "solid-js";
import { flexStyle } from "./styles.css";
import { spaceType } from "~/common";

type Props = {
  direction?: "row" | "column";
  gap?: spaceType;
  center?: boolean;
};

export const Flex: ParentComponent<Props> = ({
  children,
  direction,
  gap,
  center,
}) => {
  return (
    <div class={flexStyle({ direction: direction, gap: gap, center: center })}>
      {children}
    </div>
  );
};
