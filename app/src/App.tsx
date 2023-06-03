import { Route, Routes } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import { Toaster } from "solid-toast";
import { appStyle } from "./App.css";
import { MainView } from "./routes/MainView";

const App: Component = () => {

  return (
    <div class={appStyle}>
      <Routes>
        <Route path="/" component={MainView} />
      </Routes>
      <Toaster />
    </div>
  );
};
export default App;
