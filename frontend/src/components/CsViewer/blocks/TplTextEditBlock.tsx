import { FaSolidXmark, FaSolidFloppyDisk } from "solid-icons/fa";
import { Component, Show, createEffect, createSignal } from "solid-js";
import { CharTemplateItem } from "~/common";
import { Input, InputArea } from "../../Input";
import { csTplIconStyle } from "../styles.css";
import { TplHintBlock } from "./TplHintBlock";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip";
import { Button } from "../../Button";

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
  const keyPress = (e: any) => {
    if ((e.code == "Enter" || e.key == "Enter") && item.limit == 1) {
      applyValue();
    }
  };

  const applyValue = () => {
    const id = useId ? useId : item.id;
    const el = document.getElementById(id) as any;
    if (!el) return;
    const v = el.value;
    setValue(v);
    onEditToggle(false);
  };

  createEffect(() => {
    const id = useId ? useId : item.id;
    setTimeout(() => {
      document.getElementById(id)?.focus();
    }, 200);
  });

  return (
    <Flex direction="column" gap="small" grow>
      <Flex align="center" justify="space" grow>
        <Show when={!hideName}>
          <Flex grow>
            <Text fontSize="smaller" colorSchema="secondary">
              {item.name}
            </Text>
            <TplHintBlock hint={item.hint} />
          </Flex>
        </Show>
        <Flex>
          <Tooltip>
            <TooltipTrigger>
              <Button onClick={() => onEditToggle(false)} variant="icon">
                <FaSolidXmark style={{ fill: "currentcolor" }} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Cancel</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="icon" onClick={applyValue}>
                <FaSolidFloppyDisk style={{ fill: "currentcolor" }} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Save</TooltipContent>
          </Tooltip>
        </Flex>
      </Flex>
      <Show when={item.limit && item.limit == 1}>
        <Input
          id={useId ? useId : item.id}
          onFocus={(e) => e.target.select()}
          onKeyPress={keyPress}
          value={value()}
          style={{
            width: "365px",
          }}
        />
      </Show>
      <Show when={!item.limit || item.limit != 1}>
        <InputArea
          id={useId ? useId : item.id}
          onFocus={(e) => e.target.select()}
          onKeyPress={keyPress}
          value={value()}
          style={{
            "min-height": "10em",
            "font-size": "medium",
            width: "365px",
          }}
        />
      </Show>
    </Flex>
  );
};
