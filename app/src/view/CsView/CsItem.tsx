import { Component, ComponentProps, createMemo } from "solid-js";
import { CsInfo } from "~/common";
import { csItemStyle } from "./styles.css";
import { Flex, Text } from "~/component";


type Props = {
    item: CsInfo;
    selected: () => CsInfo | undefined;
    adjustSize: () => void;
}

export const CsItem: Component<Props & ComponentProps<"div">> = ({ item, selected, adjustSize, ...rest }) => {

    const isSelected = createMemo(() => {
        const sel = selected();
        if (!sel) return false;
        return sel.id == item.id;
    });

    return <div class={csItemStyle({ sel: isSelected() })} {...rest}>
        <Flex direction="column" style={{ "justify-content": "space-between" }}>
            <Text fontSize="bigger">{item.name}</Text>
            <Text fontSize="smaller"><i>{item.template}</i></Text>
        </Flex>
    </div>
}