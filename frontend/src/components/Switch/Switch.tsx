import { Switch as Sw } from "@kobalte/core";
import { Accessor, Component } from "solid-js";
import { Text } from "../Text";
import {
  switchControlStyle,
  switchRootStyle,
  switchThumbStyle,
} from "./styles.css";

type Props = {
  label: string;
  checked: Accessor<boolean>;
  setChecked: (value: boolean) => void;
};

export const Switch: Component<Props> = (props) => {
  return (
    <Sw.Root
      class={switchRootStyle}
      checked={props.checked()}
      onChange={props.setChecked}
    >
      <Sw.Label>
        <Text fontSize="smaller" colorSchema="secondary">
          {props.label}
        </Text>
      </Sw.Label>
      <Sw.Input />
      <Sw.Control class={switchControlStyle({ checked: props.checked() })}>
        <Sw.Thumb class={switchThumbStyle({ checked: props.checked() })} />
      </Sw.Control>
    </Sw.Root>
  );
};
