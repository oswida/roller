import { Component, For, Show, createEffect, createMemo, createSignal } from "solid-js";
import { TbArrowAutofitHeight, TbArrowAutofitWidth, TbZoomReset } from "solid-icons/tb"
import { csLeftPaneStyle, csListStyle } from "./styles.css";
import { Alert, Button, Dialog, Flex, Input, Select, SelectItem, Text } from "~/component";
import { FaSolidArrowLeft, FaSolidArrowRight, FaSolidCircleInfo, FaSolidFileExport, FaSolidFileImport, FaSolidPlus, FaSolidTrash } from "solid-icons/fa";
import { CsInfo, appCs, csCanvas, csTemplateId, csTemplateTypes, currentCs, currentCsPage, deleteCs, exportData, importData, prettyToday, rollerCsKey, saveToStorage, setCurrentCs, setCurrentCsPage, updateCs } from "~/common";
import { v4 as uuid } from "uuid";
import toast from "solid-toast";
import { CsItem } from "./CsItem";
import { csTemplates } from "~/template";
import { createFromTemplate } from "./template";
import { Dynamic } from "solid-js/web";

type Props = {
    ref: (e: any) => void;
    adjustSize: () => void;
}


export const CsLeftPane: Component<Props> = ({ ref, adjustSize }) => {
    const [crDialogOpen, setCrDialogOpen] = createSignal(false);
    const [delDialogOpen, setDelDialogOpen] = createSignal(false);
    const [selCsType, setSelCsType] = createSignal<csTemplateId>("");
    const [selCsName, setSelCsName] = createSignal("");
    let pane: HTMLDivElement;


    const createCharsheet = () => {
        setCrDialogOpen(false);
        if (selCsType().trim() == "" || selCsName().trim() == "") return;
        const info: CsInfo = {
            id: uuid(),
            name: selCsName(),
            template: selCsType(),
            values: {}
        };
        updateCs(info);
        adjustSize();
        toast("New charsheet created");
    }

    const deleteCharsheet = () => {
        setDelDialogOpen(false);
        const cs = currentCs();
        if (!cs) return;
        deleteCs(cs.id);
        toast("Charsheet deleted");
    }

    const importCs = () => {
        importData((data: any) => {
            const e = data as Record<string, CsInfo>;
            const newState = { ...appCs() };
            Object.values(e).forEach(it => {
                newState[it.id] = it;
            });
            saveToStorage(rollerCsKey, newState);
            toast("Charsheets imported", { icon: <FaSolidCircleInfo /> });
        });
    }

    const exportCs = () => {
        const filename = `defs-${prettyToday()}.json`;
        exportData(appCs(), filename);
        toast("Charsheets exported", { icon: <FaSolidCircleInfo /> });
    }

    const items = createMemo(() => {
        return Object.values(appCs()).sort((a, b) => a.name.localeCompare(b.name));
    });

    createEffect(() => {
        const cs = currentCs();
        const page = currentCsPage();
        const cnv = csCanvas();
        if (!cs || !cnv) return;
        const tpl = csTemplates[cs.template];
        if (!tpl) return;
        createFromTemplate(cnv, cs, page);
    });

    const changePage = (val: number) => {
        const cs = currentCs();
        if (!cs) return;
        const tpl = csTemplates[cs.template];
        if (!tpl) return;
        const np = currentCsPage() + val;
        if (np < 0 || np >= tpl.pages.length) return;
        setCurrentCsPage(np);
    }

    const numOfPages = createMemo(() => {
        const cs = currentCs();
        if (!cs) return 0;
        const tpl = csTemplates[cs.template];
        if (!tpl) return 0;
        return tpl.pages.length;
    });

    const fitHeight = () => {
        const cnv = csCanvas();
        if (!cnv || !pane) return;
        const ch = cnv.height;
        if (!ch) return;
        cnv.setZoom((pane.clientHeight + 90) / ch);
    }

    // const fitWidth = () => {
    //     const cnv = csCanvas();
    //     if (!cnv || !pane) return;
    //     const cw = cnv.width;
    //     if (!cw) return;
    //    // cnv.setZoom((pane.clientWidth + 90) / ch);
    // }

    const resetHeight = () => {
        const cnv = csCanvas();
        if (!cnv) return;
        cnv.setZoom(1.0);
    }

    return <div class={csLeftPaneStyle}>
        <Flex style={{ "justify-content": "space-between" }}>
            <Text>Charsheets</Text>

            <Flex >
                <Show when={currentCs()}>
                    <Flex style={{ "margin-right": "10px" }}>
                        <Alert label="Delete charsheet"
                            open={delDialogOpen}
                            onOpenChange={setDelDialogOpen}
                            trigger={<FaSolidTrash />}>
                            <Text>Delete {currentCs()?.name} {"?"}</Text>
                            <Flex gap="large" style={{ "margin-top": "10px" }}>
                                <Button onClick={() => setDelDialogOpen(false)}>Cancel</Button>
                                <Button onClick={deleteCharsheet}>Delete</Button>
                            </Flex>
                        </Alert>
                    </Flex>
                </Show>
                <Button title="Import definitions" onClick={importCs}>
                    <FaSolidFileImport />
                </Button>
                <Button title="Export definitions" onClick={exportCs}>
                    <FaSolidFileExport />
                </Button>
                <Dialog trigger={<FaSolidPlus />}
                    open={crDialogOpen} onOpenChange={setCrDialogOpen}
                    dialogTitle={() => "Create charsheet"}>
                    <Input label="Name" onChange={(e) => setSelCsName(e.target.value)} />
                    <Select modal={true}
                        label="Type"
                        options={() => csTemplateTypes}
                        onChange={(e: SelectItem) => setSelCsType(e.id as csTemplateId)} />
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                        <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
                        <Button onClick={createCharsheet}>Create</Button>
                    </Flex>
                </Dialog>
            </Flex>
        </Flex>
        <div class={csListStyle} ref={(e: any) => { ref(e); pane = e; }}>
            <For each={items()}>
                {(it) => (
                    <CsItem
                        onClick={() => setCurrentCs(it)}
                        item={it} adjustSize={adjustSize} selected={currentCs} />
                )}
            </For>
        </div>
        <Flex gap="medium">
            <Flex>
                <Button>
                    <TbArrowAutofitHeight onClick={fitHeight} />
                </Button>
                <Button onClick={resetHeight}>
                    <TbZoomReset />
                </Button>
                {/* <Button>
                    <TbArrowAutofitWidth />
                </Button> */}
            </Flex>
            <Show when={numOfPages() > 0}>
                <Flex>
                    <Button onClick={() => changePage(-1)}>
                        <FaSolidArrowLeft />
                    </Button>

                    <Dynamic component={Text}>{currentCsPage() + 1}/{numOfPages()}</Dynamic>

                    <Button onClick={() => changePage(1)}>
                        <FaSolidArrowRight />
                    </Button>
                </Flex>
            </Show>
        </Flex>
    </div>
}