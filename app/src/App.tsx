import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import { Toaster } from "solid-toast";
import { appStyle } from "./App.css";
import { ConnectView } from "./routes/ConnectView/ConnectView";
import { MainView } from "./routes/MainView";

const App: Component = () => {

  return (
    <div class={appStyle}>
      <Routes>
        <Route path="/" component={MainView} />
        <Route path="/connect" component={ConnectView} />
      </Routes>
      <Toaster />
    </div>
  );
};
export default App;
