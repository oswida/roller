import { recipe } from "@vanilla-extract/recipes";
import { colorType, spaceSize, sprinkles } from "~/common";

export const buttonStyle = recipe({
  base: [
    sprinkles({
      backgroundColor: "background",
      color: "primary",
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
      outline: "none",
      lineHeight: 0,
      transition: "250ms background-color",
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
        height: "35px",
      },
      ghost: {
        border: "solid 1px",
        height: "35px",
      },
      underline: {
        border: "none",
        borderBottom: "solid 1px",
      },
      icon: {
        width: 40,
        height: 40,
        border: "none",
        borderRadius: spaceSize.small,
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
        borderRadius: spaceSize.small,
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
  },
  defaultVariants: {
    variant: "flat",
    disabled: false,
    toggled: false,
  },
});
