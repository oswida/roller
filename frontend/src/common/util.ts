import { setStateJwtToken, stateJwtToken } from "./state";
import jwt_decode from "jwt-decode";
import { JwtTokenType } from "./types";
import { sprinkles, themeSpace, themeTokenType, themeTokens } from "./theme.css";

export const extractJwtToken = () => {
    if (stateJwtToken().trim() === "") return undefined;
    const token: JwtTokenType = jwt_decode(stateJwtToken());
    // need seconds for IETF date from token
    const dt = new Date().getTime() / 1000;
    if (dt - token.exp > 0) {
        // token expired
        setStateJwtToken("");
        return undefined;
    }
    return token;
}

export const createSpaceVariants = (name: string) => {
    const result: Record<string, any> = {};
    Object.keys(themeSpace).forEach((it) => {
        result[it] = sprinkles({ [name]: it });
    });
    return result;
};

export const createColorVariants = () => {
    const result: Record<string, any> = {};
    Object.keys(themeTokens).forEach((it) => {
        result[it] = sprinkles({ color: it as themeTokenType });
    });
    return result;
};

export const createBackgroundVariants = () => {
    const result: Record<string, any> = {};
    Object.keys(themeTokens).forEach((it) => {
        result[it] = sprinkles({ backgroundColor: it as themeTokenType });
    });
    return result;
};

export const createFlexVariants = () => {
    const result: Record<string, any> = {};
    let x = 0.1;
    for (let i = 1; i <= 10; i++) {
        const y = Number.parseFloat(x.toFixed(2));
        result[`flex${i}`] = { flex: y };
        x += 0.1;
    }
    return result;
};

export const generateSerialKeys = (length: number, separator: string) => {
    separator = separator || "-";
    var license = new Array(length + 1)
        .join((Math.random().toString(36) + "00000000000000000").slice(2, 18))
        .slice(0, length);
    return license
        .toUpperCase()
        .replace(/(\w{4})/g, "$1" + separator)
        .substring(0, length + Math.round(length / 4) - 1);
};