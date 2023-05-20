import { fabric } from "fabric";
import { CsInfo, CsTemplate, updateCs } from "~/common";
import { addAttrControl, addCheckControl, removeStdControls } from "./control";
import { FaBrandsCcMastercard } from "solid-icons/fa";
import { csTemplates } from "~/template";



export const COMMON_FIELD_SETTINGS = {
    originX: "left",
    originY: "top",
    lockMovementX: true,
    lockMovementY: true,
}

export const createField = (canvas: fabric.Canvas,
    pageNo: number, fieldNo: number, info: CsInfo) => {
    const tpl = csTemplates[info.template];
    if (!tpl) return;
    const pageTop = (tpl.pages[pageNo].pos - 1) * tpl.pageHeight;
    const fld = tpl.pages[pageNo].fields[fieldNo];
    switch (fld.type) {
        case "attr":
            const av = info.values[fld.id];
            const f = new fabric.Textbox(av ? `${av}` : "", {
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                width: fld.rect[2],
                height: fld.rect[3],
                stroke: tpl.fieldStroke,
                backgroundColor: tpl.fieldColor,
                editable: true,
                fontSize: fld.fontSize ? fld.fontSize : tpl.fieldFontSize,
                textAlign: "center",
                ...COMMON_FIELD_SETTINGS,
                data: fld.roll,
            });
            f.bringToFront();
            removeStdControls(f);
            addAttrControl(canvas, f, info);
            f.on("editing:exited", () => {
                f.set({
                    width: fld.rect[2],
                    height: fld.rect[3],
                });
                info.values[fld.id] = f.text;
                updateCs(info);
            })
            return f;
        case "text":
            const tv = info.values[fld.id];
            const txt = new fabric.Textbox(tv ? tv : "", {
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                width: fld.rect[2],
                height: fld.rect[3],
                stroke: tpl.fieldStroke,
                backgroundColor: tpl.fieldColor,
                editable: true,
                fontSize: fld.fontSize ? fld.fontSize : tpl.fieldFontSize,

                textAlign: fld.textAlign ? fld.textAlign : "center",
                ...COMMON_FIELD_SETTINGS,
                data: fld.roll,
            });
            txt.bringToFront();
            removeStdControls(txt);
            txt.on("editing:exited", () => {
                txt.set({
                    width: fld.rect[2],
                    height: fld.rect[3],
                });
                info.values[fld.id] = txt.text;
                updateCs(info);
            })
            return txt;
        case "rect-check":
            const frc = new fabric.Rect({
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                width: fld.rect[2],
                height: fld.rect[3],
                fill: info.values[fld.id] == true ? (fld.stroke ? fld.stroke : tpl.fieldStroke) : "transparent",
                backgroundColor: tpl.fieldColor,
                data: info.values[fld.id],
                ...COMMON_FIELD_SETTINGS
            });
            removeStdControls(frc);
            addCheckControl(canvas, frc, fld, info);
            return frc;
        case "circle-check":
            const radius = fld.rect[2] / 2;
            const fcc = new fabric.Circle({
                left: fld.rect[0],
                top: pageTop + fld.rect[1],
                radius: radius,
                fill: info.values[fld.id] == true ? (fld.stroke ? fld.stroke : tpl.fieldStroke) : "transparent",
                backgroundColor: tpl.fieldColor,
                data: info.values[fld.id],
                ...COMMON_FIELD_SETTINGS
            });
            removeStdControls(fcc);
            addCheckControl(canvas, fcc, fld, info);
            return fcc;
        default: return undefined;
    }
}

export const createFromTemplate = (canvas: fabric.Canvas, info: CsInfo) => {
    const grp = new fabric.Group();
    canvas.add(grp);
    let top = 0;
    let mw = 0;
    let mh = 0;
    const tpl = csTemplates[info.template];
    if (!tpl) return;
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
                const fld = createField(canvas, pidx, fidx, info);
                if (!fld) return;
                canvas.add(fld);
                // grp.add(fld);
                fld.bringToFront();
                // set field
            });
            top += img.height ? img.height : 0;
            if (img.width && img.width > mw) { mw = img.width; if (canvas.width && canvas.width < mw) canvas.setWidth(mw); }
            if (img.height && img.height > mh) { mh = img.height; if (canvas.height && canvas.height < mh) canvas.setHeight(mh); }
        });
    });
    canvas.requestRenderAll();
}