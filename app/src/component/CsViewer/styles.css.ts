import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const csViewerRootStyle = style([sprinkles({
    backgroundColor: "backgroundSecondary",
    padding: "small",
}), {
    overflow: "auto",
}])


export const csTplIconStyle = style({
    cursor: "pointer"
})


export const csTplAttrValueStyle = style([sprinkles({
    padding: "small",
    borderRadius: "small"
}), {
    cursor: "pointer",
    selectors: {
        "&:hover": {
            backgroundColor: colorType.backgroundSecondary
        }
    }
}])
