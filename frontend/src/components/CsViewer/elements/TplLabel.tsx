import { Component, Show } from "solid-js";
import {
  CharTemplateItem,
  CharTemplateItemRoll,
  currentCs,
  isCsOwner,
} from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { themeVars } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

export const TplLabel: Component<Props> = ({ item }) => {
  const value = (roll: CharTemplateItemRoll) => {
    const cs = currentCs();
    if (!cs || !cs.values || !roll.valField) return 0;
    return cs.values[roll.valField];
  };

  return (
    <Flex justify="space">
      <Flex>
        <Text style={{ color: item.color ? item.color : themeVars.info900 }}>
          {item.text}
        </Text>
        <TplHintBlock hint={item.hint} />
      </Flex>
      <Flex>
        <TplRollBlock
          item={item}
          value={() => (item.initialValue ? item.initialValue : "0")}
        />
      </Flex>
    </Flex>
  );
};
