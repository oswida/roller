export type JwtTokenType = {
    exp: number;
    id: string;
    name: string;
    is_admin: boolean;
}

export type UserSettingsData = {
    color: string;
}

export type UserData = {
    id: string;
    login: string;
    is_admin: boolean;
    name: string;
    settings: UserSettingsData;
}