import { FaSolidCircleInfo } from "solid-icons/fa";
import { Show } from "solid-js";
import { tplHintIconStyle } from "../styles.css";
import { Component } from "solid-js";
import { Tooltip } from "../../Tooltip";
import { parseMarkdown } from "~/common";

type Props = {
  hint: string | undefined;
};

export const TplHintBlock: Component<Props> = ({ hint }) => {
  return (
    <Show when={hint && hint !== ""}>
      <Tooltip
        trigger={
          <div style={{ cursor: "help" }}>
            <FaSolidCircleInfo class={tplHintIconStyle} />
          </div>
        }
      >
        <div innerHTML={hint ? parseMarkdown(hint) : ""}></div>
      </Tooltip>
    </Show>
  );
};
