import { style } from "@vanilla-extract/css";
import { colorType, sprinkles } from "~/common";

export const accordionRootStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "column",
    })
]);

export const accordionTriggerStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "row",
        backgroundColor: "none",
        color: "primary",
        alignItems: "center",
        justifyContent: "center"
    }), {
        outline: "none",
        border: "none",
        cursor: "pointer",
        width: "24px",
        height: "24px",
        selectors: {
            "&:hover": {
                backgroundColor: colorType.accent
            }
        }
    }
]);

export const accordionHeaderStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "bigger",
        color: "secondary",
        paddingX: "small"
    }), { flex: 1 }
]);

export const accordionContentStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "column",
        padding: "small"
    })
]);