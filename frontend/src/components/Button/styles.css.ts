import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const buttonStyle = recipe({
  base: [
    sprinkles({
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
      full: [
        sprinkles({
          borderColor: "primary400",
          borderStyle: "solid",
          borderWidth: "thin",
          paddingX: "medium",
          paddingY: "small",
        }),
        {
          width: "auto",
          minHeight: "35px",
        },
      ],
      icon: [
        sprinkles({
          paddingX: "none",
          paddingY: "none",
          borderStyle: "none",
          fill: "primary900",
        }),
        {
          width: "35px",
          height: "35px",
        },
      ],
    },
    toggled: {
      true: sprinkles({
        color: { default: "primary100", hover: "primary700" },
        fill: { default: "primary100", hover: "primary100" },
        backgroundColor: { default: "primary700", hover: "primary300" },
      }),
      false: sprinkles({
        color: { default: "primary900", hover: "primary700" },
        fill: { default: "primary900", hover: "primary700" },
        backgroundColor: { default: "primary200", hover: "primary300" },
      }),
    },
  },
  defaultVariants: {
    variant: "full",
    toggled: false,
  },
  // variants: {
  //   variant: {
  //     flat: [
  //       sprinkles({
  //         borderColor: "primary400",
  //         borderStyle: "solid",
  //         borderWidth: "thin",
  //       }),
  //       {
  //         height: "35px",
  //         width: "auto",
  //       },
  //     ],
  //     ghost: [
  //       sprinkles({
  //         borderColor: "primary400",
  //         borderStyle: "solid",
  //         borderWidth: "thin",
  //       }),
  //       {
  //         height: "35px",
  //         width: "auto",
  //         backgroundColor: "transparent",
  //       },
  //     ],
  //     icon: {
  //       width: 40,
  //       height: 40,
  //       border: "none",
  //       borderRadius: sprinkles({ borderRadius: "small" }),
  //     },
  //     bigicon: {
  //       width: 50,
  //       height: 50,
  //       border: "none",
  //     },
  //     smallicon: {
  //       width: 25,
  //       height: 25,
  //       paddingLeft: 0,
  //     },
  //   },
  //   disabled: {
  //     true: {
  //       opacity: 0.5,
  //     },
  //     false: {
  //       opacity: 1,
  //     },
  //   },
  //   toggled: {
  //     true: sprinkles({
  //       backgroundColor: "primary600",
  //       color: "primary100",
  //     }),
  //     false: sprinkles({ backgroundColor: "primary200", color: "primary900" }),
  //   },
  // },
  // defaultVariants: {
  //   variant: "flat",
  //   disabled: false,
  //   toggled: false,
  // },
});
