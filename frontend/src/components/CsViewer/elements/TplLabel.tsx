import { FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show } from "solid-js";
import { CharTemplateItem } from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { themeColor } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

export const TplLabel: Component<Props> = ({ item }) => {
  return (
    <Flex>
      <Text style={{ color: item.color ? item.color : themeColor.secondary }}>
        {item.text}
      </Text>
      <Show when={item.hint && item.hint !== ""}>
        <div title={item.hint} style={{ cursor: "help" }}>
          <FaSolidCircleInfo fill={themeColor.accent} />
        </div>
      </Show>
    </Flex>
  );
};
