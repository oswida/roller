import { style } from "@vanilla-extract/css";
import { sprinkles, themeZindex } from "~/common/theme.css";

export const selectTriggerStyle = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "small",
    paddingX: "medium",
    paddingY: "small",
    fontSize: "standard",
    backgroundColor: { default: "primary100", hover: "primary300" },
    borderColor: "primary300",
    borderStyle: "solid",
    borderWidth: "thin",
    color: "primary900",
  }),
  {
    lineHeight: 1,
    height: "35px",
    outline: "none",
    transition: "border-color 250ms, color 250ms",
    cursor: "pointer",
    fontFamily: "inherit"
  },
]);

export const selectListStyle = style([
  sprinkles({
    color: "primary900",
    backgroundColor: "primary200",
    padding: "none",
    display: "flex",
    borderColor: "primary400",
    borderRadius: "small",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  {
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    zIndex: themeZindex.dialog,
  },
]);

export const selectListboxStyle = style([
  sprinkles({
    paddingY: "small",
    paddingX: "none",
    margin: "none",
  }),
  {
    maxHeight: "50vh",
    overflowY: "auto",
  },
]);

export const selectItemStyle = style([
  sprinkles({
    color: { default: "primary900", hover: "primary100" },
    backgroundColor: { default: "primary200", hover: "primary500" },
    paddingY: "small",
    paddingX: "medium",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "small",
    gap: "medium",
    marginX: "small",
  }),
  {
    textAlign: "end",
    flex: 1,
  },
]);

export const selectLabelStyle = style([
  sprinkles({
    color: "primary800",
    fontSize: "smaller",
  }),
]);
