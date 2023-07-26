import { Component } from "solid-js";
import { CharTemplateItem } from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { themeVars } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

export const TplLabel: Component<Props> = (props) => {
  return (
    <Flex justify="space" align="center" grow>
      <Flex align="center" grow>
        <Text
          style={{
            color: props.item.color ? props.item.color : themeVars.info900,
          }}
        >
          {props.item.description}
        </Text>
        <TplHintBlock hint={props.item.hint} />
      </Flex>
      <Flex align="center">
        <TplRollBlock
          item={props.item}
          value={() =>
            props.item.initialValue ? props.item.initialValue : "0"
          }
        />
      </Flex>
    </Flex>
  );
};
