import { style } from "@vanilla-extract/css";
import { colorType, spaceSize, sprinkles } from "~/common";

export const selectListStyle = style([
  sprinkles({
    color: "primary",
    backgroundColor: "backgroundSecondary",
    padding: "small",
    display: "flex",
    borderColor: "accent",
    borderRadius: "small",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  {
    maxHeight: "50vh",
    overflowY: "auto",
  },
]);

export const selectListboxStyle = style([
  {
    paddingLeft: "5px",
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
    gap: "large",
  }),
  {
    selectors: {
      "&:hover": {
        backgroundColor: colorType.background,
      },
    },
  },
]);
