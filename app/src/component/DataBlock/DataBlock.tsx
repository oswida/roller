import { Component, JSX, Show, createMemo } from "solid-js";
import { Flex } from "../Flex";
import { datablockStyle } from "./styles.css";

type Props = {
    left?: JSX.Element;
    leftFunc?: () => JSX.Element;
    right?: JSX.Element;
    rightFunc?: () => JSX.Element;
    leftBackground?: "secondary" | "none" | "accent";
    rightBackground?: "secondary" | "none" | "accent";
}

export const DataBlock: Component<Props> = (
    { left, right, leftBackground, rightBackground, leftFunc, rightFunc }) => {

    const leftElement = createMemo(() => {
        if (left) return left;
        if (leftFunc) return leftFunc();
        return undefined;
    });

    const rightElement = createMemo(() => {
        if (right) return right;
        if (rightFunc) return rightFunc();
        return undefined;
    });

    return <Flex style={{ "justify-content": "space-between" }} gap="none">
        <Show when={left || leftFunc}>
            <div class={datablockStyle({ position: 'left', background: leftBackground })}>
                {leftElement()}
            </div>
        </Show>
        <Show when={right || rightFunc}>
            <div class={datablockStyle({ position: 'right', background: rightBackground })}>
                {rightElement()}
            </div>
        </Show>
    </Flex>
}