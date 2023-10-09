import { NetMesssage, RoomData, generateSerialKeys, setStateCurrentRoom, setStateRooms, stateCurrentUser, stateNetClient } from "~/common";
import { v4 as uuid } from "uuid";
import { newNetMessage } from "./net";

export const newRoom = (owner: string) => {
    return {
        id: uuid(),
        name: `room-${generateSerialKeys(4, "-")}`,
        owner: owner,
    } as RoomData;
}

export const loadUserRooms = (userID: string) => {
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    nc.rpc("room_list", { sender: userID } as NetMesssage)
        .then((result) => {
            const rooms: Record<string, RoomData> = {};
            result.data.forEach((it: any) => {
                rooms[it.id] = {
                    id: it.id,
                    name: it.name,
                    owner: it.edges.owner.id,
                    background: it.background
                }
            });
            setStateRooms(rooms);
            if (Object.keys(rooms).length > 0) {
                setStateCurrentRoom(Object.values(rooms)[0]);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

export const updateRoom = (roomId: string, data: RoomData) => {
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    nc.rpc("room_update", newNetMessage(roomId, data))
        .then((result) => {
            console.log("room-update", result);
        })
        .catch((err) => {
            console.error(err);
        });
}

export const removeRoom = (roomId: string) => {
    const nc = stateNetClient();
    if (!nc) {
        console.error("centrifuge client not found");
        return;
    }
    nc.rpc("room_delete", newNetMessage(roomId, {}))
        .then((result) => {
            console.log("room-delete", result);
        })
        .catch((err) => {
            console.error(err);
        });
}