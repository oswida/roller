import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const diceSelectorStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "background",
    padding: "medium",
    paddingX: "large",
    paddingTop: "large",
    alignItems: "center",
    gap: "large",
  }),
]);

export const diceEntryStyle = style([
  sprinkles({
    display: "flex",
    backgroundColor: "backgroundSecondary",
    color: "primary",
    alignItems: "center",
    borderRadius: "circle",
    borderColor: "primary",
    justifyContent: "center",
    fontSize: "big",
    padding: "medium",
  }),
  {
    borderStyle: "solid",
    borderWidth: 1,
    height: "2.3em",
    width: "2.3em",
    textAlign: "center",
    textTransform: "uppercase",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    selectors: {
      "&:hover": { backgroundColor: colorType.accent },
    },
  },
]);

export const diceNumberStyle = style([
  sprinkles({
    display: "flex",
    backgroundColor: "primary",
    color: "background",
    padding: "small",
    alignItems: "center",
    borderRadius: "circle",
    borderColor: "accent",
    justifyContent: "center",
    fontSize: "standard",
  }),
  {
    borderWidth: 2,
    height: "1.4em",
    width: "1.4em",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: "absolute",
    left: "calc(50% - 0.6em)",
    top: "-0.6em",
    userSelect: "none",
  },
]);
