import { AiOutlineClear } from "solid-icons/ai";
import { FaSolidDice, FaSolidToggleOff } from "solid-icons/fa";
import { IoReload } from "solid-icons/io";
import { Component, Match, Show, Switch, createMemo } from "solid-js";
import {
  appSettings,
  diceBox,
  dicePool,
  rollerSettingsKey,
  rolling,
  saveToStorage,
  setDicePool,
  setRollComment,
  setRolling,
} from "~/common";
import { Flex, Input, Text } from "~/component";
import { Button } from "~/component/Button";
import { DicePanel } from "./DicePanel";
import { diceSelectorStyle } from "./styles.css";

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
    await db.roll(dice.join("+"));
  };

  const updateComment = (e: any) => {
    if (!inputRef) return;
    setRollComment(inputRef.value);
  };

  const clearTable = () => {
    const db = diceBox();
    if (!db) return;
    db.clearDice();
  };

  const toggleDice = async () => {
    const newState = { ...appSettings() };
    if (newState.genesysDice === undefined) {
      newState.genesysDice = true;
    } else {
      newState.genesysDice = !newState.genesysDice;
    }
    saveToStorage(rollerSettingsKey, newState);
    if (newState.genesysDice) {
      const db = diceBox();
      if (!db) return;
      const s = appSettings();
      await db.updateConfig({
        theme_colorset: s.diceColor,
        theme_texture: s.diceTexture,
        theme_material: "none",
      });
    }
  };

  return (
    <div class={diceSelectorStyle}>
      <Show when={appSettings().rightLayout}>
        <Flex gap="medium" center>
          <Button variant="ghost" onClick={resetPool} title="Reset">
            <IoReload />
            <Text>Reset</Text>
          </Button>
          <DicePanel />
          <Button variant="ghost" onClick={clearTable} title="Clear table">
            <AiOutlineClear />
            <Text>Clear</Text>
          </Button>
        </Flex>
      </Show>

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

      <Show when={!appSettings().rightLayout}>
        <Flex gap="medium" center>
          <Button variant="ghost" onClick={toggleDice} title="Toggle dice mode">
            <FaSolidToggleOff />
            <Switch>
              <Match when={appSettings().genesysDice}>
                <Text>Classic</Text>
              </Match>
              <Match when={!appSettings().genesysDice}>
                <Text>Genesys</Text>
              </Match>
            </Switch>
          </Button>
          <Button variant="ghost" onClick={resetPool} title="Reset">
            <IoReload />
            <Text>Reset</Text>
          </Button>
          <DicePanel />
          <Button variant="ghost" onClick={clearTable} title="Clear table">
            <AiOutlineClear />
            <Text>Clear</Text>
          </Button>
        </Flex>
      </Show>
    </div>
  );
};
