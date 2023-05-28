import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

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
        color: "primary"
    }), {
        outline: "none",
        border: "none",
        cursor: "pointer"
    }
]);

export const accordionHeaderStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "smaller",
        color: "secondary",
        paddingX: "medium"
    }), { flex: 1 }
]);

export const accordionContentStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "column",
        padding: "small"
    })
]);