import { RadioGroup as RG } from "@kobalte/core";
import {
  rgItemStyle,
  rgLabelStyle,
  rgRadioIndicatorStyle,
  rgRadioInputStyle,
  rgRadioLabelStyle,
  rgRootStyle,
} from "./styles.css";
import { Component, ComponentProps, For, Show, splitProps } from "solid-js";
import { Text } from "../Text";
import { Flex } from "../Flex";

export type RadioItem = {
  id: string;
  label: string;
};

type Props = {
  variant: "line" | "list";
  label?: string;
  items: RadioItem[];
  selected?: () => string | undefined;
  onChange?: (value: string) => void;
};

export const RadioGroup: Component<Props & ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, [
    "variant",
    "label",
    "items",
    "selected",
    "onChange",
  ]);
  return (
    <RG.Root
      class={rgRootStyle}
      defaultValue={local.selected ? local.selected() : undefined}
      onChange={local.onChange}
    >
      <Show when={local.label}>
        <RG.Label class={rgLabelStyle}>
          <Text colorSchema="secondary">{local.label}</Text>
        </RG.Label>
      </Show>
      <Flex
        gap="medium"
        style={{ "flex-wrap": "wrap" }}
        direction={local.variant == "line" ? "row" : "column"}
        {...rest}
      >
        <For each={local.items}>
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
  );
};
