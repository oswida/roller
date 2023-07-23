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
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { FaSolidPen, FaSolidPlus, FaSolidTrash } from "solid-icons/fa";
import { csTplIconStyle } from "../styles.css";
import { TplTextEditBlock } from "../blocks/TplTextEditBlock";
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { TplHintBlock } from "../blocks/TplHintBlock";

type TextListItem = {
  text: string;
  checked: boolean;
};

type Props = {
  item: CharTemplateItem;
  checkable?: boolean;
};

export const TplTextList: Component<Props> = ({ item, checkable }) => {
  const [editedItem, setEditedItem] = createSignal(-1);
  const [editVal, setEditVal] = createSignal("");

  const values = createMemo(() => {
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    return cs.values[item.id] as TextListItem[];
  });

  const addItem = () => {
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    if (!cs.values[item.id]) cs.values[item.id] = [] as TextListItem[];
    const v = cs.values[item.id] as TextListItem[];
    v.push({ text: "", checked: false } as TextListItem);
    updateCsStorage(cs);
    // setCurrentCs(undefined);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  const delItem = (pos: number) => {
    if (pos >= values().length) return;
    const cs = currentCs();
    if (!cs) return;
    let v = cs.values[item.id] as TextListItem[];
    v.splice(pos, 1);
    updateCsStorage(cs);
    // setCurrentCs(undefined);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  const toggleEdit = (idx: number, value: boolean) => {
    if (!value) {
      setEditedItem(-1);
      setEditVal("");
      return;
    }
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    const v = cs.values[item.id] as TextListItem[];
    setEditVal(v[idx].text);
    setEditedItem(idx);
  };

  const toggleCheck = (idx: number) => {
    if (idx >= values().length) return;
    const cs = currentCs();
    if (!cs) return;
    let v = cs.values[item.id] as TextListItem[];
    v[idx].checked = !v[idx].checked;
    updateCsStorage(cs);
    // setCurrentCs(undefined);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  const applyValue = (v: string) => {
    if (editedItem() < 0) return;
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    const val = cs.values[item.id] as TextListItem[];
    val[editedItem()].text = v;
    updateCsStorage(cs);
    // setCurrentCs(undefined);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  createEffect(() => {
    if (editedItem() == -1) return;
    const id = `${item.id}${editedItem()}`;
    setTimeout(() => {
      document.getElementById(id)?.focus();
      setEditVal(values()[editedItem()].text);
    }, 200);
  });

  return (
    <Flex direction="column" grow>
      <Flex justify="space" align="center" grow>
        <Flex align="center" grow>
          <Text colorSchema="secondary" fontSize="smaller">
            {item.name}
          </Text>
          <TplHintBlock hint={item.hint} />
        </Flex>
        <Show when={isCsOwner(currentCs())}>
          <div class={csTplIconStyle} title="Add item" onClick={addItem}>
            <FaSolidPlus fill="currentColor" />
          </div>
        </Show>
      </Flex>
      <For each={values()}>
        {(it, idx) => (
          <Show when={it}>
            <Flex justify="space" align="center" grow>
              <Show when={editedItem() !== idx()}>
                <Flex align="center" gap="medium" grow>
                  <Show when={checkable}>
                    <TplCheckBlock
                      hint={item.labels ? item.labels[0] : undefined}
                      checked={() => it.checked}
                      circle={false}
                      color={item.color}
                      onClick={
                        isCsOwner(currentCs())
                          ? () => toggleCheck(idx())
                          : undefined
                      }
                    />
                  </Show>
                  <Text preserveLines>{it.text}</Text>
                </Flex>
              </Show>
              <Show when={isCsOwner(currentCs()) && editedItem() !== idx()}>
                <Flex>
                  <div
                    class={csTplIconStyle}
                    title="Edit item"
                    onClick={() => toggleEdit(idx(), true)}
                  >
                    <FaSolidPen fill="currentColor" />
                  </div>
                  <div
                    class={csTplIconStyle}
                    title="Delete item"
                    onClick={() => delItem(idx())}
                  >
                    <FaSolidTrash fill="currentColor" />
                  </div>
                </Flex>
              </Show>
              <Show when={isCsOwner(currentCs()) && editedItem() === idx()}>
                <TplTextEditBlock
                  useId={`${item.id}${idx()}`}
                  hideName
                  item={item}
                  value={editVal}
                  setValue={applyValue}
                  onEditToggle={(value: boolean) => toggleEdit(idx(), value)}
                />
              </Show>
            </Flex>
          </Show>
        )}
      </For>
    </Flex>
  );
};
