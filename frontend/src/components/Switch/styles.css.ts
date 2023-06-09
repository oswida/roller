import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const switchRootStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    padding: "small",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "large",
  }),
]);

export const switchControlStyle = recipe({
  base: [
    sprinkles({
      borderRadius: "large",
      borderColor: "secondary",
      borderWidth: "thin",
      borderStyle: "solid",
    }),
    {
      width: "3em",
    },
  ],
  variants: {
    checked: {
      true: sprinkles({ backgroundColor: "secondary" }),
      false: sprinkles({ backgroundColor: "backgroundSecondary" }),
    },
  },
});

export const switchThumbStyle = recipe({
  base: [
    sprinkles({
      borderRadius: "circle",
      backgroundColor: "accent",
    }),
    {
      width: "1.5em",
      height: "1.5em",
      transition: "250ms transform",
    },
  ],
  variants: {
    checked: {
      true: { transform: "translateX(calc(100% - 1px))" },
      false: {},
    },
  },
});
