import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const mainStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
  }),
]);

export const topbarStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "small",
    alignItems: "center",
    gap: "medium"
  })
]);

export const topbarItemStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingX: "small",
    alignItems: "center",
    gap: "medium"
  }), {
    // borderLeft: `solid 2px ${colorType.accent}`,
    marginRight: "30px"
  }
]);

