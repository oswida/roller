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
    align: {
      center: sprinkles({ alignItems: "center" }),
      start: sprinkles({ alignItems: "flex-start" }),
      end: sprinkles({ alignItems: "flex-end" }),
    },
    justify: {
      center: sprinkles({ justifyContent: "center" }),
      space: sprinkles({ justifyContent: "space-between" }),
      evenly: sprinkles({ justifyContent: "space-evenly" }),
      start: sprinkles({ justifyContent: "flex-start" }),
      end: sprinkles({ justifyContent: "flex-end" }),
    },
    grow: {
      true: {
        width: "100%",
      },
    },
  },
  defaultVariants: {
    gap: "small",
    direction: "row",
    align: "start",
    justify: "start",
    grow: false,
  },
});
