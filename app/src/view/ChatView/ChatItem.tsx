import { For, Show, createMemo } from "solid-js";
import { RollInfo, appSettings } from "~/common";
import { Button, Flex, Text } from "~/component";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
  chatItemRootStyle,
  chatRootStyle,
  chatDatablockStyle,
} from "./styles.css";
import {
  TbSum
} from "solid-icons/tb";
import { DataBlock } from "./DataBlock";

export const ChatItem = ({ item }: { item: RollInfo }) => {

  const itemHour = createMemo(() => {
    const parts = item.tstamp.split("__");
    if (parts && parts.length == 2) return parts[1];
    return item.tstamp;
  });

  const oldTime = 5 * 60 * 1000;

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
        <Flex gap="medium" direction="column">
          {/* <Text colorSchema="secondary">{item.result.notation}</Text> */}
          <Flex style={{ "justify-content": "space-between", flex: 1 }}>
            <Show when={appSettings().showRollTotal}>
              <DataBlock left={<Text colorSchema="secondary">Total</Text>} right={<div>{item.result.total}</div>} rightBackground="secondary" />
            </Show>
            <Show when={item.successRule && appSettings().showRollSuccess}>
              <DataBlock left={<div>Result</div>} right={<div>Success??</div>} />
            </Show>
          </Flex>

          <Flex gap="medium">
            <For each={item.result.sets}>
              {(set) => (
                <Flex>
                  <Text colorSchema="secondary">{`${set.num}${set.type}: `}</Text>
                  <DataBlock right={set.rolls.map((r) => (
                    r.value
                  )).join(", ")} />
                </Flex>
              )}
            </For>
          </Flex>

          {/* <Text colorSchema="secondary">{item.rollDice.join(", ")}</Text>
          <Text colorSchema="secondary"> ⇒ </Text>
          <div>{item.rollTotal} </div>
          <Show when={item.rollDice.length <= 1}>
            <div>{rolls()}</div>
          </Show> */}
        </Flex>

        <Show when={item.comment !== undefined && item.comment !== ""}>
          <div class={chatItemCommentStyle}>{item.comment}</div>
        </Show>
      </div>
    </Flex>
  );
};
