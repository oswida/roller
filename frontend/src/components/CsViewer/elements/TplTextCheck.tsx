import { FaSolidPen } from "solid-icons/fa";
import {
  Component,
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
import { Button } from "~/components/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/Tooltip";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { TplCheckBlock } from "../blocks/TplCheckBlock";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { TplTextEditBlock } from "../blocks/TplTextEditBlock";
import { tplTextItemStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

type Value = {
  text: string;
  checked: boolean;
};

export const TplTextCheck: Component<Props> = (props) => {
  const [itemEdit, setItemEdit] = createSignal(false);

  const value_text = createMemo(() => {
    const info = currentCs();
    if (!info) return "";
    if (!info.values[props.item.id]) {
      if (props.item.initialValue)
        info.values[props.item.id] = {
          text: props.item.initialValue,
          checked: false,
        } as Value;
      else info.values[props.item.id] = { text: "", checked: false } as Value;
    }
    const v = info.values[props.item.id] as Value;
    return v.text;
  });

  const value_checked = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[props.item.id]) return false;
    const v = info.values[props.item.id] as Value;
    return v.checked;
  });

  const applyText = (v: string) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[props.item.id])
      info.values[props.item.id] = { text: v, checked: false } as Value;
    else info.values[props.item.id].text = v;
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(props.item.id)?.focus();
  });

  const toggle = () => {
    const info = currentCs();
    if (!info) {
      return;
    }
    if (!info.values[props.item.id])
      info.values[props.item.id] = { text: "", checked: true } as Value;
    else
      info.values[props.item.id].checked = !info.values[props.item.id].checked;
    updateCsStorage(info);
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  const data = createMemo(() => {
    return props.item.data as CTITextData;
  });

  return (
    <div class={tplTextItemStyle}>
      <Show when={itemEdit()}>
        <TplTextEditBlock
          item={props.item}
          onEditToggle={setItemEdit}
          value={value_text}
          setValue={applyText}
        />
      </Show>
      <Show when={!itemEdit()}>
        <Flex direction="column" gap="small" grow>
          <Flex align="center" justify="space" grow>
            <Flex gap="medium" align="center" grow>
              <TplCheckBlock
                hint={data().checkLabel ? data().checkLabel : undefined}
                checked={value_checked}
                circle={
                  data().checkShape ? data().checkShape == "circle" : false
                }
                color={props.item.color}
                onClick={isCsOwner(currentCs()) ? toggle : undefined}
              />
              <Flex>
                <Text>{props.item.name}</Text>
                <TplHintBlock hint={props.item.hint} />
              </Flex>
            </Flex>
            <Show when={isCsOwner(currentCs()) && value_checked()}>
              <Flex>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="icon" onClick={() => setItemEdit(true)}>
                      <FaSolidPen
                        style={{
                          fill: "currentcolor",
                        }}
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Edit</TooltipContent>
                </Tooltip>
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
