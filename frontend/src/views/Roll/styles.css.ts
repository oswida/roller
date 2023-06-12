import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const rollViewStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      padding: "small",
      backgroundColor: "backgroundSecondary",
    }),
  ],
  variants: {
    expanded: {
      false: {
        width: "calc(100vw - 700px)",
      },
      true: {
        width: "calc(100vw - 350px)",
      },
    },
  },
});
