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
import { csTplIconStyle, tplTextItemStyle } from "../styles.css";
import { themeColor } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

export const TplText: Component<Props> = ({ item }) => {
  const [itemEdit, setItemEdit] = createSignal(false);
  const [editVal, setEditVal] = createSignal("");

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return "--";
    return info.values[item.id];
  });

  const applyValue = () => {
    setItemEdit(false);
    const v = editVal();
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[item.id] = v;
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
      applyValue();
    }
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
              <div onClick={applyValue} title="Save" class={csTplIconStyle}>
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
              value={value()}
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
              value={value()}
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
            <Show when={isCsOwner(currentCs())}>
              <Flex>
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
          <Text>{value()}</Text>
        </Flex>
      </Show>
    </div>
  );
};
