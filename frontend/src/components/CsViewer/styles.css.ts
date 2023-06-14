import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const csViewerRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
  }),
  {
    overflow: "auto",
    userSelect: "none",
  },
]);

export const csTplIconStyle = style([
  sprinkles({
    padding: "small",
    borderRadius: "small",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: { default: "backgroundSecondary", hover: "accent" }
  }),
  {
    cursor: "pointer",
    width: "32px",
    height: "32px",
  },
]);

export const csTplAttrValueStyle = style([
  sprinkles({
    padding: "small",
    borderRadius: "small",
    backgroundColor: { hover: "backgroundSecondary" }
  }),
  {
    cursor: "pointer",
  },
]);

export const tplResourceItemStyle = recipe({
  base: [
    sprinkles({
      padding: "small",
    }),
    {
      width: "1.1em",
      height: "1.1em",
      maxWidth: "1.1em",
      minWidth: "1.1em",
      maxHeight: "1.1em",
      minHeight: "1.1em",
      cursor: "pointer",
    },
  ],
  variants: {
    shape: {
      circle: sprinkles({ borderRadius: "circle" }),
      square: sprinkles({ borderRadius: "none" }),
    },
  },
  defaultVariants: {
    shape: "circle",
  },
});


export const tplTextItemStyle = style([sprinkles({
  paddingBottom: "small",
  borderBottomColor: "backgroundGhost",
}), {
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
}])