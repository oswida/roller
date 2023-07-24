import {
  Component,
  ComponentProps,
  ParentComponent,
  splitProps,
} from "solid-js";
import { flexStyle } from "./styles.css";
import { themeSpaceType } from "~/common/theme.css";

type Props = {
  direction?: "row" | "column";
  gap?: themeSpaceType;
  justify?: "center" | "start" | "end" | "space" | "evenly";
  align?: "center" | "start" | "end";
  grow?: boolean;
};

export const Flex: ParentComponent<Props & ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "direction",
    "gap",
    "justify",
    "align",
    "grow",
  ]);
  return (
    <div
      class={flexStyle({
        direction: local.direction,
        gap: local.gap,
        justify: local.justify,
        align: local.align,
        grow: local.grow,
      })}
      {...rest}
    >
      {local.children}
    </div>
  );
};
