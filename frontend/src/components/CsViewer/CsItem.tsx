import { Component, For, Match, Switch } from "solid-js";
import { CharTemplateItem } from "~/common";
import { TplAttr } from "./elements/TplAttr";
import { TplAttrMax } from "./elements/TplAttrMax";
import { TplCheck } from "./elements/TplCheck";
import { TplCompute } from "./elements/TplCompute";
import { TplLabel } from "./elements/TplLabel";
import { TplResource } from "./elements/TplResource";
import { TplText } from "./elements/TplText";
import { TplTextCheck } from "./elements/TplTextCheck";
import { TplBigText } from "./elements/TplBigText";
import { Flex } from "../Flex";
import { TplTextList } from "./elements/TplTextList";

type Props = {
  item: CharTemplateItem;
};

export const CsItem: Component<Props> = ({ item }) => {
  return (
    <Switch>
      <Match when={item.itype === "row"}>
        <Flex gap="medium">
          <For each={item.items}>{(it) => (<CsItem item={it} />)}</For>
        </Flex>
      </Match>

      <Match when={item.itype === "attr"}>
        <TplAttr item={item} />
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
    </Switch>
  );
};
