import { Component, Show, createMemo } from "solid-js";
import {
  CTICheckData,
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { TplCheckBlock } from "../blocks/TplCheckBlock";

type Props = {
  item: CharTemplateItem;
};

export const TplCheck: Component<Props> = (props) => {
  const checked = createMemo(() => {
    const info = currentCs();
    if (!info) return false;
    return info.values[props.item.id];
  });

  const toggle = () => {
    const info = currentCs();
    if (!isCsOwner(info)) return;
    if (!info) return false;
    if (!info.values[props.item.id]) {
      info.values[props.item.id] = true;
    } else {
      info.values[props.item.id] = false;
    }
    updateCsStorage(info);
    setCurrentCs(info);
    centPublish(netTopic(topicCsInfo), info);
  };

  const data = createMemo(() => {
    return props.item.data as CTICheckData;
  });

  return (
    <Flex justify="space" grow>
      <Flex gap="medium" align="center">
        <TplCheckBlock
          hint={data().dotLabel ? data().dotLabel : undefined}
          checked={checked}
          circle={data().shape && data().shape == "circle"}
          color={props.item.color}
          onClick={isCsOwner(currentCs()) ? toggle : undefined}
        />
        <Text>{props.item.description}</Text>
        <TplHintBlock hint={props.item.hint} />
      </Flex>
      <Show when={checked()}>
        <Flex>
          <TplRollBlock item={props.item} />
        </Flex>
      </Show>
    </Flex>
  );
};
