import {
  FaSolidCheck,
  FaSolidCircleInfo,
  FaSolidDice,
  FaSolidXmark,
} from "solid-icons/fa";
import {
  Component,
  For,
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
import { actionCompute, actionRoll } from "../actions";
import { csTplAttrValueStyle, csTplIconStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

export const TplAttrMax: Component<Props> = ({ item }) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");
  const [editValMax, setEditValMax] = createSignal("");

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return ["-", "-"];
    return info.values[item.id];
  });

  const applyValue = () => {
    setItemEdit(false);
    let v = editVal();
    let vMax = editValMax();
    const info = currentCs();
    if (!info) {
      return;
    }
    let values = info.values[item.id];
    if (!values || values.length !== 2) {
      values = ["", ""];
    }
    if (v.trim() === "") v = values[0];
    if (vMax.trim() === "") vMax = values[1];

    info.values[item.id] = [v, vMax];
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[item.id]) {
      const v = actionCompute(item.id, info);
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
    document.getElementById(item.id)?.focus();
  });

  const keyPress = (e: any) => {
    if (e.code == "Enter" || e.key == "Enter") {
      applyValue();
    }
  }

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
            width="50%"
            widthLeft="80%"
            widthRight="20%"
            left={<Text title={item.hint}>{item.name}</Text>}
            leftBackground="accent"
            rightFunc={() => (
              <>
                <Text
                  fontSize="bigger"
                  class={csTplAttrValueStyle}
                  onClick={startEdit}
                >
                  {value()[0]}
                </Text>
                <Text>|</Text>
                <Text
                  fontSize="bigger"
                  class={csTplAttrValueStyle}
                  onClick={startEdit}
                >
                  {value()[1]}
                </Text>
              </>
            )}
            rightBackground="accent"
          />

          <Flex gap="medium">
            <Show
              when={
                item.rolls && item.rolls.length > 0 && isCsOwner(currentCs())
              }
            >
              <Flex>
                <For each={item.rolls}>
                  {(r) => (
                    <div
                      title={r.comment}
                      onClick={() =>
                        actionRoll(currentCs()?.name, r, value()[0])
                      }
                      class={csTplIconStyle}
                    >
                      <FaSolidDice
                        style={{
                          fill: r.iconColor ? r.iconColor : "currentcolor",
                        }}
                      />
                    </div>
                  )}
                </For>
              </Flex>
            </Show>
            <Show when={item.hint && item.hint !== ""}>
              <div title={item.hint} style={{ cursor: "help" }}>
                <FaSolidCircleInfo fill={themeColor.accent} />
              </div>
            </Show>
          </Flex>
        </Flex>
      </Show>
      <Show when={itemEdit()}>
        <div class={csTplIconStyle} onClick={() => setItemEdit(false)}>
          <FaSolidXmark style={{ fill: themeColor.danger }} />
        </div>
        <DataBlock
          width="50%"
          widthLeft="80%"
          widthRight="20%"
          left={<Text>{item.name}</Text>}
          leftBackground="accent"
          right={
            <Flex>
              <Input
                value={value()[0]}
                id={item.id}
                onFocus={(e) => e.target.select()}
                onKeyPress={keyPress}
                style={{
                  width: "3em",
                  "text-align": "center",
                  "user-select": "all",
                }}
                onChange={(e: any) => setEditVal(e.target.value)}
              />
              <Input
                value={value()[1]}
                style={{
                  width: "3em",
                  "text-align": "center",
                  "user-select": "all",
                }}
                onChange={(e: any) => setEditValMax(e.target.value)}
              />
            </Flex>
          }
          rightBackground="accent"
        />
        <div class={csTplIconStyle} onClick={applyValue}>
          <FaSolidCheck style={{ fill: "currentcolor" }} />
        </div>
      </Show>
    </Flex>
  );
};
