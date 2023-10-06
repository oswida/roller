import { createSignal } from "solid-js";
import { makePersisted } from "@solid-primitives/storage";
import { Centrifuge } from "centrifuge";
import { fabric } from "fabric";
import { UserData } from "./types";

export const [stateJwtToken, setStateJwtToken] = makePersisted(createSignal(""), { name: "roller_token" });
export const [stateNetClient, setStateNetClient] = createSignal<Centrifuge | undefined>(undefined);

export const [canvasRef, setCanvasRef] = createSignal<fabric.Canvas | undefined>(undefined);
export const [stateCurrentUser, setStateCurrentUser] = createSignal<UserData | undefined>(undefined);


export const [stateNotify, setStateNotify] = createSignal("");
