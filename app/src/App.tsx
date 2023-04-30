import { Component, JSX } from "solid-js";
import { appStyle } from "./App.css";
import { MainView } from "./view/MainView";

const App: Component = () => {
  return (
    <div class={appStyle}>
      <MainView />
    </div>
  );
};
export default App;
