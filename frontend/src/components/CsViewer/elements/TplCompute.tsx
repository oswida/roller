import { IoReload } from "solid-icons/io";
import { Component, Show, createMemo } from "solid-js";
import {
  CTIComputedData,
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { charTemplates } from "~/template";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { csTplIconStyle, tplComputedValueStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

// Example template parts

// computeDeps: {
//     siła: ["komp1"],
//   },

// {
//     title: "Test",
//     items: [
//       {
//         id: "komp1",
//         name: "komp1",
//         itype: "computed",
//         compute: (item: CharTemplateItem, values: Record<string, any>) => {
//           const v1 = Number.parseInt(values["siła"][0]);
//           if (Number.isNaN(v1)) return "0";
//           return `${v1 + 5}`;
//         },
//       },
//     ],
//   },

// Value computed automatically from another fields
export const TplCompute: Component<Props> = (props) => {
  const data = createMemo(() => {
    return props.item.data as CTIComputedData;
  });

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values || info.values[props.item.id] === undefined)
      return "";
    return info.values[props.item.id];
  });

  const recompute = () => {
    const info = currentCs();
    if (!info || !info.values) return "";
    const tpl = charTemplates[info.template];
    if (!data().compute) return;
    const v = data().compute(props.item, info.values);
    info.values[props.item.id] = v;
    updateCsStorage(info);
    centPublish(netTopic(topicCsInfo), info);
  };

  if (!data() || !data().compute) return <></>;

  return (
    <Flex align="center" justify="space" grow>
      <Flex gap="medium" align="center">
        <Text>{props.item.name}</Text>
        <TplHintBlock hint={props.item.hint} />
      </Flex>
      <Flex align="center">
        <Show when={value() && value().toString().trim() !== ""}>
          <Text class={tplComputedValueStyle}>{value()}</Text>
        </Show>
        <Show when={isCsOwner(currentCs())}>
          <div class={csTplIconStyle} onClick={recompute} title="Recompute">
            <IoReload fill="currentColor" />
          </div>
        </Show>
      </Flex>
    </Flex>
  );
};
