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
}

export const Accordion: Component<Props> = ({ children, collapsible, multiple }) => {

    return <Ac.Root class={accordionRootStyle} collapsible={collapsible} multiple={multiple}>
        <For each={children}>
            {(it) => (
                <Ac.Item value={it.id}>
                    <Ac.Header class={accordionHeaderStyle}>
                        {it.title}
                        <Ac.Trigger class={accordionTriggerStyle}>
                            <FaSolidChevronDown />
                        </Ac.Trigger>
                    </Ac.Header>
                    <Ac.Content class={accordionContentStyle}>
                        {it.content}
                    </Ac.Content>
                </Ac.Item>
            )}
        </For>
    </Ac.Root >
}