import { FaSolidPen } from "solid-icons/fa";
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
import { Text } from "../../Text";
import { csTplIconStyle, tplTextItemStyle } from "../styles.css";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplTextEditBlock } from "../blocks/TplTextEditBlock";
import { TplCheckBlock } from "../blocks/TplCheckBlock";

type Props = {
  item: CharTemplateItem;
  circle?: boolean;
};

type Value = {
  text: string;
  checked: boolean;
};

export const TplTextCheck: Component<Props> = ({ item, circle }) => {
  const [itemEdit, setItemEdit] = createSignal(false);

  const value_text = createMemo(() => {
    const info = currentCs();
    if (!info) return "";
    if (!info.values[item.id]) {
      if (item.initialValue)
        info.values[item.id] = {
          text: item.initialValue,
          checked: false,
        } as Value;
      else info.values[item.id] = { text: "", checked: false } as Value;
    }
    const v = info.values[item.id] as Value;
    return v.text;
  });

  const value_checked = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return false;
    const v = info.values[item.id] as Value;
    return v.checked;
  });

  const applyText = (v: string) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[item.id])
      info.values[item.id] = { text: v, checked: false } as Value;
    else info.values[item.id].text = v;
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(item.id)?.focus();
  });

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[item.id])
      info.values[item.id] = { text: "", checked: true } as Value;
    else info.values[item.id].checked = !info.values[item.id].checked;
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  return (
    <div class={tplTextItemStyle}>
      <Show when={itemEdit()}>
        <TplTextEditBlock
          item={item}
          onEditToggle={setItemEdit}
          value={value_text}
          setValue={applyText}
        />
      </Show>
      <Show when={!itemEdit()}>
        <Flex direction="column" gap="small">
          <Flex align="center" justify="space">
            <Flex gap="medium">
              <TplCheckBlock
                hint={item.labels ? item.labels[0] : undefined}
                checked={value_checked}
                circle={circle}
                color={item.color}
                onClick={isCsOwner(currentCs()) ? toggle : undefined}
              />
              <Flex>
                <Text>{item.name}</Text>
                <TplHintBlock hint={item.hint} />
              </Flex>
            </Flex>
            <Show when={isCsOwner(currentCs()) && value_checked()}>
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
          <Show when={value_checked()}>
            <Text preserveLines>{value_text()}</Text>
          </Show>
        </Flex>
      </Show>
    </div>
  );
};
