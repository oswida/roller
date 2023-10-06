import { createEffect } from "solid-js";
import { appStyle, toastListStyle } from "./styles.css";
import { fabric } from "fabric";
import { canvasRef, setCanvasRef } from "~/common";
import { TopBar } from "~/views/TopBar";
import { Toast } from "@kobalte/core";

export default function Home() {

  createEffect(() => {
    if (canvasRef() !== undefined) return;
    const canvas = new fabric.Canvas("main-canvas", { width: 2000, height: 2000 });
    setCanvasRef(canvas);
    const rec = new fabric.Rect({ width: 200, height: 200, left: 100, top: 100, fill: "red" });
    canvas.add(rec);
    canvas.requestRenderAll();
  });

  // let mainRef: HTMLDivElement;
  // let barRef: HTMLDivElement;

  // const visibilityHandler = () => {
  //   const room = currentRoom();
  //   if (!room) return;
  //   netLoadRolls(room.id);
  // };

  // ifvisible.on("wakeup", () => {
  //   visibilityHandler();
  // });

  // onMount(() => {
  //   document.addEventListener("visibilitychange", visibilityHandler, false);
  // });

  // onCleanup(() => {
  //   document.removeEventListener("visibilitychange", visibilityHandler);
  // });

  return (
    <main class={appStyle}>
      <canvas id="main-canvas"></canvas>
      <TopBar />
      <Toast.Region>
        <Toast.List class={toastListStyle} />
      </Toast.Region>
      {/* <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
        <TopBar ref={(e: any) => (barRef = e)} />
        <Flex style={{ width: "100vw" }}>
          <RollPanel visible={() => true} />
          <Show when={currentRightPanel() === "cs"}>
            <CsPanel />
          </Show>

        </Flex>
        <Toaster />
      </div> */}
    </main>
  );
}
