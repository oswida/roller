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
  colorThemeBrownDark,
  colorThemeGreenDark,
  colorThemeTealDark,
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
      tealDark: {
        vars: colorThemeTealDark,
      },
      green: {
        vars: colorThemeGreen,
      },
      greenDark: {
        vars: colorThemeGreenDark,
      },
      brown: {
        vars: colorThemeBrown,
      },
      brownDark: {
        vars: colorThemeBrownDark,
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
