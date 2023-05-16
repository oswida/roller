import { FaSolidPlus, FaSolidFileImport, FaSolidFileExport, FaSolidInfo, FaSolidTrash } from "solid-icons/fa";
import { Component, For, Show, createMemo, createSignal } from "solid-js"
import { Flex, Text, Button, TplRenderer, Dialog, Input, InputArea, Alert } from "~/component";
import { chatListStyle, defListStyle } from "./styles.css";
import { RollDefInfo, appDefs, emptyRollDefInfo, rollerDefsKey, saveToStorage } from "~/common";
import toast from "solid-toast";
import { DefItem } from "./DefItem";
import { createSign } from "crypto";
import { Dynamic } from "solid-js/web";

type Props = {
    ref: (e: any) => void;
    changeTab: (value: string) => void;
    adjustSize: () => void;
}


export const DefsContent: Component<Props> = ({ ref, changeTab, adjustSize }) => {
    const [createDlgOpen, setCreateDlgOpen] = createSignal(false);
    const [delDlgOpen, setDelDlgOpen] = createSignal(false);
    const [selDef, setSelDef] = createSignal<RollDefInfo>();

    let refName: HTMLInputElement;
    let refDice: HTMLInputElement;
    let refDesc: HTMLTextAreaElement;
    let refMod: HTMLInputElement;
    let refSR: HTMLInputElement;

    const ct = (val: string) => {
        changeTab(val);
        adjustSize();
    }

    const items = createMemo(() => {
        return Object.values(appDefs()).sort((a, b) => a.name.localeCompare(b.name));
    });


    const createDef = () => {
        if (!refName || !refDesc || !refMod || !refSR ||
            refName.value.trim() == "" || !refDice || refDice.value.trim() == "") return;
        const info = emptyRollDefInfo();
        info.description = refDesc.value;
        info.modifier = Number.parseInt(refMod.value);
        info.name = refName.value;
        info.dice = refDice.value;
        info.successRule = refSR.value;
        const ns = { ...appDefs() };
        ns[info.id] = info;
        saveToStorage(rollerDefsKey, ns);
        setCreateDlgOpen(false);
        toast("New definition created", { icon: <FaSolidInfo /> })
    }

    const deleteDef = () => {
        setDelDlgOpen(false);
        const sel = selDef();
        if (!sel) return;
        const ns = { ...appDefs() };
        delete ns[sel.id];
        saveToStorage(rollerDefsKey, ns);
    }


    const importDefs = () => {

    }

    const exportDefs = () => {

    }

    return <>
        <Flex gap="large" style={{ "justify-content": "space-between" }}>
            <Flex style={{ "min-height": "35px" }}>
                <Text onClick={() => ct("rolls")} style={{ cursor: "pointer" }} title="Roll list">Rolls</Text>
                <Text>|</Text>
                <Text colorSchema="secondary">Defs</Text>
            </Flex>
            <Flex>
                <Button title="Import definitions" onClick={importDefs}>
                    <FaSolidFileImport />
                </Button>
                <Button title="Export definitions" onClick={exportDefs}>
                    <FaSolidFileExport />
                </Button>
                <Dialog
                    open={createDlgOpen}
                    onOpenChange={setCreateDlgOpen}
                    trigger={<FaSolidPlus />} dialogTitle={() => "Create defimition"}>
                    <Input label="Name" style={{ width: "17em" }} ref={(e) => refName = e} />
                    <InputArea label="Description" style={{ width: "17em", height: "6em" }} ref={(e) => refDesc = e} />
                    <Flex style={{ "align-items": "flex-end" }}>
                        <Input label="Dice" style={{ width: "4em" }} ref={(e) => refDice = e} />
                        <Input label="Modifier" style={{ width: "4em" }} ref={(e) => refMod = e} />
                        <Button variant="smallicon"><FaSolidInfo /></Button>
                    </Flex>
                    <Input label="Success rule" style={{ width: "10em" }} ref={(e) => refSR = e} />
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                        <Button onClick={() => setCreateDlgOpen(false)}>Cancel</Button>
                        <Button onClick={createDef}>Create</Button>
                    </Flex>
                </Dialog>
                <Show when={selDef()}>
                    <Alert label="Delete definition"
                        open={delDlgOpen}
                        onOpenChange={setDelDlgOpen}
                        trigger={<FaSolidTrash />}>
                        <Text>Delete {selDef()?.name} {"?"}</Text>
                        <Flex gap="large" style={{ "margin-top": "10px" }}>
                            <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
                            <Button onClick={deleteDef}>Delete</Button>
                        </Flex>
                    </Alert>
                </Show>
            </Flex>
        </Flex>
        <div class={defListStyle} ref={(e: any) => ref(e)}>
            <For each={items()}>{(it) =>
                (<DefItem item={it} onClick={() => setSelDef(it)} selected={selDef} />)}</For>
        </div>
    </>
}