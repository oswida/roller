import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const topbarStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "none",
    alignItems: "center",
    gap: "medium",
  }),
]);

export const topbarItemStyle = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingX: "small",
    alignItems: "center",
    gap: "medium",
  }),
  {
    marginRight: "30px",
  },
]);
