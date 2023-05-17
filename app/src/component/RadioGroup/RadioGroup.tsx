import { RadioGroup as RG } from "@kobalte/core";
import { rgItemStyle, rgLabelStyle, rgRadioIndicatorStyle, rgRadioInputStyle, rgRadioLabelStyle, rgRootStyle } from "./styles.css";
import { Component, For, Show } from "solid-js";
import { Text } from "../Text"
import { Flex } from "../Flex";

export type RadioItem = {
    id: string;
    label: string;
}

type Props = {
    variant: "line" | "list";
    label?: string;
    items: RadioItem[];
    selected?: () => string | undefined;
    onChange?: (value: string) => void;
}

export const RadioGroup: Component<Props> = ({ label, items, variant, selected, onChange }) => {
    return <RG.Root class={rgRootStyle} defaultValue={selected ? selected() : undefined} onChange={onChange}>
        <Show when={label}>
            <RG.Label class={rgLabelStyle}>
                <Text colorSchema="secondary">{label}</Text>
            </RG.Label>
        </Show>
        <Flex gap="medium" style={{ "flex-wrap": "wrap" }} direction={variant == "line" ? "row" : "column"}>
            <For each={items}>
                {(it) => (
                    <RG.Item value={it.id} class={rgItemStyle}>
                        <RG.ItemInput />
                        <RG.ItemControl class={rgRadioInputStyle}>
                            <RG.ItemIndicator class={rgRadioIndicatorStyle} />
                        </RG.ItemControl>
                        <RG.ItemLabel class={rgRadioLabelStyle}>{it.label}</RG.ItemLabel>
                    </RG.Item>
                )}
            </For>
        </Flex>
        {/* <RG.Description /> */}
        {/* <RG.ErrorMessage /> */}
    </RG.Root>
}