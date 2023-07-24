import { Component, For, Match, Switch } from "solid-js";
import {
  CharTemplateItem,
} from "~/common";
import { Flex } from "../Flex";
import { TplAttr } from "./elements/TplAttr";
import { TplAttrMax } from "./elements/TplAttrMax";
import { TplBigText } from "./elements/TplBigText";
import { TplCheck } from "./elements/TplCheck";
import { TplCompute } from "./elements/TplCompute";
import { TplLabel } from "./elements/TplLabel";
import { TplResource } from "./elements/TplResource";
import { TplSelect } from "./elements/TplSelect";
import { TplText } from "./elements/TplText";
import { TplTextCheck } from "./elements/TplTextCheck";
import { TplTextList } from "./elements/TplTextList";
import { TplCounter } from "./elements/TplCounter";

type Props = {
  item: CharTemplateItem;
};

export const CsItem: Component<Props> = (props) => {
  return (
    <Switch>
      <Match when={props.item.itype === "row"}>
        <Flex gap="medium" grow>
          <For each={props.item.items}>{(it) => <CsItem item={it} />}</For>
        </Flex>
      </Match>

      <Match when={props.item.itype === "attr"}>
        <TplAttr item={props.item} />
      </Match>

      <Match when={props.item.itype === "attr_wide"}>
        <TplAttr item={props.item} wide />
      </Match>

      <Match when={props.item.itype === "attr_max"}>
        <TplAttrMax item={props.item} />
      </Match>

      <Match when={props.item.itype === "resource"}>
        <TplResource item={props.item} />
      </Match>

      <Match when={props.item.itype === "resource_square"}>
        <TplResource item={props.item} square />
      </Match>

      <Match when={props.item.itype === "state_resource"}>
        <TplResource item={props.item} state />
      </Match>

      <Match when={props.item.itype === "state_resource_square"}>
        <TplResource item={props.item} state square />
      </Match>

      <Match when={props.item.itype === "text"}>
        <TplText item={props.item} />
      </Match>

      <Match when={props.item.itype === "text_check"}>
        <TplTextCheck item={props.item} />
      </Match>

      <Match when={props.item.itype === "text_check_circle"}>
        <TplTextCheck item={props.item} circle />
      </Match>

      <Match when={props.item.itype === "check"}>
        <TplCheck item={props.item} />
      </Match>

      <Match when={props.item.itype === "check_circle"}>
        <TplCheck item={props.item} circle />
      </Match>

      <Match when={props.item.itype === "label"}>
        <TplLabel item={props.item} />
      </Match>

      <Match when={props.item.itype === "computed"}>
        <TplCompute item={props.item} />
      </Match>

      <Match when={props.item.itype === "big_text"}>
        <TplBigText item={props.item} />
      </Match>

      <Match when={props.item.itype === "text_list"}>
        <TplTextList item={props.item} />
      </Match>

      <Match when={props.item.itype === "text_list_check"}>
        <TplTextList item={props.item} checkable />
      </Match>

      <Match when={props.item.itype === "select"}>
        <TplSelect item={props.item} />
      </Match>

      <Match when={props.item.itype === "counter"}>
        <TplCounter item={props.item} />
      </Match>

      <Match when={props.item.itype === "counter_check"}>
        <TplCounter item={props.item} checkable />
      </Match>
    </Switch>
  );
};
