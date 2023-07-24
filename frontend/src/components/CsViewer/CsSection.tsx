import { CharTemplateSection } from "~/common";
import { Flex } from "../Flex";
import { CsItem } from "./CsItem";
import { Component, For } from "solid-js";

type Props = {
  item: CharTemplateSection;
};

export const CsSection: Component<Props> = (props) => {
  return (
    <Flex direction="column" gap="medium">
      <For each={props.item.items}>{(it) => <CsItem item={it} />}</For>
    </Flex>
  );
};
