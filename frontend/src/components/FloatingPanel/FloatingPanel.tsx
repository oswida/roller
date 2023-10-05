import { ComponentProps, ParentComponent, splitProps } from "solid-js";
import { Flex } from "../Flex";
import { themeSpaceType } from "~/common/theme.css";
import { floatingPanelRoot } from "./style.css";

type Props = {
    top?: number;
    left?: number;
}

export const FloatingPanel: ParentComponent<Props & ComponentProps<typeof Flex>> = (props) => {
    const [local, rest] = splitProps(props, ["children", "top", "left"]);

    return <Flex class={floatingPanelRoot} {...rest} style={{ top: `${local.top}px`, left: `${local.left}px` }}>
        {local.children}
    </Flex>
}