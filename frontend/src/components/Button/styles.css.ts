import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const buttonStyle = recipe({
  base: [
    sprinkles({
      backgroundColor: { default: "primary200", hover: "primary300" },
      paddingX: "medium",
      paddingY: "small",

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
      userSelect: "none",
      outline: "none",
      lineHeight: 0,
    },
  ],
  variants: {
    variant: {
      flat: [
        sprinkles({
          borderColor: "primary400",
          borderStyle: "solid",
          borderWidth: "thin",
        }),
        {
          height: "35px",
          width: "auto",
        },
      ],
      ghost: [
        sprinkles({
          borderColor: "primary400",
          borderStyle: "solid",
          borderWidth: "thin",
        }),
        {
          height: "35px",
          width: "auto",
          backgroundColor: "transparent",
        },
      ],
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
        width: 25,
        height: 25,
        paddingLeft: 0,
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
      true: sprinkles({
        backgroundColor: "primary400",
        color: "primary100",
        fill: "primary100",
      }),
      false: sprinkles({ backgroundColor: "primary200" }),
    },
    colorSchema: {
      primary: sprinkles({ color: "primary900" }),
      secondary: sprinkles({ color: "primary800" }),
      accent: sprinkles({ color: "primary400" }),
    },
  },
  defaultVariants: {
    variant: "flat",
    disabled: false,
    toggled: false,
    colorSchema: "primary",
  },
});
