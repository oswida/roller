import { FaSolidFileImport, FaSolidFileExport, FaSolidTrash, FaSolidPlus } from "solid-icons/fa";
import { Component, For, Show, createMemo, createSignal } from "solid-js"
import { RefProps, appChars, appSettings, currentRoom, emptyCharInfo, rollerCharsKey, saveToStorage } from "~/common"
import { Flex, Text, Button, Select, TplRenderer, SelectItem } from "~/component";
import { ChatItem } from "./ChatItem";
import { chatListStyle } from "./styles.css";
import { Dynamic } from "solid-js/web";
import { setInputDialogState } from "~/component/Dialog/InputDialog";

type Props = {
    ref: (e: any) => void;
    changeTab: (value: string) => void;
    adjustSize: () => void;
}


export const CsContent: Component<Props> = ({ ref, changeTab, adjustSize }) => {
    const [selChar, setSelChar] = createSignal("");

    const ct = (val: string) => {
        changeTab(val);
        adjustSize();
    }

    const items = createMemo(() => {
        return Object.values(appChars()).map(it => ({ id: it.id, label: it.name } as SelectItem));
    });

    const createChar = () => {
        setInputDialogState((prev) => ({
            ...prev,
            open: true,
            title: "Create character",
            label: "Character name",
            callback: (value: string) => {
                const c = emptyCharInfo();
                c.name = value;
                c.template = "e063597b-e67a-4135-ba88-1d0dfc127904";
                c.values = {};
                const newState = { ...appChars() };
                newState[c.id] = c;
                saveToStorage(rollerCharsKey, newState);
                setSelChar(c.id);
            }
        }))

    }

    const currentChar = createMemo(() => {
        const r = items().filter(it => it.id == selChar());
        if (r.length > 0) return r[0];
        return undefined;
    });

    const currentCharObj = createMemo(() => {
        const chars = appChars();
        if (!chars) return undefined;
        const r = items().filter(it => it.id == selChar());
        if (r.length > 0) return chars[r[0].id];
        return undefined;
    });

    const removeChar = () => {
        const c = selChar();
        if (!c) return;
        const newState = { ...appChars() };
        delete newState[c];
        saveToStorage(rollerCharsKey, newState);

    }

    const changeChar = (v: SelectItem) => {
        if (!v) return;
        setSelChar(v.id);
    }


    return <>
        <Flex gap="large" style={{ "justify-content": "space-between" }}>
            <Flex style={{ "min-height": "35px" }}>
                <Text onClick={() => ct("rolls")} style={{ cursor: "pointer" }} >Rolls</Text>
                <Text>|</Text>
                <Text colorSchema="secondary">Chars</Text>
            </Flex>
            <Flex>
                <Button onClick={removeChar}>
                    <FaSolidTrash />
                </Button>
                <Dynamic component={Select} options={items}
                    selected={currentChar} onChange={changeChar} />
                <Button onClick={createChar}>
                    <FaSolidPlus />
                </Button>
            </Flex>
        </Flex>
        <div class={chatListStyle} ref={(e: any) => ref(e)}>
            <TplRenderer tplId={() => currentCharObj()?.template} />
        </div>
    </>
}