import { BsArrowsExpand } from "solid-icons/bs";
import {
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidPlus,
  FaSolidShareNodes,
  FaSolidTrash,
} from "solid-icons/fa";
import {
  Component,
  Match,
  Show,
  Switch,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import toast from "solid-toast";
import { v4 as uuid } from "uuid";
import {
  CsInfo,
  TOPBAR_HEIGHT,
  appCs,
  appSettings,
  centPublish,
  csExpanded,
  csOpenSections,
  currentCs,
  currentRoom,
  deleteCsStorage,
  exportData,
  importData,
  netTopic,
  setCsExpanded,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import {
  Alert,
  Button,
  CsViewer,
  Dialog,
  Flex,
  Input,
  Select,
  SelectItem,
  Text,
} from "~/components";
import { charTemplateGameItems, charTemplateGames, charTemplateItems, charTemplates } from "~/template";
import { csPanelRootStyle } from "./styles.css";

export const CsPanel: Component = () => {
  let listRef: HTMLDivElement;
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [selCsType, setSelCsType] = createSignal("");
  const [selCsGame, setSelCsGame] = createSignal("");
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
    // 🡆
    return Object.values(appCs())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((it) => {
        return {
          id: it.id,
          label: it.shared ? `${it.name} *` : it.name,
        } as SelectItem;
      });
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
    const flt = items().filter((it) => it.id == info.id);
    if (flt.length > 0) {
      setCurrentCs(undefined);
      setCurrentCs(appCs()[flt[0].id]);
    }
    toast("New charsheet created");
  };

  const csChange = (item: SelectItem) => {
    if (item) {
      setCurrentCs(undefined);
      const cs = appCs()[item.id];
      setCurrentCs(cs);
      const tpl = charTemplates[cs.template];
      if (!tpl) return;
      const openSections = csOpenSections()[cs.id];
      if (openSections) setCsExpanded(openSections);
      else setCsExpanded(tpl.sections.map((it) => it.title));
    }
  };

  const selectedCs = createMemo(() => {
    const f = items().filter((it) => it.id === currentCs()?.id);
    if (f.length <= 0) return undefined;
    return f[0];
  });

  const deleteCharsheet = () => {
    setDelDialogOpen(false);
    const cs = currentCs();
    if (!cs) return;
    deleteCsStorage(cs.id);
    toast("Charsheet deleted");
    setCurrentCs(undefined);
  };

  const shareCharsheet = () => {
    setShareDialogOpen(false);
    const cs = currentCs();
    const room = currentRoom();
    if (!cs || !room) return;
    if (!cs.shared) {
      // can be undefined
      cs.shared = true;
    } else {
      cs.shared = false;
    }
    updateCsStorage(cs);
    centPublish(netTopic(topicCsInfo), cs);
    toast("Charsheet share toggled");
  };

  const expandAll = () => {
    const info = currentCs();
    if (!info) return;
    const tpl = charTemplates[info.template];
    if (!tpl) return;
    if (csExpanded().length <= 0)
      setCsExpanded(tpl.sections.map((it) => it.title));
    else setCsExpanded([]);
  };

  const exportCs = () => {
    const info = currentCs();
    if (!info) return;
    const filename = `${info.name}.json`;
    exportData(info, filename);
  };

  const importCs = () => {
    importData((data: any) => {
      const e = data as CsInfo;
      updateCsStorage(e);
      const info = currentCs();
      if (!info || info.id !== e.id) return;
      setCurrentCs(undefined);
      setCurrentCs(e);
    });
  };

  const templates = createMemo(() => {
    const g = charTemplateGames[selCsGame()];
    if (!g) return [];
    setSelCsType("");
    return g.map(it => ({ id: it.id, label: it.name } as SelectItem));
  });

  return (
    <div class={csPanelRootStyle}>
      <Flex direction="column">
        <Flex gap="small" style={{ "justify-content": "space-between" }}>
          <Dynamic
            component={Select}
            labelLeft
            selected={selectedCs}
            label="Char: "
            options={items}
            onChange={csChange}
          />
        </Flex>
        <CsViewer ref={(e: any) => (listRef = e)} />
        <Flex gap="none" style={{ "justify-content": "space-between" }}>
          <Flex>
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
                label="Game"
                options={() => charTemplateGameItems}
                onChange={(e: SelectItem) => setSelCsGame(e.id)}
              />
              <Select
                modal={true}
                label="Type"
                options={templates}
                onChange={(e: SelectItem) => { if (e) setSelCsType(e.id) }}
              />
              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
                <Button onClick={createCharsheet}>Create</Button>
              </Flex>
            </Dialog>
            <Button title="Import charsheet" onClick={importCs}>
              <FaSolidFileImport />
            </Button>
          </Flex>

          <Show when={currentCs()}>
            <Flex>
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

              <Button title="Export charsheet" onClick={exportCs}>
                <FaSolidFileExport />
              </Button>
              <Button title="Toggle expand all" onClick={expandAll}>
                <BsArrowsExpand />
              </Button>
            </Flex>
          </Show>
        </Flex>
      </Flex>
    </div>
  );
};
