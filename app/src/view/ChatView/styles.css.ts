import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colorType, sprinkles } from "~/common";

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
  borderTop: `1px dotted ${colorType.accent}`,
  paddingTop: "5px"
});

export const chatDatablockStyle = recipe({
  base: [sprinkles({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    paddingY: "small",
    paddingX: "medium",
    color: "primary",

  }), {
    width: "auto",
    minWidth: "3em"
  }],
  variants: {
    background: {
      secondary: sprinkles({ backgroundColor: "backgroundSecondary" }),
      accent: sprinkles({ backgroundColor: "accent" }),
      none: sprinkles({ backgroundColor: "none" })
    },
    position: {
      left: sprinkles({
        borderBottomLeftRadius: "medium",
        borderTopLeftRadius: 'medium',
        justifyContent: "flex-start",
      }),
      right: sprinkles({
        borderBottomRightRadius: "medium",
        borderTopRightRadius: 'medium',
        justifyContent: "flex-end",
      })
    }
  },
  defaultVariants: {
    background: "none",
    position: 'left'
  }
})


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
      borderStyle: "solid"
    })
  ],
  variants: {
    sel: {
      true: {
        backgroundColor: colorType.backgroundSecondary
      },
      false: {
        backgroundColor: colorType.background
      }
    }
  },
  defaultVariants: {
    sel: false
  }
});


export const defModifierStyle = style([
  sprinkles({
    display: "flex",
    borderRadius: "small",
    backgroundColor: "accent",
    color: "primary",
    justifyContent: "center",
    alignItems: "center",
    padding: "small"
  }), {
    cursor: "pointer",
    textAlign: "center",
    verticalAlign: "middle"
  }
]);

export const defTabStyle = recipe({
  base: [sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "small",
    paddingX: "small"
  }), {
    border: `solid 1px ${colorType.accent}`,
    cursor: "pointer"
  }], variants: {
    sel: {
      true: sprinkles({ backgroundColor: "background" })
    }
  }
});