import { Component, For, Match, Switch } from "solid-js";
import { CharTemplateItem } from "~/common";
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

export const CsItem: Component<Props> = ({ item }) => {
  return (
    <Switch>
      <Match when={item.itype === "row"}>
        <Flex gap="medium">
          <For each={item.items}>{(it) => <CsItem item={it} />}</For>
        </Flex>
      </Match>

      <Match when={item.itype === "attr"}>
        <TplAttr item={item} />
      </Match>

      <Match when={item.itype === "attr_wide"}>
        <TplAttr item={item} wide />
      </Match>

      <Match when={item.itype === "attr_max"}>
        <TplAttrMax item={item} />
      </Match>

      <Match when={item.itype === "resource"}>
        <TplResource item={item} />
      </Match>

      <Match when={item.itype === "resource_square"}>
        <TplResource item={item} square />
      </Match>

      <Match when={item.itype === "state_resource"}>
        <TplResource item={item} state />
      </Match>

      <Match when={item.itype === "state_resource_square"}>
        <TplResource item={item} state square />
      </Match>

      <Match when={item.itype === "text"}>
        <TplText item={item} />
      </Match>

      <Match when={item.itype === "text_check"}>
        <TplTextCheck item={item} />
      </Match>

      <Match when={item.itype === "text_check_circle"}>
        <TplTextCheck item={item} circle />
      </Match>

      <Match when={item.itype === "check"}>
        <TplCheck item={item} />
      </Match>

      <Match when={item.itype === "check_circle"}>
        <TplCheck item={item} circle />
      </Match>

      <Match when={item.itype === "label"}>
        <TplLabel item={item} />
      </Match>

      <Match when={item.itype === "computed"}>
        <TplCompute item={item} />
      </Match>

      <Match when={item.itype === "big_text"}>
        <TplBigText item={item} />
      </Match>

      <Match when={item.itype === "text_list"}>
        <TplTextList item={item} />
      </Match>

      <Match when={item.itype === "text_list_check"}>
        <TplTextList item={item} checkable />
      </Match>

      <Match when={item.itype === "select"}>
        <TplSelect item={item} />
      </Match>

      <Match when={item.itype === "counter"}>
        <TplCounter item={item} />
      </Match>

      <Match when={item.itype === "counter_check"}>
        <TplCounter item={item} checkable />
      </Match>
    </Switch>
  );
};
