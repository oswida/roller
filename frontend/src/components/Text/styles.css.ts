import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const textStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      backgroundColor: "none",
    }), {
      fontFamily: "inherit"
    }
  ],
  variants: {
    colorSchema: {
      primary: sprinkles({ color: "primary900" }),
      secondary: sprinkles({ color: "primary700" }),
      background: sprinkles({ color: "primary100" }),
      accent: sprinkles({ color: "primary400" }),
      danger: sprinkles({ color: "danger900" }),
    },
    fontSize: {
      smaller: sprinkles({ fontSize: "smaller" }),
      small: sprinkles({ fontSize: "small" }),
      standard: sprinkles({ fontSize: "standard" }),
      bigger: sprinkles({ fontSize: "bigger" }),
      big: sprinkles({ fontSize: "big" }),
    },
    preserveLines: {
      true: {
        whiteSpace: "pre-wrap",
      },
    },
  },
  defaultVariants: {
    colorSchema: "primary",
    fontSize: "standard",
    preserveLines: false,
  },
});
