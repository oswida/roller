import { privateRoll } from "./state";
import { appSettings } from "./storage";
import { RollDetail, RollInfo, RollResult, RollSet } from "./types";
import { prettyToday } from "./util";
import { v4 as uuid } from "uuid";

export const createRollInfo = (result: any, comment?: string) => {
  const r: Record<string, number[]> = {};
  const dice = result.notation.split("+");
  result.sets.forEach((set: any) => {
    const id = set.type;
    r[id] = set.rolls.map((r: any) => r.value);
  });
  return {
    id: uuid(),
    userId: appSettings().userIdent,
    user: appSettings().userName,
    userColor: appSettings().userColor,
    result: result,
    diceColor: appSettings().diceColor,
    diceMaterial: appSettings().diceMaterial,
    tstamp: prettyToday(),
    comment: comment,
    realtstamp: Date.now(),
    private: privateRoll(),
    revealed: privateRoll() ? false : true,
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
};

export const pbtaRollSuccessInfo = (result: RollResult, rule: string) => {
  switch (rule) {
    case "standard":
      if (result.total < 7) return "Failure";
      if (result.total >= 7 && result.total <= 9) return "Mixed Success";
      return "Advanced success";
  }
  return "";
};

export const pioRollSuccessInfo = (
  result: RollResult,
  rule: string,
  level?: number
) => {
  if (!level) return "";
  const rolls: RollDetail[] = [];
  result.sets.map((set) => {
    rolls.push(...set.rolls);
  });
  switch (rule) {
    case "standard": {
      const sorted = rolls.sort((a, b) => a.value - b.value);
      if (sorted.length < 2) return "";
      if (sorted[0].value <= level && sorted[1].value <= level)
        return "Full success";
      if (sorted[0].value > level && sorted[1].value > level) return "Failure";
      return "Complication";
    }
    case "hard": {
      const sorted = rolls.sort((a, b) => b.value - a.value);
      if (sorted.length < 2) return "";
      if (sorted[0].value <= level && sorted[1].value <= level)
        return "Full success";
      if (sorted[0].value > level && sorted[1].value > level) return "Failure";
      return "Complication";
    }
  }
  return "";
};

export const totalRollSuccessInfo = (
  result: RollResult,
  rule: string,
  level?: number
) => {
  if (!level) return "";
  switch (rule) {
    case "ueq":
      if (result.total <= level) return "Success";
      return "Failure";
    case "oeq":
      if (result.total >= level) return "Success";
      return "Failure";
  }
  return "";
};

export const rollSuccessInfo = (
  result: RollResult,
  rule: string | undefined,
  level?: number
) => {
  if (!rule || rule.trim() === "") return "";
  const parts = rule.split(":");
  if (parts.length !== 2) return "";
  switch (parts[0]) {
    case "pbta":
      return pbtaRollSuccessInfo(result, parts[1]);
    case "pio3s":
      return pioRollSuccessInfo(result, parts[1], level);
    case "total":
      return totalRollSuccessInfo(result, parts[1], level);
    default:
      return "";
  }
};
