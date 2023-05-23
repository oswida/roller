import { CallbackFunc, CsInfo, CsRoll, CsTemplate, RollDefInfo, enrollTask, rollDef, setChatViewTab, setCsRollInputCallback, setCsRollInputOpen, setCsRollInputTitle, setMainViewPanel } from "~/common";
import { addControl } from ".";

export type RollColor = "darkorange" | "darkred" | "darkgreen" | "darkblue";

export const rollIcon = (color: RollColor) => `data:image/svg+xml,<svg fill="${color}" style="background-color:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24px" height="24px"><path d="M13.5 3h-8A2.507 2.507 0 0 0 3 5.5v8C3 14.875 4.125 16 5.5 16h8c1.375 0 2.5-1.125 2.5-2.5v-8C16 4.125 14.875 3 13.5 3zm-7 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 14zm0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 8zm3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 9.5 11zm3 3a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 14zm0-6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12.5 8zm.449-6A2.509 2.509 0 0 0 10.5 0h-8A2.507 2.507 0 0 0 0 2.5v8c0 1.204.862 2.216 2 2.449V3c0-.55.45-1 1-1h9.949z"></path></svg>`

export var rollImg = [
    document.createElement('img'),
    document.createElement('img'),
    document.createElement('img'),
    document.createElement('img')];
rollImg[0].src = rollIcon("darkorange");
rollImg[1].src = rollIcon("darkgreen");
rollImg[2].src = rollIcon("darkred");
rollImg[3].src = rollIcon("darkblue");


export const addRollControl = (obj: fabric.Object) => {
    const rolls = obj.data as CsRoll[];
    rolls.forEach((roll, ridx) => {
        addControl(`roll${ridx}`, obj, -0.5, -0.5, -16 + 32 * ridx, -16, () => {
            const t = obj as fabric.Textbox;
            if (!t || !t.text || !t.data) return;
            const num = Number.parseInt(t.text.trim());
            if (Number.isNaN(num)) return;
            switch (roll.type) {
                case "mod":
                    const info: RollDefInfo = {
                        id: "",
                        dice: roll.dice,
                        modifier: num,
                        name: "",
                        successRule: roll.srule,
                        successTarget: ""
                    };
                    setMainViewPanel("dice");
                    setChatViewTab("rolls");
                    enrollTask(() => rollDef(info, false, roll.comment));
                    break;
                case "target":


                    const info2: RollDefInfo = {
                        id: "",
                        dice: roll.dice,
                        modifier: 0,
                        name: "",
                        successRule: roll.srule,
                        successTarget: `${num}`
                    };
                    if (roll.hasInput) {
                        setCsRollInputTitle(roll.inputLabel ? roll.inputLabel : "");
                        const cb: CallbackFunc = (value: string) => {
                            const m = Number.parseInt(value);
                            info2.modifier = m;
                            setMainViewPanel("dice");
                            setChatViewTab("rolls");
                            enrollTask(() => rollDef(info2, false, roll.comment));
                        };
                        setCsRollInputCallback((prev) => cb);
                        setCsRollInputOpen(true);
                    } else {
                        setMainViewPanel("dice");
                        setChatViewTab("rolls");
                        enrollTask(() => rollDef(info2, false, roll.comment));
                    }

                    break;
            }

        }, rollImg[ridx % 4]);
    });

}