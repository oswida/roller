import { Select as Sel } from "@kobalte/core";
import { Accessor, Component, ParentComponent, createEffect } from "solid-js";
import { SelectOption } from "~/common";
import {
  FaSolidCheck,
  FaSolidCheckDouble,
  FaSolidCheckToSlot,
  FaSolidCircleCheck,
} from "solid-icons/fa";
import { buttonStyle } from "../Button/styles.css";
import {
  selectItemStyle,
  selectListStyle,
  selectListboxStyle,
} from "./styles.css";
import { Dynamic } from "solid-js/web";

type Props = {
  options: () => string[];
  selected: () => string;
  onChange: (value: string) => void;
};

export const Select: Component<Props> = ({ options, selected, onChange }) => {
  return (
    <Sel.Root
      onChange={onChange}
      value={selected()}
      options={options()}
      itemComponent={(props: any) => (
        <Sel.Item item={props.item} class={selectItemStyle}>
          <Sel.ItemLabel>{props.item.rawValue}</Sel.ItemLabel>
          <Sel.ItemIndicator>
            <FaSolidCircleCheck />
          </Sel.ItemIndicator>
        </Sel.Item>
      )}
    >
      <Sel.Trigger class={buttonStyle({ variant: "underline" })}>
        <Sel.Value>{(state) => state.selectedOption() as string}</Sel.Value>
      </Sel.Trigger>
      <Sel.Portal>
        <Sel.Content class={selectListStyle}>
          <Sel.Listbox class={selectListboxStyle} />
        </Sel.Content>
      </Sel.Portal>
    </Sel.Root>
  );
};
