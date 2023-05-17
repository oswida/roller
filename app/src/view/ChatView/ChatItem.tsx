import { For, Show, createMemo } from "solid-js";
import { RollInfo, appSettings, rollSuccessInfo } from "~/common";
import { Flex, Text } from "~/component";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
  chatItemRootStyle,
} from "./styles.css";
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


  const modValue = createMemo(() => {
    if (!item.result.modifier || item.result.modifier == 0) return ``;
    if (item.result.modifier > 0) return ` (+${item.result.modifier})`;
    return ` (${item.result.modifier})`;
  });

  const succValue = createMemo(() => {
    const r = rollSuccessInfo(item.result, item.successRule, item.successTarget);
    return r;
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
          <Flex style={{ "justify-content": "space-between", flex: 1 }}>
            <Show when={appSettings().showRollTotal}>
              <DataBlock left={<Text colorSchema="secondary">Total {modValue()}</Text>}
                right={<div>{item.result.total}</div>} rightBackground="secondary" />
            </Show>
            <Show when={item.successRule && appSettings().showRollSuccess && succValue() !== ""}>
              <DataBlock
                rightBackground="accent"
                leftBackground="accent"
                left={<Text colorSchema="primary">🞋 {item.successTarget}</Text>}
                right={<Text colorSchema="primary" title={item.successRule}> {succValue()}</Text>} />
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

        </Flex>

        <Show when={item.comment !== undefined && item.comment !== ""}>
          <div class={chatItemCommentStyle}>{item.comment}</div>
        </Show>
      </div>
    </Flex>
  );
};
