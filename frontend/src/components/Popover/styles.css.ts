import { style } from "@vanilla-extract/css";
import { sprinkles, themeZindex } from "~/common/theme.css";

export const popoverTriggerStyle = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "small",
    paddingX: "small",
    paddingY: "small",
    fontSize: "standard",
    backgroundColor: { default: "none", hover: "primary400" },
    borderColor: "primary300",
    borderStyle: "solid",
    borderWidth: "thin",
    color: "primary900",
  }),
  {
    lineHeight: 1,
    height: "35px",
    width: "35px",
    outline: "none",
    transition: "border-color 250ms, color 250ms",
    cursor: "pointer",
    fontFamily: "inherit"
  },
]);

export const popoverHeaderStyle = style([
  sprinkles({
    backgroundColor: "primary100",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    color: "primary900",
    paddingBottom: "small",
    borderBottomColor: "primary300",
  }),
  {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    fontFamily: "inherit"
  },
]);

export const popoverContentStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "primary100",
    borderRadius: "small",
    borderColor: "primary400",
    color: "primary900",
    padding: "medium",
  }),
  {
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "250px",
    zIndex: themeZindex.popover,
  },
]);

export const popoverCloseButtonStyle = style([
  sprinkles({
    backgroundColor: { default: "primary200", hover: "primary300" },
    color: "primary900",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "small",
    fontSize: "standard",
  }),
  {
    width: 25,
    height: 25,
    outline: "none",
    cursor: "pointer",
    userSelect: "none",
    border: "none",
  },
]);
