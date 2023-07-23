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
import {
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  DataBlock,
  DataLabel,
  DataValue,
  Flex,
  Text,
} from "~/components";
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
    if (item.result.modifier > 0) return `+${item.result.modifier}`;
    return `${item.result.modifier}`;
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
      grow
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
          <Flex gap="medium" direction="column" grow>
            <Flex justify="space" align="center" style={{ width: "100%" }}>
              <Show when={appSettings().showRollTotal && item.result.total}>
                <DataBlock style={{ width: "45%" }}>
                  <DataLabel
                    backgroundSchema="primary300"
                    colorSchema="primary900"
                  >
                    <Text colorSchema="secondary">Total {modValue()}</Text>
                  </DataLabel>
                  <DataValue
                    backgroundSchema="primary300"
                    colorSchema="primary900"
                  >
                    <div>{item.result.total}</div>
                  </DataValue>
                </DataBlock>
              </Show>
              <Show
                when={
                  item.successRule &&
                  appSettings().showRollSuccess &&
                  succValue() !== ""
                }
              >
                <Show when={item.successTarget && item.successTarget !== 0}>
                  <DataBlock style={{ width: "57%" }}>
                    <DataLabel
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                    >
                      <Flex
                        align="center"
                        justify="center"
                        style={{ gap: "2px" }}
                      >
                        <BiRegularTargetLock fill="currentcolor" />
                        <Text colorSchema="background">
                          {item.successTarget}
                        </Text>
                      </Flex>
                    </DataLabel>
                    <DataValue
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                    >
                      <Text colorSchema="background" title={item.successRule}>
                        {succValue()}
                      </Text>
                    </DataValue>
                  </DataBlock>
                </Show>
                <Show when={!item.successTarget || item.successTarget == 0}>
                  <DataBlock>
                    <DataValue
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                    >
                      <Text colorSchema="background" title={item.successRule}>
                        {succValue()}
                      </Text>
                    </DataValue>
                  </DataBlock>
                </Show>
              </Show>
            </Flex>

            <Flex gap="medium" align="center">
              <For each={item.result.sets}>
                {(set) => (
                  <Flex align="center" justify="evenly" grow>
                    <DataBlock>
                      <DataLabel>
                        <Text colorSchema="secondary">{`${set.num}${set.type}: `}</Text>
                      </DataLabel>
                      <DataValue>
                        {set.rolls.map((r) => r.value).join(", ")}
                      </DataValue>
                    </DataBlock>
                  </Flex>
                )}
              </For>
            </Flex>
          </Flex>

          <Flex align="center" justify="end">
            <Show when={item.comment !== undefined && item.comment !== ""}>
              <div class={chatItemCommentStyle}>{item.comment}</div>
            </Show>
            <Show when={myPrivate()}>
              <Alert open={revOpen()} onOpenChange={setRevOpen}>
                <AlertTrigger title="Reveal private roll">
                  <FaSolidEyeSlash color={themeVars.info900} />
                </AlertTrigger>
                <AlertContent title="Reveal">
                  <Text>Reveal {item.result.notation} roll?</Text>
                  <Flex gap="large">
                    <Button onClick={() => setRevOpen(false)}>Cancel</Button>
                    <Button onClick={reveal}>Accept</Button>
                  </Flex>
                </AlertContent>
              </Alert>
            </Show>
          </Flex>
        </div>
      </Show>
    </Flex>
  );
};
