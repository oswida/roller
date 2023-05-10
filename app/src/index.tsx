/* @refresh reload */
import { Router, hashIntegration } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";
import {
  appSettings,
  netConnect,
  netConnectionsStatus,
  updateStoreSize,
} from "./common";
import "./genesys.css";

const root = document.getElementById("root");
updateStoreSize();
if (appSettings().currentRoom !== "" && !netConnectionsStatus()) netConnect();

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  root!
);
