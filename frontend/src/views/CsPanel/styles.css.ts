import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const csPanelRootStyle = style([
  sprinkles({
    backgroundColor: "background",
    padding: "small",
    borderColor: "accent",
    borderRadius: "small",
    borderStyle: "solid",
    borderWidth: "thin",
  }),
  {
    minWidth: "320px",
    width: "320px",
    height: "calc(100vh - 50px)",
  },
]);
