import { Component, Show, createEffect, createSignal } from "solid-js";
import { csViewRootStyle } from "./styles.css";
import { fabric } from "fabric";
import { initEvents } from "./events";
import { RefProps, csCanvas, csRollInputCallback, csRollInputOpen, csRollInputTitle, setCsCanvas, setCsRollInputCallback, setCsRollInputOpen, setCsRollInputTitle } from "~/common";
import { Button, Dialog, Flex, Input } from "~/component";

export const CsView: Component<RefProps> = ({ ref }) => {
    const [inputRollValue, setInputRollValue] = createSignal("");

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
    });

    createEffect(() => {
        initEvents(csCanvas);
    });

    const handleRollInput = () => {
        setCsRollInputOpen(false);
        const cb = csRollInputCallback();
        if (!cb) return;
        cb(inputRollValue());
        setInputRollValue("");
        setCsRollInputCallback((prev) => (() => { }));
        setCsRollInputTitle("");
    }

    return <div ref={(el) => (ref(el))} class={csViewRootStyle}>
        <canvas id="csCanvas" width={1920} height={1080} />
        <Show when={csRollInputOpen()}>
            <Dialog open={csRollInputOpen} onOpenChange={setCsRollInputOpen} dialogTitle={csRollInputTitle}>
                <Input onChange={(e) => setInputRollValue(e.target.value)} />
                <Flex gap="large" style={{ "margin-top": "10px" }}>
                    <Button onClick={() => setCsRollInputOpen(false)}>Cancel</Button>
                    <Button onClick={handleRollInput}>Roll</Button>
                </Flex>
            </Dialog>
        </Show>
    </div>
}