import {
  ComponentProps,
  Match,
  ParentComponent,
  Switch,
  splitProps,
} from "solid-js";
import { textStyle } from "./styles.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

type Props = {
  colorSchema?: "primary" | "secondary" | "background" | "accent" | "danger";
  fontSize?: "smaller" | "small" | "standard" | "bigger" | "big";
  preserveLines?: boolean;
};

export const Text: ParentComponent<Props & ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "colorSchema",
    "fontSize",
    "preserveLines",
    "title",
  ]);
  return (
    <Switch>
      <Match when={local.title}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={textStyle({
                colorSchema: local.colorSchema,
                fontSize: local.fontSize,
                preserveLines: local.preserveLines,
              })}
              {...rest}
            >
              {local.children}
            </div>
          </TooltipTrigger>
          <TooltipContent>{local.title}</TooltipContent>
        </Tooltip>
      </Match>
      <Match when={!local.title}>
        <div
          class={textStyle({
            colorSchema: local.colorSchema,
            fontSize: local.fontSize,
            preserveLines: local.preserveLines,
          })}
          {...rest}
        >
          {local.children}
        </div>
      </Match>
    </Switch>
  );
};
