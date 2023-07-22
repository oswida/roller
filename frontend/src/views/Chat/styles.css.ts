import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/common/theme.css";

export const chatRootStyle = style([
  sprinkles({
    backgroundColor: "primary200",
    padding: "small",
    color: "primary900",
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
    color: "primary900",
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
      false: sprinkles({
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "primary600",
      }),
      true: sprinkles({
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "primary400",
      }),
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
      color: "primary900",
      backgroundColor: "primary100",
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
      backgroundColor: "primary100",
      color: "primary900",
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
      borderBottomStyle: "solid",
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
      false: sprinkles({
        borderBottomWidth: "thin",
        borderBottomColor: "primary600",
      }),
      true: sprinkles({
        borderBottomWidth: "thin",
        borderBottomColor: "primary400",
      }),
    },
  },
  defaultVariants: {
    old: false,
    private: false,
  },
});

export const chatItemCommentStyle = style([
  sprinkles({
    borderTopColor: "primary400",
    borderTopWidth: "thin",
    paddingTop: "small",
  }),
  {
    fontStyle: "italic",
    flex: 1,
    borderTopStyle: "dotted",
  },
]);

export const defListStyle = style([
  sprinkles({
    backgroundColor: "primary100",
    borderRadius: "small",
    padding: "small",
    fontSize: "smaller",
    display: "flex",
    flexDirection: "column",
    color: "primary900",
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
      color: "primary900",
      borderRadius: "small",
      gap: "medium",
      padding: "medium",
      fontSize: "standard",
      borderColor: "primary400",
      borderWidth: "thin",
      borderStyle: "solid",
    }),
  ],
  variants: {
    sel: {
      true: sprinkles({ backgroundColor: "primary500" }),
      false: sprinkles({ backgroundColor: "primary100" }),
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
    backgroundColor: "primary400",
    color: "primary900",
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
      borderColor: "primary400",
      borderWidth: "thin",
      borderStyle: "solid",
    }),
    {
      cursor: "pointer",
    },
  ],
  variants: {
    sel: {
      true: sprinkles({ backgroundColor: "primary100" }),
    },
  },
});
