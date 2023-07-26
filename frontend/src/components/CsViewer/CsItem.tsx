import { Component, For, Match, Switch, createMemo } from "solid-js";
import {
  CTIAttrData,
  CTIContainerData,
  CTITextData,
  CharTemplateItem,
} from "~/common";
import { Flex } from "../Flex";
import { TplAttr } from "./elements/TplAttr";
import { TplAttrMax } from "./elements/TplAttrMax";
import { TplBigText } from "./elements/TplBigText";
import { TplCheck } from "./elements/TplCheck";
import { TplCompute } from "./elements/TplCompute";
import { TplCounter } from "./elements/TplCounter";
import { TplLabel } from "./elements/TplLabel";
import { TplResource } from "./elements/TplResource";
import { TplSelect } from "./elements/TplSelect";
import { TplText } from "./elements/TplText";
import { TplTextCheck } from "./elements/TplTextCheck";
import { TplTextList } from "./elements/TplTextList";

type Props = {
  item: CharTemplateItem;
};

export const CsItem: Component<Props> = (props) => {
  const is_large_text = createMemo(() => {
    const d = props.item.data as CTITextData;
    if (!d) return false;
    if (d.large) return true;
    return false;
  });

  const is_check_text = createMemo(() => {
    const d = props.item.data as CTITextData;
    if (!d) return false;
    if (d.check) return true;
    return false;
  });

  return (
    <Switch>
      <Match when={props.item.itype === "row"}>
        <Flex gap="medium" grow>
          <For each={(props.item.data as CTIContainerData).items}>
            {(it) => <CsItem item={it} />}
          </For>
        </Flex>
      </Match>

      <Match when={props.item.itype === "column"}>
        <Flex gap="medium" direction="column" grow>
          <For each={(props.item.data as CTIContainerData).items}>
            {(it) => <CsItem item={it} />}
          </For>
        </Flex>
      </Match>

      <Match
        when={
          props.item.itype === "attr" &&
          !(props.item.data as CTIAttrData).withMax
        }
      >
        <TplAttr item={props.item} />
      </Match>

      <Match
        when={
          props.item.itype === "attr" &&
          !(props.item.data as CTIAttrData).withMax
        }
      >
        <TplAttrMax item={props.item} />
      </Match>

      <Match when={props.item.itype === "resource"}>
        <TplResource item={props.item} />
      </Match>

      <Match when={props.item.itype === "text"}>
        <Switch>
          <Match when={is_check_text()}>
            <TplTextCheck item={props.item} />
          </Match>
          <Match when={is_large_text()}>
            <TplBigText item={props.item} />
          </Match>
          <Match when={!is_large_text() && !is_check_text()}>
            <TplText item={props.item} />
          </Match>
        </Switch>
      </Match>

      <Match when={props.item.itype === "check"}>
        <TplCheck item={props.item} />
      </Match>

      <Match when={props.item.itype === "label"}>
        <TplLabel item={props.item} />
      </Match>

      <Match when={props.item.itype === "computed"}>
        <TplCompute item={props.item} />
      </Match>

      <Match when={props.item.itype === "list"}>
        <TplTextList item={props.item} />
      </Match>

      <Match when={props.item.itype === "select"}>
        <TplSelect item={props.item} />
      </Match>

      <Match when={props.item.itype === "counter"}>
        <TplCounter item={props.item} />
      </Match>

      {/* <Match when={props.item.itype === "counter_check"}>
        <TplCounter item={props.item} checkable />
      </Match> */}
    </Switch>
  );
};
