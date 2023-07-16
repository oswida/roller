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

export const TplCheckBlock: Component<Props> = ({
  checked,
  circle,
  color,
  onClick,
  hint,
}) => {
  return (
    <>
      <Show when={checked()}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={tplCheckItemStyle({ shape: circle ? "circle" : "square" })}
              style={{
                "background-color": color ? color : "currentcolor",
                border: `solid 2px ${color ? color : "currentcolor"}`,
              }}
              onClick={onClick}
            >
              {" "}
            </div>
          </TooltipTrigger>
          <TooltipContent>{hint}</TooltipContent>
        </Tooltip>
      </Show>
      <Show when={!checked()}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={tplCheckItemStyle({ shape: circle ? "circle" : "square" })}
              style={{
                border: `solid 2px ${color ? color : "currentcolor"}`,
                "background-color": "transparent",
              }}
              onClick={onClick}
            >
              {" "}
            </div>
          </TooltipTrigger>
          <TooltipContent>{hint}</TooltipContent>
        </Tooltip>
      </Show>
    </>
  );
};
