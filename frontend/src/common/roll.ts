import { v4 as uuid } from "uuid";
import {
  diceBox,
  privateRoll,
  rolling,
  setRollComment,
  setRolling,
  setSuccessRule,
  setSuccessTarget,
} from "./state";
import { appSettings, currentRoom } from "./storage";
import { RollDefInfo, RollDetail, RollInfo, RollResult } from "./types";
import { prettyToday } from "./util";

// Roll defined dice
export const rollDef = async (
  item: RollDefInfo,
  needsParam: boolean,
  comment?: string
) => {
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
  const mod =
    item.modifier && item.modifier > 0
      ? `+${item.modifier}`
      : `${item.modifier}`;
  const dice = item.modifier ? `${item.dice}${mod}` : item.dice;
  try {
    await db.roll(dice);
  } catch (e) {
    setRolling(false);
    return "Unexpected error during roll";
  }
  return undefined;
};

// Create new roll info
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

// Success info for PBTA rolls
export const pbtaRollSuccessInfo = (result: RollResult, rule: string) => {
  switch (rule) {
    case "standard":
      if (result.total < 7) return "Failure";
      if (result.total >= 7 && result.total <= 9) return "Mixed Success";
      return "Advanced success";
  }
  return "";
};

// Success info for Pio 3S rolls
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

// Success info for generic total sum rolls
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

// Success info for Cairn/Cyber rolls
export const cairnRollSuccessInfo = (
  result: RollResult,
  rule: string,
  level?: number
) => {
  if (!level) return "";
  const rolls: RollDetail[] = [];
  result.sets.map((set) => {
    rolls.push(...set.rolls);
  });
  const sorted = rolls.sort((a, b) => a.value - b.value);
  switch (rule) {
    case "standard": {
      if (sorted[0].value <= level) return "Success";
      return "Failure";
    }
    case "hard":
      if (sorted[1].value <= level) return "Success";
      return "Failure";
  }
  return "";
};

// Success info for Ironsworn style rolls
export const ironswornRollSuccessInfo = (result: RollResult, rule: string) => {
  const sixs = result.sets.filter((set) => set.sides === 6);
  const tens = result.sets.filter((set) => set.sides === 10);
  const mod = result.modifier;
  const modstr = `${mod >= 0 ? "+" : "-"}${mod}`;
  if (sixs.length < 1 || tens.length < 1) return "";
  const action = sixs[0].rolls[0].value + mod;
  const t1 = tens[0].rolls[0].value;
  const t2 = tens[0].rolls[1].value;
  switch (rule) {
    case "standard":
      if (action > t1 && action > t2) return `(${modstr}) Strong Hit`;
      if (action <= t1 && action <= t2) return `(${modstr}) Miss`;
      return `(${modstr}) Weak Hit`;
    case "glina":
      if (action > t1 && action > t2) return `(${modstr}) Triumf`;
      if (action <= t1 && action <= t2) return `(${modstr}) Skucha`;
      return `(${modstr}) Fuks`;
  }
  return "";
};

// Success info
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
    case "cairn":
      return cairnRollSuccessInfo(result, parts[1], level);
      return;
    case "total":
      return totalRollSuccessInfo(result, parts[1], level);
    case "ironsworn":
      return ironswornRollSuccessInfo(result, parts[1]);
    default:
      return "";
  }
};
