import { recipe } from "@vanilla-extract/recipes";
import { colorType, sprinkles } from "~/common";

export const buttonStyle = recipe({
  base: [
    sprinkles({
      backgroundColor: "background",
      color: "primary",
      paddingX: "medium",
      paddingY: "small",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "small",
    }),
    {
      boxShadow: "none",
      outline: "none",
      cursor: "pointer",
      height: "2.5em",
      selectors: {
        "&:hover": {
          backgroundColor: colorType.backgroundSecondary,
        },
      },
    },
  ],
  variants: {
    variant: {
      flat: {
        border: "none",
      },
      ghost: {
        border: "solid 1px",
      },
      icon: {
        width: "2em",
        height: "2em",
        border: "none",
      },
      bigicon: {
        width: "3em",
        height: "3em",
        border: "none",
      },
    },
  },
  defaultVariants: {
    variant: "flat",
  },
});
