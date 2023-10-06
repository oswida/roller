import { setStateCurrentUser, setStateNotify, stateNetClient } from "./state";
import { UserData } from "./types";

export const updateCurrentUser = (data: UserData) => {
    setStateCurrentUser(data);
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    nc.rpc("user_update", data)
        .then((result) => {
            setStateNotify("User updated");
            console.log(result);
        })
        .catch((err) => {
            setStateNotify(`Cannot update user: ${err}`);
            console.error(err);
        });
}