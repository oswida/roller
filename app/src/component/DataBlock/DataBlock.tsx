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
    width?: string;
}

export const DataBlock: Component<Props> = (
    { left, right, leftBackground, rightBackground, leftFunc, rightFunc, width }) => {

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

    return <Flex style={{ "justify-content": "space-between", width: width }} gap="none">
        <Show when={left || leftFunc}>
            <div
                style={{ width: width ? (right || rightFunc ? "50%" : undefined) : undefined }}
                class={datablockStyle({ position: 'left', background: leftBackground })}>
                {leftElement()}
            </div>
        </Show>
        <Show when={right || rightFunc}>
            <div
                style={{ width: width ? (left || leftFunc ? "50%" : undefined) : undefined }}
                class={datablockStyle({ position: 'right', background: rightBackground })}>
                {rightElement()}
            </div>
        </Show>
    </Flex>
}