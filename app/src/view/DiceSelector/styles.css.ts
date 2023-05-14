import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colorType, sprinkles } from "~/common";

export const diceSelectorStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "background",
    paddingBottom: "medium",
    paddingX: "medium",
    paddingTop: "large",
    alignItems: "center",
    gap: "large",
  }), {
    flexWrap: "wrap"
  }
],);

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
    borderStyle: "solid",
    justifyContent: "center",
    fontSize: "standard",
  }),
  {
    borderWidth: 1,
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

export const dicePanelStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      padding: "none",
      gap: "medium",
    }),
  ],
});
