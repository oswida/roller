import { FaSolidLink, FaSolidShareNodes } from "solid-icons/fa";
import { Component, ComponentProps, Show, createMemo } from "solid-js"
import { BoardInfo } from "~/common";
import { Flex, Text } from "~/component";
import { boardItemStyle } from "./styles.css";

type Props = {
    item: BoardInfo;
    selected: () => BoardInfo | undefined;
    adjustSize: () => void;
}


export const BoardItem: Component<Props & ComponentProps<"div">> = ({ item, selected, adjustSize, ...rest }) => {
    const isSelected = createMemo(() => {
        const sel = selected();
        if (!sel) return false;
        return sel.id == item.id;
    });

    const uri = createMemo(() => {
        if (!item.bkguri || item.bkguri.trim() === "") return "";
        const url = new URL(item.bkguri);
        return url.pathname;
    });

    return <div class={boardItemStyle({ sel: isSelected() })} {...rest}>
        <Flex direction="row" style={{ "justify-content": "space-between" }}>
            <Text fontSize="bigger">{item.name}</Text>
            <Show when={item.shared}>
                <FaSolidShareNodes />
            </Show>
        </Flex>
        <div title={item.bkguri} >
            <FaSolidLink onClick={() => window.open(item.bkguri)} style={{ cursor: "pointer" }} />
        </div>
    </div>
}