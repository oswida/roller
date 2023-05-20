import { CsInfo, CsTemplate, RollDefInfo, rollDef, setChatViewTab, setMainViewPanel } from "~/common";
import { addControl } from ".";

export const rollIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path stroke="orange" fill="orange" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>`;
export var rollImg = document.createElement('img');
rollImg.src = rollIcon;

export const addAttrControl = (canvas: fabric.Canvas, obj: fabric.Object, info: CsInfo) => {
    addControl("attr", obj, -1.5, -0.5, -16, 16, () => {
        const t = obj as fabric.Textbox;
        if (!t || !t.text || !t.data) return;
        const num = Number.parseInt(t.text.trim());
        if (Number.isNaN(num)) return;
        switch (t.data.type) {
            case "mod":
                const info: RollDefInfo = {
                    id: "",
                    dice: t.data.dice,
                    modifier: num,
                    name: "",
                    successRule: t.data.srule,
                    successTarget: ""
                };
                setMainViewPanel("dice");
                setChatViewTab("rolls");
                rollDef(info, false, t.data.comment);
                break;
            case "target":
                const info2: RollDefInfo = {
                    id: "",
                    dice: t.data.dice,
                    modifier: 0,
                    name: "",
                    successRule: t.data.srule,
                    successTarget: `${num}`
                };
                setMainViewPanel("dice");
                setChatViewTab("rolls");
                rollDef(info2, false, t.data.comment);
                break;
        }

    }, rollImg);
}