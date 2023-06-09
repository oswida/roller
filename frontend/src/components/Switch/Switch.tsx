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

export const Switch: Component<Props> = ({ label, checked, setChecked }) => {
  return (
    <Sw.Root class={switchRootStyle} checked={checked()} onChange={setChecked}>
      <Sw.Label>
        <Text fontSize="smaller" colorSchema="secondary">
          {label}
        </Text>
      </Sw.Label>
      <Sw.Input />
      <Sw.Control class={switchControlStyle({ checked: checked() })}>
        <Sw.Thumb class={switchThumbStyle({ checked: checked() })} />
      </Sw.Control>
    </Sw.Root>
  );
};
