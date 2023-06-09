import { Component, createMemo } from "solid-js";
import { CharTemplateItem, currentCs } from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";

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

  return (
    <Flex
      style={{
        "align-items": "center",
        "justify-content": "space-between",
      }}
    >
      <Text fontSize="smaller" colorSchema="secondary">
        {item.name}
      </Text>
      <Text>{value()}</Text>
    </Flex>
  );
};
