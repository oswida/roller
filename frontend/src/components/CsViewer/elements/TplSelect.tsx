import { Component, createMemo } from "solid-js";
import {
  CTISelectData,
  CharTemplateItem,
  centPublish,
  currentCs,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { Flex } from "../../Flex";
import { Select, SelectItem } from "../../Select";
import { TplHintBlock } from "../blocks/TplHintBlock";

type Props = {
  item: CharTemplateItem;
};

export const TplSelect: Component<Props> = (props) => {
  const data = createMemo(() => {
    return props.item.data as CTISelectData;
  });

  const items = createMemo(() => {
    if (!data()) return [];
    const labels = data()?.options;
    if (!labels) return [] as SelectItem[];
    return labels.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const selected = createMemo(() => {
    const cs = currentCs();
    let sel = {
      id: props.item.initialValue,
      label: props.item.initialValue,
    } as SelectItem;
    if (!cs) return undefined;
    const val = cs.values[props.item.id];
    if (val) {
      const flt = items().filter((it) => it.id === val);
      if (flt.length > 0) sel = flt[0];
    }
    return sel;
  });

  const change = (it: SelectItem) => {
    const cs = currentCs();
    if (!cs || !cs.values) return undefined;
    cs.values[props.item.id] = it.id;
    updateCsStorage(cs);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  if (!data() || !data().options) return <></>;

  return (
    <Flex align="center" justify="space" grow>
      <Select
        options={items}
        label={props.item.name}
        modal={true}
        selected={selected}
        onChange={change}
      />
      <TplHintBlock hint={props.item.hint} />
    </Flex>
  );
};
