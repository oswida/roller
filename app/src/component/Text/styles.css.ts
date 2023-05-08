import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common";

export const textStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      backgroundColor: "none",
    }),
  ],
  variants: {
    colorSchema: {
      primary: sprinkles({ color: "primary" }),
      secondary: sprinkles({ color: "secondary" }),
      background: sprinkles({ color: "background" }),
      accent: sprinkles({ color: "accent" }),
      danger: sprinkles({ color: "danger" }),
    },
    fontSize: {
      smaller: sprinkles({ fontSize: "smaller" }),
      small: sprinkles({ fontSize: "small" }),
      standard: sprinkles({ fontSize: "standard" }),
      bigger: sprinkles({ fontSize: "bigger" }),
      big: sprinkles({ fontSize: "big" }),
    },
  },
  defaultVariants: {
    colorSchema: "primary",
    fontSize: "standard",
  },
});
