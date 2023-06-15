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
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { TplCheckBlock } from "../blocks/TplCheckBlock";

type Props = {
  item: CharTemplateItem;
  circle?: boolean;
};

export const TplCheck: Component<Props> = ({ item, circle }) => {

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
    <Flex style={{ "justify-content": "space-between" }}>
      <Flex gap="medium" style={{ "align-items": "center" }}>
        <TplCheckBlock
          checked={checked}
          circle={circle}
          color={item.color}
          onClick={isCsOwner(currentCs()) ? toggle : undefined} />
        <Text>{item.text}</Text>
        <TplHintBlock hint={item.hint} />
      </Flex>
      <Show when={checked()}>
        <Flex>
          <TplRollBlock item={item} />
        </Flex>
      </Show>
    </Flex>
  );
};
