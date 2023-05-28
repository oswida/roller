import { Component, Show } from "solid-js";
import { Flex } from "../Flex";
import { datablockStyle } from "./styles.css";

type Props = {
    left?: any;
    right?: any;
    leftBackground?: "secondary" | "none" | "accent";
    rightBackground?: "secondary" | "none" | "accent";
}

export const DataBlock: Component<Props> = ({ left, right, leftBackground, rightBackground }) => {
    return <Flex style={{ "justify-content": "space-between" }} gap="none">
        <Show when={left}>
            <div class={datablockStyle({ position: 'left', background: leftBackground })}>{left}</div>
        </Show>
        <Show when={right}>
            <div class={datablockStyle({ position: 'right', background: rightBackground })}>{right}</div>
        </Show>
    </Flex>
}