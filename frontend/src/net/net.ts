
import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import { extractJwtToken } from "../common/util";
import { setStateCurrentUser, setStateJwtToken, setStateNetClient, stateCurrentUser, stateJwtToken, stateNetClient } from "../common/state";
import { loadUserRooms } from "./room";
import { NetMesssage, RoomData } from "~/common";

export const serverAddress = () => {
    const schema = import.meta.env.DEV ? "ws" : "wss";
    const host = import.meta.env.DEV ? "localhost:5000" : window.location.host;
    const addr = `${schema}://${host}/centrifuge`;
    return addr;
};

export const netConnect = () => {
    const token = extractJwtToken();
    if (!token) return;
    const centrifuge = new Centrifuge(serverAddress(), {
        token: stateJwtToken(),
        maxReconnectDelay: 60000,
        minReconnectDelay: 60000,
        maxServerPingDelay: 10000,
    });
    if (!centrifuge) return;
    centrifuge.on("connected", function (ctx) {
        setStateNetClient(centrifuge);
        setStateCurrentUser(ctx.data);
    });
    centrifuge.on("error", (err: any) => {
        console.error("Centrifuge error", err);
    });
    centrifuge.connect();
}

export const logout = () => {
    const cl = stateNetClient();
    if (!cl) return;
    cl.disconnect();
    setStateJwtToken("");
    setStateCurrentUser(undefined);
}

export const newNetMessage = (roomId: string, data: any) => {
    const cu = stateCurrentUser();
    if (!cu) return undefined;
    return {
        sender: cu.id,
        room: roomId,
        data: data,
    } as NetMesssage;
}