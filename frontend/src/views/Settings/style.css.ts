import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const dangerLineStyle = style([sprinkles({
    color: "danger700",
    backgroundColor: "danger700",
    borderColor: "danger700",
}), {
    width: "100%"
}])