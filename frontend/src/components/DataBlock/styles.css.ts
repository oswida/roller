import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  createBackgroundVariants,
  createColorVariants,
  createFlexVariants,
} from "~/common";
import { sprinkles } from "~/common/theme.css";

export const dataLabelStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingY: "small",
      borderBottomLeftRadius: "medium",
      borderTopLeftRadius: "medium",
      justifyContent: "flex-start",
      paddingX: "medium",
    }),
    {
      minWidth: "3em",
      minHeight: "2em",
    },
  ],
  variants: {
    colorSchema: createColorVariants(),
    backgroundSchema: createBackgroundVariants(),
    scale: createFlexVariants(),
  },
  defaultVariants: {
    colorSchema: "primary900",
    backgroundSchema: "primary100",
    scale: "flex10",
  },
});

export const dataValueStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingY: "small",
      borderBottomRightRadius: "medium",
      borderTopRightRadius: "medium",
      justifyContent: "flex-end",
      paddingLeft: "small",
      paddingRight: "medium",
    }),
    {
      minWidth: "3em",
      minHeight: "2em",
    },
  ],
  variants: {
    colorSchema: createColorVariants(),
    backgroundSchema: createBackgroundVariants(),
    scale: createFlexVariants(),
  },
  defaultVariants: {
    colorSchema: "primary900",
    backgroundSchema: "primary100",
    scale: "flex10",
  },
});

export const dataBlockStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }),
]);
