import { FaSolidCircleInfo, FaSolidFloppyDisk, FaSolidPen, FaSolidXmark } from "solid-icons/fa";
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
import { Flex } from "../../Flex";
import { Input, InputArea } from "../../Input";
import { Text } from "../../Text";
import { csTplIconStyle, tplResourceItemStyle, tplTextItemStyle } from "../styles.css";
import { themeColor } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

type Value = {
  text: string;
  checked: boolean;
}



export const TplTextCheck: Component<Props> = ({ item }) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");

  const value_text = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return "";
    const v = info.values[item.id] as Value;
    return v.text;
  });

  const value_checked = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return false;
    const v = info.values[item.id] as Value;
    return v.checked;
  });

  const applyText = () => {
    setItemEdit(false);
    const v = editVal();
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[item.id])
      info.values[item.id] = { text: v, checked: false } as Value;
    else
      info.values[item.id].text = v;
    updateCsStorage(info);
    setEditVal("");
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(item.id)?.focus();
  });

  const keyPress = (e: any) => {
    if (e.code == "Enter" || e.key == "Enter") {
      applyText();
    }
  }

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[item.id])
      info.values[item.id] = { text: "", checked: true } as Value;
    else
      info.values[item.id].checked = !info.values[item.id].checked;
    updateCsStorage(info);
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  }

  return (
    <div class={tplTextItemStyle}>
      <Show when={itemEdit()}>
        <Flex direction="column" gap="small">
          <Flex
            style={{
              "align-items": "center",
              "justify-content": "space-between",
            }}
          >
            <Flex>
              <Text fontSize="smaller" colorSchema="secondary">
                {item.name}
              </Text>
              <Show when={item.hint && item.hint !== ""}>
                <div title={item.hint} style={{ cursor: "help" }}>
                  <FaSolidCircleInfo fill={themeColor.accent} />
                </div>
              </Show>
            </Flex>
            <Flex>
              <div
                onClick={() => setItemEdit(false)}
                title="Cancel"
                class={csTplIconStyle}
              >
                <FaSolidXmark style={{ fill: "currentcolor" }} />
              </div>
              <div onClick={applyText} title="Save" class={csTplIconStyle}>
                <FaSolidFloppyDisk style={{ fill: "currentcolor" }} />
              </div>
            </Flex>
          </Flex>
          <Show when={item.limit && item.limit == 1}>
            <Input
              id={item.id}
              onFocus={(e) => e.target.select()}
              onChange={(e: any) => setEditVal(e.target.value)}
              onKeyPress={keyPress}
              value={value_text()}
              style={{
                width: "280px",
              }}
            />
          </Show>
          <Show when={!item.limit || item.limit != 1}>
            <InputArea
              id={item.id}
              onFocus={(e) => e.target.select()}
              onChange={(e: any) => setEditVal(e.target.value)}
              onKeyPress={keyPress}
              value={value_text()}
              style={{
                "min-height": "10em",
                "font-size": "medium",
                width: "280px",
              }}
            />
          </Show>
        </Flex>
      </Show>
      <Show when={!itemEdit()}>
        <Flex direction="column" gap="small">
          <Flex
            style={{
              "align-items": "center",
              "justify-content": "space-between",
            }}
          >
            <Flex gap="medium" >
              <Show when={value_checked()}>
                <Flex gap="medium" style={{ "align-items": "center" }}>
                  <div
                    class={tplResourceItemStyle({ shape: "circle" })}
                    style={{
                      "background-color": item.color ? item.color : "currentcolor",
                    }}
                    onClick={toggle}
                    title={item.hint}
                  >
                    {" "}
                  </div>
                </Flex>
              </Show>
              <Show when={!value_checked()}>
                <Flex gap="medium" style={{ "align-items": "center" }}>
                  <div
                    class={tplResourceItemStyle({ shape: "circle" })}
                    style={{
                      border: `solid 2px ${item.color ? item.color : "currentcolor"}`,
                    }}
                    onClick={toggle}
                    title={item.hint}
                  >
                    {" "}
                  </div>
                </Flex>
              </Show>
              <Flex>
                <Text fontSize="smaller" colorSchema="secondary">
                  {item.name}
                </Text>
                <Show when={item.hint && item.hint !== ""}>
                  <div title={item.hint} style={{ cursor: "help" }}>
                    <FaSolidCircleInfo fill={themeColor.accent} />
                  </div>
                </Show>
              </Flex>
            </Flex>
            <Show when={isCsOwner(currentCs())}>
              <Flex >
                <div
                  onClick={() => setItemEdit(true)}
                  title="Edit"
                  class={csTplIconStyle}
                >
                  <FaSolidPen style={{ fill: "currentcolor" }} />
                </div>
              </Flex>
            </Show>
          </Flex>
          <Text>{value_text()}</Text>
        </Flex>
      </Show>
    </div>
  );
};
