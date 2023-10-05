import { style } from "@vanilla-extract/css";
import { sprinkles, themeZindex } from "~/common/theme.css";

export const floatingPanelRoot = style([sprinkles({
    paddingX: "medium",
    paddingY: "small",
    borderRadius: "small",
    borderStyle: 'solid',
    borderWidth: "thin",
    borderColor: "primary300",
}), {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    position: "fixed",
    zIndex: themeZindex.panel,
}]);