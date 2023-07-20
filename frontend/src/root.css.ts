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
  themeVars,
  themeTokens,
} from "./common/theme.css";
import { globalStyle } from "@vanilla-extract/css";

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

globalStyle(".markdown-anchor", {
  textDecoration: "none",
  color: themeVars.info700,
});

globalStyle(".markdown-code", {
  backgroundColor: themeVars.warning100,
  borderRadius: "5px",
  padding: "2px 3px",
});

globalStyle(".markdown-ul", {
  marginTop: "5px",
  marginBottom: "5px",
  paddingLeft: "20px",
  listStyleType: "circle",
});

globalStyle(".markdown-blockquote", {
  marginTop: "3px",
  marginBottom: "3px",
  paddingLeft: "10px",
  marginLeft: "0px",
  marginRight: "0px",
  color: themeVars.success800,
  borderLeft: `solid 2px ${themeVars.success800}`,
});

globalStyle(".markdown-p", {
  marginTop: "2px",
  marginBottom: "2px",
});

globalStyle(".markdown-hr", {
  margin: "5px",
});
