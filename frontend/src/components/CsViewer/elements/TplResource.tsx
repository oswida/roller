import { FaSolidMinus, FaSolidPlus } from "solid-icons/fa";
import { Component, For, Show, createMemo } from "solid-js";
import {
  CTIResourceData,
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { charTemplates } from "~/template";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { actionCompute } from "../actions";
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { csTplIconStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

export const TplResource: Component<Props> = (props) => {
  const data = createMemo(() => {
    return props.item.data as CTIResourceData;
  });

  const numValue = createMemo(() => {
    const info = currentCs();
    if (!info) return 0;
    if (!info.values[props.item.id]) {
      if (props.item.initialValue)
        info.values[props.item.id] = props.item.initialValue;
      else info.values[props.item.id] = 0;
    }
    const num = Number.parseInt(info.values[props.item.id]);
    if (Number.isNaN(num)) return 0;
    return num;
  });

  const incNumValue = (up: boolean) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    let v = numValue();
    if (up) v += 1;
    else v -= 1;
    if (v < 0) v = 0;
    if (v > (data().max ? data().max : 1)) v = data().max ? data().max : 1;
    info.values[props.item.id] = v;
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }

    updateCsStorage(info);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  return (
    <Flex direction="column" gap="small">
      <Flex align="center" gap="medium">
        <Text fontSize="smaller" colorSchema="secondary">
          {props.item.name}
        </Text>
        <TplHintBlock hint={props.item.hint} />
      </Flex>
      <Flex gap="small" align="center">
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={data().leftLabel}>
            <Text fontSize="smaller">{data().leftLabel}</Text>
          </Show>
          <Show when={isCsOwner(currentCs())}>
            <div class={csTplIconStyle} onClick={() => incNumValue(false)}>
              <FaSolidMinus style={{ fill: "currentcolor" }} />
            </div>
          </Show>
        </Flex>
        <For each={new Array(data().max).fill(" ")}>
          {(it, idx) => (
            <TplCheckBlock
              checked={() => idx() < numValue()}
              circle={data().shape && data().shape == "circle"}
              color={props.item.color}
            />
          )}
        </For>
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={data().rightLabel}>
            <Text fontSize="smaller">{data().rightLabel}</Text>
          </Show>
          <Show when={isCsOwner(currentCs())}>
            <div class={csTplIconStyle} onClick={() => incNumValue(true)}>
              <FaSolidPlus style={{ fill: "currentcolor" }} />
            </div>
          </Show>
        </Flex>
      </Flex>
    </Flex>
  );
};
