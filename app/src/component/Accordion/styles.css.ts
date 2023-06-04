import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
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

export const accordionHeaderStyle = recipe({
    base: [
        sprinkles({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "bigger",
            padding: "small",

        }), { flex: 1, marginTop: 0, marginBottom: 2 }
    ],
    variants: {
        colorSchema: {
            "primary": sprinkles({ color: "primary" }),
            "secondary": sprinkles({ color: "secondary" }),
            "accent": sprinkles({ color: "accent" })
        },
        backgroundSchema: {
            "background": sprinkles({ backgroundColor: "background" }),
            "ghost": sprinkles({ backgroundColor: "backgroundGhost" }),
            "secondary": sprinkles({ backgroundColor: "backgroundSecondary" }),
            "transparent": {
                backgroundColor: "transparent"
            }
        }
    },
    defaultVariants: {
        colorSchema: "secondary",
        backgroundSchema: "transparent"
    }
});

export const accordionContentStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "column",
        padding: "small"
    })
]);