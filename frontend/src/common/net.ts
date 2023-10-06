
import { Centrifuge, PublicationContext, PublishResult } from "centrifuge";
import { extractJwtToken } from "./util";
import { setStateCurrentUser, setStateJwtToken, setStateNetClient, stateJwtToken, stateNetClient } from "./state";

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