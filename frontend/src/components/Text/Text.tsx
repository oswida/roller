import { ComponentProps, Match, ParentComponent, Switch } from "solid-js";
import { textStyle } from "./styles.css";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";

type Props = {
  colorSchema?: "primary" | "secondary" | "background" | "accent" | "danger";
  fontSize?: "smaller" | "small" | "standard" | "bigger" | "big";
  preserveLines?: boolean;
};

export const Text: ParentComponent<Props & ComponentProps<"div">> = ({
  children,
  colorSchema,
  fontSize,
  preserveLines,
  title,
  ...rest
}) => {
  return (
    <Switch>
      <Match when={title}>
        <Tooltip>
          <TooltipTrigger>
            <div
              class={textStyle({
                colorSchema: colorSchema,
                fontSize: fontSize,
                preserveLines: preserveLines,
              })}
              {...rest}
            >
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent>{title}</TooltipContent>
        </Tooltip>
      </Match>
      <Match when={!title}>
        <div
          class={textStyle({
            colorSchema: colorSchema,
            fontSize: fontSize,
            preserveLines: preserveLines,
          })}
          {...rest}
        >
          {children}
        </div>
      </Match>
    </Switch>
  );
};
