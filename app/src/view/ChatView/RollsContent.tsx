import { FaSolidFileImport, FaSolidFileExport, FaSolidTrash, FaSolidCircleInfo } from "solid-icons/fa"
import { Show, For, createMemo, Component } from "solid-js"
import { RefProps, RollInfo, appRooms, appSettings, currentRoom, exportData, importData, netPublish, netUpdateRoom, prettyToday, rollerRoomsKey, saveToStorage, topicRoomInfo } from "~/common"
import { Flex, Button, Text } from "~/component"
import { ChatItem } from "./ChatItem"
import { chatListStyle, defTabStyle } from "./styles.css"
import toast from "solid-toast"

type Props = {
    ref: (e: any) => void;
    changeTab: (value: string) => void;
    adjustSize: () => void;
}

export const RollsContent: Component<Props> = ({ ref, changeTab, adjustSize }) => {
    const items = createMemo(() => {
        const data = appRooms();
        const settings = appSettings();
        if (!data || settings.currentRoom === "" || !data[settings.currentRoom])
            return [];
        return data[settings.currentRoom].rolls;
    });

    const clearRolls = () => {
        const data = { ...appRooms() };
        if (appSettings().currentRoom == "") return;
        data[appSettings().currentRoom].rolls = [];
        saveToStorage(rollerRoomsKey, data);
        toast("Rolls cleared", { icon: <FaSolidCircleInfo /> });
        netUpdateRoom(data[appSettings().currentRoom]);
    };

    const importRolls = () => {
        importData((data: any) => {
            const room = currentRoom();
            if (!room) return;
            const newState = { ...appRooms() };
            newState[room.id].rolls = data as RollInfo[];
            saveToStorage(rollerRoomsKey, newState);
            netPublish(topicRoomInfo, newState[room.id]);
            toast("Rolls imported", { icon: <FaSolidCircleInfo /> });
        });
    };

    const exportRolls = () => {
        const room = currentRoom();
        if (!room) return;
        const filename = `rolls-${prettyToday()}.json`;
        exportData(room.rolls, filename);
        toast("Rolls exported", { icon: <FaSolidCircleInfo /> });
    };

    const ct = (val: string) => {
        changeTab(val);
        adjustSize();
    }

    return <>
        <Flex gap="medium" style={{ "justify-content": "space-between" }}>
            <Flex style={{ "min-height": "35px" }}>
                <div class={defTabStyle({ sel: true })}><Text colorSchema="secondary">Rolls</Text></div>
                <div onClick={() => ct("cs")} class={defTabStyle({})}>
                    <Text title="Roll definitions">Defs</Text>
                </div>
            </Flex>

            <Show when={appSettings().userIdent == currentRoom()?.owner}>
                <Flex>
                    <Button title="Import rolls" onClick={importRolls}>
                        <FaSolidFileImport />
                    </Button>
                    <Button title="Export rolls" onClick={exportRolls}>
                        <FaSolidFileExport />
                    </Button>
                    <Button title="Clear rolls" onClick={clearRolls}>
                        <FaSolidTrash />
                    </Button>
                </Flex>
            </Show>
        </Flex>
        <div class={chatListStyle} ref={(e: any) => ref(e)}>
            <For each={items()}>
                {(it) => (
                    <Flex direction="column">
                        <ChatItem item={it} />
                    </Flex>
                )}
            </For>
        </div>
    </>
}