import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const accordionRootStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
]);

export const accordionTriggerStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    backgroundColor: { default: "none", hover: "primary300" },
    color: { default: "primary100", hover: "primary900" },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "small",
  }),
  {
    outline: "none",
    border: "none",
    cursor: "pointer",
    width: "24px",
    height: "24px",
  },
]);

export const accordionHeaderStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "bigger",
      padding: "small",
      borderTopLeftRadius: "small",
      borderTopRightRadius: "small",
    }),
    { flex: 1, marginTop: 0, marginBottom: 2 },
  ],
  variants: {
    colorSchema: {
      primary: sprinkles({
        color: "primary900",
        backgroundColor: "primary100",
      }),
      secondary: sprinkles({
        color: "primary700",
        backgroundColor: "primary300",
      }),
      accent: sprinkles({ color: "primary200", backgroundColor: "primary800" }),
    },
    backgroundSchema: {
      background: sprinkles({ backgroundColor: "primary100" }),
      ghost: sprinkles({ backgroundColor: "primary200" }),
      secondary: sprinkles({ backgroundColor: "primary300" }),
      transparent: {
        backgroundColor: "transparent",
      },
    },
  },
  defaultVariants: {
    colorSchema: "secondary",
    backgroundSchema: "transparent",
  },
});

export const accordionContentStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    padding: "small",
  }),
]);
