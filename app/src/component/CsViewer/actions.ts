import { CallbackFunc, CharTemplateItemRoll, RollDefInfo, enrollTask, rollDef, setChatViewTab, setCsRollInputCallback, setCsRollInputOpen, setCsRollInputTitle } from "~/common";

export const actionRoll = (tplName: string | undefined, roll: CharTemplateItemRoll, value: string) => {
    const num = Number.parseInt(value.trim());
    if (Number.isNaN(num)) return;
    switch (roll.valType) {
        case "modifier":
            const info: RollDefInfo = {
                id: "",
                dice: roll.notation,
                modifier: num,
                name: "",
                successRule: roll.successRule ? roll.successRule : "",
                successTarget: "",
            };
            setChatViewTab("rolls");
            enrollTask(() => rollDef(info, false, `${roll.comment} (${tplName})`));
            break;
        case "target":
            const info2: RollDefInfo = {
                id: "",
                dice: roll.notation,
                modifier: 0,
                name: "",
                successRule: roll.successRule ? roll.successRule : "",
                successTarget: `${num}`,
            };
            if (roll.hasInput) {
                setCsRollInputTitle(roll.inputLabel ? roll.inputLabel : "");
                const cb: CallbackFunc = (value: string) => {
                    const m = Number.parseInt(value);
                    info2.modifier = m;
                    setChatViewTab("rolls");
                    enrollTask(() => rollDef(info2, false, `${roll.comment} (${tplName})`));
                };
                setCsRollInputCallback((prev) => cb);
                setCsRollInputOpen(true);
            } else {
                setChatViewTab("rolls");
                enrollTask(() => rollDef(info2, false, `${roll.comment} (${tplName})`));
            }
            break;
    }
}