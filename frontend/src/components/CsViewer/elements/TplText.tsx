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
  netPublish,
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
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/Tooltip";

type Props = {
  item: CharTemplateItem;
};

export const TplText: Component<Props> = (props) => {
  const [itemEdit, setItemEdit] = createSignal(false);

  const value = createMemo(() => {
    const info = currentCs();
    if (!info) return "";
    if (!info.values[props.item.id]) {
      if (props.item.initialValue)
        info.values[props.item.id] = props.item.initialValue;
      else info.values[props.item.id] = "";
    }
    return info.values[props.item.id];
  });

  const applyValue = (v: string) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[props.item.id] = v;
    updateCsStorage(info);
    netPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!itemEdit()) return;
    document.getElementById(props.item.id)?.focus();
  });

  return (
    <div class={tplTextItemStyle}>
      <Show when={itemEdit()}>
        <TplTextEditBlock
          item={props.item}
          onEditToggle={setItemEdit}
          value={value}
          setValue={applyValue}
        />
      </Show>
      <Show when={!itemEdit()}>
        <Flex direction="column" gap="small" grow>
          <Flex align="center" justify="space" grow>
            <Flex>
              <Show when={props.item.description}>
                <Tooltip>
                  <TooltipTrigger>
                    <Text fontSize="smaller" colorSchema="secondary">
                      {props.item.name}
                    </Text>
                  </TooltipTrigger>
                  <TooltipContent>{props.item.description}</TooltipContent>
                </Tooltip>
              </Show>
              <Show when={!props.item.description}>
                <Text fontSize="smaller" colorSchema="secondary">
                  {props.item.name}
                </Text>
              </Show>

              <TplHintBlock hint={props.item.hint} />
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
