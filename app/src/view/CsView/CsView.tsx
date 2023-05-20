import { Component, createEffect, createSignal } from "solid-js";
import { csViewRootStyle } from "./styles.css";
import { fabric } from "fabric";
import { initCanvas } from "./fabric";
import { initEvents } from "./events";
import { RefProps, csCanvas, setCsCanvas } from "~/common";
import { createFromTemplate, templateMotwpl } from "./template";

export const CsView: Component<RefProps> = ({ ref }) => {

    createEffect(() => {
        // window.removeEventListener("keypress", keySupport);
        const cnv = new fabric.Canvas("csCanvas", {
            width: 1920, height: 1080,
            fireRightClick: true,
            fireMiddleClick: true,
            stopContextMenu: true,
            preserveObjectStacking: true,
        });
        setCsCanvas(cnv);
        createFromTemplate(templateMotwpl, cnv);

    });

    createEffect(() => {
        initEvents(csCanvas);
    });

    return <div ref={(el) => (ref(el))} class={csViewRootStyle}>
        <canvas id="csCanvas" width={1920} height={1080} />
    </div>
}