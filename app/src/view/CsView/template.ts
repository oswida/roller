import { fabric } from "fabric";
import { CsTemplate } from "~/common";
import { addAttrControl, addCheckControl, removeStdControls } from "./control";


export const templateMotwpl: CsTemplate = {
    game: "Potwór tygodnia",
    name: "Potwór tygodnia: czaromiot",
    pageHeight: 966,
    pageWidth: 1366,
    fieldColor: "#eee",
    fieldStroke: "#000000",
    fieldFontSize: 25,
    pages: [{
        pos: 1,
        img: "cs/motwpl-czaromiot-1.webp",
        fields: [{
            id: "urok",
            name: "Urok",
            rect: [70, 303, 23, 27],
            type: "attr",
            roll: {
                dice: "2d6",
                type: "mod",
                srule: "pbta:standard",
            }
        }, {
            id: "wrozba",
            name: 'wrozba',
            rect: [919, 68, 11, 11],
            type: "rect-check"
        }]
    }, {
        pos: 2,
        img: "cs/motwpl-czaromiot-2.webp",
        fields: []
    }]
}

export const COMMON_FIELD_SETTINGS = {
    originX: "left",
    originY: "top",
    lockMovementX: true,
    lockMovementY: true,
}

export const createField = (canvas: fabric.Canvas, tpl: CsTemplate, pageNo: number, fieldNo: number) => {
    const pageTop = (tpl.pages[pageNo].pos - 1) * tpl.pageHeight;
    const fld = tpl.pages[pageNo].fields[fieldNo];
    switch (fld.type) {
        case "attr":
            const f = new fabric.Textbox("0", {
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                width: fld.rect[2],
                height: fld.rect[3],
                stroke: tpl.fieldStroke,
                backgroundColor: tpl.fieldColor,
                editable: true,
                fontSize: tpl.fieldFontSize,
                textAlign: "center",
                ...COMMON_FIELD_SETTINGS,
                data: fld.roll,
            });
            f.bringToFront();
            removeStdControls(f);
            addAttrControl(canvas, f, tpl);
            f.on("editing:exited", () => {
                f.set({
                    width: fld.rect[2],
                    height: fld.rect[3],
                });
            })
            return f;
        case "rect-check":
            const frc = new fabric.Rect({
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                width: fld.rect[2],
                height: fld.rect[3],
                fill: "transparent",
                backgroundColor: tpl.fieldColor,
                data: false,
                ...COMMON_FIELD_SETTINGS
            });
            removeStdControls(frc);
            addCheckControl(canvas, frc, tpl);
            return frc;
        default: return undefined;
    }
}

export const createFromTemplate = (tpl: CsTemplate, canvas: fabric.Canvas) => {
    const grp = new fabric.Group();
    canvas.add(grp);
    let top = 0;
    let mw = 0;
    tpl.pages.sort((a, b) => a.pos - b.pos).forEach((page, pidx) => {
        fabric.Image.fromURL(page.img, (img) => {
            img.set({
                top: (page.pos - 1) * tpl.pageHeight,
                left: 0,
                hasControls: false,
                lockMovementX: true,
                lockMovementY: true,
            });
            canvas.add(img);
            grp.add(img);
            img.sendToBack();
            page.fields.forEach((field, fidx) => {
                const fld = createField(canvas, tpl, pidx, fidx);
                if (!fld) return;
                canvas.add(fld);
                // grp.add(fld);
                fld.bringToFront();
                // set field
            });
            top += img.height ? img.height : 0;
            if (img.width && img.width > mw) { mw = img.width; canvas.setWidth(mw); }
            canvas.setHeight(top);
        });
    });
    canvas.requestRenderAll();
}