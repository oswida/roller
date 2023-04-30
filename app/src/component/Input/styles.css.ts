import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const inputRootStyle = style([
  sprinkles({
    backgroundColor: "background",
    padding: "small",
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
  },
]);
