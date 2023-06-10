import { FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show, createMemo } from "solid-js";
import {
  CharTemplateItem,
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
import { tplResourceItemStyle } from "../styles.css";

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

  return (
    <>
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
    </>
  );
};