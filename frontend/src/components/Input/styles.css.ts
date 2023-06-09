import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const inputRootStyle = style([
  sprinkles({
    display: "flex",
    gap: "small",
    color: "primary",
    alignItems: "center",
  }),
]);

export const inputFieldStyle = style([
  sprinkles({
    color: "primary",
    backgroundColor: "background",
    fontSize: "standard",
    paddingX: "medium",
    paddingY: "small",
    borderRadius: "small",
    borderColor: "accent",
  }),
  {
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
  },
]);
