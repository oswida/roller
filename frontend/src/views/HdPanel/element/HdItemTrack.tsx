import { FaSolidMinus, FaSolidPen, FaSolidPlus } from "solid-icons/fa";
import {
  Component,
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import {
  HandoutInfo,
  emptyHandoutInfo,
  isCsOwner,
  updateHdStorage,
} from "~/common";
import { themeVars } from "~/common/theme.css";
import {
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
import { TplCheckBlock } from "~/components/CsViewer/blocks/TplCheckBlock";
import { TplHintBlock } from "~/components/CsViewer/blocks/TplHintBlock";

type Props = {
  item: HandoutInfo;
};

type TrackValue = {
  leftLabel?: string;
  rightLabel?: string;
  current: number;
  shape: "circle" | "square";
  labels?: string[];
};

export const HdItemTrack: Component<Props> = (props) => {
  const [editDlgOpen, setEditDlgOpen] = createSignal(false);
  const [editValue, setEditValue] = createSignal<HandoutInfo | undefined>();

  createEffect(() => {
    if (!editDlgOpen) return;
    setEditValue(props.item);
  });

  const updateField = (
    name: "limit" | "leftLabel" | "rightLabel" | "shape" | "labels",
    value: string
  ) => {
    const ed = editValue();
    if (!ed) return;
    if (name === "limit") {
      const num = Number.parseInt(value);
      if (Number.isNaN(num)) return;
      setEditValue((prev) => (prev ? { ...prev, limit: num } : undefined));
      return;
    }
    let v = ed.value as TrackValue;
    if (!v)
      v = {
        current: 0,
        shape: "circle",
      } as TrackValue;
    switch (name) {
      case "labels":
        v[name] = value.split(",");
        break;
      case "shape":
        if (value !== "circle") v["shape"] = "square";
        else v["shape"] = "circle";
        break;
      default:
        v[name] = value;
    }
    setEditValue((prev) => (prev ? { ...prev, value: v } : undefined));
  };

  const value = createMemo(() => {
    if (!props.item.value) {
      return {
        current: 0,
        shape: "circle",
      } as TrackValue;
    }
    return props.item.value as TrackValue;
  });

  const shapes = createMemo(() => [
    { id: "circle", label: "Circle" } as SelectItem,
    { id: "square", label: "Square" } as SelectItem,
  ]);

  const selectedShape = () => {
    const v = props.item.value as TrackValue;
    if (!v) return undefined;
    const f = shapes().filter((it) => it.id === v.shape);
    if (f.length > 0) return f[0];
    return undefined;
  };

  const inc = (value: number) => {
    const v = props.item.value as TrackValue;
    if (!v) return;
    v.current += value;
    if (props.item.limit && v.current > props.item.limit)
      v.current = props.item.limit;
    if (v.current < 0) v.current = 0;
    props.item.value = v;
    updateHdStorage(props.item);
  };

  const save = () => {
    setEditDlgOpen(false);
    const ed = editValue();
    if (!ed) return;
    props.item.value = ed.value;
    props.item.limit = ed.limit;
    updateHdStorage(props.item);
  };

  const hint = (pos: number) => {
    const v = value();
    if (!v.labels || v.labels.length <= pos) return "?";
    return v.labels[pos];
  };

  return (
    <Flex direction="column" gap="small" justify="center" grow>
      <Flex
        gap="small"
        align="center"
        justify="space"
        grow
        style={{
          "margin-bottom": "5px",
          "padding-bottom": "5px",
          "border-bottom": `solid 1px ${themeVars.primary500}`,
        }}
      >
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={value().leftLabel}>
            <Text>{value().leftLabel}</Text>
          </Show>
          {/* <Show when={isCsOwner(currentCs())}> */}
          <Button
            style={{ width: "30px", height: "30px" }}
            variant="icon"
            onClick={() => inc(-1)}
          >
            <FaSolidMinus fill="currentcolor" size="12px" />
          </Button>
          {/* </Show> */}
        </Flex>
        <Flex
          grow
          style={{ "flex-wrap": "wrap" }}
          align="center"
          justify="center"
        >
          <For each={new Array(props.item.limit).fill(" ")}>
            {(it, idx) => (
              <TplCheckBlock
                checked={() => idx() < value().current}
                circle={value().shape === "circle"}
                size="big"
                hint={hint(idx())}
              />
            )}
          </For>
        </Flex>
        <Flex direction="column" gap="small" align="center" justify="center">
          <Show when={value().rightLabel}>
            <Text>{value().rightLabel}</Text>
          </Show>
          {/* <Show when={isCsOwner(currentCs())}> */}
          <Button
            onClick={() => inc(1)}
            style={{ width: "30px", height: "30px" }}
          >
            <FaSolidPlus style={{ fill: "currentcolor" }} />
          </Button>
          {/* </Show> */}
        </Flex>
      </Flex>

      <Dialog open={editDlgOpen()} onOpenChange={setEditDlgOpen}>
        <DialogTrigger title="Edit element">
          <Button>
            <FaSolidPen fill="currentColor" size="12px" />
            <Text fontSize="smaller">Edit</Text>
          </Button>
        </DialogTrigger>
        <DialogContent title={`Edit track ${props.item.name}`}>
          <Input
            label="Left label"
            value={value().leftLabel}
            onChange={(e: any) => updateField("leftLabel", e.target.value)}
          />
          <Input
            label="Right label"
            value={value().rightLabel}
            onChange={(e: any) => updateField("rightLabel", e.target.value)}
          />
          <Flex gap="large">
            <Select
              label="Type"
              options={shapes}
              selected={selectedShape}
              onChange={(e) => updateField("shape", e.id)}
            ></Select>
            <Input
              label="Limit"
              style={{ width: "4em" }}
              value={props.item.limit}
              onChange={(e: any) => updateField("limit", e.target.value)}
            />
          </Flex>
          <Input
            label="Element labels (comma separated)"
            value={value().labels?.join(",")}
            onChange={(e: any) => updateField("labels", e.target.value)}
          />
          <Flex align="center" gap="large" justify="space">
            <Button onClick={() => setEditDlgOpen(false)}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </Flex>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};
