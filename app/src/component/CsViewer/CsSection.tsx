import { CharTemplateSection, CsInfo } from "~/common";
import { Flex } from "../Flex";
import { CsItem } from "./CsItem";
import { Component, For } from "solid-js";

type Props = {
    item: CharTemplateSection;
}

export const CsSection: Component<Props> = ({ item }) => {
    return <Flex direction="column" gap="small">
        <For each={item.items}>
            {(it) => (<CsItem item={it} />)}
        </For>
    </Flex>
}