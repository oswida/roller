import { FaSolidMinus, FaSolidPlus } from "solid-icons/fa";
import { IoReload } from "solid-icons/io";
import { Component, Show, createMemo } from "solid-js";
import {
  CTICounterData,
  CharTemplateItem,
  netPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { csTplIconStyle, tplCounterStyle } from "../styles.css";
import { charTemplates } from "~/template";
import { actionCompute } from "../actions";

export type CounterItem = {
  value: number;
  checked: boolean;
};

type Props = {
  item: CharTemplateItem;
};

export const TplCounter: Component<Props> = (props) => {
  const data = createMemo(() => {
    return props.item.data as CTICounterData;
  });

  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return { value: 0, checked: false } as CounterItem;
    if (!info.values[props.item.id]) {
      if (props.item.initialValue)
        info.values[props.item.id] = {
          value: props.item.initialValue,
          checked: false,
        } as CounterItem;
      else
        info.values[props.item.id] = {
          value: 0,
          checked: false,
        } as CounterItem;
    }
    return info.values[props.item.id] as CounterItem;
  });

  const applyValue = (inc: boolean) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!data()) return;
    let i = 0;
    const value = info.values[props.item.id] as CounterItem;
    i = value.value;
    const step = data()?.step;
    if (inc) i = i + (step ? step : 1);
    else i = i - (step ? step : 1);
    if (i < data()?.min) i = data()?.min;
    if (i > data()?.max) i = data()?.max;
    info.values[props.item.id] = { ...info.values[props.item.id], value: i };
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    netPublish(netTopic(topicCsInfo), info);
  };

  const resetValue = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[props.item.id] = {
      ...info.values[props.item.id],
      value: props.item.initialValue,
    };
    updateCsStorage(info);
    netPublish(netTopic(topicCsInfo), info);
  };

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    const value = info.values[props.item.id] as CounterItem;
    value.checked = !value.checked;
    info.values[props.item.id] = { ...value };
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    netPublish(netTopic(topicCsInfo), info);
  };

  if (!data()) return <></>;

  return (
    <Flex gap="medium" align="center" grow>
      <Flex justify="space" align="center" grow>
        <Flex gap="medium" justify="space" align="center" grow>
          <Flex align="center">
            <Show when={data()?.check}>
              <TplCheckBlock
                checked={() => value().checked}
                circle={data()?.checkShape && data()?.checkShape === "circle"}
                color={props.item.color}
                onClick={isCsOwner(currentCs()) ? toggle : undefined}
              />
            </Show>
            <Text>{props.item.name}</Text>
          </Flex>
          <Show when={!data()?.check || (data()?.check && value().checked)}>
            <Flex>
              <Show when={isCsOwner(currentCs())}>
                <div
                  class={csTplIconStyle}
                  onClick={() => applyValue(false)}
                  title="Decrease value"
                >
                  <FaSolidMinus fill="currentColor" />
                </div>
              </Show>
              <Text class={tplCounterStyle}>{value().value}</Text>
              <Show when={isCsOwner(currentCs())}>
                <div
                  class={csTplIconStyle}
                  onClick={() => applyValue(true)}
                  title="Increase value"
                >
                  <FaSolidPlus fill="currentColor" />
                </div>
                <Show when={props.item.initialValue !== undefined}>
                  <div
                    class={csTplIconStyle}
                    onClick={resetValue}
                    title="Reset to default"
                  >
                    <IoReload fill="currentColor" />
                  </div>
                </Show>
              </Show>
            </Flex>
          </Show>
        </Flex>
        <Flex gap="medium">
          <TplRollBlock item={props.item} value={value} />
          <TplHintBlock hint={props.item.hint} />
        </Flex>
      </Flex>
    </Flex>
  );
};
