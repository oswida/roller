import { fabric } from "fabric";
import { Component, Show, createEffect, createSignal } from "solid-js";
import {
  RefProps,
  csCanvas,
  csInfoContent,
  csInfoLabel,
  csInfoOpen,
  csRollInputCallback,
  csRollInputOpen,
  csRollInputTitle,
  setCsCanvas,
  setCsInfoOpen,
  setCsRollInputCallback,
  setCsRollInputOpen,
  setCsRollInputTitle,
} from "~/common";
import { Alert, Button, Dialog, Flex, Input } from "~/component";
import { initEvents } from "./events";
import { csViewRootStyle } from "./styles.css";

export const CsView: Component<RefProps> = ({ ref }) => {
  const [inputRollValue, setInputRollValue] = createSignal("");

  createEffect(() => {
    // window.removeEventListener("keypress", keySupport);
    const cnv = new fabric.Canvas("csCanvas", {
      width: 1920,
      height: 1080,
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
    setCsRollInputCallback((prev) => () => {});
    setCsRollInputTitle("");
  };

  return (
    <div ref={(el) => ref(el)} class={csViewRootStyle}>
      <canvas id="csCanvas" width={1920} height={1080} />
      <Show when={csRollInputOpen()}>
        <Dialog
          open={csRollInputOpen}
          onOpenChange={setCsRollInputOpen}
          dialogTitle={csRollInputTitle}
        >
          <Input onChange={(e) => setInputRollValue(e.target.value)} />
          <Flex gap="large" style={{ "margin-top": "10px" }}>
            <Button onClick={() => setCsRollInputOpen(false)}>Cancel</Button>
            <Button onClick={handleRollInput}>Roll</Button>
          </Flex>
        </Dialog>
      </Show>
      <Show when={csInfoOpen}>
        <Alert
          open={csInfoOpen}
          onOpenChange={setCsInfoOpen}
          label={csInfoLabel()}
        >
          {csInfoContent()}
        </Alert>
      </Show>
    </div>
  );
};
