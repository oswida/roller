import { FaSolidTrash } from "solid-icons/fa"
import { Show, For, createMemo, Component } from "solid-js"
import {
    appRolls, appRooms, appSettings, currentRoom,
    netClearRolls,
    netPublish,
    setAppRolls,
    setChatViewTab,
    topicRollInfo,
    topicRollUpdate
} from "~/common"
import { Flex, Button, Text } from "~/component"
import { ChatItem } from "./ChatItem"
import { chatListStyle, defTabStyle } from "./styles.css"
import toast from "solid-toast"

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
        return Object.values(appRolls()).sort((a, b) => b.realtstamp - a.realtstamp).filter(it => {
            if (it.private && !it.revealed && it.userId !== appSettings().userIdent) {
                return false;
            }
            return true;
        });
    });

    const clearRolls = () => {
        const room = currentRoom();
        if (!room) return;
        setAppRolls({});
        netClearRolls(room.id);
        netPublish(topicRollUpdate, "");
        toast("Rolls cleared", { position: "bottom-right" });
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