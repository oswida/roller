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
import { Button } from "../../Button";
import { IoReload } from "solid-icons/io";

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
    if (v > (data().max ? data()?.max : 1)) v = data().max ? data().max : 1;
    info.values[props.item.id] = v;
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    centPublish(netTopic(topicCsInfo), info);
  };

  const reset = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[props.item.id] = props.item.initialValue
      ? props.item.initialValue
      : 0;
    updateCsStorage(info);
    centPublish(netTopic(topicCsInfo), info);
  };

  const dot_label = (idx: number) => {
    const d = data();
    if (!d || !d.dotLabels) return undefined;
    if (idx >= d.dotLabels.length) return undefined;
    return d.dotLabels[idx];
  };

  if (!data() || !data().max) return <></>;

  return (
    <Flex direction="column" gap="medium" grow>
      <Flex align="center" gap="medium" grow justify="space">
        <Text fontSize="smaller" colorSchema="secondary">
          {props.item.name}
        </Text>
        <Flex>
          <TplHintBlock hint={props.item.hint} />
          <Button onClick={reset}>
            <IoReload />
          </Button>
        </Flex>
      </Flex>
      <Flex gap="small" align="center" grow>
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={data()?.leftLabel}>
            <Text fontSize="smaller">{data()?.leftLabel}</Text>
          </Show>
          <Show when={isCsOwner(currentCs())}>
            <div class={csTplIconStyle} onClick={() => incNumValue(false)}>
              <FaSolidMinus style={{ fill: "currentcolor" }} />
            </div>
          </Show>
        </Flex>
        <Flex
          grow
          style={{ "flex-wrap": "wrap" }}
          align="center"
          justify="center"
        >
          <For each={new Array(data()?.max).fill(" ")}>
            {(it, idx) => (
              <TplCheckBlock
                checked={() => idx() < numValue()}
                circle={data()?.shape && data()?.shape == "circle"}
                color={props.item.color}
                hint={dot_label(idx())}
              />
            )}
          </For>
        </Flex>
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={data()?.rightLabel}>
            <Text fontSize="smaller">{data()?.rightLabel}</Text>
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
