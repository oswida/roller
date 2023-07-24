import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const dialogRootStyle = style([
  sprinkles({
    backgroundColor: "primary200",
    color: "primary900",
    borderRadius: "small",
    borderColor: "primary600",
    borderStyle: "solid",
    borderWidth: "thin",
  }),
  {
    minWidth: "300px",
    width: "fit-content",
  },
]);

export const dialogHeaderStyle = style([
  sprinkles({
    backgroundColor: "primary300",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    color: "primary900",
    paddingY: "small",
    paddingX: "medium",
    borderTopLeftRadius: "small",
    borderTopRightRadius: "small",
  }),
  {
    flex: 1,
    height: "42px",
  },
]);

export const dialogOverlayStyle = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgb(0 0 0 / 0.4)",
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
    display: "flex",
    flexDirection: "column",
    gap: "medium",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "small",
  }),
  {
    marginTop: "0px",
    marginBottom: "0px",
  },
]);

export const dialogTitleStyle = style([
  sprinkles({
    fontSize: "standard",
    color: "primary900",
  }),
]);

export const dialogTriggerStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "small",
      fontSize: "standard",
      backgroundColor: { default: "none", hover: "primary400" },
      color: "primary900",
    }),
    {
      lineHeight: 1,
      outline: "none",
      cursor: "pointer",
      border: "none",
      padding: "0px",
      margin: "0px",
    },
  ],
});

export const emptyTriggerStyle = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "standard",
    backgroundColor: "none",
    borderStyle: "none",
    color: "primary900",
    padding: "none",
    margin: "none",
  }),
  {
    outline: "none",
  },
]);

export const dialogCloseButtonStyle = style([
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
