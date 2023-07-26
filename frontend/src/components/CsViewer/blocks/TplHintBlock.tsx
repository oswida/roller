import { FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show } from "solid-js";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip";
import { tplHintIconStyle } from "../styles.css";
import { parseMarkdown } from "~/common";

type Props = {
  hint: string | undefined;
};

export const TplHintBlock: Component<Props> = (props) => {
  return (
    <Show when={props.hint && props.hint !== ""}>
      <Tooltip>
        <TooltipTrigger>
          <div style={{ cursor: "help" }}>
            <FaSolidCircleInfo class={tplHintIconStyle} size={20} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div innerHTML={props.hint ? parseMarkdown(props.hint) : ""} />
        </TooltipContent>
      </Tooltip>
    </Show>
  );
};
