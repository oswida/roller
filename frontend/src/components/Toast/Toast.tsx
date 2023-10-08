import { Toast as T, toaster } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { Component, Show } from "solid-js";
import { toastDescStyle, toastRootStyle } from "./style.css";
import { Flex } from "../Flex";
import { buttonStyle } from "../Button/styles.css";

type Props = {
    title?: string;
    message: string;
    id?: number;
}

export const Toast: Component<Props> = ({ title, message, id = 1 }) => {
    return <T.Root toastId={id} class={toastRootStyle}>
        <Flex align="center" justify="space" gap="medium">
            <Show when={title}>
                <Flex direction="column" grow>
                    <T.Title>{title}</T.Title>
                    <T.Description class={toastDescStyle}>
                        {message}
                    </T.Description>
                </Flex>
            </Show>
            <Show when={!title}>
                <T.Description class={toastDescStyle}>
                    {message}
                </T.Description>
            </Show>
            <T.CloseButton class={buttonStyle({ variant: "ghosticon" })}>
                <FaSolidXmark />
            </T.CloseButton>
        </Flex>
    </T.Root>
}


export const showToast = (p: Props) => {
    toaster.show(props => (
        <Toast id={p.id} message={p.message} title={p.title} />
    ))
}