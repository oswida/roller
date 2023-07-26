import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const hdItemRootStyle = style([
  sprinkles({
    backgroundColor: "primary300",
    borderRadius: "small",
    padding: "small",
    display: "flex",
    flexDirection: "column",
  }),
  {
    minHeight: "100px",
  },
]);

export const hdItemTextStyle = style([
  sprinkles({
    color: "primary900",
    display: "flex",
    flexDirection: "column",
    gap: "small",
    fontSize: "standard",
  }),
  {
    maxHeight: "250px",
    overflow: "auto",
    flex: 1,
  },
]);