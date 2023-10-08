import { Select as Sel } from "@kobalte/core";
import { Component, Show } from "solid-js";
import { FaSolidCircleCheck } from "solid-icons/fa";
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
};

type Props = {
  options: SelectItem[];
  selected?: SelectItem | undefined;
  onChange: (value: SelectItem) => void;
  label?: string;
  labelLeft?: boolean;
  modal?: boolean;
};

export const Select: Component<Props> = (props) => {
  return (
    <Sel.Root
      modal={props.modal}
      placeholder="--- select ---"
      onChange={props.onChange}
      optionValue="id"
      optionTextValue="label"
      value={props.selected ? props.selected : undefined}
      options={props.options}
      itemComponent={(props) => (
        <Sel.Item item={props.item} class={selectItemStyle}>
          <Sel.ItemLabel>{props.item.rawValue.label}</Sel.ItemLabel>
          <Sel.ItemIndicator>
            <FaSolidCircleCheck style={{ fill: "currentcolor" }} />
          </Sel.ItemIndicator>
        </Sel.Item>
      )}
    >
      <Flex
        direction={props.labelLeft ? "row" : "column"}
        gap="small"
        align={props.labelLeft ? "center" : undefined}
        justify={props.labelLeft ? "center" : undefined}
        grow
      >
        <Show when={props.label}>
          <Sel.Label class={selectLabelStyle}>{props.label}</Sel.Label>
        </Show>
        <Sel.Trigger class={selectTriggerStyle}>
          <Sel.Value<SelectItem>>
            {(state) =>
              state.selectedOption()
                ? state.selectedOption().label
                : "--- select ---"
            }
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
