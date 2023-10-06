import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";

export const toastRootStyle = style([
    sprinkles({
        backgroundColor: "primary400",
        borderRadius: "small",
        padding: "small",
    })
]);

export const toastDescStyle = style([
    sprinkles({
        paddingX: "medium",
    })
]);