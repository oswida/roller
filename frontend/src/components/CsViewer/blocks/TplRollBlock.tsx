import { FaSolidDice } from "solid-icons/fa";
import { ImDice } from "solid-icons/im";
import { Component, For, Show, createSignal } from "solid-js";
import {
  CharTemplateItem,
  CharTemplateItemRoll,
  currentCs,
  isCsOwner,
} from "~/common";
import { Flex } from "../../Flex";
import { csTplIconStyle } from "../styles.css";
import { actionRoll } from "../actions";
import { Dialog } from "../../Dialog";
import { Input } from "../../Input";
import { Button } from "../../Button";

type Props = {
  item: CharTemplateItem;
  value?: () => any;
};

const ModifierDialog = ({
  roll,
  item,
  value,
}: {
  roll: CharTemplateItemRoll;
  item: CharTemplateItem;
  value: any;
}) => {
  const [mdOpen, setMdOpen] = createSignal(false);

  const action = () => {
    let v = 0;
    roll.labels?.forEach((it) => {
      const el = document.getElementById(
        `${item.name}-${it}`
      ) as HTMLInputElement;
      if (!el) return;
      const n = Number.parseInt(el.value);
      if (Number.isNaN(n)) return;
      v += n;
    });
    setMdOpen(false);
    actionRoll(currentCs()?.name, roll, value, v);
  };

  return (
    <Show when={roll.labels && roll.labels.length > 0}>
      <Dialog
        open={mdOpen}
        onOpenChange={setMdOpen}
        dialogTitle={() => (item.name ? item.name : "")}
        trigger={
          <div title={roll.comment} class={csTplIconStyle}>
            <ImDice
              style={{
                fill: roll.iconColor ? roll.iconColor : "currentcolor",
              }}
            />
          </div>
        }
        triggerHint={roll.comment}
      >
        <For each={roll.labels}>
          {(it) => <Input id={`${item.name}-${it}`} label={it} />}
        </For>
        <Flex gap="large" center>
          <Button onClick={() => setMdOpen(false)}>Cancel</Button>
          <Button onClick={action}>Roll</Button>
        </Flex>
      </Dialog>
    </Show>
  );
};

export const TplRollBlock: Component<Props> = ({ item, value }) => {
  const fieldValue = (roll: CharTemplateItemRoll) => {
    const cs = currentCs();
    if (!cs || !cs.values || !roll.valField) return 0;
    return cs.values[roll.valField];
  };

  return (
    <Show when={item.rolls && item.rolls.length > 0 && isCsOwner(currentCs())}>
      <Flex center>
        <For each={item.rolls}>
          {(r) => (
            <>
              <Show when={r.valType === "modifier" || r.valType === "target"}>
                <div
                  title={r.comment}
                  onClick={() =>
                    actionRoll(
                      currentCs()?.name,
                      r,
                      value ? value() : fieldValue(r)
                    )
                  }
                  class={csTplIconStyle}
                >
                  <ImDice
                    style={{
                      fill: r.iconColor ? r.iconColor : "currentcolor",
                    }}
                  />
                </div>
              </Show>
              <Show
                when={
                  r.valType === "modifier_plus_mod" ||
                  r.valType === "target_plus_mod"
                }
              >
                <ModifierDialog
                  roll={r}
                  item={item}
                  value={value ? value() : fieldValue(r)}
                />
              </Show>
            </>
          )}
        </For>
      </Flex>
    </Show>
  );
};
