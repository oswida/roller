import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/common/theme.css";


export const loginRootStyle = style([sprinkles({
    backgroundColor: 'primary100',
    color: 'primary900',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'medium',
    gap: 'large',

}), {
    height: "100vh"
}])