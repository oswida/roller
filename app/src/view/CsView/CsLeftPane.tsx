import { Component, For, Show, createEffect, createMemo, createSignal } from "solid-js";
import { TbArrowAutofitHeight, TbZoomReset } from "solid-icons/tb"
import { csLeftPaneStyle, csListStyle } from "./styles.css";
import { Alert, Button, Dialog, Flex, Input, Select, SelectItem, Text } from "~/component";
import { FaSolidArrowLeft, FaSolidArrowRight, FaSolidCircleInfo, FaSolidFileExport, FaSolidFileImport, FaSolidPlus, FaSolidShareNodes, FaSolidTrash } from "solid-icons/fa";
import { CsInfo, appCs, appSettings, csCanvas, csTemplateId, csTemplateTypes, currentCs, currentCsPage, deleteCs, exportData, importData, prettyToday, rollerCsKey, saveToStorage, setCurrentCs, setCurrentCsPage, updateCs } from "~/common";
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
    const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
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
            values: {},
            owner: appSettings().userIdent,
            shared: false,
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
        const cs = currentCs();
        if (!cnv || !pane || !cs) return;
        const tpl = csTemplates[cs.template];
        if (!tpl) return;
        cnv.setZoom((pane.clientHeight + 90) / tpl.pageHeight);
        cnv.requestRenderAll();
    }

    const resetHeight = () => {
        const cs = currentCs();
        const cnv = csCanvas();
        if (!cnv || !cs) return;
        const tpl = csTemplates[cs.template];
        if (!tpl) return;
        var vpt = cnv.viewportTransform;
        if (!vpt) return;
        vpt[4] = 0;
        vpt[5] = 0;
        vpt[0] = 1.0;
        vpt[3] = 1.0;
        cnv.setHeight(tpl.pageHeight);
        cnv.setViewportTransform(vpt);
        cnv.requestRenderAll();
    }

    const shareCharsheet = () => {

    }

    createEffect(() => {
        const cs = currentCs();
        const cnv = csCanvas();
        if (!cs || !cnv) return;
        const tpl = csTemplates[cs.template];
        if (!tpl) return;
        cnv.setHeight(tpl.pageHeight);
    });

    return <div class={csLeftPaneStyle}>
        <Flex style={{ "justify-content": "space-between" }}>
            <Text>Charsheets</Text>

            <Flex >
                <Show when={currentCs()}>
                    <Flex style={{ "margin-right": "10px" }}>
                        <Alert label="Delete charsheet"
                            open={delDialogOpen}
                            onOpenChange={setDelDialogOpen}
                            trigger={<FaSolidTrash />}
                            triggerHint="Delete selected charsheet">
                            <Text>Delete {currentCs()?.name} {"?"}</Text>
                            <Flex gap="large" style={{ "margin-top": "10px" }}>
                                <Button onClick={() => setDelDialogOpen(false)}>Cancel</Button>
                                <Button onClick={deleteCharsheet}>Delete</Button>
                            </Flex>
                        </Alert>
                    </Flex>
                    <Alert label="Share charsheet"
                        open={shareDialogOpen}
                        onOpenChange={setShareDialogOpen}
                        trigger={<FaSolidShareNodes />}
                        triggerHint="Share selected charsheet">
                        <Text>Share {currentCs()?.name} {"?"}</Text>
                        <Flex gap="large" style={{ "margin-top": "10px" }}>
                            <Button onClick={() => setShareDialogOpen(false)}>Cancel</Button>
                            <Button onClick={shareCharsheet}>Share</Button>
                        </Flex>
                    </Alert>
                </Show>

                <Dialog trigger={<FaSolidPlus />}
                    triggerHint="Create charsheet"
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
        <Flex gap="medium" style={{ "justify-content": "space-between" }}>
            <Flex>
                <Button title="Fit height">
                    <TbArrowAutofitHeight onClick={fitHeight} />
                </Button>
                <Button onClick={resetHeight} title="Reset to original size">
                    <TbZoomReset />
                </Button>
                <Button title="Import definitions" onClick={importCs}>
                    <FaSolidFileImport />
                </Button>
                <Button title="Export definitions" onClick={exportCs}>
                    <FaSolidFileExport />
                </Button>
            </Flex>
            <Show when={numOfPages() > 0}>
                <Flex>
                    <Button onClick={() => changePage(-1)} title="Previous page">
                        <FaSolidArrowLeft />
                    </Button>

                    <Dynamic component={Text}>{currentCsPage() + 1}/{numOfPages()}</Dynamic>

                    <Button onClick={() => changePage(1)} title="Next page">
                        <FaSolidArrowRight />
                    </Button>
                </Flex>
            </Show>
        </Flex>
    </div>
}