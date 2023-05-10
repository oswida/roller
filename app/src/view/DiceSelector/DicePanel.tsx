import { Component, Match, Switch } from "solid-js";
import { DiceEntry } from "./DiceEntry";
import { dicePanelStyle } from "./styles.css";
import { appSettings } from "~/common";

export const DicePanel: Component = () => {
  return (
    <Switch>
      <Match when={!appSettings().genesysDice}>
        <div class={dicePanelStyle}>
          <DiceEntry face="4" label="4" />
          <DiceEntry face="6" label="6" />
          <DiceEntry face="8" label="8" />
          <DiceEntry face="10" label="10" />
          <DiceEntry face="12" label="12" />
          <DiceEntry face="20" label="20" />
          <DiceEntry face="100" label="100" />
          <DiceEntry face="f" label="Fat" />
        </div>
      </Match>
      <Match when={appSettings().genesysDice}>
        <div class={dicePanelStyle}>
          <DiceEntry face="boo" label="Boo" />
          <DiceEntry face="abi" label="Abi" />
          <DiceEntry face="pro" label="Pro" />
          <DiceEntry face="set" label="Set" />
          <DiceEntry face="cha" label="Cha" />
          <DiceEntry face="dif" label="Dif" />
        </div>
      </Match>
    </Switch>
  );
};
