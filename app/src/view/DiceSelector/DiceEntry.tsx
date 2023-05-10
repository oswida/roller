import { Component, Show, createMemo } from "solid-js";
import { dicePool, setDicePool } from "~/common";
import { diceEntryStyle, diceNumberStyle } from "./styles.css";

type Props = {
  face: string;
  label: string;
};

export const DiceEntry: Component<Props> = ({ face, label }) => {
  const inc = (e: any) => {
    let value = dicePool()[face];
    if (!value) {
      value = 0;
    }
    if (e.ctrlKey) {
      value -= 1;
    } else {
      value += 1;
    }
    if (value < 0) value = 0;
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
      onClick={(e) => inc(e)}
      title="Click to increase dice pool (Ctrl decrease)"
    >
      <div>{label}</div>
      <Show when={diceNum() > 0}>
        <div class={diceNumberStyle}>{diceNum()}</div>
      </Show>
    </div>
  );
};
