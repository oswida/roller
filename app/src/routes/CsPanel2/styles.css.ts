import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const csPanelRootStyle = style([sprinkles({
    backgroundColor: "background",
    padding: "small",
    borderColor: "accent",
    borderRadius: "small",
    borderStyle: "solid",
    borderWidth: "thin"
}), {
    minWidth: "300px",
    width: "300px",
    height: "calc(100vh - 50px)"
}])


