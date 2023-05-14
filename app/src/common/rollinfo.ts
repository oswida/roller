import { appSettings } from "./storage";
import { RollInfo } from "./types";
import { prettyToday } from "./util";

export type RollDetail = {
    type: string, // "d6"
    sides: number, // 6
    id: number // roll identifier in set, 0
    value: number,
    label: string, // "6"
    reason: string, // "natural"
}

export type RollSet = {
    num: number, // number of dice
    type: string, // "d6"
    sides: number, // 6
    rolls: RollDetail[],
    total: number
};

export type RollResult = {
    notation: string,
    sets: RollSet[],
    modifier: number,
    total: number
}


export const createRollInfo = (result: any, comment?: string) => {
    const r: Record<string, number[]> = {};
    const dice = result.notation.split("+");
    result.sets.forEach((set: any) => {
        const id = set.type;
        r[id] = set.rolls.map((r: any) => r.value);
    });
    return {
        user: appSettings().userName,
        userColor: appSettings().userColor,
        result: result,
        diceColor: appSettings().diceColor,
        diceMaterial: appSettings().diceMaterial,
        tstamp: prettyToday(),
        comment: comment,
        realtstamp: Date.now(),
    } as RollInfo;
};

export const rollNotationWithResults = (result: RollResult) => {
    const dice = result.notation.split("+");
    const diceRes: Record<string, RollSet> = {};
    result.sets.forEach((set) => {
        diceRes[`${set.num}${set.type}`] = set;
    });
    const dicePreset = dice.map((it) =>
        diceRes[it].rolls.map((r) => r.value).join(",")
    );
    const retv = `${result.notation}@${dicePreset.join(",")}`;
    return retv;
}