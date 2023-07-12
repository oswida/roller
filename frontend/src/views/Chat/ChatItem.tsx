import { For, Show, createMemo, createSignal } from "solid-js";
import {
  Host2NetRollInfo,
  RollInfo,
  appSettings,
  centPublish,
  netTopic,
  rollSuccessInfo,
  setAppRolls,
  topicRollInfo,
} from "~/common";
import { Alert, Button, DataBlock, Flex, Text } from "~/components";
import {
  chatItemCommentStyle,
  chatItemContentStyle,
  chatItemHeaderStyle,
  chatItemRootStyle,
} from "./styles.css";

import { BiRegularTargetLock } from "solid-icons/bi";
import { FaSolidEyeSlash } from "solid-icons/fa";
import { themeVars } from "~/common/theme.css";

export const ChatItem = ({ item }: { item: RollInfo }) => {
  const [revOpen, setRevOpen] = createSignal(false);

  const itemHour = createMemo(() => {
    const parts = item.tstamp.split("__");
    if (parts && parts.length == 2) return parts[1];
    return item.tstamp;
  });

  const oldTime = 15 * 60 * 1000;

  const myPrivate = createMemo(() => {
    return (
      item.private && item.userId == appSettings().userIdent && !item.revealed
    );
  });

  const modValue = createMemo(() => {
    if (!item.result.modifier || item.result.modifier == 0) return ``;
    if (item.result.modifier > 0) return ` (+${item.result.modifier})`;
    return ` (${item.result.modifier})`;
  });

  const succValue = createMemo(() => {
    const r = rollSuccessInfo(
      item.result,
      item.successRule,
      item.successTarget
    );
    return r;
  });

  const reveal = () => {
    setRevOpen(false);
    const newItem = { ...item };
    newItem.revealed = true;
    centPublish(netTopic(topicRollInfo), Host2NetRollInfo(newItem));
    setAppRolls((prev) => ({ ...prev, [item.id]: newItem }));
  };

  return (
    <Flex
      gap="none"
      direction="column"
      class={chatItemRootStyle({ private: item.private && !item.revealed })}
    >
      <div
        class={chatItemHeaderStyle({ private: item.private && !item.revealed })}
      >
        <div>{item.user}</div>
        <Flex title={item.tstamp}>{itemHour()}</Flex>
      </div>

      <Show when={!item.result.sets}>
        <div class={chatItemContentStyle({ old: true })}>{item.comment}</div>
      </Show>

      <Show when={item.result.sets}>
        <div class={chatItemContentStyle({})}>
          <Flex gap="medium" direction="column">
            <Flex style={{ "justify-content": "space-between", flex: 1 }}>
              <Show when={appSettings().showRollTotal && item.result.total}>
                <DataBlock
                  width="45%"
                  widthLeft="80%"
                  widthRight="20%"
                  left={<Text colorSchema="secondary">Total {modValue()}</Text>}
                  right={<div>{item.result.total}</div>}
                  leftBackground="secondary"
                  rightBackground="secondary"
                />
              </Show>
              <Show
                when={
                  item.successRule &&
                  appSettings().showRollSuccess &&
                  succValue() !== ""
                }
              >
                <Show when={item.successTarget && item.successTarget !== 0}>
                  <DataBlock
                    width="57%"
                    widthLeft="35%"
                    widthRight="70%"
                    rightBackground="accent"
                    leftBackground="accent"
                    left={
                      <Flex center style={{ gap: "2px" }}>
                        <BiRegularTargetLock fill="currentcolor" />
                        <Text colorSchema="background">
                          {item.successTarget}
                        </Text>
                      </Flex>
                    }
                    right={
                      <Text colorSchema="background" title={item.successRule}>
                        {succValue()}
                      </Text>
                    }
                  />
                </Show>
                <Show when={!item.successTarget || item.successTarget == 0}>
                  <DataBlock
                    rightBackground="accent"
                    leftBackground="accent"
                    right={
                      <Text colorSchema="background" title={item.successRule}>
                        {succValue()}
                      </Text>
                    }
                  />
                </Show>
              </Show>
            </Flex>

            <Flex gap="medium">
              <For each={item.result.sets}>
                {(set) => (
                  <Flex>
                    <Text colorSchema="secondary">{`${set.num}${set.type}: `}</Text>
                    <DataBlock
                      right={set.rolls.map((r) => r.value).join(", ")}
                    />
                  </Flex>
                )}
              </For>
            </Flex>
          </Flex>

          <Flex
            style={{ "justify-content": "flex-end", "align-items": "center" }}
          >
            <Show when={item.comment !== undefined && item.comment !== ""}>
              <div class={chatItemCommentStyle}>{item.comment}</div>
            </Show>
            <Show when={myPrivate()}>
              <Alert
                label="Reveal"
                trigger={<FaSolidEyeSlash color={themeVars.info900} />}
                triggerHint="Reveal private roll"
                open={revOpen}
                onOpenChange={setRevOpen}
              >
                <Text>Reveal {item.result.notation} roll?</Text>
                <Flex gap="large">
                  <Button onClick={() => setRevOpen(false)}>Cancel</Button>
                  <Button onClick={reveal}>Accept</Button>
                </Flex>
              </Alert>
            </Show>
          </Flex>
        </div>
      </Show>
    </Flex>
  );
};
