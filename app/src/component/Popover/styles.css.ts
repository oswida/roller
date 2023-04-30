import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const popoverRootStyle = style([
  sprinkles({
    backgroundColor: "none",
  }),
]);

export const popoverContentStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background",
    borderRadius: "small",
    borderColor: "accent",
  }),
  {
    borderStyle: "solid",
    borderWidth: 1,
  },
]);
