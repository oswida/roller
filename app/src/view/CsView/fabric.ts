import { fabric } from "fabric";
import { WhiteboardState } from "../../common/types";
import { setWbState, wbState } from "../../common/state";


let mouseDown = false;
let drawInstance: any;
let origX: number;
let origY: number;

const stopDrawing = () => {
    mouseDown = false;
};

const removeCanvasListener = (canvas: fabric.Canvas) => {
    canvas.off("mouse:down");
    canvas.off("mouse:move");
    canvas.off("mouse:up");
};

const startAddLine = (
    wbState: () => WhiteboardState,
    canvas: fabric.Canvas
) => {
    return (e: any) => {

        mouseDown = true;
        let pointer = canvas.getPointer(e);
        drawInstance = new fabric.Line(
            [pointer.x, pointer.y, pointer.x, pointer.y],
            {
                strokeWidth: linesSizeMap[wbState().width],
                stroke: wbState().brush,
                selectable: false,
            }
        );
        canvas.add(drawInstance);
        canvas.requestRenderAll();
    };
};

const startDrawingLine = (canvas: fabric.Canvas) => {
    return (e: any) => {
        if (mouseDown) {
            const pointer = canvas.getPointer(e);
            drawInstance.set({
                x2: pointer.x,
                y2: pointer.y,
            });
            drawInstance.setCoords();
            canvas.requestRenderAll();
        }
    };
};

function startAddRect(
    wbState: () => WhiteboardState,
    canvas: fabric.Canvas
) {
    return (e: any) => {
        mouseDown = true;

        const pointer = canvas.getPointer(e);
        origX = pointer.x;
        origY = pointer.y;

        drawInstance = new fabric.Rect({
            stroke: wbState().brush,
            strokeWidth: linesSizeMap[wbState().width],
            fill: wbState().fill ? wbState().fill : "transparent",
            left: origX,
            top: origY,
            width: 0,
            height: 0,
            selectable: false,
        });

        canvas.add(drawInstance);

        drawInstance.on("mousedown", (e: any) => {
            if (wbState().tool === "eraser") {
                canvas.remove(e.target);
            }
        });
    };
}

function startDrawingRect(canvas: fabric.Canvas) {
    return (e: any) => {
        if (mouseDown) {
            const pointer = canvas.getPointer(e);

            if (pointer.x < origX) {
                drawInstance.set("left", pointer.x);
            }
            if (pointer.y < origY) {
                drawInstance.set("top", pointer.y);
            }
            drawInstance.set({
                width: Math.abs(pointer.x - origX),
                height: Math.abs(pointer.y - origY),
            });
            drawInstance.setCoords();
            canvas.renderAll();
        }
    };
}

function startAddEllipse(
    wbState: () => WhiteboardState,
    canvas: fabric.Canvas
) {
    return (e: any) => {
        mouseDown = true;

        const pointer = canvas.getPointer(e);
        origX = pointer.x;
        origY = pointer.y;
        drawInstance = new fabric.Ellipse({
            stroke: wbState().brush,
            strokeWidth: linesSizeMap[wbState().width],
            fill: wbState().fill ? wbState().fill : "transparent",
            left: origX,
            top: origY,
            cornerSize: 7,
            objectCaching: false,
            selectable: false,
        });

        canvas.add(drawInstance);
    };
}

function startDrawingEllipse(canvas: fabric.Canvas) {
    return (e: any) => {
        if (mouseDown) {
            const pointer = canvas.getPointer(e);
            if (pointer.x < origX) {
                drawInstance.set("left", pointer.x);
            }
            if (pointer.y < origY) {
                drawInstance.set("top", pointer.y);
            }
            drawInstance.set({
                rx: Math.abs(pointer.x - origX) / 2,
                ry: Math.abs(pointer.y - origY) / 2,
            });
            drawInstance.setCoords();
            canvas.renderAll();
        }
    };
}

const removeActiveObject = (canvas: fabric.Canvas) => {
    const objs = canvas.getActiveObjects();
    objs.forEach((it) => {
        canvas.remove(it);
    });
};

export const initCanvas = (element: string, width: number, height: number) => {
    const canvas = new fabric.Canvas(element, { height, width });
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.borderColor = "white"; //currentTheme().color.secondary;
    fabric.Object.prototype.cornerColor = "white"; //currentTheme().color.secondary;
    fabric.Object.prototype.cornerSize = 6;
    fabric.Object.prototype.padding = 10;
    fabric.Object.prototype.borderDashArray = [5, 5];
    return canvas;
};

const cleanToolEnv = (canvas: fabric.Canvas) => {
    canvas.selection = false;
    canvas.hoverCursor = "auto";
    canvas.isDrawingMode = false;
    canvas.getObjects().map((item) => item.set({ selectable: false }));
    canvas.discardActiveObject().requestRenderAll();
};

export const switchTool = (canvas: fabric.Canvas | undefined, tool: string) => {
    if (!canvas) return;

    if (tool === "pencil" && wbState().tool !== "pencil") {
        removeCanvasListener(canvas);
        canvas.freeDrawingBrush.width = linesSizeMap[wbState().width];
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = wbState().brush;
    } else if (tool === "select") {
        canvas.isDrawingMode = false;
        removeCanvasListener(canvas);
        canvas.getObjects().map((item) => item.set({ selectable: true }));
        canvas.hoverCursor = "all-scroll";
    } else if (tool === "line") {
        removeCanvasListener(canvas);
        canvas.on("mouse:down", startAddLine(wbState, canvas));
        canvas.on("mouse:move", startDrawingLine(canvas));
        canvas.on("mouse:up", stopDrawing);

        cleanToolEnv(canvas);
    } else if (tool === "rect") {
        removeCanvasListener(canvas);

        canvas.on("mouse:down", startAddRect(wbState, canvas));
        canvas.on("mouse:move", startDrawingRect(canvas));
        canvas.on("mouse:up", stopDrawing);

        cleanToolEnv(canvas);
    } else if (tool === "circle") {
        removeCanvasListener(canvas);
        canvas.on("mouse:down", startAddEllipse(wbState, canvas));
        canvas.on("mouse:move", startDrawingEllipse(canvas));
        canvas.on("mouse:up", stopDrawing);
        cleanToolEnv(canvas);
    } else if (tool === "text") {
        removeCanvasListener(canvas);
        canvas.isDrawingMode = false;
        const text = new fabric.Textbox("text", {
            left: 100,
            top: 100,
            fill: wbState().brush,
            editable: true,
            fontFamily: "Oxanium",
            fontSize: 16,
        });
        canvas.add(text);
        canvas.renderAll();
        setWbState((prev: any) => ({ ...prev, tool: "select" }));
        return;
    } else if (tool === "eraser") {
        removeCanvasListener(canvas);
        canvas.on("mouse:up", () => removeActiveObject(canvas));
        canvas.isDrawingMode = false;
        canvas.getObjects().map((item) => item.set({ selectable: true }));
        canvas.hoverCursor = "not-allowed";
    }
    setWbState((prev: any) => ({ ...prev, tool: tool }));
};

export const clearCanvas = (canvas?: fabric.Canvas) => {
    if (!canvas) return;
    canvas.getObjects().forEach((item) => {
        if (!canvas) return;
        if (item !== canvas.backgroundImage) {
            canvas.remove(item);
        }
    });
};

export const linecolor = (canvas: fabric.Canvas | undefined, color: string) => {
    if (!canvas) return;
    setWbState((prev: any) => ({ ...prev, brush: color }));
    canvas.freeDrawingBrush.color = color;
    const objs = canvas.getActiveObjects();
    objs.forEach((obj) => {
        obj.set("stroke", color);
    });
    canvas.requestRenderAll();
};

export const linesSizeMap = [1, 2, 4, 8];

export const linesize = (canvas: fabric.Canvas | undefined, s: number) => {
    if (!canvas) return;
    setWbState((prev: any) => ({
        ...prev,
        width: s,
    }));
    canvas.freeDrawingBrush.width = linesSizeMap[s];
    const objs = canvas.getActiveObjects();
    objs.forEach((obj) => {
        obj.set("strokeWidth", linesSizeMap[s]);
    });
    canvas.requestRenderAll();
};

export const fillcolor = (canvas: fabric.Canvas | undefined, color: string) => {
    if (!canvas) return;
    setWbState((prev: any) => ({ ...prev, fill: color }));
    const objs = canvas.getActiveObjects();
    objs.forEach((obj) => {
        obj.set("fill", color);
    });
    canvas.requestRenderAll();
};