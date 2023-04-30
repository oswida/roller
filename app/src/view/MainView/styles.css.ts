import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const mainStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
]);

export const topbarStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "small",
    alignItems: "center",
  }),
]);
