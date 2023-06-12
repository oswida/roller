import { FaSolidCircleInfo, FaSolidDice } from "solid-icons/fa";
import { Component, For, Show } from "solid-js";
import { CharTemplateItem, CharTemplateItemRoll, currentCs, isCsOwner } from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { themeColor } from "~/common/theme.css";
import { csTplIconStyle } from "../styles.css";
import { actionRoll } from "../actions";

type Props = {
  item: CharTemplateItem;
};

export const TplLabel: Component<Props> = ({ item }) => {

  const value = (roll: CharTemplateItemRoll) => {
    const cs = currentCs();
    if (!cs || !cs.values || !roll.valField) return 0;
    return cs.values[roll.valField];
  }

  return (
    <Flex style={{ "justify-content": "space-between" }}>
      <Flex>
        <Text style={{ color: item.color ? item.color : themeColor.secondary }}>
          {item.text}
        </Text>
        <Show when={item.hint && item.hint !== ""}>
          <div title={item.hint} style={{ cursor: "help" }}>
            <FaSolidCircleInfo fill={themeColor.accent} />
          </div>
        </Show>
      </Flex>
      <Show
        when={
          item.rolls && item.rolls.length > 0 && isCsOwner(currentCs())
        }
      >
        <Flex>
          <For each={item.rolls}>
            {(r) => (
              <div
                title={r.comment}
                onClick={() => actionRoll(currentCs()?.name, r, value(r))}
                class={csTplIconStyle}
              >
                <FaSolidDice
                  style={{
                    fill: r.iconColor ? r.iconColor : "currentcolor",
                  }}
                />
              </div>
            )}
          </For>
        </Flex>
      </Show>
    </Flex>
  );
};
