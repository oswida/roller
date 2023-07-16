import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

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
    // boxShadow: "5px 5px 5px #00000055",
  },
]);

export const tooltipTriggerStyle = style([
  sprinkles({
    backgroundColor: "none",
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
  },
]);
