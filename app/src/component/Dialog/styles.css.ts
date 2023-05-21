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
    paddingY: "small",
    paddingX: "medium",
    borderTopLeftRadius: "small",
    borderTopRightRadius: "small"
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
  }), {
    marginTop: "0px",
    marginBottom: "0px"
  }
]);


export const dialogTitleStyle = style([sprinkles({
  fontSize: "standard",
  color: "primary"
})])