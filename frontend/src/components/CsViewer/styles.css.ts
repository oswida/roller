import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeColor, sprinkles } from "~/common/theme.css";

export const csViewerRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
  }),
  {
    overflow: "auto",
    userSelect: "none",
  },
]);

export const csTplIconStyle = style([
  sprinkles({
    padding: "small",
    borderRadius: "small",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    cursor: "pointer",
    width: "32px",
    height: "32px",
    selectors: {
      "&:hover": {
        backgroundColor: themeColor.accent,
      },
    },
  },
]);

export const csTplAttrValueStyle = style([
  sprinkles({
    padding: "small",
    borderRadius: "small",
  }),
  {
    cursor: "pointer",
    selectors: {
      "&:hover": {
        backgroundColor: themeColor.backgroundSecondary,
      },
    },
  },
]);

export const tplResourceItemStyle = recipe({
  base: [
    sprinkles({
      padding: "small",
    }),
    {
      width: "1em",
      height: "1em",
      cursor: "pointer",
    },
  ],
  variants: {
    shape: {
      circle: sprinkles({ borderRadius: "circle" }),
      square: sprinkles({ borderRadius: "none" }),
    },
  },
  defaultVariants: {
    shape: "circle",
  },
});
