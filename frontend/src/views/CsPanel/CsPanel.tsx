import { BsArrowsExpand } from "solid-icons/bs";
import {
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidPlus,
  FaSolidShareNodes,
  FaSolidTrash,
  FaSolidUserPen,
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
import { v4 as uuid } from "uuid";
import {
  CsInfo,
  TOPBAR_HEIGHT,
  appCs,
  appRooms,
  appSettings,
  centPublish,
  csExpanded,
  csOpenSections,
  csShared,
  currentCs,
  currentRoom,
  deleteCsStorage,
  exportData,
  importData,
  isCsOwner,
  netTopic,
  setCsExpanded,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import {
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  CsViewer,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
  Select,
  SelectItem,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components";
import {
  charTemplateGameItems,
  charTemplateGames,
  charTemplates,
} from "~/template";
import { csPanelRootStyle } from "./styles.css";

export const CsPanel: Component = () => {
  let listRef: HTMLDivElement;
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [renameDialogOpen, setRenameDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [selCsType, setSelCsType] = createSignal("");
  const [selCsGame, setSelCsGame] = createSignal("");
  const [selCsName, setSelCsName] = createSignal("");
  const [editCsName, setEditCsName] = createSignal("");

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
        let name = it.name;
        if (it.shared) {
          const roomId = csShared()[it.id];
          if (roomId) {
            name = `${it.name} (${appRooms()[roomId].name})`;
          } else {
            name = `${it.name} (*)`;
          }
        }
        return {
          id: it.id,
          label: name,
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
      setCurrentCs(e);
    });
  };

  const renameCs = () => {
    setRenameDialogOpen(false);
    const name = editCsName();
    if (!name || name.trim() === "") return;
    const cs = currentCs();
    if (!cs) return;
    cs.name = name;
    updateCsStorage(cs);
    centPublish(netTopic(topicCsInfo), cs);
  };

  const templates = createMemo(() => {
    const g = charTemplateGames[selCsGame()];
    if (!g) return [];
    setSelCsType("");
    return g.map((it) => ({ id: it.id, label: it.name } as SelectItem));
  });

  return (
    <div class={csPanelRootStyle}>
      <Flex direction="column">
        <Flex gap="small" justify="space">
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
        <Flex justify="space" align="center" grow>
          <Flex>
            <Dialog open={crDialogOpen()} onOpenChange={setCrDialogOpen}>
              <DialogTrigger title="Create charsheet">
                <Button>
                  <FaSolidPlus />
                </Button>
              </DialogTrigger>
              <DialogContent title="Create charsheet">
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
                  onChange={(e: SelectItem) => {
                    if (e) setSelCsType(e.id);
                  }}
                />
                <Flex gap="large" style={{ "margin-top": "10px" }}>
                  <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
                  <Button onClick={createCharsheet}>Create</Button>
                </Flex>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger>
                <Button onClick={importCs}>
                  <FaSolidFileImport />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Import charsheet</TooltipContent>
            </Tooltip>
          </Flex>

          <Show when={currentCs()}>
            <Flex>
              <Show when={isCsOwner(currentCs())}>
                <Alert open={delDialogOpen()} onOpenChange={setDelDialogOpen}>
                  <AlertTrigger title="Delete charsheet">
                    <Button>
                      <FaSolidTrash />
                    </Button>
                  </AlertTrigger>
                  <AlertContent title="Delete charsheet">
                    <Text>
                      Delete {currentCs()?.name} {"?"}
                    </Text>
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                      <Button onClick={() => setDelDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={deleteCharsheet}>Delete</Button>
                    </Flex>
                  </AlertContent>
                </Alert>

                <Alert
                  open={shareDialogOpen()}
                  onOpenChange={setShareDialogOpen}
                >
                  <AlertTrigger title="Share charsheet">
                    <Button>
                      <FaSolidShareNodes />
                    </Button>
                  </AlertTrigger>
                  <AlertContent title="Share charsheet">
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
                  </AlertContent>
                </Alert>

                <Dialog
                  open={renameDialogOpen()}
                  onOpenChange={setRenameDialogOpen}
                >
                  <DialogTrigger title="Rename charsheet">
                    <Button>
                      <FaSolidUserPen />
                    </Button>
                  </DialogTrigger>
                  <DialogContent title="Rename charsheet">
                    <Input
                      label="Name"
                      value={currentCs()?.name}
                      onChange={(e) => setEditCsName(e.target.value)}
                    />
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                      <Button onClick={() => setRenameDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={renameCs}>Rename</Button>
                    </Flex>
                  </DialogContent>
                </Dialog>
              </Show>

              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={exportCs}>
                    <FaSolidFileExport />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Export charsheet</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={expandAll}>
                    <BsArrowsExpand />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle expand all</TooltipContent>
              </Tooltip>
            </Flex>
          </Show>
        </Flex>
      </Flex>
    </div>
  );
};
