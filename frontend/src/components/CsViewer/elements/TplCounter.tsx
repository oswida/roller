import { FaSolidMinus, FaSolidPlus } from "solid-icons/fa";
import { IoReload } from "solid-icons/io";
import { Component, Show, createMemo } from "solid-js";
import {
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
import { csTplIconStyle, tplCounterStyle } from "../styles.css";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { charTemplates } from "~/template";

type CounterItem = {
  value: number;
  checked: boolean;
};

type Props = {
  item: CharTemplateItem;
  wide?: boolean;
  checkable?: boolean;
  circle?: boolean;
};

export const TplCounter: Component<Props> = ({
  item,
  wide,
  checkable,
  circle,
}) => {
  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return { value: 0, checked: false } as CounterItem;
    if (!info.values[item.id]) {
      if (item.initialValue)
        info.values[item.id] = {
          value: item.initialValue,
          checked: false,
        } as CounterItem;
      else info.values[item.id] = { value: 0, checked: false } as CounterItem;
    }
    return info.values[item.id] as CounterItem;
  });

  const applyValue = (inc: boolean) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    const labels = item.labels;
    if (!labels) return;
    let i = 0;
    const value = info.values[item.id] as CounterItem;
    i = value.value;
    if (inc) i++;
    else i--;
    if (i < 0) i = 0;
    if (i >= labels.length) i = labels.length - 1;

    info.values[item.id] = { ...info.values[item.id], value: i };
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  const resetValue = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[item.id] = {
      ...info.values[item.id],
      value: item.initialValue,
    };
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    const value = info.values[item.id] as CounterItem;
    value.checked = !value.checked;
    info.values[item.id] = { ...value };
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  return (
    <Flex gap="medium" style={{ "align-items": "center" }}>
      <Flex
        style={{
          "justify-content": "space-between",
          "align-items": "center",
          flex: 1,
        }}
      >
        <Flex
          gap="medium"
          style={{
            "justify-content": "space-between",
            flex: 1,
            "align-items": "center",
          }}
        >
          <Flex>
            <Show when={checkable}>
              <TplCheckBlock
                checked={() => value().checked}
                circle={circle}
                color={item.color}
                onClick={isCsOwner(currentCs()) ? toggle : undefined}
              />
            </Show>
            <Text>{item.name}</Text>
          </Flex>
          <Show when={!checkable || (checkable && value().checked)}>
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
                {item.labels ? item.labels[value().value] : ""}
              </Text>
              <Show when={isCsOwner(currentCs())}>
                <div
                  class={csTplIconStyle}
                  onClick={() => applyValue(true)}
                  title="Increase value"
                >
                  <FaSolidPlus fill="currentColor" />
                </div>
                <div
                  class={csTplIconStyle}
                  onClick={resetValue}
                  title="Reset to default"
                >
                  <IoReload fill="currentColor" />
                </div>
              </Show>
            </Flex>
          </Show>
        </Flex>
        <Flex gap="medium">
          <TplRollBlock item={item} value={value} />
          <TplHintBlock hint={item.hint} />
        </Flex>
      </Flex>
    </Flex>
  );
};
