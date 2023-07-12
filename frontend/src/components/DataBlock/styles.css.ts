import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const datablockStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingY: "small",
    }),
    {
      // width: "auto",
      minWidth: "3em",
    },
  ],
  variants: {
    background: {
      secondary: sprinkles({
        backgroundColor: "primary300",
        color: "primary900",
      }),
      accent: sprinkles({ backgroundColor: "primary600", color: "primary100" }),
      none: sprinkles({ backgroundColor: "none", color: "primary900" }),
    },
    position: {
      left: sprinkles({
        borderBottomLeftRadius: "medium",
        borderTopLeftRadius: "medium",
        justifyContent: "flex-start",
        paddingRight: "small",
        paddingLeft: "medium",
      }),
      right: sprinkles({
        borderBottomRightRadius: "medium",
        borderTopRightRadius: "medium",
        justifyContent: "flex-end",
        paddingLeft: "small",
        paddingRight: "medium",
      }),
    },
  },
  defaultVariants: {
    background: "none",
    position: "left",
  },
});
