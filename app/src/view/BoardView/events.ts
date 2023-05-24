import { appBoards, boardCanvas, boardLoaded, currentBoard, updateBoardStorage, wbState } from "~/common";
import { v4 as uuidv4 } from "uuid";
import { fabric } from "fabric";
import { addControl, canvasChangeColors, canvasRemoveActive, paletteImg, xmarkImg } from "./control";

let isDragging = false;
let isMouseDown = false;
let drawInstance: any;
let lastPosX = 0;
let lastPosY = 0;

export const commonCanvasObjectProps = {
    cornerStyle: "circle",
    cornerColor: "grey",
    borderColor: "grey",
    borderDashArray: [5, 5],
    cornerSize: 6,
    padding: 5,
    selectable: true,
}

export const saveBoard = () => {
    if (!boardLoaded()) return;
    const cnv = boardCanvas();
    const board = currentBoard();
    if (!cnv || !board) return;
    board.objects = JSON.stringify(cnv.toJSON());
    updateBoardStorage(board);
    // TODO: publish ?
}


export const initEvents = (canvas: () => fabric.Canvas | undefined) => {
    const cnv = canvas();
    if (!cnv) return;

    // Mouse wheel
    cnv.on('mouse:wheel', function (opt) {
        const cnv = canvas();
        if (!cnv) return;
        var delta = opt.e.deltaY;
        var zoom = cnv.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        cnv.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY } as fabric.Point, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });

    // Mouse double click
    cnv.on('mouse:dblclick', (opt) => {
        const cnv = canvas();
        if (!cnv) return;
        var vpt = cnv.viewportTransform;
        if (!vpt) return;
        vpt[4] = 0;
        vpt[5] = 0;
        vpt[0] = 1.0;
        vpt[3] = 1.0;
        cnv.setViewportTransform(vpt);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    })

    // Mouse key down
    cnv.on('mouse:down', function (opt) {
        if (!currentBoard()) return;
        const cnv = canvas();
        if (!cnv) return;
        var evt = opt.e;
        if (evt.altKey === true || opt.button == 3) {
            isDragging = true;
            lastPosX = evt.clientX;
            lastPosY = evt.clientY;
            cnv.selection = false;
        } else {
            if (wbState().tool !== "select") cnv.selection = false;
            isMouseDown = true;
            let pointer = cnv.getPointer(opt.e);
            lastPosX = pointer.x;
            lastPosY = pointer.y;
            switch (wbState().tool) {
                case "line": {
                    drawInstance = new fabric.Line(
                        [pointer.x, pointer.y, pointer.x, pointer.y],
                        {
                            strokeWidth: wbState().width,
                            stroke: wbState().stroke,
                            selectable: false,
                        }
                    );
                }
                    break;
                case "rectangle": {
                    drawInstance = new fabric.Rect({
                        stroke: wbState().stroke,
                        strokeWidth: wbState().width,
                        fill: wbState().fill ? wbState().fill : "transparent",
                        left: pointer.x,
                        top: pointer.y,
                        width: 0,
                        height: 0,
                        selectable: false,
                    });
                }; break;
                case "circle": {
                    drawInstance = new fabric.Circle({
                        stroke: wbState().stroke,
                        strokeWidth: wbState().width,
                        fill: wbState().fill ? wbState().fill : "transparent",
                        left: pointer.x,
                        top: pointer.y,
                        selectable: false,
                    });
                } break;
                case "ellipse": {
                    drawInstance = new fabric.Ellipse({
                        stroke: wbState().stroke,
                        strokeWidth: wbState().width,
                        fill: wbState().fill ? wbState().fill : "transparent",
                        left: pointer.x,
                        top: pointer.y,
                        selectable: false,
                    });
                } break;
                case "triangle": {
                    drawInstance = new fabric.Triangle({
                        stroke: wbState().stroke,
                        strokeWidth: wbState().width,
                        fill: wbState().fill ? wbState().fill : "transparent",
                        left: pointer.x,
                        top: pointer.y,
                        width: 0,
                        height: 0,
                        selectable: false,
                    });
                } break;
                case "text": {
                    // setStrInputData({
                    //     open: true,
                    //     title: "Add text",
                    //     message: "",
                    //     value: "some text",
                    //     accept: (value: string) => {
                    //         const cnv = canvas();
                    //         if (!cnv) return;
                    //         const txt = new Textbox(value, {
                    //             left: pointer.x,
                    //             top: pointer.y,
                    //             fill: wbState().stroke,
                    //             fontSize: 22,
                    //             ...commonCanvasObjectProps
                    //         });
                    //         cnv.add(txt);
                    //         addControl("del", txt, 0.5, -0.5, -16, 16,
                    //             () => { canvasRemoveActive(); }, xmarkImg);
                    //         addControl("color", txt, -0.5, -0.5, -16, -16,
                    //             () => { canvasChangeColors(); }, paletteImg);
                    //         cnv.requestRenderAll();
                    //     },
                    //     width: "20em",
                    //     height: "5em",
                    //     multiline: true
                    // } as StrInputState);
                } break;
            }
            if (drawInstance) cnv.add(drawInstance);
            cnv.requestRenderAll();
        }
    });

    // Mouse move
    cnv.on('mouse:move', function (opt) {
        if (!currentBoard()) return;
        const cnv = canvas();
        if (!cnv) return;
        if (isDragging) {
            var e = opt.e;
            var vpt = cnv.viewportTransform;
            if (!vpt) return;
            vpt[4] += e.clientX - lastPosX;
            vpt[5] += e.clientY - lastPosY;
            cnv.requestRenderAll();
            lastPosX = e.clientX;
            lastPosY = e.clientY;
        } else {
            if (isMouseDown) {
                const pointer = cnv.getPointer(opt.e);
                switch (wbState().tool) {
                    case "line": {
                        drawInstance.set({
                            x2: pointer.x,
                            y2: pointer.y,
                        });
                    } break;
                    case "triangle":
                    case "rectangle": {
                        if (pointer.x < lastPosX) {
                            drawInstance.set("left", pointer.x);
                        }
                        if (pointer.y < lastPosY) {
                            drawInstance.set("top", pointer.y);
                        }
                        drawInstance.set({
                            width: Math.abs(pointer.x - lastPosX),
                            height: Math.abs(pointer.y - lastPosY),
                        });
                    } break;
                    case "circle": {
                        if (pointer.x < lastPosX) {
                            drawInstance.set("left", pointer.x);
                        }
                        if (pointer.y < lastPosY) {
                            drawInstance.set("top", pointer.y);
                        }
                        drawInstance.set({
                            radius: Math.round(Math.sqrt(Math.pow(Math.abs(pointer.x - lastPosX), 2) +
                                Math.pow(Math.abs(pointer.y - lastPosY), 2))) / 2,
                        });
                    } break;
                    case "ellipse": {
                        if (pointer.x < lastPosX) {
                            drawInstance.set("left", pointer.x);
                        }
                        if (pointer.y < lastPosY) {
                            drawInstance.set("top", pointer.y);
                        }
                        drawInstance.set({
                            rx: Math.abs(pointer.x - lastPosX) / 2,
                            ry: Math.abs(pointer.y - lastPosY) / 2,
                        });
                    } break;
                    case "text": {
                        drawInstance.set("left", pointer.x);
                        drawInstance.set("top", pointer.y);
                    } break;
                }
                if (drawInstance) drawInstance.setCoords();
                cnv.requestRenderAll();
            }
        }
    });

    // Mouse key up
    cnv.on('mouse:up', function (opt) {
        if (!currentBoard()) return;
        const cnv = canvas();
        if (!cnv) return;
        if (isDragging) {
            if (cnv.viewportTransform)
                cnv.setViewportTransform(cnv.viewportTransform);
            isDragging = false;
            lastPosX = 0;
            lastPosY = 0;
        }
        // else if (wbState().tool === "eraser") {
        //     if (!canvas) return;
        //     const objs = cnv.getActiveObjects();
        //     objs.forEach((it) => {
        //         cnv.remove(it);
        //     });
        //     cnv.requestRenderAll();
        // }
        else {
            isMouseDown = false;
            lastPosX = 0;
            lastPosY = 0;
            if (drawInstance) {
                drawInstance.set({
                    ...commonCanvasObjectProps
                });
                addControl("del", drawInstance, 0.5, -0.5, -16, 16,
                    () => { canvasRemoveActive(); }, xmarkImg);
                addControl("color", drawInstance, -0.5, -0.5, -16, -16,
                    () => { canvasChangeColors(); }, paletteImg);
                drawInstance = undefined;
            }
        }
        cnv.selection = true;
    });

    // Object was added to board
    cnv.on("object:added", (opt) => {
        if (!boardLoaded() && opt.target) {
            addControl("del", opt.target, 0.5, -0.5, -16, 16,
                () => { canvasRemoveActive(); }, xmarkImg);
            addControl("color", opt.target, -0.5, -0.5, -16, -16,
                () => { canvasChangeColors(); }, paletteImg);
            return;
        }
        if (opt.target && opt.target.type === "path") {
            const o = {
                data: uuidv4(),
                ...commonCanvasObjectProps
            };
            opt.target.set(o as any);
            addControl("del", opt.target as any, 0.5, -0.5, -16, 16,
                () => { canvasRemoveActive(); }, xmarkImg);
            addControl("color", opt.target as any, -0.5, -0.5, -16, -16,
                () => { canvasChangeColors(); }, paletteImg);
        }
        saveBoard();
    });

    cnv.on("object:modified", function (opt) {
        saveBoard();
    });
    cnv.on("object:removed", function (opt) {
        saveBoard();
    });
}