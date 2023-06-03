import { Component, For } from "solid-js";
import { Accordion as Ac } from "@kobalte/core";
import { JSX } from "solid-js/web/types/jsx";
import { accordionContentStyle, accordionHeaderStyle, accordionRootStyle, accordionTriggerStyle } from "./styles.css";
import { FaSolidChevronDown } from "solid-icons/fa";

export type AccordionOption = {
    id: string;
    title: string;
    content: JSX.Element;
}

type Props = {
    children: AccordionOption[];
    collapsible?: boolean;
    multiple?: boolean;
    colorSchema?: "primary" | "secondary" | "accent";
    value?: () => string[];
    onChange?: (value: string[]) => void;
}

export const Accordion: Component<Props> = ({ children, collapsible, multiple, colorSchema, value, onChange }) => {

    return <Ac.Root
        onChange={onChange}
        class={accordionRootStyle}
        collapsible={collapsible}
        multiple={multiple}
        value={value ? value() : undefined}>
        <For each={children}>
            {(it) => (
                <Ac.Item value={it.id} >
                    <Ac.Header class={accordionHeaderStyle({ colorSchema: colorSchema })} >
                        {it.title}
                        <Ac.Trigger class={accordionTriggerStyle}>
                            <FaSolidChevronDown />
                        </Ac.Trigger>
                    </Ac.Header>
                    <Ac.Content class={accordionContentStyle} >
                        {it.content}
                    </Ac.Content>
                </Ac.Item>
            )}
        </For>
    </Ac.Root >
}