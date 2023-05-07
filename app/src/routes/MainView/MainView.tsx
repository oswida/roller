// import DiceBox from "@3d-dice/dice-box-threejs";
import { createEffect } from "solid-js";
import { Flex } from "../../component/Flex";
import { ChatView } from "../../view/ChatView";
import { DiceSelector } from "../../view/DiceSelector";
import { RollView } from "../../view/RollView";
import { TopBar } from "./TopBar";
import { mainStyle } from "./styles.css";

export const MainView = () => {
  let mainRef: HTMLDivElement;

  createEffect(() => {
    if (!mainRef) return;
    // // set configurations when invoking the class
    // const Box = new DiceBox("#app", {
    //   theme_customColorset: {
    //     // background: [
    //     //   "#00ffcb",
    //     //   "#ff6600",
    //     //   "#1d66af",
    //     //   "#7028ed",
    //     //   "#c4c427",
    //     //   "#d81128"
    //     // ], // randomly assigned colors
    //     background: "#00ffcb",
    //     foreground: "#ffffff",
    //     texture: "marble", // marble | ice
    //     material: "wood", // metal | glass | plastic | wood
    //   },
    //   light_intensity: 1,
    //   gravity_multiplier: 600,
    //   baseScale: 100,
    //   strength: 2,
    //   onRollComplete: (results: any) => {
    //     console.log(`I've got results :>> `, results);
    //   },
    // });

    // Box.initialize()
    //   .then(() => {
    //     // give code sandbox a chance to load up
    //     setTimeout(() => {
    //       Box.roll("7d6@4,4,4,4,4,4,4");
    //       // Box.roll("1d2+1d4+1d6+1d8+1d10+1d12+1d20+1d100");
    //     }, 1000);
    //   })
    //   .catch((e: any) => console.error(e));
  });

  //   const rollBtn = document.getElementById("rollBtn");
  //   rollBtn.addEventListener("click", () => {
  //     // dynamically update the dice theme on each roll
  //     const colors = [
  //       "#00ffcb",
  //       "#ff6600",
  //       "#1d66af",
  //       "#7028ed",
  //       "#c4c427",
  //       "#d81128",
  //     ];
  //     const randomColor = colors[Math.floor(Math.random() * colors.length)];

  //     // all dice will produce the same value picked from the values list randomly
  //     const values = [1, 2, 3, 4, 5, 6];
  //     const randomVal = values[Math.floor(Math.random() * values.length)];

  //     Box.updateConfig({
  //       theme_customColorset: {
  //         background: randomColor,
  //         foreground: "#ffffff",
  //         texture: "ice", // marble | ice
  //         material: "glass", // metal | glass | plastic | wood
  //       },
  //     });
  //     Box.roll(
  //       `7d10@${randomVal},${randomVal},${randomVal},${randomVal},${randomVal},${randomVal},${randomVal}`
  //     );
  //   });

  return (
    <div id="app" class={mainStyle} ref={(e) => (mainRef = e)}>
      <TopBar />
      <Flex>
        <RollView />
        <ChatView />
      </Flex>
      <DiceSelector />
    </div>
  );
};
