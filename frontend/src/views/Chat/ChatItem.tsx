import { Component, For, Show, createMemo, createSignal } from "solid-js";
import {
  Host2NetRollInfo,
  RollInfo,
  centPublish,
  loggedUser,
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

type Props = {
  item: RollInfo;
};

export const ChatItem: Component<Props> = (props) => {
  const [revOpen, setRevOpen] = createSignal(false);

  const itemHour = createMemo(() => {
    const parts = props.item.tstamp.split("__");
    if (parts && parts.length == 2) return parts[1];
    return props.item.tstamp;
  });

  const oldTime = 15 * 60 * 1000;

  const myPrivate = createMemo(() => {
    return (
      props.item.private &&
      props.item.userId == loggedUser()?.id &&
      !props.item.revealed
    );
  });

  const modValue = createMemo(() => {
    if (!props.item.result.modifier || props.item.result.modifier == 0)
      return ``;
    if (props.item.result.modifier > 0) return `+${props.item.result.modifier}`;
    return `${props.item.result.modifier}`;
  });

  const succValue = createMemo(() => {
    const r = rollSuccessInfo(
      props.item.result,
      props.item.successRule,
      props.item.successTarget
    );
    return r;
  });

  const reveal = () => {
    setRevOpen(false);
    const newItem = { ...props.item };
    props.item.revealed = true;
    centPublish(netTopic(topicRollInfo), Host2NetRollInfo(newItem));
    setAppRolls((prev) => ({ ...prev, [props.item.id]: newItem }));
  };

  return (
    <Flex
      grow
      gap="none"
      direction="column"
      class={chatItemRootStyle({
        private: props.item.private && !props.item.revealed,
      })}
    >
      <div
        class={chatItemHeaderStyle({
          private: props.item.private && !props.item.revealed,
        })}
      >
        <div>{props.item.user}</div>
        <Flex title={props.item.tstamp}>{itemHour()}</Flex>
      </div>

      <Show when={!props.item.result.sets}>
        <div class={chatItemContentStyle({ old: true })}>
          {props.item.comment}
        </div>
      </Show>

      <Show when={props.item.result.sets}>
        <div class={chatItemContentStyle({})}>
          <Flex gap="medium" direction="column" grow>
            <Flex justify="space" align="center" style={{ width: "100%" }}>
              <Show
                when={loggedUser()?.settings.showRollTotal && props.item.result.total}
              >
                <DataBlock style={{ width: "45%" }}>
                  <DataLabel
                    backgroundSchema="primary300"
                    colorSchema="primary900"
                    scale="flex6"
                  >
                    <Text colorSchema="secondary">Total {modValue()}</Text>
                  </DataLabel>
                  <DataValue
                    backgroundSchema="primary300"
                    colorSchema="primary900"
                    scale="flex4"
                  >
                    <div>{props.item.result.total}</div>
                  </DataValue>
                </DataBlock>
              </Show>
              <Show
                when={
                  props.item.successRule &&
                  loggedUser()?.settings.showRollSuccess &&
                  succValue() !== ""
                }
              >
                <Show
                  when={
                    props.item.successTarget && props.item.successTarget !== 0
                  }
                >
                  <DataBlock style={{ width: "57%" }}>
                    <DataLabel
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                      scale="flex2"
                    >
                      <Flex
                        align="center"
                        justify="center"
                        style={{ gap: "2px" }}
                      >
                        <BiRegularTargetLock fill="currentcolor" />
                        <Text colorSchema="background" fontSize="smaller">
                          {props.item.successTarget}
                        </Text>
                      </Flex>
                    </DataLabel>
                    <DataValue
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                      scale="flex8"
                    >
                      <Text
                        colorSchema="background"
                        title={props.item.successRule}
                      >
                        {succValue()}
                      </Text>
                    </DataValue>
                  </DataBlock>
                </Show>
                <Show
                  when={
                    !props.item.successTarget || props.item.successTarget == 0
                  }
                >
                  <DataBlock>
                    <DataValue
                      backgroundSchema="primary700"
                      colorSchema="primary100"
                    >
                      <Text
                        colorSchema="background"
                        title={props.item.successRule}
                      >
                        {succValue()}
                      </Text>
                    </DataValue>
                  </DataBlock>
                </Show>
              </Show>
            </Flex>

            <Flex
              align="center"
              grow
              style={{ "flex-wrap": "wrap", gap: "0px" }}
            >
              <For each={props.item.result.sets}>
                {(set) => (
                  <DataBlock style={{ flex: 1 }}>
                    <DataLabel
                      scale="flex3"
                      style={{
                        "padding-bottom": "0px",
                        "padding-top": "0px",
                      }}
                    >
                      <Text colorSchema="secondary">{`${set.num}${set.type}: `}</Text>
                    </DataLabel>
                    <DataValue
                      scale="flex7"
                      style={{
                        "justify-content": "start",
                        "padding-bottom": "0px",
                        "padding-top": "0px",
                      }}
                    >
                      <Text>{set.rolls.map((r) => r.value).join(", ")}</Text>
                    </DataValue>
                  </DataBlock>
                )}
              </For>
            </Flex>
          </Flex>

          <Flex align="center" justify="end">
            <Show
              when={
                props.item.comment !== undefined && props.item.comment !== ""
              }
            >
              <div class={chatItemCommentStyle}>{props.item.comment}</div>
            </Show>
            <Show when={myPrivate()}>
              <Alert open={revOpen()} onOpenChange={setRevOpen}>
                <AlertTrigger title="Reveal private roll">
                  <FaSolidEyeSlash color={themeVars.info900} />
                </AlertTrigger>
                <AlertContent title="Reveal">
                  <Text>Reveal {props.item.result.notation} roll?</Text>
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
