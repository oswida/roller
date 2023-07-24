import { ComponentProps, JSX, ParentComponent, splitProps } from "solid-js";
import { dataLabelStyle, dataValueStyle, dataBlockStyle } from "./styles.css";
import { themeTokenType } from "~/common/theme.css";
import { createFlexVariants } from "~/common";

type DataLabelProps = {
  colorSchema?: themeTokenType;
  backgroundSchema?: themeTokenType;
  scale?:
    | "flex1"
    | "flex2"
    | "flex3"
    | "flex4"
    | "flex5"
    | "flex6"
    | "flex7"
    | "flex8"
    | "flex9"
    | "flex10";
};

export const DataLabel: ParentComponent<DataLabelProps> = (props) => {
  return (
    <div
      class={dataLabelStyle({
        colorSchema: props.colorSchema,
        backgroundSchema: props.backgroundSchema,
        scale: props.scale,
      })}
    >
      {props.children}
    </div>
  );
};

type DataValueProps = {
  colorSchema?: themeTokenType;
  backgroundSchema?: themeTokenType;
  scale?:
    | "flex1"
    | "flex2"
    | "flex3"
    | "flex4"
    | "flex5"
    | "flex6"
    | "flex7"
    | "flex8"
    | "flex9"
    | "flex10";
};

export const DataValue: ParentComponent<DataValueProps> = (props) => {
  return (
    <div
      class={dataValueStyle({
        colorSchema: props.colorSchema,
        backgroundSchema: props.backgroundSchema,
        scale: props.scale,
      })}
    >
      {props.children}
    </div>
  );
};

export const DataBlock: ParentComponent<ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <div class={dataBlockStyle} {...rest}>
      {local.children}
    </div>
  );
};
