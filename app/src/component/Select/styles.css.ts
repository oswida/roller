import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const selectTriggerStyle = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "small",
    paddingX: "small",
    paddingY: "medium",
    fontSize: "standard",
    backgroundColor: "background",
    borderColor: "backgroundSecondary",
    borderStyle: "solid",
    borderWidth: "thin",
    color: "primary",
  }),
  {
    lineHeight: 1,
    height: "35px",
    outline: "none",
    transition: "border-color 250ms, color 250ms",
    cursor: "pointer",
    selectors: {
      "&:hover": { backgroundColor: colorType.backgroundSecondary },
    },
  },
]);

export const selectListStyle = style([
  sprinkles({
    color: "primary",
    backgroundColor: "backgroundSecondary",
    padding: "none",
    display: "flex",
    borderColor: "accent",
    borderRadius: "small",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  {
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    zIndex: 50
  },
]);

export const selectListboxStyle = style([
  sprinkles({
    padding: "small",
    margin: "none",
  }),
  {
    maxHeight: "50vh",
    overflowY: "auto",
  },
]);

export const selectItemStyle = style([
  sprinkles({
    color: "primary",
    backgroundColor: "backgroundSecondary",
    padding: "small",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "small",
    gap: "medium",
  }),
  {
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "end",
    selectors: {
      "&:hover": {
        backgroundColor: colorType.background,
      },
    },
  },
]);


export const selectLabelStyle = style([sprinkles({
  color: "secondary",
  fontSize: "smaller"
})]);