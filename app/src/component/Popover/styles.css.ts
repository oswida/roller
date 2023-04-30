import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const popoverHeaderStyle = style([
  sprinkles({
    backgroundColor: "background",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    color: "primary",
  }),
  {
    flex: 1,
  },
]);

export const popoverContentStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background",
    borderRadius: "small",
    borderColor: "accent",
    color: "primary",
    padding: "medium",
  }),
  {
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "250px",
  },
]);
