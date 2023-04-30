import { Select as Sel } from "@kobalte/core";
import { Component, ParentComponent } from "solid-js";
import { SelectOption } from "~/common";
import { FaSolidCheck } from "solid-icons/fa";

type Props = {
  options: SelectOption[];
  selected: string;
};

export const Select: ParentComponent<Props> = ({
  options,
  children,
  selected,
}) => {
  return (
    <Sel.Root
      options={options.map((it) => it.value)}
      itemComponent={(props: any) => (
        <Sel.Item item={props.item} class="select__item">
          <Sel.ItemLabel>{props.item.rawValue}</Sel.ItemLabel>
          <Sel.ItemIndicator class="select__item-indicator">
            <FaSolidCheck />
          </Sel.ItemIndicator>
        </Sel.Item>
      )}
    >
      <Sel.Trigger>
        <Sel.Value>{selected}</Sel.Value>
      </Sel.Trigger>
      <Sel.Portal>
        <Sel.Content class="select__content">
          <Sel.Listbox class="select__listbox" />
        </Sel.Content>
      </Sel.Portal>
    </Sel.Root>
  );
};
