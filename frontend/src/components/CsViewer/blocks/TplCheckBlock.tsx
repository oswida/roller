import { Component, Show } from "solid-js";
import { tplCheckItemStyle } from "../styles.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip";

type Props = {
  checked: () => boolean;
  circle?: boolean;
  color?: string;
  onClick?: () => void;
  hint?: string;
};

export const TplCheckBlock: Component<Props> = (props) => {
  return (
    <>
      <Show when={props.checked()}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={tplCheckItemStyle({
                shape: props.circle ? "circle" : "square",
              })}
              style={{
                "background-color": props.color ? props.color : "currentcolor",
                border: `solid 2px ${
                  props.color ? props.color : "currentcolor"
                }`,
              }}
              onClick={props.onClick}
            >
              {" "}
            </div>
          </TooltipTrigger>
          <TooltipContent>{props.hint}</TooltipContent>
        </Tooltip>
      </Show>
      <Show when={!props.checked()}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={tplCheckItemStyle({
                shape: props.circle ? "circle" : "square",
              })}
              style={{
                border: `solid 2px ${
                  props.color ? props.color : "currentcolor"
                }`,
                "background-color": "transparent",
              }}
              onClick={props.onClick}
            >
              {" "}
            </div>
          </TooltipTrigger>
          <TooltipContent>{props.hint}</TooltipContent>
        </Tooltip>
      </Show>
    </>
  );
};
