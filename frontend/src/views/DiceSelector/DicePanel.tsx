import { Component } from "solid-js";
import { DiceEntry } from "./DiceEntry";
import { dicePanelStyle } from "./styles.css";

export const DicePanel: Component = () => {
  return (
    <div class={dicePanelStyle({})}>
      <DiceEntry face="4" label="4" />
      <DiceEntry face="6" label="6" />
      <DiceEntry face="8" label="8" />
      <DiceEntry face="10" label="10" />
      <DiceEntry face="12" label="12" />
      <DiceEntry face="20" label="20" />
      <DiceEntry face="100" label="100" />
      <DiceEntry face="f" label="F" />
    </div>
  );
};
