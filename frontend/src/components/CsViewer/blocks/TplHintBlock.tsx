import { FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show } from "solid-js";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../Tooltip";
import { tplHintIconStyle } from "../styles.css";
import { parseMarkdown } from "~/common";

type Props = {
  hint: string | undefined;
};

export const TplHintBlock: Component<Props> = ({ hint }) => {
  return (
    <Show when={hint && hint !== ""}>
      <Tooltip>
        <TooltipTrigger>
          <div style={{ cursor: "help" }}>
            <FaSolidCircleInfo class={tplHintIconStyle} />
          </div>
        </TooltipTrigger>
        <TooltipContent>{hint ? parseMarkdown(hint) : ""}</TooltipContent>
      </Tooltip>
    </Show>
  );
};
