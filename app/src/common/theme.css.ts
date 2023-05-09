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
  background: "#080014", //"#2E0003",  ,
  backgroundSecondary: "#21293B", //"#60251D", // "#21293B",
  accent: "#93502D", // "#335064",
  primary: "#fff",
  secondary: "#E2BA51", //"#91D3C2",
  none: "transparent",
  danger: "	#ff5252",
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
    display: ["none", "flex", "inline", "block", "inline-flex"],
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
