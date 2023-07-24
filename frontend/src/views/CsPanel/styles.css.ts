import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const csPanelRootStyle = style([
  sprinkles({
    backgroundColor: "primary100",
    paddingX: "small",
    paddingY: "medium",
    borderColor: "primary400",
    borderRadius: "small",
    borderStyle: "solid",
    borderWidth: "thin",
  }),
  {
    minWidth: "400px",
    width: "400px",
    height: "calc(100vh - 50px)",
  },
]);
