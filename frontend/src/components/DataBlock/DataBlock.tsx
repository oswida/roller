import { Component, JSX, Show, createMemo } from "solid-js";
import { Flex } from "../Flex";
import { datablockStyle } from "./styles.css";

type Props = {
  left?: JSX.Element;
  leftFunc?: () => JSX.Element;
  right?: JSX.Element;
  rightFunc?: () => JSX.Element;
  leftBackground?: "secondary" | "none" | "accent";
  rightBackground?: "secondary" | "none" | "accent";
  widthLeft?: string;
  widthRight?: string;
  width?: string;
};

export const DataBlock: Component<Props> = ({
  left,
  right,
  leftBackground,
  rightBackground,
  leftFunc,
  rightFunc,
  widthLeft,
  widthRight,
  width,
}) => {
  const leftElement = createMemo(() => {
    if (left) return left;
    if (leftFunc) return leftFunc();
    return undefined;
  });

  const rightElement = createMemo(() => {
    if (right) return right;
    if (rightFunc) return rightFunc();
    return undefined;
  });

  return (
    <Flex justify="space" align="center" style={{ width: width }} gap="none">
      <Show when={left || leftFunc}>
        <div
          style={{
            width: widthLeft
              ? widthLeft
              : right || rightFunc
              ? "50%"
              : undefined,
          }}
          class={datablockStyle({
            position: "left",
            background: leftBackground,
          })}
        >
          {leftElement()}
        </div>
      </Show>
      <Show when={right || rightFunc}>
        <div
          style={{
            width: widthRight
              ? widthRight
              : left || leftFunc
              ? "50%"
              : undefined,
          }}
          class={datablockStyle({
            position: "right",
            background: rightBackground,
          })}
        >
          {rightElement()}
        </div>
      </Show>
    </Flex>
  );
};
