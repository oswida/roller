import { FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show } from "solid-js";
import { Tooltip } from "../../Tooltip";
import { tplHintIconStyle } from "../styles.css";

type Props = {
  hint: string | undefined;
};

export const TplHintBlock: Component<Props> = ({ hint }) => {
  return (
    <Show when={hint && hint !== ""}>
      <Tooltip text={hint ? hint : ""} markdown>
        <div style={{ cursor: "help" }}>
          <FaSolidCircleInfo class={tplHintIconStyle} />
        </div>
      </Tooltip>
    </Show>
  );
};
