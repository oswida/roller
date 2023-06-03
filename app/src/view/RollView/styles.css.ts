import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common";

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
        width: "calc(100vw - 650px)"
      },
      true: {
        width: "calc(100vw - 350px)"
      }
    }
  }
});
