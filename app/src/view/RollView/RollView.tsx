import DiceBox from "@3d-dice/dice-box-threejs";
import { Component, createEffect } from "solid-js";
import {
  appRooms,
  appSettings,
  createRollInfo,
  diceBox,
  rollComment,
  rollerRoomsKey,
  saveToStorage,
  setDiceBox,
  setRollComment,
  setRolling,
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
  light_intensity: 0.7,
  baseScale: 100,
  strength: 1, // toss strength of dice
  onRollComplete: () => {},
};

export const RollView: Component = () => {
  let tableRef: HTMLDivElement;

  createEffect(() => {
    if (!tableRef || diceBox() !== undefined) return;
    const Box = new DiceBox("#table", diceConfig);
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
      const info = createRollInfo(results, rollComment());
      const data = { ...appRooms() };
      const settings = appSettings();
      if (settings.currentRoom === "") return;
      data[settings.currentRoom].rolls = [
        info,
        ...data[settings.currentRoom].rolls,
      ];
      setRollComment("");
      saveToStorage(rollerRoomsKey, data);
      setRolling(false);
    };
  });

  createEffect(() => {
    const box = diceBox();
    if (!box) return;
    const s = appSettings();
    box.updateConfig({
      theme_colorset: s.diceColor,
      theme_texture: s.diceMaterial,
    });
  });

  return (
    <div class={rollViewStyle} id="table" ref={(e) => (tableRef = e)}></div>
  );
};
