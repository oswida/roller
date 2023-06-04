import { Component, Match, Show, Switch, createMemo, createSignal, onCleanup, onMount } from "solid-js";
import { CsInfo, TOPBAR_HEIGHT, appCs, appSettings, currentCs, currentRoom, deleteCsStorage, netPublish, setCsExpanded, setCurrentCs, topicCsInfo, updateCsStorage } from "~/common";
import { csPanelRootStyle } from "./styles.css";
import { Alert, Button, Dialog, Flex, Input, Select, SelectItem, Text } from "~/component";
import { FaSolidPlus, FaSolidShareNodes, FaSolidTrash } from "solid-icons/fa";
import { charTemplateItems, charTemplates } from "~/template";
import toast from "solid-toast";
import { v4 as uuid } from "uuid";
import { Dynamic } from "solid-js/web";
import { CsViewer } from "~/component/CsViewer";
import { BsArrowsCollapse, BsArrowsExpand } from "solid-icons/bs";

export const CsPanel: Component = () => {
    let listRef: HTMLDivElement;
    const [crDialogOpen, setCrDialogOpen] = createSignal(false);
    const [delDialogOpen, setDelDialogOpen] = createSignal(false);
    const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
    const [selCsType, setSelCsType] = createSignal("");
    const [selCsName, setSelCsName] = createSignal("");

    const adjustSize = () => {
        if (!listRef) {
            return;
        }
        listRef.style.height = `calc(100vh - ${TOPBAR_HEIGHT + 90}px)`;
    };

    const handler = (event: Event) => {
        adjustSize();
    };

    onMount(() => {
        window.addEventListener("resize", handler);
        adjustSize();
    });

    onCleanup(() => {
        window.removeEventListener("resize", handler);
    });

    const items = createMemo(() => {
        return Object.values(appCs()).
            sort((a, b) => a.name.localeCompare(b.name)).
            map((it) => { return { id: it.id, label: it.shared ? `🡆 ${it.name}` : it.name } as SelectItem });
    });

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
        updateCsStorage(info);
        // adjustSize();
        const flt = items().filter(it => it.id == info.id);
        if (flt.length > 0) {
            setCurrentCs(appCs()[flt[0].id]);
        }
        toast("New charsheet created");
    };

    const csChange = (item: SelectItem) => {
        if (item) {
            setCurrentCs(undefined);
            setCurrentCs(appCs()[item.id]);
        }
    }

    const selectedCs = createMemo(() => {
        const f = items().filter(it => it.id === currentCs()?.id);
        if (f.length <= 0) return undefined;
        return f[0];
    });

    const deleteCharsheet = () => {
        setDelDialogOpen(false);
        const cs = currentCs();
        if (!cs) return;
        deleteCsStorage(cs.id);
        toast("Charsheet deleted");
    };

    const shareCharsheet = () => {
        setShareDialogOpen(false);
        const cs = currentCs();
        const room = currentRoom();
        if (!cs || !room) return;
        if (!cs.shared) { // can be undefined
            cs.shared = true;
        } else {
            cs.shared = false;
        }
        updateCsStorage(cs);
        netPublish(topicCsInfo, cs);
        toast("Charsheet share toggled");
    };

    const expandAll = () => {
        const info = currentCs();
        if (!info) return;
        const tpl = charTemplates[info.template];
        if (!tpl) return;
        setCsExpanded(tpl.sections.map(it => it.title));
    }


    return <div class={csPanelRootStyle}>
        <Flex direction="column">
            <Flex gap="small" style={{ "justify-content": "space-between" }}>
                <Dynamic
                    component={Select}
                    labelLeft
                    selected={selectedCs}
                    label="Char: "
                    options={items}
                    onChange={csChange} />
            </Flex>
            <CsViewer ref={(e: any) => listRef = e} />
            <Flex gap="small" style={{ "justify-content": "space-between" }}>
                <Show when={currentCs()}>
                    <Show when={currentCs()?.owner == appSettings().userIdent}>
                        <Alert
                            label="Delete charsheet"
                            open={delDialogOpen}
                            onOpenChange={setDelDialogOpen}
                            trigger={<FaSolidTrash />}
                            triggerHint="Delete selected charsheet"
                        >
                            <Text>
                                Delete {currentCs()?.name} {"?"}
                            </Text>
                            <Flex gap="large" style={{ "margin-top": "10px" }}>
                                <Button onClick={() => setDelDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={deleteCharsheet}>Delete</Button>
                            </Flex>
                        </Alert>
                    </Show>

                    <Show when={currentCs()?.owner == appSettings().userIdent}>
                        <Alert
                            label="Share charsheet"
                            open={shareDialogOpen}
                            onOpenChange={setShareDialogOpen}
                            trigger={<FaSolidShareNodes />}
                            triggerHint="Share selected charsheet"
                        >
                            <Switch>
                                <Match when={currentCs()?.shared}>
                                    <Text>
                                        Stop sharing {currentCs()?.name} {"?"}
                                    </Text>
                                </Match>
                                <Match when={!currentCs()?.shared}>
                                    <Text>
                                        Share {currentCs()?.name} {"?"}
                                    </Text>
                                </Match>
                            </Switch>

                            <Flex gap="large" style={{ "margin-top": "10px" }}>
                                <Button onClick={() => setShareDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={shareCharsheet}>Accept</Button>
                            </Flex>
                        </Alert>
                    </Show>
                </Show>

                <Dialog
                    trigger={<FaSolidPlus />}
                    triggerHint="Create charsheet"
                    open={crDialogOpen}
                    onOpenChange={setCrDialogOpen}
                    dialogTitle={() => "Create charsheet"}
                >
                    <Input
                        label="Name"
                        onChange={(e) => setSelCsName(e.target.value)}
                    />
                    <Select
                        modal={true}
                        label="Type"
                        options={() => charTemplateItems}
                        onChange={(e: SelectItem) => setSelCsType(e.id)}
                    />
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                        <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
                        <Button onClick={createCharsheet}>Create</Button>
                    </Flex>
                </Dialog>

                <Flex>
                    <Button title="Expand all" onClick={expandAll}>
                        <BsArrowsExpand />
                    </Button>
                    <Button title="Collapse all" onClick={() => setCsExpanded([])}>
                        <BsArrowsCollapse />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </div>;
}