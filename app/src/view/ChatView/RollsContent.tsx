import { FaSolidTrash } from "solid-icons/fa"
import { Show, For, createMemo, Component } from "solid-js"
import {
    appRolls, appRooms, appSettings, currentRoom,

    setChatViewTab
} from "~/common"
import { Flex, Button, Text } from "~/component"
import { ChatItem } from "./ChatItem"
import { chatListStyle, defTabStyle } from "./styles.css"

type Props = {
    ref: (e: any) => void;
    adjustSize: () => void;
}

export const RollsContent: Component<Props> = ({ ref, adjustSize }) => {
    const items = createMemo(() => {
        const data = appRooms();
        const settings = appSettings();
        if (!data || settings.currentRoom === "" || !data[settings.currentRoom])
            return [];
        return Object.values(appRolls()).sort((a, b) => b.realtstamp - a.realtstamp);
    });

    const clearRolls = () => {
        //TODO: clear
        // const data = { ...appRooms() };
        // if (appSettings().currentRoom == "") return;

        // toast("Rolls cleared", { icon: <FaSolidCircleInfo /> });
        // netUpdateRoom(data[appSettings().currentRoom]);
    };


    const ct = (val: string) => {
        setChatViewTab(val);
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
                    {/* <Button title="Import rolls" onClick={importRolls}>
                        <FaSolidFileImport />
                    </Button>
                    <Button title="Export rolls" onClick={exportRolls}>
                        <FaSolidFileExport />
                    </Button> */}
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