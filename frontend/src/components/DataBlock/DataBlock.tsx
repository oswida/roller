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

export const DataLabel: ParentComponent<
  DataLabelProps & ComponentProps<"div">
> = (props) => {
  const [local, rest] = splitProps(props, [
    "colorSchema",
    "backgroundSchema",
    "scale",
    "children",
  ]);
  return (
    <div
      class={dataLabelStyle({
        colorSchema: local.colorSchema,
        backgroundSchema: local.backgroundSchema,
        scale: local.scale,
      })}
      {...rest}
    >
      {local.children}
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

export const DataValue: ParentComponent<
  DataValueProps & ComponentProps<"div">
> = (props) => {
  const [local, rest] = splitProps(props, [
    "colorSchema",
    "backgroundSchema",
    "scale",
    "children",
  ]);
  return (
    <div
      class={dataValueStyle({
        colorSchema: local.colorSchema,
        backgroundSchema: local.backgroundSchema,
        scale: local.scale,
      })}
      {...rest}
    >
      {local.children}
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
