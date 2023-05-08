import { Show, createMemo } from "solid-js";
import { RollInfo } from "~/common";
import { Flex, Text } from "~/component";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
} from "./styles.css";

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

  return (
    <Flex gap="none" direction="column">
      <div class={chatItemHeaderStyle}>
        <div>{item.user}</div> <div>{item.tstamp}</div>
      </div>
      <div class={chatItemContentStyle}>
        <Flex gap="medium">
          <Text colorSchema="secondary">{item.rollDice.join(", ")} ⇒ </Text>
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
