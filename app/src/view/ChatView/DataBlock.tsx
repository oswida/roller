import { Component, Show } from "solid-js";
import { chatDatablockStyle } from "./styles.css";
import { Flex } from "~/component";

type Props = {
    left?: any;
    right?: any;
    leftBackground?: "secondary" | "none";
    rightBackground?: "secondary" | "none";
}

export const DataBlock: Component<Props> = ({ left, right, leftBackground, rightBackground }) => {
    return <Flex style={{ "justify-content": "space-between" }} gap="none">
        <Show when={left}>
            <div class={chatDatablockStyle({ position: 'left', background: leftBackground })}>{left}</div>
        </Show>
        <Show when={right}>
            <div class={chatDatablockStyle({ position: 'right', background: rightBackground })}>{right}</div>
        </Show>
    </Flex>
}