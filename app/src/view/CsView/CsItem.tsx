import { Component, ComponentProps, Show, createMemo } from "solid-js";
import { CsInfo } from "~/common";
import { csItemStyle } from "./styles.css";
import { Flex, Text } from "~/component";
import { csTemplates } from "~/template";
import { FaSolidShareNodes } from "solid-icons/fa";


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

    const templateName = createMemo(() => {
        const tpl = csTemplates[item.template];
        if (!tpl) return "";
        return tpl.name;
    });

    return <div class={csItemStyle({ sel: isSelected() })} {...rest}>
        <Flex direction="row" style={{ "justify-content": "space-between" }}>
            <Text fontSize="bigger">{item.name}</Text>
            <Show when={item.shared}>
                <FaSolidShareNodes />
            </Show>
        </Flex>
        <Text fontSize="smaller"><i>{templateName()}</i></Text>
    </div>
}