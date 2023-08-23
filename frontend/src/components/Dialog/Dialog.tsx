import { As, Dialog as Dlg } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { For, ParentComponent, splitProps } from "solid-js";
import {
  dialogCloseButtonStyle,
  dialogContentStyle,
  dialogHeaderStyle,
  dialogOverlayStyle,
  dialogPositionerStyle,
  dialogRootStyle,
  dialogTitleStyle,
  dialogTriggerStyle,
} from "./styles.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import { Flex } from "../Flex";
import { Button } from "../Button";

export const DialogTrigger: ParentComponent<Dlg.DialogTriggerProps> = (
  props
) => {
  const [local, rest] = splitProps(props, ["children", "title"]);
  return (
    <Tooltip>
      <TooltipTrigger>
        <Dlg.Trigger class={dialogTriggerStyle({})}  {...rest}>
          {local.children}
        </Dlg.Trigger>
      </TooltipTrigger>
      <TooltipContent>{local.title}</TooltipContent>
    </Tooltip>
  );
};

type ContentProps = Dlg.DialogContentProps;

export const DialogContent: ParentComponent<ContentProps> = (props) => {
  const [local, rest] = splitProps(props, ["children", "title"]);
  return (
    <Dlg.Portal>
      <Dlg.Overlay class={dialogOverlayStyle} />
      <div class={dialogPositionerStyle}>
        <Dlg.Content class={dialogRootStyle} {...rest}>
          <div class={dialogHeaderStyle}>
            <Dlg.Title class={dialogTitleStyle}>{props.title}</Dlg.Title>
            <Dlg.CloseButton class={dialogCloseButtonStyle}>
              <FaSolidXmark />
            </Dlg.CloseButton>
          </div>
          <Dlg.Description class={dialogContentStyle}>
            {props.children}
          </Dlg.Description>
        </Dlg.Content>
      </div>
    </Dlg.Portal>
  );
};

export const DialogClose: ParentComponent = (props) => {
  return <Dlg.CloseButton asChild>
    {props.children}
  </Dlg.CloseButton>
}

export const DialogButtons: ParentComponent = (props) => {
  return <Flex grow align="center" justify="evenly" gap="large">
    <For each={props.children as any[]}>
      {(it) => (
        <DialogClose>
          <As component={Button} onClick={it.onClick ? () => it.onClick() : undefined}>{it}</As>
        </DialogClose>
      )}
    </For>
  </Flex>
}

export const Dialog = Dlg.Root;
