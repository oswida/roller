import { Mutex } from "async-mutex";
import { Centrifuge } from "centrifuge";
import Queue from "queue";
import { createSignal } from "solid-js";
import { CsInfo, RollInfo } from "./types";
import { fabric } from "fabric";

export const [storageSize, setStorageSize] = createSignal(0);

export const [dicePool, setDicePool] = createSignal<Record<string, number>>({});
export const [diceBox, setDiceBox] = createSignal<any>(undefined);

// Roll data
export const [rollComment, setRollComment] = createSignal("");
export const [rolling, setRolling] = createSignal(false);
export const [animating, setAnimating] = createSignal(false);
export const [successRule, setSuccessRule] = createSignal<string | undefined>(
  ""
);
export const [successTarget, setSuccessTarget] = createSignal<number>(0);
export const [appRolls, setAppRolls] = createSignal<Record<string, RollInfo>>({});

export const updateRolls = (info: RollInfo) => {
  const newState = { ...appRolls() };
  newState[info.id] = info;
  setAppRolls(newState);
}
export const [privateRoll, setPrivateRoll] = createSignal(false);

// Centrifuge
export const [centConnectionStatus, setCentConnectionStatus] =
  createSignal(false);
export const [centClient, setCentClient] = createSignal<Centrifuge | undefined>(
  undefined
);

// Task queue
export const [taskQueue, setTaskQueue] = createSignal<Queue | undefined>(
  undefined
);
export const [taskMutex, setTaskMutex] = createSignal<Mutex | undefined>(
  undefined
);

// Tab states
export const [chatViewTab, setChatViewTab] = createSignal("rolls");
export const [mainViewPanel, setMainViewPanel] = createSignal("dice");
export const [csPanelVisible, setCsPanelVisible] = createSignal(false);


// Charsheets
export type CallbackFunc = (value: string) => void;
export const [csCanvas, setCsCanvas] = createSignal<fabric.Canvas>();
export const [currentCs, setCurrentCs] = createSignal<CsInfo>();
export const [currentCsPage, setCurrentCsPage] = createSignal(0);
export const [csRollInputOpen, setCsRollInputOpen] = createSignal(false);
export const [csRollInputTitle, setCsRollInputTitle] = createSignal("");
export const [csRollInputCallback, setCsRollInputCallback] =
  createSignal<CallbackFunc>((value: string) => { });
export const [csCurrentZoom, setCsCurrentZoom] = createSignal(1.0);
export const [csInfoOpen, setCsInfoOpen] = createSignal(false);
export const [csInfoLabel, setCsInfoLabel] = createSignal("");
export const [csInfoContent, setCsInfoContent] = createSignal("");
export const [csExpanded, setCsExpanded] = createSignal<string[]>([]);
export const [csOpenSections, setCsOpenSections] = createSignal<Record<string, string[]>>({});

export const updateCsOpenSections = (info: CsInfo, sections: string[]) => {
  const newState = { ...csOpenSections() };
  newState[info.id] = sections;
  setCsOpenSections(newState);
}


export const [connectedUsers, setConnectedUsers] = createSignal<Record<string, string>>({});