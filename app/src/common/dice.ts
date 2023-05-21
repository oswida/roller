import { rolling, diceBox, setSuccessRule, setSuccessTarget, setRolling, setChatViewTab, rollComment, setRollComment } from "./state";
import { currentRoom, appSettings } from "./storage";
import { RollDefInfo } from "./types";

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