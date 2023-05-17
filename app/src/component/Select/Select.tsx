import { Select as Sel } from "@kobalte/core";
import { Component } from "solid-js";
import {
  FaSolidCircleCheck,
} from "solid-icons/fa";
import {
  selectItemStyle,
  selectListStyle,
  selectListboxStyle,
  selectTriggerStyle,
} from "./styles.css";

export type SelectItem = {
  id: string;
  label: string;
}

type Props = {
  options: () => SelectItem[];
  selected?: () => SelectItem | undefined;
  onChange: (value: SelectItem) => void;
};

export const Select: Component<Props> = ({ options, selected, onChange }) => {
  return (
    <Sel.Root
      placeholder="--- select ---"
      onChange={onChange}
      optionValue="id"
      optionTextValue="label"
      value={selected ? selected() : undefined}
      options={options()}
      itemComponent={(props) => (
        <Sel.Item item={props.item} class={selectItemStyle}>
          <Sel.ItemLabel>{props.item.rawValue.label}</Sel.ItemLabel>
          <Sel.ItemIndicator>
            <FaSolidCircleCheck />
          </Sel.ItemIndicator>
        </Sel.Item>
      )}
    >
      <Sel.Trigger class={selectTriggerStyle}>
        <Sel.Value<SelectItem>>{state => state.selectedOption() ? state.selectedOption().label : "---"}</Sel.Value>
      </Sel.Trigger>
      <Sel.Portal>
        <Sel.Content class={selectListStyle}>
          <Sel.Listbox class={selectListboxStyle} />
        </Sel.Content>
      </Sel.Portal>
    </Sel.Root>
  );
};
