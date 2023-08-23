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

  netPublish,
  netUpdateRoll,
  createRollInfo,
  currentRightPanel,
  currentRoom,
  diceBox,
  loggedUser,
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
  onRollComplete: () => { },
};

export const RollView: Component<RefProps> = (props) => {
  createEffect(async () => {
    const box = diceBox();
    if (!box) return;
    const sr = loggedUser()?.settings.strongerRoll;
    await box.updateConfig({
      gravity_multiplier: loggedUser()?.settings.strongerRoll ? 300 : 400,
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
        baseScale: loggedUser()?.settings.smallerDice ? 75 : 95,
        gravity_multiplier: loggedUser()?.settings.strongerRoll ? 300 : 400,
      });
      setDiceBox(Box);
      Box.initialize().then(() => {
        Box.loadTheme({

          colorset: loggedUser() ? loggedUser()?.settings.diceColor : "white",
          texture: loggedUser() ? loggedUser()?.settings.diceMaterial : "none",
          material: "none",
        });
      }).catch((err: any) => {
        console.log("box initialize", err);
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
          netPublish(netTopic(topicRollInfo), Host2NetRollInfo(info));
        } else {
          const room = currentRoom();
          if (!room) return;
          netUpdateRoll(room.id, Host2NetRollInfo(info));
        }
      };
    })
  );

  createEffect(async () => {
    const box = diceBox();
    if (!box) return;
    await box.updateConfig({
      theme_colorset: loggedUser()?.settings.diceColor,
      theme_texture: loggedUser()?.settings.diceMaterial,
    });
  });

  const bkg = createMemo(() => {
    const room = currentRoom();
    console.log("bkg room", room);
    if (!room || !room.bkg || room.bkg == "") return undefined;
    const result = {
      "background-image": `url('${room.bkg}')`,
      "background-repeat": "no-repeat",
      "background-position": "center",
      "background-size": "cover",
    } as JSX.CSSProperties;
    console.log("bkg result", result);
    return result;
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
