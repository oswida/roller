// import { Mutex } from "async-mutex";
// import { Centrifuge } from "centrifuge";
// import Queue from "queue";
// import { createMemo, createSignal } from "solid-js";
// import { CsInfo, RollDefInfo, RollInfo, RoomInfo, UserInfo } from "./types";
// import { currentRoom } from "./storage";
// import { makePersisted } from "@solid-primitives/storage";

// export const [storageSize, setStorageSize] = createSignal(0);

// export const [appRooms, setAppRooms] = createSignal<Record<string, RoomInfo>>(
//   {}
// );
// export const [appCs, setAppCs] = createSignal<Record<string, CsInfo>>({});
// export const [appDefs, setAppDefs] = createSignal<Record<string, RollDefInfo>>({});

// export const [dicePool, setDicePool] = createSignal<Record<string, number>>({});
// export const [diceBox, setDiceBox] = createSignal<any>(undefined);

// // Roll data
// export const [rollComment, setRollComment] = createSignal("");
// export const [rolling, setRolling] = createSignal(false);
// export const [animating, setAnimating] = createSignal(false);
// export const [successRule, setSuccessRule] = createSignal<string | undefined>(
//   ""
// );
// export const [successTarget, setSuccessTarget] = createSignal<number>(0);
// export const [appRolls, setAppRolls] = createSignal<Record<string, RollInfo>>(
//   {}
// );

// export const updateRolls = (info: RollInfo) => {
//   const newState = { ...appRolls() };
//   newState[info.id] = info;
//   setAppRolls(newState);
// };
// export const [privateRoll, setPrivateRoll] = createSignal(false);
// export const [modRoll, setModRoll] = createSignal(false);

// // Centrifuge
// export const [centConnectionStatus, setCentConnectionStatus] =
//   createSignal(false);
// export const [centClient, setCentClient] = createSignal<Centrifuge | undefined>(
//   undefined
// );

// // Task queue
// export const [taskQueue, setTaskQueue] = createSignal<Queue | undefined>(
//   undefined
// );
// export const [taskMutex, setTaskMutex] = createSignal<Mutex | undefined>(
//   undefined
// );

// // Tab states
// export const [chatViewTab, setChatViewTab] = createSignal("rolls");
// export const [mainViewPanel, setMainViewPanel] = createSignal("dice");
// export const [currentRightPanel, setCurrentRightPanel] = createSignal("");

// // Charsheets
// export type CallbackFunc = (value: string) => void;
// export const [currentCs, setCurrentCs] = createSignal<CsInfo>();
// export const [csExpanded, setCsExpanded] = createSignal<string[]>([]);
// export const [csOpenSections, setCsOpenSections] = createSignal<
//   Record<string, string[]>
// >({});
// export const [csShared, setCsShared] = createSignal<Record<string, string>>({});

// export const updateCsOpenSections = (info: CsInfo, sections: string[]) => {
//   const newState = { ...csOpenSections() };
//   newState[info.id] = sections;
//   setCsOpenSections(newState);
// };

// export const [connectedUsers, setConnectedUsers] = createSignal<
//   Record<string, string>
// >({});


// export const isRoomOwner = createMemo(() => {
//   return currentRoom()?.owner == loggedUser()?.id;
// });

// // refactor

// export const [stateJwtToken, setStateJwtToken] = makePersisted(createSignal(""), { name: "roller_token" });
// export const [stateNetClient, setStateNetClient] = createSignal<Centrifuge | undefined>(undefined);