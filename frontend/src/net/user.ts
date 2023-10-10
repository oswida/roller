import { setStateCurrentUser, setStateNotify, stateCurrentUser, stateNetClient } from "../common/state";
import { UserData } from "../common/types";

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

export const createUser = (username: string, pass: string, pass2: string, admin: boolean) => {
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    nc.rpc("user_create", {
        name: username,
        pass: pass,
        repeatPass: pass2,
        is_admin: admin,
    })
        .then((result) => {
            setStateNotify("User created");
            console.log(result);
        })
        .catch((err) => {
            setStateNotify(`Cannot create user: ${err}`);
            console.error(err);
        });
}

export const changeUserPasswd = (oldpass: string, newpass: string) => {
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    const cu = stateCurrentUser();
    if (!cu) return;
    nc.rpc("user_passwd", {
        name: cu.login,
        pass: oldpass,
        repeatPass: newpass
    })
        .then((result) => {
            setStateNotify("User password changed");
            console.log(result);
        })
        .catch((err) => {
            setStateNotify(`Cannot change user password`);
            console.error(err);
        });
}