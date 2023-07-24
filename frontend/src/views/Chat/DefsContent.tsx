import {
  FaSolidCircleInfo,
  FaSolidFileExport,
  FaSolidFileImport,
  FaSolidInfo,
  FaSolidPen,
  FaSolidPlus,
  FaSolidTrash,
} from "solid-icons/fa";
import { Component, For, Show, createMemo, createSignal } from "solid-js";
import toast from "solid-toast";
import {
  RollDefInfo,
  appDefs,
  emptyRollDefInfo,
  exportData,
  importData,
  prettyToday,
  rollerDefsKey,
  saveToStorage,
  setChatViewTab,
} from "~/common";
import {
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
  RadioGroup,
  RadioItem,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components";
import { DefItem } from "./DefItem";
import { defListStyle, defTabStyle } from "./styles.css";

type Props = {
  ref: (e: any) => void;
  adjustSize: () => void;
};

export const SuccessRules: RadioItem[] = [
  { id: "", label: "None" },
  { id: "pbta:standard", label: "Standard PBTA" },
  { id: "pio3s:standard", label: "Pio 3S" },
  { id: "pio3s:hard", label: "Pio 3S Hard" },
  { id: "total:ueq", label: "Total under/equal" },
  { id: "total:oeq", label: "Total over/equal" },
  { id: "cairn:standard", label: "Cairn/ItO standard" },
  { id: "cairn:hard", label: "Cairn/ItO hard" },
  { id: "ironsworn:standard", label: "Ironsworn" },
  { id: "ironsworn:glina", label: "Glina RPG" },
];

export const DefsContent: Component<Props> = (props) => {
  const [createDlgOpen, setCreateDlgOpen] = createSignal(false);
  const [editDlgOpen, setEditDlgOpen] = createSignal(false);
  const [delDlgOpen, setDelDlgOpen] = createSignal(false);
  const [selDef, setSelDef] = createSignal<RollDefInfo>();
  const [editDef, setEditDef] = createSignal<RollDefInfo>(emptyRollDefInfo());

  const ct = (val: string) => {
    setChatViewTab(val);
    props.adjustSize();
  };

  const items = createMemo(() => {
    return Object.values(appDefs()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  });

  const createDef = () => {
    const e = editDef();
    if (!e) return;
    const ns = { ...appDefs() };
    ns[e.id] = e;
    saveToStorage(rollerDefsKey, ns);
    setCreateDlgOpen(false);
    toast("New definition created", { icon: <FaSolidInfo /> });
    setEditDef(emptyRollDefInfo());
  };

  const deleteDef = () => {
    setDelDlgOpen(false);
    const sel = selDef();
    if (!sel) return;
    const ns = { ...appDefs() };
    delete ns[sel.id];
    saveToStorage(rollerDefsKey, ns);
  };

  const updateField = (
    info: RollDefInfo | undefined,
    field:
      | "dice"
      | "modifier"
      | "successRule"
      | "name"
      | "successTarget"
      | "comment",
    value: string
  ) => {
    if (!info) return;
    if (field !== "modifier") {
      info[field] = value;
    } else {
      info.modifier = Number.parseInt(value);
    }
  };

  const updateDef = () => {
    const e = selDef();
    if (!e) return;
    const ns = { ...appDefs() };
    ns[e.id] = e;
    saveToStorage(rollerDefsKey, ns);
    setEditDlgOpen(false);
    toast("Definition updated", { icon: <FaSolidInfo /> });
  };

  const importDefs = () => {
    importData((data: any) => {
      const e = data as Record<string, RollDefInfo>;
      const newState = { ...appDefs() };
      Object.values(e).forEach((it) => {
        newState[it.id] = it;
      });
      saveToStorage(rollerDefsKey, newState);
      toast("Definitions imported", { icon: <FaSolidCircleInfo /> });
    });
  };

  const exportDefs = () => {
    const filename = `defs-${prettyToday()}.json`;
    exportData(appDefs(), filename);
    toast("Definitions exported", { icon: <FaSolidCircleInfo /> });
  };

  return (
    <>
      <Flex gap="medium" justify="space">
        <Flex style={{ "min-height": "35px" }} align="center">
          <Button onClick={() => ct("rolls")} style={{ height: "30px" }}>
            <Text fontSize="smaller" title="Roll list">
              Rolls
            </Text>
          </Button>
          <Button toggled style={{ height: "30px" }}>
            <Text fontSize="smaller" colorSchema="background">
              Defs
            </Text>
          </Button>
        </Flex>
        <Flex align="center" gap="small">
          <Show when={selDef()}>
            <Flex>
              <Alert open={delDlgOpen()} onOpenChange={setDelDlgOpen}>
                <AlertTrigger title="Delete definition">
                  <Button>
                    <FaSolidTrash />
                  </Button>
                </AlertTrigger>
                <AlertContent title="Delete definition">
                  <Text>
                    Delete {selDef()?.name} {"?"}
                  </Text>
                  <Flex gap="large" style={{ "margin-top": "10px" }}>
                    <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
                    <Button onClick={deleteDef}>Delete</Button>
                  </Flex>
                </AlertContent>
              </Alert>

              <Dialog open={editDlgOpen()} onOpenChange={setEditDlgOpen}>
                <DialogTrigger title="Edit definition">
                  <Button>
                    <FaSolidPen />
                  </Button>
                </DialogTrigger>
                <DialogContent title="Edit definition">
                  <Show when={editDlgOpen()}>
                    <Flex>
                      <Input
                        label="Name"
                        style={{ width: "14em" }}
                        value={selDef()?.name}
                        onChange={(e) =>
                          updateField(selDef(), "name", e.target.value)
                        }
                      />
                      <Input
                        label="Comment"
                        style={{ width: "14em" }}
                        onChange={(e) =>
                          updateField(editDef(), "comment", e.target.value)
                        }
                      />
                    </Flex>
                    <Flex direction="row" gap="large">
                      <Input
                        label="Dice"
                        style={{ width: "6em" }}
                        onChange={(e) =>
                          updateField(selDef(), "dice", e.target.value)
                        }
                        value={selDef()?.dice}
                      />
                      <Input
                        label="Modifier"
                        style={{ width: "6em" }}
                        onChange={(e) =>
                          updateField(selDef(), "modifier", e.target.value)
                        }
                        value={selDef()?.modifier}
                      />
                      <Input
                        label="Success target"
                        style={{ width: "6em" }}
                        onChange={(e) =>
                          updateField(selDef(), "successTarget", e.target.value)
                        }
                        value={selDef()?.successTarget}
                      />
                    </Flex>
                    <RadioGroup
                      label="Success rule"
                      items={SuccessRules}
                      variant="list"
                      selected={() => selDef()?.successRule}
                      onChange={(e: any) =>
                        updateField(selDef(), "successRule", e)
                      }
                      style={{
                        "flex-wrap": "wrap",
                        "flex-grow": 1,
                        "max-height": "150px",
                        "min-width": "400px",
                        "align-self": "start",
                        flex: 1,
                      }}
                    />
                    <Flex gap="large" style={{ "margin-top": "10px" }}>
                      <Button onClick={() => setEditDlgOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={updateDef}>Update</Button>
                    </Flex>
                  </Show>
                </DialogContent>
              </Dialog>
            </Flex>
          </Show>

          <Tooltip>
            <TooltipTrigger>
              <Button onClick={importDefs}>
                <FaSolidFileImport />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Import definitions</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Button onClick={exportDefs}>
                <FaSolidFileExport />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Export definitions</TooltipContent>
          </Tooltip>

          <Dialog open={createDlgOpen()} onOpenChange={setCreateDlgOpen}>
            <DialogTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button>
                    <FaSolidPlus />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Create definition</TooltipContent>
              </Tooltip>
            </DialogTrigger>
            <DialogContent title="Create definition" style={{ width: "500px" }}>
              <Show when={createDlgOpen()}>
                <Flex>
                  <Input
                    label="Name"
                    style={{ width: "14em" }}
                    onChange={(e) =>
                      updateField(editDef(), "name", e.target.value)
                    }
                  />
                  <Input
                    label="Comment"
                    style={{ width: "14em" }}
                    onChange={(e) =>
                      updateField(editDef(), "comment", e.target.value)
                    }
                  />
                </Flex>
                <Flex direction="row">
                  <Input
                    label="Dice"
                    style={{ width: "6em" }}
                    onChange={(e) =>
                      updateField(editDef(), "dice", e.target.value)
                    }
                  />
                  <Input
                    label="Modifier"
                    style={{ width: "6em" }}
                    onChange={(e) =>
                      updateField(editDef(), "modifier", e.target.value)
                    }
                  />
                  <Input
                    label="Success target"
                    style={{ width: "6em" }}
                    onChange={(e) =>
                      updateField(editDef(), "successTarget", e.target.value)
                    }
                  />
                </Flex>

                <RadioGroup
                  label="Success rule"
                  items={SuccessRules}
                  variant="list"
                  selected={() => ""}
                  onChange={(e: any) =>
                    updateField(editDef(), "successRule", e)
                  }
                  style={{
                    "flex-wrap": "wrap",
                    "flex-grow": 1,
                    "max-height": "150px",
                    "min-width": "400px",
                    "align-self": "start",
                    flex: 1,
                  }}
                />

                <Flex gap="large" style={{ "margin-top": "10px" }}>
                  <Button onClick={() => setCreateDlgOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={createDef}>Create</Button>
                </Flex>
              </Show>
            </DialogContent>
          </Dialog>
        </Flex>
      </Flex>
      <div class={defListStyle} ref={(e: any) => props.ref(e)}>
        <For each={items()}>
          {(it) => (
            <DefItem
              item={it}
              onClick={() => setSelDef(it)}
              selected={selDef}
              adjustSize={props.adjustSize}
            />
          )}
        </For>
      </div>
    </>
  );
};
