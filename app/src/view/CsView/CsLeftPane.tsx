import {
  FaSolidArrowLeft,
  FaSolidArrowRight,
  FaSolidCircleInfo,
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidPlus,
  FaSolidShareNodes,
  FaSolidTrash,
} from "solid-icons/fa";
import { TbArrowAutofitHeight, TbZoomReset } from "solid-icons/tb";
import {
  Component,
  For,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createSignal,
  onMount,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import toast from "solid-toast";
import { v4 as uuid } from "uuid";
import {
  CsInfo,
  appCs,
  appSettings,
  csCanvas,
  csCurrentZoom,
  currentCs,
  currentCsPage,
  currentRoom,
  deleteCsStorage,
  exportData,
  importData,
  netPublish,
  prettyToday,
  rollerCsKey,
  saveToStorage,
  setCsCurrentZoom,
  setCurrentCs,
  setCurrentCsPage,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import {
  Alert,
  Button,
  Dialog,
  Flex,
  Input,
  Select,
  SelectItem,
  Text,
} from "~/component";
import { csTemplateItems, csTemplates } from "~/template";
import { CsItem } from "./CsItem";
import { csLeftPaneStyle, csListStyle } from "./styles.css";
import { createFromTemplate } from "./template";

type Props = {
  ref: (e: any) => void;
  adjustSize: () => void;
};

export const CsLeftPane: Component<Props> = ({ ref, adjustSize }) => {
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [selCsType, setSelCsType] = createSignal("");
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
    updateCsStorage(info);
    adjustSize();
    toast("New charsheet created");
  };

  const deleteCharsheet = () => {
    setDelDialogOpen(false);
    const cs = currentCs();
    if (!cs) return;
    deleteCsStorage(cs.id);
    toast("Charsheet deleted");
  };

  const importCs = () => {
    importData((data: any) => {
      const e = data as Record<string, CsInfo>;
      const newState = { ...appCs() };
      Object.values(e).forEach((it) => {
        newState[it.id] = it;
      });
      saveToStorage(rollerCsKey, newState);
      toast("Charsheets imported", { icon: <FaSolidCircleInfo /> });
    });
  };

  const exportCs = () => {
    const filename = `defs-${prettyToday()}.json`;
    exportData(appCs(), filename);
    toast("Charsheets exported", { icon: <FaSolidCircleInfo /> });
  };

  const items = createMemo(() => {
    return Object.values(appCs()).sort((a, b) => a.name.localeCompare(b.name));
  });

  const updateZoom = () => {
    const cnv = csCanvas();
    if (!cnv) return;
    cnv.setZoom(csCurrentZoom());
  };

  onMount(() => {
    updateZoom();
  });

  createEffect(() => {
    const cs = currentCs();
    const page = currentCsPage();
    const cnv = csCanvas();
    if (!cs || !cnv) return;
    const tpl = csTemplates[cs.template];
    if (!tpl) return;
    createFromTemplate(cnv, cs, page);
    if (appSettings().csAdjustHeight) {
      const zoom = Number.parseFloat(
        (pane.clientHeight / tpl.pageHeight).toFixed(2)
      );
      var vpt = cnv.viewportTransform;
      if (!vpt) return;
      vpt[4] = 0;
      vpt[5] = 0;
      vpt[0] = zoom;
      vpt[3] = zoom;
      setCsCurrentZoom(zoom);
      cnv.setViewportTransform(vpt);
    } else
      cnv.setZoom(csCurrentZoom());
    if (page >= tpl.pages.length) setCurrentCsPage(0);
  });

  const changePage = (val: number) => {
    const cs = currentCs();
    const cnv = csCanvas();
    if (!cs || !cnv) return;
    const tpl = csTemplates[cs.template];
    if (!tpl) return;
    let np = currentCsPage() + val;
    if (np < 0) np = 0;
    if (np >= tpl.pages.length) np = tpl.pages.length - 1;
    setCurrentCsPage(np);
  };

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
    if (!cnv || !pane || !cs) {
      return;
    }
    const tpl = csTemplates[cs.template];
    if (!tpl) return;
    const zoom = Number.parseFloat(
      (pane.clientHeight / tpl.pageHeight).toFixed(2)
    );
    var vpt = cnv.viewportTransform;
    if (!vpt) return;
    vpt[4] = 0;
    vpt[5] = 0;
    vpt[0] = zoom;
    vpt[3] = zoom;
    setCsCurrentZoom(zoom);
    cnv.setViewportTransform(vpt);
  };

  const resetHeight = () => {
    const cs = currentCs();
    const cnv = csCanvas();
    if (!cnv || !cs) return;
    var vpt = cnv.viewportTransform;
    if (!vpt) return;
    vpt[4] = 0;
    vpt[5] = 0;
    vpt[0] = 1.0;
    vpt[3] = 1.0;
    setCsCurrentZoom(1.0);
    cnv.setViewportTransform(vpt);
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

  return (
    <div class={csLeftPaneStyle} ref={(e) => (pane = e)}>
      <Flex style={{ "justify-content": "space-between" }}>
        <Text>Charsheets</Text>

        <Flex>
          <Show when={currentCs()}>
            <Flex style={{ "margin-right": "10px" }}>
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
            </Flex>
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
              options={() => csTemplateItems}
              onChange={(e: SelectItem) => setSelCsType(e.id)}
            />
            <Flex gap="large" style={{ "margin-top": "10px" }}>
              <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
              <Button onClick={createCharsheet}>Create</Button>
            </Flex>
          </Dialog>
        </Flex>
      </Flex>
      <div class={csListStyle} ref={(e: any) => ref(e)}>
        <For each={items()}>
          {(it) => (
            <CsItem
              onClick={() => setCurrentCs(it)}
              item={it}
              adjustSize={adjustSize}
              selected={currentCs}
            />
          )}
        </For>
      </div>
      <Flex gap="medium" style={{ "justify-content": "space-between" }}>
        <Flex>
          <Show when={currentCs()}>
            <Button title="Fit height">
              <TbArrowAutofitHeight onClick={fitHeight} />
            </Button>
            <Button onClick={resetHeight} title="Reset to original size">
              <TbZoomReset />
            </Button>
          </Show>
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
            <Dynamic
              component={Text}
              fontSize="smaller"
              colorSchema="secondary"
            >
              {currentCsPage() + 1}/{numOfPages()}
            </Dynamic>
            <Button onClick={() => changePage(1)} title="Next page">
              <FaSolidArrowRight />
            </Button>
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};
