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
  return (
    <Flex justify="space" align="center" grow>
      <Flex align="center" grow>
        <Text style={{ color: item.color ? item.color : themeVars.info900 }}>
          {item.text}
        </Text>
        <TplHintBlock hint={item.hint} />
      </Flex>
      <Flex align="center">
        <TplRollBlock
          item={item}
          value={() => (item.initialValue ? item.initialValue : "0")}
        />
      </Flex>
    </Flex>
  );
};
