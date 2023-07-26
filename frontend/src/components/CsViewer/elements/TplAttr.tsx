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

export const TplAttr: Component<Props> = (props) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");

  // const data = createMemo(() => {
  //   if (!props.item.data) return undefined;
  //   return props.item.data as CTIAttrData;
  // });

  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return "-";
    if (!info.values[props.item.id]) {
      if (props.item.initialValue)
        info.values[props.item.id] = props.item.initialValue;
      else info.values[props.item.id] = 0;
    }
    return info.values[props.item.id];
  });

  const applyValue = () => {
    setItemEdit(false);
    const v = editVal();

    if (v.trim() === "") {
      return;
    }
    const info = currentCs();
    if (!info) {
      return;
    }
    const tpl = charTemplates[info.template];
    info.values[props.item.id] = v;
    if (tpl?.computeDeps && tpl?.computeDeps[props.item.id]) {
      const v = actionCompute(props.item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    setEditVal("");
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
        <Flex justify="space" align="center" grow>
          <DataBlock
          // style={{
          //   width: data()?.wide ? "70%" : "50%",
          // }}
          >
            <DataLabel
              backgroundSchema="primary600"
              colorSchema="primary100"
              scale="flex8"
            >
              <Text class={csTplAttrNameStyle}>{props.item.name}</Text>
            </DataLabel>
            <DataValue
              backgroundSchema="primary600"
              colorSchema="primary100"
              scale="flex2"
            >
              <Text class={csTplAttrValueStyle} onClick={startEdit}>
                {value()}
              </Text>
            </DataValue>
          </DataBlock>
          <Flex gap="medium" align="center">
            <TplRollBlock item={props.item} value={value} />
            <TplHintBlock hint={props.item.hint} />
          </Flex>
        </Flex>
      </Show>
      <Show when={itemEdit()}>
        <div class={csTplIconStyle} onClick={() => setItemEdit(false)}>
          <FaSolidXmark style={{ fill: themeVars.danger600 }} />
        </div>
        <DataBlock
        // style={{
        //   width: data()?.wide ? "70%" : "50%",
        // }}
        >
          <DataLabel scale="flex8">
            <Text style={{ color: "inherit" }} class={csTplAttrNameStyle}>
              {props.item.name}
            </Text>
          </DataLabel>
          <DataValue scale="flex2">
            <Input
              id={props.item.id}
              onFocus={(e) => e.target.select()}
              onKeyPress={keyPress}
              value={value()}
              style={{
                width: "3em",
                "text-align": "center",
                "user-select": "all",
              }}
              onChange={(e: any) => setEditVal(e.target.value)}
            />
          </DataValue>
        </DataBlock>

        <div class={csTplIconStyle} onClick={applyValue}>
          <FaSolidCheck style={{ fill: themeVars.success600 }} />
        </div>
      </Show>
    </Flex>
  );
};
