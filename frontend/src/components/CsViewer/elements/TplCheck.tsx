import { FaSolidCircleInfo, FaSolidDice } from "solid-icons/fa";
import { Component, For, Show, createMemo } from "solid-js";
import {
  CharTemplateItem,
  CharTemplateItemRoll,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { themeColor } from "~/common/theme.css";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { csTplIconStyle, tplResourceItemStyle } from "../styles.css";
import { actionRoll } from "../actions";

type Props = {
  item: CharTemplateItem;
};

export const TplCheck: Component<Props> = ({ item }) => {
  const checked = createMemo(() => {
    const info = currentCs();
    if (!info) return false;
    return info.values[item.id];
  });

  const toggle = () => {
    const info = currentCs();
    if (!isCsOwner(info)) return;
    if (!info) return false;
    if (!info.values[item.id]) {
      info.values[item.id] = true;
    } else {
      info.values[item.id] = false;
    }
    updateCsStorage(info);
    setCurrentCs(undefined);
    setCurrentCs(info);
    centPublish(netTopic(topicCsInfo), info);
  };

  const value = (roll: CharTemplateItemRoll) => {
    const cs = currentCs();
    if (!cs || !cs.values || !roll.valField) return 0;
    return cs.values[roll.valField];
  }

  return (
    <Flex style={{ "justify-content": "space-between" }}>
      <Show when={checked()}>
        <Flex gap="medium" style={{ "align-items": "center" }}>
          <div
            class={tplResourceItemStyle({ shape: "square" })}
            style={{
              "background-color": item.color ? item.color : "currentcolor",
            }}
            onClick={toggle}
          >
            {" "}
          </div>
          <Text>{item.text}</Text>
          <Show when={item.hint && item.hint !== ""}>
            <div title={item.hint} style={{ cursor: "help" }}>
              <FaSolidCircleInfo fill={themeColor.accent} />
            </div>
          </Show>
        </Flex>
      </Show>
      <Show when={!checked()}>
        <Flex gap="medium" style={{ "align-items": "center" }}>
          <div
            class={tplResourceItemStyle({ shape: "square" })}
            style={{
              border: `solid 1px ${item.color ? item.color : "currentcolor"}`,
            }}
            onClick={toggle}
          >
            {" "}
          </div>
          <Text>{item.text}</Text>
          <Show when={item.hint && item.hint !== ""}>
            <div title={item.hint} style={{ cursor: "help" }}>
              <FaSolidCircleInfo fill={themeColor.accent} />
            </div>
          </Show>
        </Flex>
      </Show>
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
    </Flex>
  );
};
