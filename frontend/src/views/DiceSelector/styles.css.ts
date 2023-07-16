import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const diceSelectorStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "primary100",
    paddingBottom: "medium",
    paddingX: "medium",
    paddingTop: "large",
    alignItems: "center",
    gap: "medium",
  }),
  {
    flexWrap: "wrap",
  },
]);

export const diceEntryStyle = style([
  sprinkles({
    display: "flex",
    backgroundColor: { default: "primary300", hover: "primary400" },
    color: "primary900",
    alignItems: "center",
    borderRadius: "circle",
    borderColor: "primary900",
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
  },
]);

export const diceNumberStyle = style([
  sprinkles({
    display: "flex",
    backgroundColor: "primary900",
    color: "primary100",
    padding: "small",
    alignItems: "center",
    borderRadius: "circle",
    borderColor: "primary400",
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
