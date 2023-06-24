import { FaSolidXmark, FaSolidFloppyDisk } from "solid-icons/fa";
import { Component, Show, createEffect, createSignal } from "solid-js";
import { CharTemplateItem } from "~/common";
import { Input, InputArea } from "../../Input";
import { csTplIconStyle } from "../styles.css";
import { TplHintBlock } from "./TplHintBlock";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { debounce } from "@solid-primitives/scheduled";

type Props = {
  item: CharTemplateItem;
  onEditToggle: (value: boolean) => void;
  value: () => string;
  setValue: (value: string) => void;
  hideName?: boolean;
  useId?: string;
};

export const TplTextEditBlock: Component<Props> = ({
  item,
  onEditToggle,
  value,
  setValue,
  hideName,
  useId,
}) => {
  const [editVal, setEditVal] = createSignal("");

  const keyPress = (e: any) => {
    if ((e.code == "Enter" || e.key == "Enter") && item.limit == 1) {
      applyValue();
    }
  };

  const updateVal = debounce((v: string) => {
    setEditVal(v);
  }, 100);

  const applyValue = () => {
    const v = editVal();
    setValue(v);
    onEditToggle(false);
    setEditVal("");
  };

  createEffect(() => {
    const id = useId ? useId : item.id;
    setTimeout(() => {
      document.getElementById(id)?.focus();
    }, 200);
  });

  return (
    <Flex direction="column" gap="small" style={{ flex: 1 }}>
      <Flex
        style={{
          "align-items": "center",
          "justify-content": "space-between",
        }}
      >
        <Show when={!hideName}>
          <Flex>
            <Text fontSize="smaller" colorSchema="secondary">
              {item.name}
            </Text>
            <TplHintBlock hint={item.hint} />
          </Flex>
        </Show>
        <Flex>
          <div
            onClick={() => onEditToggle(false)}
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
          id={useId ? useId : item.id}
          onFocus={(e) => e.target.select()}
          onInput={(e: any) => updateVal(e.target.value)}
          onKeyPress={keyPress}
          value={value()}
          style={{
            width: "310px",
          }}
        />
      </Show>
      <Show when={!item.limit || item.limit != 1}>
        <InputArea
          id={useId ? useId : item.id}
          onFocus={(e) => e.target.select()}
          onInput={(e: any) => updateVal(e.target.value)}
          onKeyPress={keyPress}
          value={value()}
          style={{
            "min-height": "10em",
            "font-size": "medium",
            width: "310px",
          }}
        />
      </Show>
    </Flex>
  );
};
