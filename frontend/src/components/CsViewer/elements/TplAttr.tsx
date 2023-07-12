import { FaSolidCheck, FaSolidXmark } from "solid-icons/fa";
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
import { charTemplates } from "~/template";
import { DataBlock } from "../../DataBlock";
import { Flex } from "../../Flex";
import { Input } from "../../Input";
import { Text } from "../../Text";
import { actionCompute } from "../actions";
import { csTplAttrValueStyle, csTplIconStyle } from "../styles.css";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplRollBlock } from "../blocks/TplRollBlock";
import { themeVars } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
  wide?: boolean;
};

export const TplAttr: Component<Props> = ({ item, wide }) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");

  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return "-";
    if (!info.values[item.id]) {
      if (item.initialValue) info.values[item.id] = item.initialValue;
      else info.values[item.id] = 0;
    }
    return info.values[item.id];
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
    info.values[item.id] = v;
    if (tpl?.computeDeps && tpl?.computeDeps[item.id]) {
      const v = actionCompute(item.id, info);
      info.values = { ...info.values, ...v };
    }
    updateCsStorage(info);
    setEditVal("");
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
    document.getElementById(item.id)?.focus();
  });

  const keyPress = (e: any) => {
    if (e.code == "Enter" || e.key == "Enter") {
      applyValue();
    }
  };

  return (
    <Flex gap="medium" style={{ "align-items": "center" }}>
      <Show when={!itemEdit()}>
        <Flex
          style={{
            "justify-content": "space-between",
            "align-items": "center",
            flex: 1,
          }}
        >
          <DataBlock
            width={wide ? "70%" : "50%"}
            widthLeft="80%"
            widthRight="20%"
            left={
              <Text title={item.hint} style={{ color: "inherit" }}>
                {item.name}
              </Text>
            }
            leftBackground="accent"
            rightFunc={() => (
              <Text
                fontSize="bigger"
                class={csTplAttrValueStyle}
                onClick={startEdit}
              >
                {value()}
              </Text>
            )}
            rightBackground="accent"
          />

          <Flex gap="medium">
            <TplRollBlock item={item} value={value} />
            <TplHintBlock hint={item.hint} />
          </Flex>
        </Flex>
      </Show>
      <Show when={itemEdit()}>
        <div class={csTplIconStyle} onClick={() => setItemEdit(false)}>
          <FaSolidXmark style={{ fill: themeVars.danger600 }} />
        </div>
        <DataBlock
          width="50%"
          widthLeft="80%"
          widthRight="20%"
          left={<Text style={{ color: "inherit" }}>{item.name}</Text>}
          leftBackground="accent"
          right={
            <Input
              id={item.id}
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
          }
          rightBackground="accent"
        />
        <div class={csTplIconStyle} onClick={applyValue}>
          <FaSolidCheck style={{ fill: themeVars.success600 }} />
        </div>
      </Show>
    </Flex>
  );
};
