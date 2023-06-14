import { createVar, globalStyle } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export type themeSpaceType = "none" | "small" | "medium" | "large" | "circle";

export const themeSpace: Record<string, string> = {
  none: "0px",
  small: "5px",
  medium: "10px",
  large: "20px",
  circle: "50%",
};

export const cvBackground = createVar();
export const cvBackgroundSecondary = createVar();
export const cvBackgroundGhost = createVar();
export const cvAccent = createVar();
export const cvPrimary = createVar();
export const cvSecondary = createVar();
export const cvDanger = createVar();

export const themeColor = {
  background: cvBackground,//"#080014", //"#2E0003",  ,
  backgroundSecondary: cvBackgroundSecondary,//"#21293B", //"#60251D", // "#21293B",
  backgroundGhost: cvBackgroundGhost, //"#08001455",
  accent: cvAccent, //"#93502D", // "#335064",
  primary: cvPrimary, //"#fff",
  secondary: cvSecondary, // "#E2BA51", //"#91D3C2",
  none: "transparent",
  danger: cvDanger, //"	#ff5252",
};

export type themeColorType =
  | "background"
  | "backgroundSecondary"
  | "backgroundGhost"
  | "accent"
  | "primary"
  | "secondary"
  | "none"
  | "danger";

const themeFontSize = {
  small: "11px",
  smaller: "14px",
  standard: "16px",
  bigger: "18px",
  big: "21px",
  huge: "26px",
};

export type themeFontSizeType =
  | "small"
  | "smaller"
  | "standard"
  | "bigger"
  | "big"
  | "huge";

const themeFontFamily = {
  Alegreya: "Alegreya",
  Lato: "Lato",
  Merriweather: "Merriweather",
  Oxanium: "Oxanium",
  Quattrocento: "Quattrocento",
  Roboto: "Roboto",
};

export type themeFontFamilyType =
  | "Alegreya"
  | "Lato"
  | "Merriweather"
  | "Oxanium"
  | "Quattrocento"
  | "Roboto";

const themeBorderSize = {
  none: "none",
  thin: "1px",
  medium: "2px",
  thick: "2px",
};

export type themeBorderSizeType = "none" | "thin" | "medium" | "thick";

const themeBorderStyle = {
  none: "none",
  solid: "solid",
  dotted: "dotted"
};

export type themeBorderStyleType = "none" | "solid";

const themeProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' }
  },
  defaultCondition: "default",
  properties: {
    display: ["none", "flex", "inline", "block", "inline-flex"],
    flexDirection: ["row", "column"],
    justifyContent: ["center", "flex-end", "flex-start", "space-between"],
    alignItems: ["center", "flex-start", "flex-end"],
    paddingTop: themeSpace,
    paddingBottom: themeSpace,
    paddingLeft: themeSpace,
    paddingRight: themeSpace,
    marginTop: themeSpace,
    marginBottom: themeSpace,
    marginLeft: themeSpace,
    marginRight: themeSpace,
    gap: themeSpace,
    fontSize: themeFontSize,
    fontFamily: themeFontFamily,
    borderTopLeftRadius: themeSpace,
    borderBottomLeftRadius: themeSpace,
    borderTopRightRadius: themeSpace,
    borderBottomRightRadius: themeSpace,
    borderWidth: themeBorderSize,
    borderStyle: themeBorderStyle,
    borderBottomWidth: themeBorderSize,
    borderBottomStyle: themeBorderStyle,
    borderTopWidth: themeBorderSize,
    borderTopStyle: themeBorderStyle,
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
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' }
  },
  defaultCondition: "default",
  properties: {
    color: themeColor,
    backgroundColor: themeColor,
    borderColor: themeColor,
    borderBottomColor: themeColor,
    borderTopColor: themeColor,
    outlineColor: themeColor,
  },
});

export const sprinkles = createSprinkles(themeProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

// Global styles

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  // fontFamily: "Lato",
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box",
});

globalStyle("div", {
  boxSizing: "border-box",
  scrollbarWidth: "thin",
});

globalStyle("body>p", {
  display: "none",
  visibility: "hidden",
});

globalStyle("button>svg", {
  fill: "currentcolor",
  stroke: "currentcolor",
});


export const basicTheme = {
  [cvBackground]: "#080014",
  [cvBackgroundSecondary]: "#21293B",
  [cvBackgroundGhost]: "#08001455",
  [cvAccent]: "#93502D",
  [cvPrimary]: "#fff",
  [cvSecondary]: "#E2BA51",
  [cvDanger]: "#ff5252"
};

export const redTheme = {
  [cvBackground]: "#2E0003",
  [cvBackgroundSecondary]: "#60251D",
  [cvBackgroundGhost]: "#60251D55",
  [cvAccent]: "#93502D",
  [cvPrimary]: "#fff",
  [cvSecondary]: "#E2BA51",
  [cvDanger]: "#ff5252"
};

