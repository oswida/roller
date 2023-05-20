import { fabric } from "fabric";
import { IoColorFill } from "solid-icons/io";



function renderIcon(icon: any) {
    return function renderIcon(ctx: any, left: any, top: any, styleOverride: any, fabricObject: fabric.Object) {
        var size = 24;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle ? fabricObject.angle : 0));
        ctx.drawImage(icon, -size / 2, -size / 2, size, size);
        ctx.restore();
    }
}

export const addControl = (name: string,
    obj: fabric.Object,
    x: number, y: number,
    ofx: number, ofy: number,
    mouseUp: () => void,
    icon: any) => {
    const newControls = { ...obj.controls };
    newControls[name] = new fabric.Control({
        actionName: name,
        x: x,
        y: y,
        offsetY: ofx,
        offsetX: ofy,
        sizeX: 24,
        sizeY: 24,
        cursorStyle: 'pointer',
        mouseUpHandler: (eventData: MouseEvent, transformData: fabric.Transform, x: number, y: number) => {
            mouseUp();
            return true;
        },
        render: renderIcon(icon),
    });
    obj.controls = newControls;
}

export const removeStdControls = (obj: fabric.Object) => {
    obj.setControlsVisibility({
        bl: false,
        br: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        tl: false,
        tr: false,
        mtr: false,
    })
}

export * from "./check";
export * from "./attr";