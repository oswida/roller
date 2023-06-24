import {
  FaSolidCheck,
  FaSolidMinus,
  FaSolidPlus,
  FaSolidXmark,
} from "solid-icons/fa";
import {
  Component,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
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
import { themeColor } from "~/common/theme.css";
import { charTemplates } from "~/template";
import { DataBlock } from "../../DataBlock";
import { Flex } from "../../Flex";
import { Input } from "../../Input";
import { Text } from "../../Text";
import { actionCompute } from "../actions";
import {
  csTplAttrValueStyle,
  csTplIconStyle,
  tplCounterStyle,
  tplHintIconStyle,
} from "../styles.css";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";

type Props = {
  item: CharTemplateItem;
  wide?: boolean;
};

export const TplCounter: Component<Props> = ({ item, wide }) => {
  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return "?";
    if (!info.values[item.id]) {
      info.values[item.id] = item.labels ? item.labels[0] : "-";
    }
    return info.values[item.id];
  });

  const applyValue = (inc: boolean) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    const labels = item.labels;
    if (!labels) return;
    let i = 0;
    labels.forEach((it, idx) => {
      if (it === info.values[item.id]) i = idx;
    });
    if (inc) i++;
    else i--;
    if (i < 0) i = 0;
    if (i >= labels.length) i = labels.length - 1;

    const tpl = charTemplates[info.template];
    info.values[item.id] = labels[i];
    if (tpl?.computeDeps && tpl?.computeDeps[item.id]) {
      const v = actionCompute(item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    setCurrentCs(undefined);
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
          style={{ "justify-content": "space-between", flex: 1 }}
        >
          <Text>{item.name}</Text>
          <Flex>
            <div class={csTplIconStyle} onClick={() => applyValue(false)}>
              <FaSolidMinus fill="currentColor" />
            </div>
            <Text class={tplCounterStyle}>{value()}</Text>
            <div class={csTplIconStyle} onClick={() => applyValue(true)}>
              <FaSolidPlus fill="currentColor" />
            </div>
          </Flex>
        </Flex>
        <Flex gap="medium">
          <TplRollBlock item={item} value={value} />
          <TplHintBlock hint={item.hint} />
        </Flex>
      </Flex>
    </Flex>
  );
};
