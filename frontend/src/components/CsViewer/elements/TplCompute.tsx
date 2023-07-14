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
import { csTplIconStyle, tplComputedValueStyle } from "../styles.css";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { IoReload } from "solid-icons/io";
import { charTemplates } from "~/template";
import { actionCompute } from "../actions";

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
export const TplCompute: Component<Props> = ({ item }) => {
  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values) return "";
    return info.values[item.id];
  });

  const recompute = () => {
    const info = currentCs();
    if (!info || !info.values) return "";
    const tpl = charTemplates[info.template];
    if (!item.compute) return;
    const v = item.compute(item, info.values);
    info.values[item.id] = v;
    updateCsStorage(info);
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  return (
    <Flex
      style={{
        "align-items": "center",
        "justify-content": "space-between",
      }}
    >
      <Flex gap="medium">
        <Text>{item.name}</Text>
        <TplHintBlock hint={item.hint} />
      </Flex>
      <Flex>
        <Text class={tplComputedValueStyle}>{value()}</Text>
        <Show when={isCsOwner(currentCs())}>
          <div class={csTplIconStyle} onClick={recompute} title="Recompute">
            <IoReload fill="currentColor" />
          </div>
        </Show>
      </Flex>
    </Flex>
  );
};
