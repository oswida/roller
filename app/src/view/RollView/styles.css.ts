import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const rollViewStyle = style([
  sprinkles({
    display: "flex",
    padding: "small",
    backgroundColor: "backgroundSecondary",
  }),
  {
    flex: 1,
    height: "calc(100vh - 8em)",
    width: "calc(75vw)",
  },
]);
