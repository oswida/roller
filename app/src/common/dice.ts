// import { RollResult } from "./rollinfo";

import toast from "solid-toast";
import { rolling, diceBox, setSuccessRule, setSuccessTarget, setRolling, setChatViewTab, rollComment, setRollComment } from "./state";
import { currentRoom, appSettings } from "./storage";
import { RollDefInfo } from "./types";

// export const srTotalLess = (roll: RollResult, value: number) => {
//     return roll.total < value;
// }

// export const srTotalLessEqual = (roll: RollResult, value: number) => {
//     return roll.total <= value;
// }

// export const srTotalGreater = (roll: RollResult, value: number) => {
//     return roll.total > value;
// }

// export const srTotalGreaterEqual = (roll: RollResult, value: number) => {
//     return roll.total >= value;
// }

// export const srEachRollLess = (roll: RollResult, value: number, count: number) => {
//     let cnt = 0;
//     roll.sets.forEach((set) => {
//         set.rolls.forEach(r => {
//             if (r.value < value) cnt++;
//         })
//     })
//     return cnt < count
// }

// export const srEachRollLessEqual = (roll: RollResult, value: number, count: number) => {
//     let cnt = 0;
//     roll.sets.forEach((set) => {
//         set.rolls.forEach(r => {
//             if (r.value <= value) cnt++;
//         })
//     })
//     return cnt < count
// }

// export const srEachRollGreater = (roll: RollResult, value: number, count: number) => {
//     let cnt = 0;
//     roll.sets.forEach((set) => {
//         set.rolls.forEach(r => {
//             if (r.value > value) cnt++;
//         })
//     })
//     return cnt < count
// }

// export const srEachRollGreaterEqual = (roll: RollResult, value: number, expected: number) => {
//     let cnt = 0;
//     roll.sets.forEach((set) => {
//         set.rolls.forEach(r => {
//             if (r.value >= value) cnt++;
//         })
//     })
//     return cnt < expected
// }


// export type ExpectedRollRange = {
//     from: number;
//     to: number;
//     comment: string;
// }

// export const srExpectedRanges = (roll: RollResult, ranges: ExpectedRollRange[]) => {
//     const retv: ExpectedRollRange[] = [];
//     roll.sets.forEach((set) => {
//         set.rolls.forEach((r) => {
//             for (let i = 0; i < ranges.length; i++) {
//                 if (r.value >= ranges[i].from && r.value <= ranges[i].to) {
//                     retv.push(ranges[i])
//                 }
//             }
//         })
//     });
//     return retv;
// }



export const rollDef = async (item: RollDefInfo, needsParam: boolean, comment?: string) => {
    if (rolling() || !currentRoom() || currentRoom()?.id == "") return undefined;
    const db = diceBox();
    if (!db) return undefined;
    setSuccessRule(item.successRule);
    const st = Number.parseInt(item.successTarget);
    if (Number.isNaN(st) && needsParam) {
        return "Incorrect success target";
    }
    setSuccessTarget(st);
    if (comment) {
        setRollComment(comment);
    }
    setRolling(true);
    const s = appSettings();
    await db.updateConfig({
        theme_colorset: s.diceColor,
        theme_texture: s.diceMaterial,
    });
    const mod = item.modifier && item.modifier > 0 ? `+${item.modifier}` : `${item.modifier}`
    const dice = item.modifier ? `${item.dice}${mod}` : item.dice;
    try {
        await db.roll(dice);
    } catch (e) {
        setRolling(false);
        return "Unexpected error during roll";
    }
    return undefined;
}