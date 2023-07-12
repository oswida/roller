import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const rgRootStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "medium",
  }),
]);

export const rgLabelStyle = style([
  sprinkles({
    display: "flex",
  }),
  {
    marginRight: "10px",
  },
]);

export const rgItemStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "large",
  }),
]);

export const rgRadioIndicatorStyle = style({
  height: 10,
  width: 10,
  borderRadius: 5,
  backgroundColor: "white",
});

export const rgRadioInputStyle = style([
  sprinkles({
    outlineColor: "primary400",
  }),
  {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "transparent",
    outlineStyle: "solid",
    outlineWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const rgRadioLabelStyle = style({
  marginLeft: "10px",
});
