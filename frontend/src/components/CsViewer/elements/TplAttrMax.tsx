import { FaSolidCheck, FaSolidXmark } from "solid-icons/fa";
import {
  Component,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import {
  CTIAttrData,
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { themeVars } from "~/common/theme.css";
import { charTemplates } from "~/template";
import { DataBlock, DataLabel, DataValue } from "../../DataBlock";
import { Flex } from "../../Flex";
import { Input } from "../../Input";
import { Text } from "../../Text";
import { actionCompute } from "../actions";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import {
  csTplAttrNameStyle,
  csTplAttrValueStyle,
  csTplIconStyle,
} from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

export const TplAttrMax: Component<Props> = (props) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");
  const [editValMax, setEditValMax] = createSignal("");

  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return [0, 0];
    if (!info.values[props.item.id])
      info.values[props.item.id] = [
        0,
        props.item.initialValue ? props.item.initialValue : 0,
      ];
    return info.values[props.item.id];
  });

  const applyValue = () => {
    setItemEdit(false);
    let v = editVal();
    let vMax = editValMax();
    const info = currentCs();
    if (!info) {
      return;
    }
    let values = info.values[props.item.id];
    if (!values || values.length !== 2) {
      values = [0, props.item.initialValue ? props.item.initialValue : 0];
    }
    if (v.trim() === "") v = values[0];
    if (vMax.trim() === "") vMax = values[1];

    info.values[props.item.id] = [v, vMax];
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }

    updateCsStorage(info);
    setEditVal("");
    setEditValMax("");
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  const startEdit = () => {
    if (!isCsOwner(currentCs())) return;
    setItemEdit(true);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(props.item.id)?.focus();
  });

  const keyPress = (e: any) => {
    if (e.code == "Enter" || e.key == "Enter") {
      applyValue();
    }
  };

  return (
    <Flex gap="medium" align="center" grow>
      <Show when={!itemEdit()}>
        <Flex align="center" justify="space" grow>
          <DataBlock
            style={{
              width: (props.item.data as CTIAttrData).wide ? "70%" : "50%",
            }}
          >
            <DataLabel
              backgroundSchema="primary600"
              colorSchema="primary100"
              scale="flex7"
            >
              <Text title={props.item.hint} class={csTplAttrNameStyle}>
                {props.item.name}
              </Text>
            </DataLabel>
            <DataValue
              backgroundSchema="primary600"
              colorSchema="primary100"
              scale="flex3"
            >
              <>
                <Text
                  fontSize="bigger"
                  class={csTplAttrValueStyle}
                  onClick={startEdit}
                >
                  {value()[0]}
                </Text>
                <Text style={{ color: "inherit" }}>|</Text>
                <Text
                  fontSize="bigger"
                  class={csTplAttrValueStyle}
                  onClick={startEdit}
                >
                  {value()[1]}
                </Text>
              </>
            </DataValue>
          </DataBlock>
          <Flex gap="medium">
            <TplRollBlock item={props.item} value={() => value()[0]} />
            <TplHintBlock hint={props.item.hint} />
          </Flex>
        </Flex>
      </Show>
      <Show when={itemEdit()}>
        <div class={csTplIconStyle} onClick={() => setItemEdit(false)}>
          <FaSolidXmark style={{ fill: themeVars.danger600 }} />
        </div>
        <DataBlock
          style={{
            width: (props.item.data as CTIAttrData).wide ? "70%" : "50%",
          }}
        >
          <DataLabel scale="flex7">
            <Text style={{ color: "inherit" }} class={csTplAttrNameStyle}>
              {props.item.name}
            </Text>
          </DataLabel>
          <DataValue scale="flex3">
            <Flex align="center">
              <Input
                value={value()[0]}
                id={props.item.id}
                onFocus={(e) => e.target.select()}
                onKeyPress={keyPress}
                style={{
                  width: "3em",
                  "text-align": "center",
                  "user-select": "all",
                  height: "1.9em",
                }}
                onChange={(e: any) => setEditVal(e.target.value)}
              />
              <Input
                value={value()[1]}
                style={{
                  width: "3em",
                  height: "1.9em",
                  "text-align": "center",
                  "user-select": "all",
                }}
                onChange={(e: any) => setEditValMax(e.target.value)}
              />
            </Flex>
          </DataValue>
        </DataBlock>

        <div class={csTplIconStyle} onClick={applyValue}>
          <FaSolidCheck style={{ fill: themeVars.success600 }} />
        </div>
      </Show>
    </Flex>
  );
};
