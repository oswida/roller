import DiceBox from "@3d-dice/dice-box-threejs";
import { Component, createEffect } from "solid-js";
import {
  appRooms,
  appSettings,
  createRollInfo,
  rollComment,
  rollerRoomsKey,
  saveToStorage,
  setDiceBox,
  setRollComment,
} from "~/common";
import { rollViewStyle } from "./styles.css";

type colorSets =
  | "radiant"
  | "fire"
  | "ice"
  | "poison"
  | "acid"
  | "thunder"
  | "lightning"
  | "air"
  | "water"
  | "earth"
  | "force"
  | "psychic"
  | "necrotic"
  | "pinkdreams"
  | "bronze"
  | "dragons"
  | "tigerking"
  | "black"
  | "white";

const diceConfig = {
  framerate: 1 / 60,
  sounds: false,
  volume: 100,
  color_spotlight: 0xefdfd5,
  shadows: true,
  theme_surface: "green-felt",
  sound_dieMaterial: "plastic",
  theme_customColorset: null,
  theme_colorset: "white", // see available colorsets in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/colorsets.js
  theme_texture: "", // see available textures in https://github.com/3d-dice/dice-box-threejs/blob/main/src/const/texturelist.js
  theme_material: "plastic", // "none" | "metal" | "wood" | "glass" | "plastic"
  gravity_multiplier: 400,
  light_intensity: 0.7,
  baseScale: 100,
  strength: 1, // toss strength of dice
  onRollComplete: () => {},
};

export const RollView: Component = () => {
  let tableRef: HTMLDivElement;

  createEffect(() => {
    if (!tableRef) return;
    const Box = new DiceBox("#table", diceConfig);
    setDiceBox(Box);
    Box.initialize().then(() => {
      console.log("dice box initialized");
    });
    Box.onRollComplete = (results: any) => {
      const info = createRollInfo(results, rollComment());
      const data = { ...appRooms() };
      const settings = appSettings();
      if (settings.currentRoom === "") return;
      data[settings.currentRoom].rolls.push(info);
      setRollComment("");
      saveToStorage(rollerRoomsKey, data);
    };
  });

  return (
    <div class={rollViewStyle} id="table" ref={(e) => (tableRef = e)}></div>
  );
};
