import { Show, createMemo } from "solid-js";
import { RollInfo } from "~/common";
import { Button, Flex, Text } from "~/component";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
  chatItemRootStyle,
  chatRootStyle,
} from "./styles.css";
import {
  FaSolidCommentDots,
  FaSolidDice,
  FaSolidDiceD20,
  FaSolidHandDots,
} from "solid-icons/fa";

export const ChatItem = ({ item }: { item: RollInfo }) => {
  const rolls = createMemo(() => {
    const results = item.rollDice.map((d) => {
      const p = d.split("d");
      if (p.length != 2) return 0;
      const val = item.rollResults[`d${p[1]}`];
      if (!val) return 0;
      return `[ ${val.sort((a, b) => a - b).join(", ")} ]`;
    });
    return results.join(" ");
  });

  const itemHour = createMemo(() => {
    const parts = item.tstamp.split("__");
    if (parts && parts.length == 2) return parts[1];
    return item.tstamp;
  });

  const oldTime = 1 * 60 * 1000;

  const isOld = createMemo(() => {
    return Date.now() - item.realtstamp > oldTime;
  });

  return (
    <Flex
      gap="none"
      direction="column"
      class={chatItemRootStyle({ old: isOld() })}
    >
      <div class={chatItemHeaderStyle({})}>
        <div>{item.user}</div>
        <Flex title={item.tstamp}>{itemHour()}</Flex>
      </div>
      <div class={chatItemContentStyle({})}>
        <Flex gap="medium" style={{ "align-items": "center" }}>
          <Text colorSchema="secondary">{item.rollDice.join(", ")}</Text>
          <Text colorSchema="secondary"> ⇒ </Text>
          <div>{item.rollTotal} </div>
          <Show when={item.rollDice.length <= 1}>
            <div>{rolls()}</div>
          </Show>
        </Flex>
        <Show when={item.rollDice.length > 1}>
          <div>{rolls()}</div>
        </Show>
        <Show when={item.comment !== undefined && item.comment !== ""}>
          <div class={chatItemCommentStyle}>{item.comment}</div>
        </Show>
      </div>
    </Flex>
  );
};
