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
import {
  HandoutInfoType,
  HandoutInfoTypeList,
  TOPBAR_HEIGHT,
  appHandouts,
  appSettings,
  currentCs,
  emptyHandoutInfo,
  isCsOwner,
  updateHdStorage,
} from "~/common";
import {
  Accordion,
  AccordionOption,
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
  Select,
  SelectItem,
  Text,
} from "~/components";
import { csPanelRootStyle } from "../CsPanel/styles.css";
import {
  FaSolidDeleteLeft,
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidPlus,
  FaSolidShareNodes,
  FaSolidTrash,
  FaSolidUserPen,
} from "solid-icons/fa";
import { BsArrowsExpand } from "solid-icons/bs";
import { Dynamic } from "solid-js/web";
import { HdItem } from "./HdItem";

export const HdPanel: Component = () => {
  let listRef: HTMLDivElement;
  let filterRef: HTMLInputElement;
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [renameDialogOpen, setRenameDialogOpen] = createSignal(false);
  const [selHdName, setSelHdName] = createSignal("");
  const [editHdName, setEditHdName] = createSignal("");
  const [selHdType, setSelHdType] = createSignal("");
  const [flt, setFlt] = createSignal("");

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

  const items = createMemo(
    () => {
      const hds = appHandouts();
      return Object.values(hds)
        .filter((it) => {
          if (flt() === "") return true;
          return it.name.includes(flt());
        })
        .map(
          (it) =>
            ({
              id: it.id,
              title: it.name,
              content: <HdItem item={it} />,
            } as AccordionOption)
        );
    },
    undefined,
    { equals: false }
  );

  const expandAll = () => {
    // if (csExpanded().length <= 0)
    //   setCsExpanded(tpl.sections.map((it) => it.title));
    // else setCsExpanded([]);
  };

  const exportHd = () => {
    // const info = currentHd();
    // if (!info) return;
    // const filename = `${info.name}.json`;
    // exportData(info, filename);
  };

  const importHd = () => {};

  const createHandout = () => {
    setCrDialogOpen(false);
    const name = selHdName();
    const ht = selHdType();
    if (name.trim() === "" || !ht || ht.trim() === "") return;
    const hd = emptyHandoutInfo(appSettings().userIdent, ht as HandoutInfoType);
    hd.name = name;
    updateHdStorage(hd);
  };

  const deleteHandout = () => {};

  const shareHandout = () => {};

  const renameHandout = () => {};

  const clearFlt = () => {
    setFlt("");
    if (!filterRef) return;
    filterRef.value = "";
  };

  return (
    <div class={csPanelRootStyle}>
      <Flex direction="column">
        <Flex gap="medium" justify="space" style={{ "margin-bottom": "5px" }}>
          <Text>Handouts</Text>
          <Input
            onInput={(e: any) => setFlt(e.target.value)}
            ref={(e) => (filterRef = e)}
          />
          <Button onClick={clearFlt}>
            <FaSolidDeleteLeft />
          </Button>
        </Flex>
      </Flex>

      <div ref={(e: any) => (listRef = e)}>
        <Accordion
          collapsible
          multiple
          colorSchema="secondary"
          backgroundSchema="ghost"
        >
          {items()}
        </Accordion>
      </div>

      <Flex gap="none" justify="space">
        <Flex>
          <Dialog open={crDialogOpen()} onOpenChange={setCrDialogOpen}>
            <DialogTrigger>
              <Button>
                <FaSolidPlus />
              </Button>
            </DialogTrigger>
            <DialogContent title="Create handout">
              <Input
                label="Name"
                onChange={(e) => setSelHdName(e.target.value)}
              />
              <Select
                modal={true}
                label="Type"
                options={() =>
                  HandoutInfoTypeList.map(
                    (it) => ({ id: it, label: it } as SelectItem)
                  )
                }
                onChange={(e: SelectItem) => setSelHdType(e.id)}
              />

              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
                <Button onClick={createHandout}>Create</Button>
              </Flex>
            </DialogContent>
          </Dialog>
          <Button title="Import charsheet" onClick={importHd}>
            <FaSolidFileImport />
          </Button>
        </Flex>

        <Show when={currentCs()}>
          <Flex>
            <Show when={isCsOwner(currentCs())}>
              <Alert open={delDialogOpen()} onOpenChange={setDelDialogOpen}>
                <AlertTrigger>
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
                    <Button onClick={deleteHandout}>Delete</Button>
                  </Flex>
                </AlertContent>
              </Alert>

              <Alert open={shareDialogOpen()} onOpenChange={setShareDialogOpen}>
                <AlertTrigger>
                  <Button>
                    <FaSolidShareNodes />
                  </Button>
                </AlertTrigger>
                <AlertContent title="Share handout">
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
                    <Button onClick={shareHandout}>Accept</Button>
                  </Flex>
                </AlertContent>
              </Alert>

              <Dialog
                open={renameDialogOpen()}
                onOpenChange={setRenameDialogOpen}
              >
                <DialogTrigger>
                  <Button>
                    <FaSolidUserPen />
                  </Button>
                </DialogTrigger>
                <DialogContent title="Rename charsheet">
                  <Input
                    label="Name"
                    value={currentCs()?.name}
                    onChange={(e) => setEditHdName(e.target.value)}
                  />
                  <Flex gap="large" style={{ "margin-top": "10px" }}>
                    <Button onClick={() => setRenameDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={renameHandout}>Rename</Button>
                  </Flex>
                </DialogContent>
              </Dialog>
            </Show>

            <Button title="Export charsheet" onClick={exportHd}>
              <FaSolidFileExport />
            </Button>
            <Button title="Toggle expand all" onClick={expandAll}>
              <BsArrowsExpand />
            </Button>
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};
