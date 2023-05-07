import { Component, Show } from "solid-js";
import {
  appSettings,
  diceBox,
  dicePool,
  rolling,
  setDicePool,
  setRollComment,
  setRolling,
} from "~/common";
import { Flex, Input, Text } from "~/component";
import { Button } from "~/component/Button";
import { DiceEntry } from "./DiceEntry";
import { diceSelectorStyle } from "./styles.css";
import { IoReload } from "solid-icons/io";
import { FaSolidDice } from "solid-icons/fa";

export const DiceSelector: Component = () => {
  let inputRef: HTMLInputElement;

  const resetPool = () => {
    setDicePool({});
  };

  const roll = async () => {
    if (rolling()) return;
    const db = diceBox();
    if (!db) return;
    const pool = dicePool();
    if (!pool || Object.values(pool).length == 0) return;
    const dice = Object.entries(pool).map(([k, v]) => `${v}d${k}`);
    setRolling(true);
    const s = appSettings();
    await db.updateConfig({
      theme_colorset: s.diceColor,
      theme_texture: s.diceMaterial,
    });
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
        <Button variant="ghost" onClick={resetPool} title="Reset">
          <IoReload />
          <Text>Reset</Text>
        </Button>
      </Flex>
      <Flex center>
        <Show when={!rolling()}>
          <Button variant="ghost" onClick={roll}>
            <FaSolidDice />
            <Text>Roll</Text>
          </Button>

          <Input
            tooltip="Comment"
            placeholder="Comment"
            ref={(e) => (inputRef = e)}
            onInput={(e) => updateComment(e)}
          />
        </Show>
      </Flex>
    </div>
  );
};
