import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const dialogRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
    color: "primary",
    borderRadius: "small",
    borderColor: "accent",
    borderStyle: "solid",
    borderWidth: "thin",
  }),
  {
    minWidth: "300px",
  },
]);

export const dialogHeaderStyle = style([
  sprinkles({
    backgroundColor: "background",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    color: "primary",
    padding: "small",
  }),
  {
    flex: 1,
  },
]);

export const dialogOverlayStyle = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgb(0 0 0 / 0.2)",
});

export const dialogPositionerStyle = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const dialogContentStyle = style([
  sprinkles({
    padding: "medium",
  }),
]);
