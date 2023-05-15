import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common";

export const rgRootStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "column",
        gap: "small"
    }),
]);

export const rgLabelStyle = style([
    sprinkles({
        display: "flex",
    }),
    {
        marginRight: "10px",
        textDecoration: "underline"
    }
]);

export const rgItemStyle = style([
    sprinkles({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    })
]);

export const rgRadioIndicatorStyle = style({
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "white"
})

export const rgRadioInputStyle = style({
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "transparent",
    outline: "solid 2px grey",
    display: 'flex',
    alignItems: "center", justifyContent: "center"
})

export const rgRadioLabelStyle = style({
    marginLeft: "10px"
})