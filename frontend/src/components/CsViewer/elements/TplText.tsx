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

type Props = {
  item: CharTemplateItem;
};

export const TplText: Component<Props> = ({ item }) => {
  const [itemEdit, setItemEdit] = createSignal(false);

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return "";
    return info.values[item.id];
  });

  const applyValue = (v: string) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[item.id] = v;
    updateCsStorage(info);
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(item.id)?.focus();
  });

  return (
    <div class={tplTextItemStyle}>
      <Show when={itemEdit()}>
        <TplTextEditBlock
          item={item}
          onEditToggle={setItemEdit}
          value={value}
          setValue={applyValue}
        />
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
              <TplHintBlock hint={item.hint} />
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
          <Text preserveLines>{value()}</Text>
        </Flex>
      </Show>
    </div>
  );
};
