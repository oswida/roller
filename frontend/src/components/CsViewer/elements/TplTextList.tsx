import { FaSolidPen, FaSolidPlus, FaSolidTrash } from "solid-icons/fa";
import {
  Component,
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import {
  CTITextData,
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
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplTextEditBlock } from "../blocks/TplTextEditBlock";
import { csTplIconStyle } from "../styles.css";

type TextListItem = {
  text: string;
  checked: boolean;
};

type Props = {
  item: CharTemplateItem;
};

// This should have CTITextData as a data param

export const TplTextList: Component<Props> = (props) => {
  const [editedItem, setEditedItem] = createSignal(-1);
  const [editVal, setEditVal] = createSignal("");

  const data = createMemo(() => {
    return props.item.data as CTITextData;
  });

  const values = createMemo(() => {
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    return cs.values[props.item.id] as TextListItem[];
  });

  const addItem = () => {
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    if (!cs.values[props.item.id])
      cs.values[props.item.id] = [] as TextListItem[];
    const v = cs.values[props.item.id] as TextListItem[];
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
    let v = cs.values[props.item.id] as TextListItem[];
    v.splice(pos, 1);
    updateCsStorage(cs);
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
    const v = cs.values[props.item.id] as TextListItem[];
    setEditVal(v[idx].text);
    setEditedItem(idx);
  };

  const toggleCheck = (idx: number) => {
    if (idx >= values().length) return;
    const cs = currentCs();
    if (!cs) return;
    let v = cs.values[props.item.id] as TextListItem[];
    v[idx].checked = !v[idx].checked;
    updateCsStorage(cs);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  const applyValue = (v: string) => {
    if (editedItem() < 0) return;
    const cs = currentCs();
    if (!cs) return [] as TextListItem[];
    const val = cs.values[props.item.id] as TextListItem[];
    val[editedItem()].text = v;
    updateCsStorage(cs);
    setCurrentCs({ ...cs });
    centPublish(netTopic(topicCsInfo), cs);
  };

  createEffect(() => {
    if (editedItem() == -1) return;
    const id = `${props.item.id}${editedItem()}`;
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
            {props.item.name}
          </Text>
          <TplHintBlock hint={props.item.hint} />
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
                  <Show when={data().check}>
                    <TplCheckBlock
                      hint={data().checkLabel ? data().checkLabel : undefined}
                      checked={() => it.checked}
                      circle={false}
                      color={props.item.color}
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
                  useId={`${props.item.id}${idx()}`}
                  hideName
                  item={props.item}
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
