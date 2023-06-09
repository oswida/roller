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
  Button,
  Dialog,
  Flex,
  Input,
  RadioGroup,
  RadioItem,
  Text,
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
];

export const DefsContent: Component<Props> = ({ ref, adjustSize }) => {
  const [createDlgOpen, setCreateDlgOpen] = createSignal(false);
  const [editDlgOpen, setEditDlgOpen] = createSignal(false);
  const [delDlgOpen, setDelDlgOpen] = createSignal(false);
  const [selDef, setSelDef] = createSignal<RollDefInfo>();
  const [editDef, setEditDef] = createSignal<RollDefInfo>(emptyRollDefInfo());

  const ct = (val: string) => {
    setChatViewTab(val);
    adjustSize();
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
    field: "dice" | "modifier" | "successRule" | "name" | "successTarget",
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
      <Flex gap="large" style={{ "justify-content": "space-between" }}>
        <Flex style={{ "min-height": "35px" }}>
          <div onClick={() => ct("rolls")} class={defTabStyle({})}>
            <Text title="Roll list">Rolls</Text>
          </div>
          <div class={defTabStyle({ sel: true })}>
            <Text colorSchema="secondary">Defs</Text>
          </div>
        </Flex>
        <Flex>
          <Show when={selDef()}>
            <Flex style={{ "margin-right": "10px" }}>
              <Alert
                label="Delete definition"
                open={delDlgOpen}
                onOpenChange={setDelDlgOpen}
                trigger={<FaSolidTrash />}
              >
                <Text>
                  Delete {selDef()?.name} {"?"}
                </Text>
                <Flex gap="large" style={{ "margin-top": "10px" }}>
                  <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
                  <Button onClick={deleteDef}>Delete</Button>
                </Flex>
              </Alert>

              <Dialog
                open={editDlgOpen}
                onOpenChange={setEditDlgOpen}
                trigger={<FaSolidPen />}
                dialogTitle={() => "Edit definition"}
              >
                <Show when={editDlgOpen()}>
                  <Input
                    label="Name"
                    style={{ width: "17em" }}
                    value={selDef()?.name}
                    onChange={(e) =>
                      updateField(selDef(), "name", e.target.value)
                    }
                  />
                  <Flex direction="row" gap="large">
                    <Flex direction="column">
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
                      onChange={(e) => updateField(selDef(), "successRule", e)}
                    />
                  </Flex>
                  <Flex gap="large" style={{ "margin-top": "10px" }}>
                    <Button onClick={() => setEditDlgOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={updateDef}>Update</Button>
                  </Flex>
                </Show>
              </Dialog>
            </Flex>
          </Show>
          <Button title="Import definitions" onClick={importDefs}>
            <FaSolidFileImport />
          </Button>
          <Button title="Export definitions" onClick={exportDefs}>
            <FaSolidFileExport />
          </Button>
          <Dialog
            open={createDlgOpen}
            onOpenChange={setCreateDlgOpen}
            trigger={<FaSolidPlus />}
            dialogTitle={() => "Create definition"}
          >
            <Show when={createDlgOpen()}>
              <Input
                label="Name"
                style={{ width: "17em" }}
                onChange={(e) => updateField(editDef(), "name", e.target.value)}
              />
              <Flex direction="row" gap="large">
                <Flex direction="column">
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
                  onChange={(e) => updateField(editDef(), "successRule", e)}
                />
              </Flex>
              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setCreateDlgOpen(false)}>Cancel</Button>
                <Button onClick={createDef}>Create</Button>
              </Flex>
            </Show>
          </Dialog>
        </Flex>
      </Flex>
      <div class={defListStyle} ref={(e: any) => ref(e)}>
        <For each={items()}>
          {(it) => (
            <DefItem
              item={it}
              onClick={() => setSelDef(it)}
              selected={selDef}
              adjustSize={adjustSize}
            />
          )}
        </For>
      </div>
    </>
  );
};
