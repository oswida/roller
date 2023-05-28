import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const csViewerRootStyle = style([sprinkles({
    backgroundColor: "backgroundSecondary",
    padding: "small",
}), {
    overflow: "auto",
}])


export const csTplIconStyle = style({
    cursor: "pointer"
})