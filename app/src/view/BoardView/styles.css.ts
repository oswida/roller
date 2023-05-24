import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colorType, sprinkles } from "~/common";

export const boardViewRootStyle = style([sprinkles({
    backgroundColor: "backgroundSecondary",
}), {
    overflow: "auto"
}]);

export const boardLeftPaneStyle = style([
    sprinkles({
        backgroundColor: "backgroundSecondary",
        padding: "small",
        color: "primary",
        display: "flex",
        flexDirection: "column",
        gap: "small",
    }),
    {
        minWidth: "300px",
        maxWidth: "300px",
    },
]);

export const boardListStyle = style([
    sprinkles({
        backgroundColor: "background",
        borderRadius: "small",
        padding: "small",
        fontSize: "smaller",
        display: "flex",
        flexDirection: "column",
        color: "primary",
        gap: "medium",
    }),
    {
        overflowY: "auto",
    },
]);


export const boardItemStyle = recipe({
    base: [
        sprinkles({
            display: "flex",
            flexDirection: "column",
            color: "primary",
            borderRadius: "small",
            gap: "medium",
            padding: "medium",
            fontSize: "standard",
            borderColor: "accent",
            borderWidth: "thin",
            borderStyle: "solid"
        })
    ],
    variants: {
        sel: {
            true: {
                backgroundColor: colorType.backgroundSecondary
            },
            false: {
                backgroundColor: colorType.background
            }
        }
    },
    defaultVariants: {
        sel: false
    }
});