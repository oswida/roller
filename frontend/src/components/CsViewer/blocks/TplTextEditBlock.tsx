import { FaSolidXmark, FaSolidFloppyDisk } from "solid-icons/fa";
import { Component, Show, createEffect } from "solid-js";
import { CharTemplateItem } from "~/common";
import { Input, InputArea } from "../../Input";
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

export const TplTextEditBlock: Component<Props> = (props) => {
  const keyPress = (e: any) => {
    if ((e.code == "Enter" || e.key == "Enter") && props.item.limit == 1) {
      applyValue();
    }
  };

  const applyValue = () => {
    const id = props.useId ? props.useId : props.item.id;
    const el = document.getElementById(id) as any;
    if (!el) return;
    const v = el.value;
    props.setValue(v);
    props.onEditToggle(false);
  };

  createEffect(() => {
    const id = props.useId ? props.useId : props.item.id;
    setTimeout(() => {
      document.getElementById(id)?.focus();
    }, 200);
  });

  return (
    <Flex direction="column" gap="small" grow>
      <Flex align="center" justify="space" grow>
        <Show when={!props.hideName}>
          <Flex grow>
            <Text fontSize="smaller" colorSchema="secondary">
              {props.item.name}
            </Text>
            <TplHintBlock hint={props.item.hint} />
          </Flex>
        </Show>
        <Flex>
          <Tooltip>
            <TooltipTrigger>
              <Button onClick={() => props.onEditToggle(false)} variant="icon">
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
      <Show when={props.item.limit && props.item.limit == 1}>
        <Input
          id={props.useId ? props.useId : props.item.id}
          onFocus={(e) => e.target.select()}
          onKeyPress={keyPress}
          value={props.value()}
          style={{
            width: "365px",
          }}
        />
      </Show>
      <Show when={!props.item.limit || props.item.limit != 1}>
        <InputArea
          id={props.useId ? props.useId : props.item.id}
          onFocus={(e) => e.target.select()}
          onKeyPress={keyPress}
          value={props.value()}
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
