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
  HandoutInfoTypeList,
  TOPBAR_HEIGHT,
  appHandouts,
  currentCs,
  isCsOwner,
} from "~/common";
import {
  Accordion,
  AccordionOption,
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
} from "~/components";
import { csPanelRootStyle } from "../CsPanel/styles.css";
import {
  FaSolidBackward,
  FaSolidDeleteLeft,
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidMagnifyingGlass,
  FaSolidPlus,
  FaSolidShareNodes,
  FaSolidTrash,
  FaSolidUserPen,
} from "solid-icons/fa";
import { BsArrowsExpand } from "solid-icons/bs";

export const HdPanel: Component = () => {
  let listRef: HTMLDivElement;
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [renameDialogOpen, setRenameDialogOpen] = createSignal(false);
  const [selHdName, setSelHdName] = createSignal("");
  const [editHdName, setEditHdName] = createSignal("");
  const [selHdType, setSelHdType] = createSignal("");

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
    const items = Object.values(appHandouts()).map(
      (it) =>
        ({
          id: it.id,
          title: it.name,
          content: it.description,
        } as AccordionOption)
    );
    return items;
  });

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

  const createHandout = () => {};

  const deleteHandout = () => {};

  const shareHandout = () => {};

  const renameHandout = () => {};

  return (
    <div class={csPanelRootStyle}>
      <Flex direction="column">
        <Flex gap="medium" style={{ "justify-content": "space-between" }}>
          <Text>Handouts</Text>
          <Input />
          <Button>
            <FaSolidDeleteLeft />
          </Button>
        </Flex>
      </Flex>

      <div ref={(e: any) => (listRef = e)}>
        <Accordion
          collapsible
          multiple
          colorSchema="accent"
          backgroundSchema="ghost"
        >
          {items()}
        </Accordion>
      </div>

      <Flex gap="none" style={{ "justify-content": "space-between" }}>
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
          <Button title="Import charsheet" onClick={importHd} variant="ghost">
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

            <Button title="Export charsheet" onClick={exportHd} variant="ghost">
              <FaSolidFileExport />
            </Button>
            <Button
              title="Toggle expand all"
              onClick={expandAll}
              variant="ghost"
            >
              <BsArrowsExpand />
            </Button>
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};
