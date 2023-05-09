import { Route, Routes } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import { Toaster } from "solid-toast";
import { appStyle } from "./App.css";
import { ConnectView } from "./routes/ConnectView/ConnectView";
import { MainView } from "./routes/MainView";
import { currentRoom, netPublish, topicRoomUpdateRequest } from "./common";

const App: Component = () => {
  createEffect(() => {
    const room = currentRoom();
    if (!room) return;
    if (room.owner == "") {
      netPublish(topicRoomUpdateRequest, room.id);
    }
  });

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
