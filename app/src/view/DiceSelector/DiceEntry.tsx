import { Component, Show, createMemo } from "solid-js";
import { diceEntryStyle, diceNumberStyle } from "./styles.css";
import { dicePool, setDicePool } from "~/common";
import { Dynamic } from "solid-js/web";

type Props = {
  face: string;
};

export const DiceEntry: Component<Props> = ({ face }) => {
  const inc = () => {
    let value = dicePool()[face];
    if (!value) {
      value = 0;
    }
    value += 1;
    setDicePool((prev) => ({ ...prev, [face]: value }));
  };

  const diceNum = createMemo(() => {
    const v = dicePool()[face];
    if (!v) return 0;
    return v;
  });

  return (
    <div
      class={diceEntryStyle}
      onClick={inc}
      title="Click to increase dice pool"
    >
      <div>{face}</div>
      <Show when={diceNum() > 0}>
        <div class={diceNumberStyle}>{diceNum()}</div>
      </Show>
    </div>
  );
};
