import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const chatRootStyle = style([
  sprinkles({
    backgroundColor: "backgroundSecondary",
    padding: "small",
    color: "primary",
    display: "flex",
    flexDirection: "column",
    gap: "small",
  }),
  {
    minWidth: "340px",
    maxWidth: "340px",
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
    overflowY: "auto",
  },
]);

export const chatItemRootStyle = recipe({
  base: {
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
    private: {
      false: sprinkles({ borderStyle: "solid", borderWidth: "thin", borderColor: "secondary" }),
      true: sprinkles({ borderStyle: "solid", borderWidth: "thin", borderColor: "accent" }),
    },
  },
  defaultVariants: {
    old: false,
    private: false,
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
      userSelect: "none",
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
      userSelect: "none",
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
    private: {
      false: sprinkles({ borderBottomStyle: "solid", borderBottomWidth: "thin", borderBottomColor: "secondary" }),
      true: sprinkles({ borderBottomStyle: "solid", borderBottomWidth: "thin", borderBottomColor: "accent" }),
    },

  },
  defaultVariants: {
    old: false,
    private: false,
  },
});

export const chatItemCommentStyle = style([sprinkles({
  borderTopColor: "accent",
  borderTopStyle: "dotted",
  borderTopWidth: "thin",
  paddingTop: "small"
}), {
  fontStyle: "italic",
  flex: 1,
}]);

export const defListStyle = style([
  sprinkles({
    backgroundColor: "background",
    borderRadius: "small",
    padding: "small",
    fontSize: "smaller",
    display: "flex",
    flexDirection: "column",
    color: "primary",
    gap: "medium",
  }),
  {
    overflowY: "auto",
  },
]);

export const defItemStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      flexDirection: "column",
      color: "primary",
      borderRadius: "small",
      gap: "medium",
      padding: "medium",
      fontSize: "standard",
      borderColor: "accent",
      borderWidth: "thin",
      borderStyle: "solid",
    }),
  ],
  variants: {
    sel: {
      true: sprinkles({ backgroundColor: "backgroundSecondary" }),
      false: sprinkles({ backgroundColor: "background" }),
    },
  },
  defaultVariants: {
    sel: false,
  },
});

export const defModifierStyle = style([
  sprinkles({
    display: "flex",
    borderRadius: "small",
    backgroundColor: "accent",
    color: "primary",
    justifyContent: "center",
    alignItems: "center",
    padding: "small",
  }),
  {
    cursor: "pointer",
    textAlign: "center",
    verticalAlign: "middle",
  },
]);

export const defTabStyle = recipe({
  base: [
    sprinkles({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "small",
      paddingX: "small",
      borderColor: "accent",
      borderWidth: "thin",
      borderStyle: "solid"
    }),
    {
      cursor: "pointer",
    },
  ],
  variants: {
    sel: {
      true: sprinkles({ backgroundColor: "background" }),
    },
  },
});
