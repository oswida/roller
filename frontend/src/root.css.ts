import { recipe } from "@vanilla-extract/recipes";
import { redTheme, basicTheme, sprinkles, evergreenTheme, monosilverTheme } from "./common/theme.css";

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
            },
            evergreen: {
                vars: evergreenTheme
            },
            monosilver: {
                vars: monosilverTheme
            },
        },
        font: {
            Oxanium: sprinkles({ fontFamily: "Oxanium" }),
            Lato: sprinkles({ fontFamily: "Lato" }),
            Alegreya: sprinkles({ fontFamily: "Alegreya" }),
            Merriweather: sprinkles({ fontFamily: "Merriweather" }),
            Quattrocento: sprinkles({ fontFamily: "Quattrocento" }),
            Roboto: sprinkles({ fontFamily: "Roboto" })
        }
    },
    defaultVariants: {
        theme: "basic",
        font: "Oxanium"
    }
})