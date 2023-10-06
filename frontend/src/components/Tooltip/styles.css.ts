import { style } from "@vanilla-extract/css";
import { sprinkles, themeZindex } from "~/common/theme.css";

export const tooltipRootStyle = style([
  sprinkles({
    backgroundColor: "info100",
    color: "primary900",
    borderColor: "primary600",
    borderWidth: "thin",
    borderStyle: "solid",
    borderRadius: "small",
    paddingY: "small",
    paddingX: "medium",
    fontSize: "smaller",
  }),
  {
    maxWidth: "40em",
    zIndex: themeZindex.tooltip
    // boxShadow: "5px 5px 5px #00000055",
  },
]);

export const tooltipTriggerStyle = style([
  sprinkles({
    backgroundColor: "none",
    color: "primary900",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    outline: "none",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    padding: "0px",
    fontFamily: "inherit"
  },
]);
