import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const appStyle = style([
  sprinkles({ backgroundColor: "background", color: "primary" }),
  {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    overflow: "hidden",
  },
]);

export const mainStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
]);
