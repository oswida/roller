import { Component, For } from "solid-js";
import { Accordion as Ac } from "@kobalte/core";
import { JSX } from "solid-js/web/types/jsx";
import {
  accordionContentStyle,
  accordionHeaderStyle,
  accordionRootStyle,
  accordionTriggerStyle,
} from "./styles.css";
import { FaSolidChevronDown } from "solid-icons/fa";

export type AccordionOption = {
  id: string;
  title: string;
  content: JSX.Element;
};

type Props = {
  children: AccordionOption[];
  collapsible?: boolean;
  multiple?: boolean;
  colorSchema?: "primary" | "secondary" | "accent";
  backgroundSchema?: "ghost" | "secondary" | "transparent";
  value?: string[];
  onChange?: (value: string[]) => void;
};

export const Accordion: Component<Props> = (props) => {
  return (
    <Ac.Root
      onChange={props.onChange}
      class={accordionRootStyle}
      collapsible={props.collapsible}
      multiple={props.multiple}
      value={props.value ? props.value : undefined}
    >
      <For each={props.children}>
        {(it) => (
          <Ac.Item value={it.id}>
            <Ac.Header
              class={accordionHeaderStyle({
                colorSchema: props.colorSchema,
                backgroundSchema: props.backgroundSchema,
              })}
            >
              {it.title}
              <Ac.Trigger
                class={accordionTriggerStyle({
                  colorSchema: props.colorSchema,
                })}
              >
                <FaSolidChevronDown fill="currentColor" />
              </Ac.Trigger>
            </Ac.Header>
            <Ac.Content class={accordionContentStyle}>{it.content}</Ac.Content>
          </Ac.Item>
        )}
      </For>
    </Ac.Root>
  );
};
