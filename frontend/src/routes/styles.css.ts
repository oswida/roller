import { style } from "@vanilla-extract/css";
import { sprinkles, themeZindex } from "~/common/theme.css";

export const appStyle = style([
  sprinkles({ backgroundColor: "primary100", color: "primary900" }),
  {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    overflow: "hidden",
  },
]);

export const canvasStyle = style([
  sprinkles({ backgroundColor: "primary200", color: "primary900" }),
  {
    width: "100vw",
    height: "100vh",

  },
]);

export const mainStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
]);

export const toastListStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    padding: "medium",
    gap: "small"

  }), {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: "400px",
    maxWidth: "100vw",
    margin: 0,
    listStyle: "none",
    outline: "none",
    zIndex: themeZindex.tooltip
  }
]);


