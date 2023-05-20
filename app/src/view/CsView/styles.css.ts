import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const csViewRootStyle = style([sprinkles({
    backgroundColor: "backgroundSecondary",
}), {
    overflow: "auto"
}]);