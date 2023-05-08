import { globalStyle, style } from "@vanilla-extract/css";
import { sprinkles } from "./common/theme.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: "Lato",
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("div", {
  boxSizing: "border-box",
  scrollbarWidth: "thin",
});

export const appStyle = style([
  sprinkles({ backgroundColor: "background", color: "primary" }),
  {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    overflow: "hidden",
  },
]);
