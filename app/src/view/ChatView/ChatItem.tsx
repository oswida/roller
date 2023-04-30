import { RollInfo } from "~/common";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
} from "./styles.css";
import { Flex, Text } from "~/component";
import { For, Show, createMemo } from "solid-js";

export const ChatItem = ({ item }: { item: RollInfo }) => {
  const rolls = createMemo(() => {
    const results = item.rollDice.map((d) => {
      const p = d.split("d");
      if (p.length != 2) {
        console.log("problem parsing result", d);
        return;
      }
      return `[ ${item.rollResults[`d${p[1]}`]
        .sort((a, b) => a - b)
        .join(", ")} ]`;
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
          <div>{rolls()}</div>
        </Flex>
        <Show when={item.comment !== undefined && item.comment !== ""}>
          <div class={chatItemCommentStyle}>{item.comment}</div>
        </Show>
      </div>
    </Flex>
  );
};
