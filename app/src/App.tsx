import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import { Toaster } from "solid-toast";
import { appStyle } from "./App.css";
import { MainView } from "./routes/MainView";
import { InputDialog } from "./component/Dialog/InputDialog";

const App: Component = () => {

  return (
    <div class={appStyle}>
      <Routes>
        <Route path="/" component={MainView} />

      </Routes>
      <Toaster />
      <InputDialog />
    </div>
  );
};
export default App;
