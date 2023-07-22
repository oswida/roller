import { AiOutlineClear } from "solid-icons/ai";
import { ImDice } from "solid-icons/im";
import { BiSolidAddToQueue } from "solid-icons/bi";
import { FaSolidDice, FaSolidEyeSlash, FaSolidHourglass } from "solid-icons/fa";
import { IoReload } from "solid-icons/io";
import { Component, For, Match, Show, Switch, createSignal } from "solid-js";
import {
  RefProps,
  animating,
  appSettings,
  currentRoom,
  diceBox,
  dicePool,
  enrollTask,
  modRoll,
  privateRoll,
  rolling,
  setDicePool,
  setModRoll,
  setPrivateRoll,
  setRollComment,
  setRolling,
} from "~/common";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components";
import { DicePanel } from "./DicePanel";
import { diceSelectorStyle } from "./styles.css";
import toast from "solid-toast";

const ModifierDialog = ({ priv }: { priv: boolean }) => {
  const [mdOpen, setMdOpen] = createSignal(false);

  const action = async () => {
    const el = document.getElementById("dice-modifier") as HTMLInputElement;
    if (!el) {
      console.log("cannot find dice-modifier element");
      return;
    }
    let n = Number.parseInt(el.value);
    setMdOpen(false);
    if (Number.isNaN(n)) n = 0;
    if (rolling() || !currentRoom() || currentRoom()?.id == "") return;
    const db = diceBox();
    if (!db) return;
    const pool = dicePool();
    if (!pool || Object.values(pool).length == 0) {
      toast("No dice selected");
      return;
    }
    const dice = Object.entries(pool)
      .filter(([k, v]) => v > 0)
      .map(([k, v]) => `${v}d${k}`);
    if (dice.length <= 0) {
      toast("No proper dice selected");
      return;
    }
    setRolling(true);
    const s = appSettings();
    await db.updateConfig({
      theme_colorset: s.diceColor,
      theme_texture: s.diceMaterial,
    });
    if (n !== 0) await db.roll(`${dice.join("+")}+${n}`);
    else await db.roll(`${dice.join("+")}`);
  };

  return (
    <Dialog open={mdOpen()} onOpenChange={setMdOpen} modal>
      <DialogTrigger>
        <Button variant="ghost" colorSchema={priv ? "secondary" : undefined}>
          <Show when={priv}>
            <FaSolidEyeSlash fill="currentColor" />
          </Show>
          <Show when={!priv}>
            <ImDice fill="currentColor" />
          </Show>
          <Text colorSchema={priv ? "secondary" : undefined}>Roll</Text>
        </Button>
      </DialogTrigger>
      <DialogContent title="Roll modifier">
        <Input id="dice-modifier" label="Value" />
        <Flex gap="large" align="center" justify="center">
          <Button onClick={() => enrollTask(action)}>Roll</Button>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};

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
    if (!pool || Object.values(pool).length == 0) {
      toast("No dice selected");
      return;
    }
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
      <Flex align="center" gap="small">
        <Show when={!rolling()}>
          <Show when={!modRoll()}>
            <Switch>
              <Match when={privateRoll()}>
                <Button
                  variant="ghost"
                  colorSchema="secondary"
                  onClick={() => enrollTask(roll)}
                >
                  <FaSolidEyeSlash />
                  <Text colorSchema="secondary">Roll</Text>
                </Button>
              </Match>
              <Match when={!privateRoll()}>
                <Button variant="ghost" onClick={() => enrollTask(roll)}>
                  <ImDice />
                  <Text>Roll</Text>
                </Button>
              </Match>
            </Switch>
          </Show>
          <Show when={modRoll()}>
            <ModifierDialog priv={privateRoll()} />
          </Show>

          <Tooltip>
            <TooltipTrigger>
              <Button
                toggled={privateRoll}
                onClick={() => setPrivateRoll(!privateRoll())}
              >
                <FaSolidEyeSlash />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle private roll</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button toggled={modRoll} onClick={() => setModRoll(!modRoll())}>
                <BiSolidAddToQueue fill="currentColor" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle additional modifier</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Input
                placeholder="Comment"
                ref={(e) => (inputRef = e)}
                style={{ width: "12em" }}
                onInput={(e) => updateComment(e)}
              />
            </TooltipTrigger>
            <TooltipContent>Comment</TooltipContent>
          </Tooltip>
        </Show>
        <Show when={rolling()}>
          <Button variant="ghost">
            <FaSolidHourglass />
            <Text>Rolling...</Text>
          </Button>
          <Input placeholder="Please wait" disabled />
        </Show>
      </Flex>

      <Show when={!appSettings().rightLayout}>
        <Flex gap="medium" align="center" justify="center">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" onClick={resetPool}>
                <IoReload />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset dice pool</TooltipContent>
          </Tooltip>

          <DicePanel />

          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" onClick={clearTable}>
                <AiOutlineClear />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear table</TooltipContent>
          </Tooltip>
        </Flex>
      </Show>
    </div>
  );
};
