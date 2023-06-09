import { recipe } from "@vanilla-extract/recipes";
import { createSpaceVariants } from "~/common";
import { sprinkles } from "~/common/theme.css";

export const flexStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
    }),
  ],
  variants: {
    gap: createSpaceVariants("gap"),
    direction: {
      row: sprinkles({ flexDirection: "row" }),
      column: sprinkles({ flexDirection: "column" }),
    },
    center: {
      true: sprinkles({ justifyContent: "center", alignItems: "center" }),
    },
  },
  defaultVariants: {
    gap: "small",
    direction: "row",
  },
});
