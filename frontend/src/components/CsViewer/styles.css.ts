import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const csViewerRootStyle = style([
  sprinkles({
    backgroundColor: "primary200",
  }),
  {
    overflow: "auto",
    userSelect: "none",
    width: "100%",
  },
]);

export const csTplIconStyle = style([
  sprinkles({
    borderRadius: "small",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: { default: "none", hover: "primary300" },
  }),
  {
    cursor: "pointer",
    width: "35px",
    height: "35px",
    minWidth: "35px",
    minHeight: "35px",
    outline: "none",
  },
]);

export const csTplAttrValueStyle = style([
  sprinkles({
    padding: "small",
    borderRadius: "small",
    backgroundColor: { hover: "primary600" },
  }),
  {
    cursor: "pointer",
    fontWeight: "bolder",
    color: "inherit",
  },
]);

export const csTplAttrNameStyle = style([
  sprinkles({
    padding: "small",
  }),
  {
    color: "inherit",
    fontWeight: "normal",
  },
]);

export const tplCheckItemStyle = recipe({
  base: [
    sprinkles({
      padding: "small",
    }),
    {
      cursor: "pointer",
      outline: "none",
    },
  ],
  variants: {
    shape: {
      circle: sprinkles({ borderRadius: "circle" }),
      square: sprinkles({ borderRadius: "none" }),
    },
    size: {
      standard: {
        width: "1.1em",
        height: "1.1em",
        maxWidth: "1.1em",
        minWidth: "1.1em",
        maxHeight: "1.1em",
        minHeight: "1.1em",
      },
      big: {
        width: "2em",
        height: "2em",
        maxWidth: "2em",
        minWidth: "2em",
        maxHeight: "2em",
        minHeight: "2em",
      },
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "standard",
  },
});

export const tplTextItemStyle = style([
  sprinkles({
    paddingBottom: "small",
    borderBottomColor: "primary300",
  }),
  {
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    width: "100%",
  },
]);

export const tplHintIconStyle = style([
  sprinkles({
    fill: "primary500",
  }),
]);

export const tplCounterStyle = style([
  sprinkles({
    color: "primary900",
    borderColor: "primary800",
    borderRadius: "small",
    borderWidth: "thin",
    borderStyle: "solid",
    paddingY: "small",
    paddingX: "medium",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    minWidth: "3em",
    textAlign: "center",
  },
]);

export const tplComputedValueStyle = style([
  sprinkles({
    paddingY: "small",
    paddingX: "medium",
    borderRadius: "small",
    backgroundColor: "info400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
]);
