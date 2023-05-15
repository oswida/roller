import { RadioGroup as RG } from "@kobalte/core";
import { rgItemStyle, rgLabelStyle, rgRadioIndicatorStyle, rgRadioInputStyle, rgRadioLabelStyle, rgRootStyle } from "./styles.css";
import { Component, For, Show } from "solid-js";
import { Text } from "../Text"
import { Flex } from "../Flex";

type Props = {
    variant: "line" | "list";
    label?: string;
    items: string[];
}

export const RadioGroup: Component<Props> = ({ label, items, variant }) => {
    return <RG.Root class={rgRootStyle}>
        <Show when={label}>
            <RG.Label class={rgLabelStyle}>
                <Text>{label}</Text>
            </RG.Label>
        </Show>
        <Flex gap="medium" style={{ "flex-wrap": "wrap" }} direction={variant == "line" ? "row" : "column"}>
            <For each={items}>
                {(it) => (
                    <RG.Item value={it} class={rgItemStyle}>
                        <RG.ItemInput />
                        <RG.ItemControl class={rgRadioInputStyle}>
                            <RG.ItemIndicator class={rgRadioIndicatorStyle} />
                        </RG.ItemControl>
                        <RG.ItemLabel class={rgRadioLabelStyle}>{it}</RG.ItemLabel>
                    </RG.Item>
                )}
            </For>
        </Flex>
        {/* <RG.Description /> */}
        {/* <RG.ErrorMessage /> */}
    </RG.Root>
}