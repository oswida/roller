import { RollResult } from "./rollinfo";

export const srTotalLess = (roll: RollResult, value: number) => {
    return roll.total < value;
}

export const srTotalLessEqual = (roll: RollResult, value: number) => {
    return roll.total <= value;
}

export const srTotalGreater = (roll: RollResult, value: number) => {
    return roll.total > value;
}

export const srTotalGreaterEqual = (roll: RollResult, value: number) => {
    return roll.total >= value;
}

export const srEachRollLess = (roll: RollResult, value: number, count: number) => {
    let cnt = 0;
    roll.sets.forEach((set) => {
        set.rolls.forEach(r => {
            if (r.value < value) cnt++;
        })
    })
    return cnt < count
}

export const srEachRollLessEqual = (roll: RollResult, value: number, count: number) => {
    let cnt = 0;
    roll.sets.forEach((set) => {
        set.rolls.forEach(r => {
            if (r.value <= value) cnt++;
        })
    })
    return cnt < count
}

export const srEachRollGreater = (roll: RollResult, value: number, count: number) => {
    let cnt = 0;
    roll.sets.forEach((set) => {
        set.rolls.forEach(r => {
            if (r.value > value) cnt++;
        })
    })
    return cnt < count
}

export const srEachRollGreaterEqual = (roll: RollResult, value: number, expected: number) => {
    let cnt = 0;
    roll.sets.forEach((set) => {
        set.rolls.forEach(r => {
            if (r.value >= value) cnt++;
        })
    })
    return cnt < expected
}


export type ExpectedRollRange = {
    from: number;
    to: number;
    comment: string;
}

export const srExpectedRanges = (roll: RollResult, ranges: ExpectedRollRange[]) => {
    const retv: ExpectedRollRange[] = [];
    roll.sets.forEach((set) => {
        set.rolls.forEach((r) => {
            for (let i = 0; i < ranges.length; i++) {
                if (r.value >= ranges[i].from && r.value <= ranges[i].to) {
                    retv.push(ranges[i])
                }
            }
        })
    });
    return retv;
}