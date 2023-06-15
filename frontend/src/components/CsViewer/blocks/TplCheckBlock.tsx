import { Component, Show } from "solid-js"
import { tplCheckItemStyle } from "../styles.css";

type Props = {
    checked: () => boolean;
    circle?: boolean;
    color?: string;
    onClick?: () => void;
}

export const TplCheckBlock: Component<Props> = ({ checked, circle, color, onClick }) => {
    return <>
        <Show when={checked()}>
            <div
                class={tplCheckItemStyle({ shape: circle ? "circle" : "square" })}
                style={{
                    "background-color": color ? color : "currentcolor",
                }}
                onClick={onClick}
            >
                {" "}
            </div>
        </Show>
        <Show when={!checked()}>
            <div
                class={tplCheckItemStyle({ shape: circle ? "circle" : "square" })}
                style={{
                    border: `solid 2px ${color ? color : "currentcolor"}`,
                }}
                onClick={onClick}
            >
                {" "}
            </div>
        </Show>
    </>

}