import { FaSolidCircleInfo } from "solid-icons/fa"
import { Show } from "solid-js"
import { tplHintIconStyle } from "../styles.css"
import { Component } from "solid-js"

type Props = {
    hint: string | undefined;
}

export const TplHintBlock: Component<Props> = ({ hint }) => {
    return <Show when={hint && hint !== ""}>
        <div title={hint} style={{ cursor: "help" }}>
            <FaSolidCircleInfo class={tplHintIconStyle} />
        </div>
    </Show>
}