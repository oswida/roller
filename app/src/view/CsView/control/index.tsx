import { fabric } from "fabric";



function renderIcon(icon: any) {
    return function renderIcon(ctx: any, left: any, top: any, _styleOverride: any, fabricObject: fabric.Object) {
        var size = 24;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle ? fabricObject.angle : 0));
        ctx.drawImage(icon, -size / 2, -size / 2, size, size);
        ctx.restore();
    }
}

export const CONTROL_ICON_SIZE = 32;

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
        sizeX: CONTROL_ICON_SIZE,
        sizeY: CONTROL_ICON_SIZE,
        cursorStyle: 'pointer',
        mouseUpHandler: (_eventData: MouseEvent, _transformData: fabric.Transform, _x: number, _y: number) => {
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
export * from "./roll";