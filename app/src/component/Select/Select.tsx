import { Select as Sel } from "@kobalte/core";
import { Component, Show } from "solid-js";
import {
  FaSolidCircleCheck,
} from "solid-icons/fa";
import {
  selectItemStyle,
  selectLabelStyle,
  selectListStyle,
  selectListboxStyle,
  selectTriggerStyle,
} from "./styles.css";
import { Flex } from "../Flex";

export type SelectItem = {
  id: string;
  label: string;
}

type Props = {
  options: () => SelectItem[];
  selected?: () => SelectItem | undefined;
  onChange: (value: SelectItem) => void;
  label?: string;
  labelLeft?: boolean;
  modal?: boolean;
};

export const Select: Component<Props> = ({ options, selected, onChange, label, modal, labelLeft }) => {
  return (
    <Sel.Root
      modal={modal}
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
      <Flex direction={labelLeft ? "row" : "column"} gap="small" center={labelLeft ? true : undefined}>
        <Show when={label}>
          <Sel.Label class={selectLabelStyle}>{label}</Sel.Label>
        </Show>
        <Sel.Trigger class={selectTriggerStyle}>
          <Sel.Value<SelectItem>>
            {state => state.selectedOption() ? state.selectedOption().label : "---"}
          </Sel.Value>
        </Sel.Trigger>
      </Flex>

      <Sel.Portal>
        <Sel.Content class={selectListStyle}>
          <Sel.Listbox class={selectListboxStyle} />
        </Sel.Content>
      </Sel.Portal>
    </Sel.Root>
  );
};
