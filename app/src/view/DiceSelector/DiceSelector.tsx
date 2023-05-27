import { Component, Match, Show, Switch } from "solid-js";
import {
  RefProps,
  animating,
  appSettings,
  currentRoom,
  diceBox,
  dicePool,
  enrollTask,
  privateRoll,
  rolling,
  setDicePool,
  setPrivateRoll,
  setRollComment,
  setRolling,
} from "~/common";
import { Flex, Input, Text } from "~/component";
import { Button } from "~/component/Button";
import { diceSelectorStyle } from "./styles.css";
import { IoReload } from "solid-icons/io";
import { FaSolidDice, FaSolidEyeSlash, FaSolidHourglass } from "solid-icons/fa";
import { AiOutlineClear } from "solid-icons/ai";
import { DicePanel } from "./DicePanel";
import { Dynamic } from "solid-js/web";

export const DiceSelector: Component<RefProps> = ({ ref }) => {
  let inputRef: HTMLInputElement;

  const resetPool = () => {
    setDicePool({});
  };

  const roll = async () => {
    if (rolling() || !currentRoom() || currentRoom()?.id == "") return;
    const db = diceBox();
    if (!db) return;
    const pool = dicePool();
    if (!pool || Object.values(pool).length == 0) return;
    const dice = Object.entries(pool)
      .filter(([k, v]) => v > 0)
      .map(([k, v]) => `${v}d${k}`);
    if (dice.length <= 0) return;
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

  const clearTable = () => {
    const db = diceBox();
    if (!db || rolling() || animating()) return;
    db.clearDice();
  };

  return (
    <div class={diceSelectorStyle} ref={ref}>
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

          <Switch>
            <Match when={privateRoll()}>
              <Button variant="ghost"
                colorSchema="secondary"
                onClick={() => enrollTask(roll)}>
                <FaSolidEyeSlash />
                <Text colorSchema="secondary">Roll</Text>
              </Button>
            </Match>
            <Match when={!privateRoll()}>
              <Button variant="ghost"
                onClick={() => enrollTask(roll)}>
                <FaSolidDice />
                <Text>Roll</Text>
              </Button>
            </Match>
          </Switch>


          <Input
            tooltip="Comment"
            placeholder="Comment"
            ref={(e) => (inputRef = e)}
            onInput={(e) => updateComment(e)}
          />

          <Button title="Toggle private roll"
            toggled={privateRoll}
            onClick={() => setPrivateRoll(!privateRoll())} >
            <FaSolidEyeSlash />
          </Button>
        </Show>
        <Show when={rolling()}>
          <Button variant="ghost" >
            <FaSolidHourglass />
            <Text>Rolling...</Text>
          </Button>

          <Input
            tooltip="Please wait"
            placeholder="Please wait"
            disabled
          />
        </Show>

      </Flex>

      <Show when={!appSettings().rightLayout}>
        <Flex gap="medium" center>
          <Button variant="ghost" onClick={resetPool} title="Reset">
            <IoReload />
            {/* <Text>Reset</Text> */}
          </Button>
          <DicePanel />

          <Button variant="ghost" onClick={clearTable} title="Clear table" style={{ "margin-left": "32px" }}>
            <AiOutlineClear />
            {/* <Text>Clear</Text> */}
          </Button>
        </Flex>
      </Show>
    </div >
  );
};
