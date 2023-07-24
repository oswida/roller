import DiceBox from "@3d-dice/dice-box-threejs";
import {
  Component,
  JSX,
  Match,
  Switch,
  createEffect,
  createMemo,
  on,
} from "solid-js";
import {
  Host2NetRollInfo,
  RefProps,
  animating,
  appSettings,
  centPublish,
  centUpdateRoll,
  createRollInfo,
  currentRightPanel,
  currentRoom,
  diceBox,
  netTopic,
  rollComment,
  setDiceBox,
  setRollComment,
  setRolling,
  setSuccessRule,
  setSuccessTarget,
  successRule,
  successTarget,
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
  strength: 2, // toss strength of dice
  onRollComplete: () => {},
};

export const RollView: Component<RefProps> = (props) => {
  createEffect(async () => {
    const box = diceBox();
    if (!box) return;
    const sr = appSettings().strongerRoll;
    await box.updateConfig({
      gravity_multiplier: appSettings().strongerRoll ? 300 : 400,
    });
  });

  createEffect(
    on(currentRightPanel, () => {
      if (diceBox()) {
        diceBox().clearDice();
      }
      setDiceBox(undefined);
    })
  );

  createEffect(
    on(diceBox, () => {
      if (diceBox() !== undefined) {
        return;
      }
      const Box = new DiceBox("#dice-table", {
        ...diceConfig,
        baseScale: appSettings().smallerDice ? 75 : 95,
        gravity_multiplier: appSettings().strongerRoll ? 300 : 400,
      });
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
        if (animating()) {
          setRolling(false);
          return;
        }
        const info = createRollInfo(results, rollComment());
        info.successRule = successRule();
        info.successTarget = successTarget();
        setSuccessRule("");
        setSuccessTarget(0);
        setRollComment("");
        updateRolls(info);
        setRolling(false);
        if (!info.private) {
          centPublish(netTopic(topicRollInfo), Host2NetRollInfo(info));
        } else {
          const room = currentRoom();
          if (!room) return;
          centUpdateRoll(room.id, Host2NetRollInfo(info));
        }
      };
    })
  );

  createEffect(async () => {
    const box = diceBox();
    if (!box) return;
    const s = appSettings();
    await box.updateConfig({
      theme_colorset: s.diceColor,
      theme_texture: s.diceMaterial,
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
    <Switch>
      <Match when={currentRightPanel() !== ""}>
        <div
          class={rollViewStyle({ expanded: false })}
          id="dice-table"
          ref={props.ref}
          style={bkg()}
        ></div>
      </Match>
      <Match when={currentRightPanel() === ""}>
        <div
          class={rollViewStyle({ expanded: true })}
          id="dice-table"
          ref={props.ref}
          style={bkg()}
        ></div>
      </Match>
    </Switch>
  );
};
