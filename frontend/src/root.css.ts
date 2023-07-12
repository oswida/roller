import { recipe } from "@vanilla-extract/recipes";
import {
  sprinkles,
  colorThemeTeal,
  colorThemeBlueDark,
  colorThemeBlue,
  colorThemeGreen,
  colorThemeBrown,
  colorThemeRed,
  colorThemeRedDark,
} from "./common/theme.css";

export const rootStyle = recipe({
  base: {},
  variants: {
    theme: {
      blue: {
        vars: colorThemeBlue,
      },
      blueDark: {
        vars: colorThemeBlueDark,
      },
      teal: {
        vars: colorThemeTeal,
      },
      green: {
        vars: colorThemeGreen,
      },
      brown: {
        vars: colorThemeBrown,
      },
      red: {
        vars: colorThemeRed,
      },
      redDark: {
        vars: colorThemeRedDark,
      },
    },
    font: {
      Oxanium: sprinkles({ fontFamily: "Oxanium" }),
      Lato: sprinkles({ fontFamily: "Lato" }),
      Alegreya: sprinkles({ fontFamily: "Alegreya" }),
      Merriweather: sprinkles({ fontFamily: "Merriweather" }),
      Quattrocento: sprinkles({ fontFamily: "Quattrocento" }),
      Roboto: sprinkles({ fontFamily: "Roboto" }),
    },
  },
  defaultVariants: {
    font: "Oxanium",
  },
});
