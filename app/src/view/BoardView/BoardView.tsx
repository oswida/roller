import { Component, createEffect } from "solid-js";
import { RefProps, boardCanvas, boardLoaded, currentBoard, decompressData, setBoardCanvas, setBoardLoaded, wbState } from "~/common";
import { boardViewRootStyle } from "./styles.css";
import { fabric } from "fabric";
import { initEvents } from "./events";

export const BoardView: Component<RefProps> = ({ ref }) => {


  createEffect(() => {
    const cnv = new fabric.Canvas("csCanvas", {
      width: 1920,
      height: 1080,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      preserveObjectStacking: true,
    });
    setBoardCanvas(cnv);
  });

  createEffect(() => {
    if (!boardCanvas()) return;
    initEvents(boardCanvas);
  });

  createEffect(() => {
    const board = currentBoard();
    const cnv = boardCanvas();
    if (!board || board.bkguri.trim() === "" || !cnv) return;
    fabric.Image.fromURL(board.bkguri, (img: any) => {
      cnv.backgroundImage = img;
      cnv.requestRenderAll();
    });
  });

  createEffect(() => {
    if (boardLoaded()) return;

    const board = currentBoard();
    const cnv = boardCanvas();
    if (!board || !cnv) return;

    cnv.clear();

    const obj = board.objects;
    if (!obj) {
      setBoardLoaded(true);
      return;
    }
    try {
      const data = decompressData(board.objects);
      if (!data) return;
      cnv.loadFromJSON(data, () => {
        setBoardLoaded(true);
        console.log("loaded")
      });
    } catch (e) {

    }

  });

  createEffect(() => {
    const cnv = boardCanvas();
    if (!cnv) return;
    if (wbState().tool === "freedraw") {
      cnv.freeDrawingBrush = new fabric.PencilBrush(cnv);
      cnv.freeDrawingBrush.width = wbState().width;
      cnv.isDrawingMode = true;
      cnv.freeDrawingBrush.color = wbState().stroke;
    } else {
      cnv.isDrawingMode = false;
    }
  });


  return <div ref={(el) => ref(el)} class={boardViewRootStyle}>
    <canvas id="csCanvas" width={1920} height={1080} />
  </div>
};
