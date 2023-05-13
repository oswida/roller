import DiceBox from "@3d-dice/dice-box-threejs";
import { Component, JSX, createEffect, createMemo } from "solid-js";
import {
  Host2NetRollInfo,
  animating,
  appSettings,
  createRollInfo,
  currentRoom,
  diceBox,
  netPublish,
  rollComment,
  setDiceBox,
  setRolling,
  topicRollInfo,
  updateRolls,
} from "~/common";
import { rollViewStyle } from "./styles.css";

const diceConfig = {
  framerate: 1 / 60,
  sounds: false,
  volume: 100,
  color_spotlight: 0xffffff, // 0xefdfd5,
  shadows: true,
  theme_surface: "green-felt",
  sound_dieMaterial: "plastic",
  theme_customColorset: null,
  theme_colorset: "white", // see available colorsets in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/colorsets.js
  theme_texture: "none", // see available textures in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/texturelist.js
  theme_material: "none", // "none" | "metal" | "wood" | "glass" | "plastic"
  gravity_multiplier: 400,
  light_intensity: 0.8,
  baseScale: 100,
  strength: 1, // toss strength of dice
  onRollComplete: () => { },
};

export const RollView: Component = () => {
  let tableRef: HTMLDivElement;



  createEffect(() => {
    if (!tableRef || diceBox() !== undefined) return;
    const Box = new DiceBox("#table", { ...diceConfig, baseScale: appSettings().smallerDice ? 70 : 100 });
    setDiceBox(Box);
    Box.initialize().then(() => {
      const s = appSettings();
      Box.loadTheme({
        colorset: s.diceColor,
        texture: s.diceMaterial,
        material: "none",
      });
    });
    Box.onRollComplete = (results: any) => {
      if (animating()) { setRolling(false); return; }
      const info = createRollInfo(results, rollComment());
      updateRolls(info);
      netPublish(topicRollInfo, Host2NetRollInfo(info));
      setRolling(false);
    };
  });

  createEffect(async () => {
    const box = diceBox();
    if (!box) return;
    const s = appSettings();
    await box.updateConfig({
      theme_colorset: s.diceColor,
      theme_texture: s.diceMaterial,
      baseScale: appSettings().smallerDice ? 40 : 100,
    });
  });

  const bkg = createMemo(() => {
    const room = currentRoom();
    if (!room || !room.bkguri || room.bkguri == "") return undefined;
    return {
      "background-image": `url('${room.bkguri}')`,
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": "cover",
    } as JSX.CSSProperties;
  });

  return (
    <div
      class={rollViewStyle}
      id="table"
      ref={(e) => (tableRef = e)}
      style={bkg()}
    ></div>
  );
};
