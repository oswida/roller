import { recipe } from "@vanilla-extract/recipes";
import { cvBackground, cvBackgroundSecondary, cvBackgroundGhost, cvAccent, cvPrimary, cvSecondary, cvDanger, redTheme, basicTheme } from "./common/theme.css";

export const rootStyle = recipe({
    base: {

    },
    variants: {
        theme: {
            red: {
                vars: redTheme
            },
            basic: {
                vars: basicTheme
            }
        }
    },
    defaultVariants: {
        theme: "basic"
    }
})