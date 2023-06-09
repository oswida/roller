import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const datablockStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingY: "small",
      paddingX: "medium",
      color: "primary",
    }),
    {
      width: "auto",
      minWidth: "3em",
    },
  ],
  variants: {
    background: {
      secondary: sprinkles({ backgroundColor: "backgroundSecondary" }),
      accent: sprinkles({ backgroundColor: "accent" }),
      none: sprinkles({ backgroundColor: "none" }),
    },
    position: {
      left: sprinkles({
        borderBottomLeftRadius: "medium",
        borderTopLeftRadius: "medium",
        justifyContent: "flex-start",
      }),
      right: sprinkles({
        borderBottomRightRadius: "medium",
        borderTopRightRadius: "medium",
        justifyContent: "flex-end",
      }),
    },
  },
  defaultVariants: {
    background: "none",
    position: "left",
  },
});
