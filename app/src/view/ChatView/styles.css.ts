import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colorType, sprinkles } from "~/common";

export const chatRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
    padding: "medium",
    color: "primary",
    display: "flex",
    flexDirection: "column",
    gap: "small",
  }),
  {
    minWidth: "25vw",
  },
]);

export const chatListStyle = style([
  sprinkles({
    borderRadius: "small",
    padding: "small",
    fontSize: "smaller",
    display: "flex",
    flexDirection: "column",
    color: "primary",
    gap: "small",
  }),
  {
    height: "calc(100vh - 14em)",
    overflowY: "auto",
  },
]);

export const chatItemRootStyle = recipe({
  base: {
    border: `solid 1px ${colorType.secondary}`,
    borderRadius: "5px",
    selectors: {
      "&:hover": {
        opacity: 1,
      },
    },
  },
  variants: {
    old: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      },
    },
  },
});

export const chatItemContentStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "column",
      color: "primary",
      backgroundColor: "background",
      borderBottomLeftRadius: "small",
      borderBottomRightRadius: "small",
      gap: "medium",
      padding: "medium",
      fontSize: "standard",
    }),
    {
      overflowY: "auto",
      cursor: "pointer",
      selectors: {
        "&:hover": {
          opacity: 1,
        },
      },
    },
  ],
  variants: {
    old: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      },
    },
  },
});

export const chatItemHeaderStyle = recipe({
  base: [
    sprinkles({
      backgroundColor: "background",
      color: "primary",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingY: "small",
      paddingX: "medium",
      borderTopLeftRadius: "small",
      borderTopRightRadius: "small",
    }),
    {
      borderBottom: `solid 1px ${colorType.secondary}`,
    },
  ],
  variants: {
    old: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      },
    },
  },
});

export const chatItemCommentStyle = style({
  fontStyle: "italic",
});
