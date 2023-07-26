import { FaSolidMinus, FaSolidPlus } from "solid-icons/fa";
import { IoReload } from "solid-icons/io";
import { Component, Show, createMemo } from "solid-js";
import {
  CTICounterData,
  CharTemplateItem,
  centPublish,
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

type CounterItem = {
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
    const labels = data()?.options;
    if (!labels) return;
    let i = 0;
    const value = info.values[props.item.id] as CounterItem;
    i = value.value;
    if (inc) i++;
    else i--;
    if (i < 0) i = 0;
    if (i >= labels.length) i = labels.length - 1;

    info.values[props.item.id] = { ...info.values[props.item.id], value: i };
    updateCsStorage(info);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
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
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    const value = info.values[props.item.id] as CounterItem;
    value.checked = !value.checked;
    info.values[props.item.id] = { ...value };
    updateCsStorage(info);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  if (!data() || !data()?.options) return <></>;

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
              <Text class={tplCounterStyle}>
                {data()?.options ? data()?.options[value().value] : ""}
              </Text>
              <Show when={isCsOwner(currentCs())}>
                <div
                  class={csTplIconStyle}
                  onClick={() => applyValue(true)}
                  title="Increase value"
                >
                  <FaSolidPlus fill="currentColor" />
                </div>
                <Show when={props.item.initialValue}>
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
