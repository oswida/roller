import { Component } from "solid-js";
import { diceBox, dicePool, setDicePool, setRollComment } from "~/common";
import { Flex, Input, Text } from "~/component";
import { Button } from "~/component/Button";
import { DiceEntry } from "./DiceEntry";
import { diceSelectorStyle } from "./styles.css";

export const DiceSelector: Component = () => {
  let inputRef: HTMLInputElement;

  const resetPool = () => {
    setDicePool({});
  };

  const roll = async () => {
    const db = diceBox();
    if (!db) return;
    const pool = dicePool();
    if (!pool) return;
    const dice = Object.entries(pool).map(([k, v]) => `${v}d${k}`);
    await db.roll(dice.join("+"));
  };

  const updateComment = (e: any) => {
    if (!inputRef) return;
    setRollComment(inputRef.value);
  };

  return (
    <div class={diceSelectorStyle}>
      <Flex gap="medium" center>
        <DiceEntry face="4" />
        <DiceEntry face="6" />
        <DiceEntry face="8" />
        <DiceEntry face="10" />
        <DiceEntry face="12" />
        <DiceEntry face="20" />
        <DiceEntry face="100" />
        <DiceEntry face="f" />
        <Button variant="ghost" onClick={resetPool}>
          <Text>RESET</Text>
        </Button>
      </Flex>
      <Flex center>
        <Button variant="ghost" onClick={roll}>
          <Text>ROLL</Text>
        </Button>
        <Input
          tooltip="Comment"
          placeholder="Comment"
          ref={(e) => (inputRef = e)}
          onInput={(e) => updateComment(e)}
        />
      </Flex>
    </div>
  );
};
