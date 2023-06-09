import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const buttonStyle = recipe({
  base: [
    sprinkles({
      backgroundColor: "background",
      paddingX: "medium",
      paddingY: "small",
      display: "flex",
      gap: "medium",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "small",
      fontSize: "standard",
    }),
    {
      cursor: "pointer",
      appearance: "none",
      display: "inline-flex",
      width: "auto",
      userSelect: "none",
      outline: "none",
      lineHeight: 0,
      transition: "250ms background-color",
      selectors: {
        "&:hover": {
          backgroundColor: sprinkles({ backgroundColor: "secondary" }),
        },
      },
    },
  ],
  variants: {
    variant: {
      flat: {
        border: "none",
        height: "35px",
      },
      ghost: {
        border: "solid 1px",
        height: "35px",
        backgroundColor: "transparent",
      },
      underline: {
        border: "none",
        borderBottom: "solid 1px",
      },
      icon: {
        width: 40,
        height: 40,
        border: "none",
        borderRadius: sprinkles({ borderRadius: "small" }),
      },
      bigicon: {
        width: 50,
        height: 50,
        border: "none",
      },
      smallicon: {
        width: 30,
        height: 30,
        border: "none",
        borderRadius: sprinkles({ borderRadius: "small" }),
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      },
    },
    toggled: {
      true: sprinkles({ backgroundColor: "accent" }),
      false: sprinkles({ backgroundColor: "background" }),
    },
    colorSchema: {
      primary: sprinkles({ color: "primary" }),
      secondary: sprinkles({ color: "secondary" }),
      accent: sprinkles({ color: "accent" }),
    },
  },
  defaultVariants: {
    variant: "flat",
    disabled: false,
    toggled: false,
    colorSchema: "primary",
  },
});
