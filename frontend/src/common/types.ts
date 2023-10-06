export type JwtTokenType = {
    exp: number;
    id: string;
    name: string;
    is_admin: boolean;
}

export type UserData = {
    id: string;
    login: string;
    is_admin: boolean;
    name: string;
    settings: Record<string, any>;
}

export const diceColorSet: string[] = [
    "acid",
    "air",
    "astralsea",
    "black",
    "bloodmoon",
    "breebaby",
    "bronze",
    "dragons",
    "earth",
    "fire",
    "force",
    "glitterparty",
    "ice",
    "inspired",
    "lightning",
    "necrotic",
    "starynight",
    "swrpg_abi",
    "swrpg_dif",
    "swrpg_pro",
    "thunder",
    "water",
    "white",
];

export const diceMaterialSet = [
    "bronze01",
    "bronze02",
    "bronze03",
    "bronze04",
    "cloudy_2",
    "cloudy",
    "dragon",
    "fire",
    "glitter",
    "ice",
    "marble",
    "metal",
    "none",
    "paper",
    "speckles",
    "stainedglass",
    "water",
    "wood",
];