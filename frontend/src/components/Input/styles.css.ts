import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const inputRootStyle = style([
  sprinkles({
    display: "flex",
    gap: "small",
    color: "primary900",
    alignItems: "center",
  }),
]);

export const inputFieldStyle = style([
  sprinkles({
    color: "primary900",
    backgroundColor: "primary100",
    fontSize: "standard",
    paddingX: "medium",
    paddingY: "small",
    borderRadius: "small",
    borderColor: "primary400",
  }),
  {
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    outline: "none",
    whiteSpace: "pre-wrap",
    fontFamily: "inherit"
  },
]);
