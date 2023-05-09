import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const popoverTriggerStyle = style([
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
    borderBottom: `1px solid ${colorType.backgroundSecondary}`,
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
