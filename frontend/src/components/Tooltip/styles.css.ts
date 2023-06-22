import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const tooltipRootStyle = style([
  sprinkles({
    backgroundColor: "background",
    color: "primary",
    borderColor: "accent",
    borderRadius: "small",
    paddingY: "small",
    paddingX: "medium",
  }),
  {
    maxWidth: "40em",
  },
]);

export const tooltipTriggerStyle = style([
  sprinkles({
    backgroundColor: "none",
  }),
  {
    outline: "none",
    border: "none",
  },
]);
