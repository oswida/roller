import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const chatRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
    padding: "medium",
    color: "primary",
    display: "flex",
    flexDirection: "column",
    gap: "small",
  }),
  {
    minWidth: "25vw",
    height: "calc(100vh - 8em)",
    overflowY: "auto",
  },
]);

export const chatListStyle = style([
  sprinkles({
    borderRadius: "small",
    padding: "small",
    fontSize: "smaller",
    display: "flex",
    flexDirection: "column",
    color: "primary",
    gap: "small",
  }),
  {},
]);

export const chatItemContentStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    color: "primary",
    backgroundColor: "background",
    borderBottomLeftRadius: "small",
    borderBottomRightRadius: "small",
    gap: "medium",
    padding: "medium",
  }),
  {
    overflowY: "auto",
  },
]);

export const chatItemHeaderStyle = style([
  sprinkles({
    backgroundColor: "accent",
    color: "primary",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingY: "small",
    paddingX: "medium",
    borderTopLeftRadius: "small",
    borderTopRightRadius: "small",
  }),
]);

export const chatItemCommentStyle = style({
  fontStyle: "italic",
});
