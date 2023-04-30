import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const spaceSize: Record<string, string> = {
  none: "0px",
  small: "5px",
  medium: "10px",
  large: "20px",
  em2: "2em",
  circle: "50%",
};

export type spaceType =
  | "none"
  | "small"
  | "medium"
  | "large"
  | "2em"
  | "circle";

export const colorType = {
  background: "#080014",
  backgroundSecondary: "#21293B",
  accent: "#335064",
  primary: "#fff",
  secondary: "#91D3C2",
  none: "transparent",
};

const fontType = {
  Alegreya: "Alegreya",
  Lato: "Lato",
  Merriweather: "Merriweather",
  Oxanium: "Oxanium",
  Quattrocento: "Quattrocento",
  Roboto: "Roboto",
};

const fontSize = {
  small: "11px",
  smaller: "14px",
  standard: "16px",
  bigger: "18px",
  big: "21px",
  huge: "26px",
};

const borderSizeType = {
  none: "none",
  thin: "1px",
  medium: "2px",
};

const borderStyleType = {
  none: "none",
  solid: "solid",
};

export const themeProperties = defineProperties({
  properties: {
    display: ["none", "flex", "inline", "block"],
    flexDirection: ["row", "column"],
    justifyContent: ["center", "flex-end", "flex-start", "space-between"],
    alignItems: ["center", "flex-start", "flex-end"],
    paddingTop: spaceSize,
    paddingBottom: spaceSize,
    paddingLeft: spaceSize,
    paddingRight: spaceSize,
    marginTop: spaceSize,
    marginBottom: spaceSize,
    marginLeft: spaceSize,
    marginRight: spaceSize,
    gap: spaceSize,
    fontSize: fontSize,
    fontFamily: fontType,
    borderTopLeftRadius: spaceSize,
    borderBottomLeftRadius: spaceSize,
    borderTopRightRadius: spaceSize,
    borderBottomRightRadius: spaceSize,
    borderWidth: borderSizeType,
    borderStyle: borderStyleType,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
    borderRadius: [
      "borderBottomLeftRadius",
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomRightRadius",
    ],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: colorType,
    backgroundColor: colorType,
    borderColor: colorType,
  },
});

export const sprinkles = createSprinkles(themeProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

// export const baseStyle = style([
//   sprinkles({
//     fontSize: "standard",
//   }),
// ]);

// const baseSize = {
//   small: "11px",
//   smaller: "14px",
//   standard: "16px",
//   bigger: "18px",
//   big: "21px",
// };

// export const darksandThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#3B2300",
//     backgroundSecondary: "#634616",
//     accent: "#8B6D29",
//     primary: "#fff",
//     secondary: "#D7C756",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const darkblueThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#080014",
//     backgroundSecondary: "#21293B",
//     accent: "#335064",
//     primary: "#fff",
//     secondary: "#91D3C2",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const lilacThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#080014",
//     backgroundSecondary: "#45253D",
//     accent: "#8C4555",
//     primary: "#fff",
//     secondary: "#F3AF5B",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const fireThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#2E0003",
//     backgroundSecondary: "#60251D",
//     accent: "#93502D",
//     primary: "#fff",
//     secondary: "#E2BA51",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const forestThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#071A01",
//     backgroundSecondary: "#29411D",
//     accent: "#516C32",
//     primary: "#fff",
//     secondary: "#BAC95C",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const mintThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#F9F2A3",
//     backgroundSecondary: "#AFD599",
//     accent: "#73B495",
//     primary: "#000",
//     secondary: "#2F4858",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const satineThemeClass = createTheme(themeVars, {
//   color: {
//     background: "#D6D5D5",
//     backgroundSecondary: "#BCB5B7",
//     accent: "#9E969E",
//     primary: "#000",
//     secondary: "#2F4858",
//     none: "transparent",
//   },
//   font: {
//     size: baseSize,
//   },
// });

// export const themeList: SelectOption[] = [
//   { label: "Dark sand", value: "darksand" },
//   { label: "Dark blue", value: "darkblue" },
//   { label: "Lilac", value: "lilac" },
//   { label: "Fire", value: "fire" },
//   { label: "Forest", value: "forest" },
//   { label: "Mint", value: "mint" },
//   { label: "Satine", value: "satine" },
// ];

// export const themeMap: Record<string, string> = {
//   darksand: darksandThemeClass,
//   darkblue: darkblueThemeClass,
//   lilac: lilacThemeClass,
//   fire: fireThemeClass,
//   forest: forestThemeClass,
//   mint: mintThemeClass,
//   satine: satineThemeClass,
// };

// export const drawColors = [
//   "#ffffff",
//   "#D82011",
//   "#D87a11",
//   "#F9df2d",
//   "#5ff92d",
//   "#2df9e0",
//   "#2da0f9",
//   "#5f2df9",
//   "#F92dee",
//   "#000000",
//   "transparent",
// ];
