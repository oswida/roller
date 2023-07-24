import { BiRegularTargetLock } from "solid-icons/bi";
import {
  Component,
  ComponentProps,
  Show,
  createEffect,
  createMemo,
  createSignal,
  splitProps,
} from "solid-js";
import toast from "solid-toast";
import { RollDefInfo, enrollTask, rollDef, setChatViewTab } from "~/common";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
  Text,
} from "~/components";
import { defItemStyle } from "./styles.css";
import { themeVars } from "~/common/theme.css";

type Props = {
  item: RollDefInfo;
  selected: () => RollDefInfo | undefined;
  adjustSize: () => void;
};

export const DefItem: Component<Props & ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, ["item", "selected", "adjustSize"]);
  const [valOpen, setValOpen] = createSignal(false);
  let valRef: HTMLInputElement;

  const isSelected = createMemo(() => {
    const sel = local.selected();
    if (!sel) return false;
    return sel.id == local.item.id;
  });

  const rollWithValue = async () => {
    setValOpen(false);
    await roll();
  };

  const roll = async () => {
    setChatViewTab("rolls");
    local.adjustSize();
    const res = await rollDef(local.item, needsParam());
    if (res) toast(JSON.stringify(res));
  };

  const notation = createMemo(() => {
    if (!local.item.modifier) return local.item.dice;
    const mod =
      local.item.modifier && local.item.modifier > 0
        ? `+${local.item.modifier}`
        : `${local.item.modifier}`;
    return `${local.item.dice}${mod}`;
  });

  const needsParam = createMemo(() => {
    if (local.item.successTarget && local.item.successTarget.trim() !== "")
      return false;
    if (!local.item.successRule || local.item.successRule == "") return false;
    if (local.item.successRule == "pbta:standard") return false;
    return true;
  });

  createEffect(() => {
    if (!valOpen() || !valRef) return;
    document.getElementById("valInput")?.focus();
    valRef.focus();
  });

  return (
    <div class={defItemStyle({ sel: isSelected() })} {...rest}>
      <Flex justify="space">
        <Text fontSize="bigger">{local.item.name}</Text>
        <Show when={needsParam()}>
          <Dialog open={valOpen()} onOpenChange={setValOpen}>
            <DialogTrigger>
              <Text fontSize="bigger">{notation()}</Text>
            </DialogTrigger>
            <DialogContent title="Target value">
              <Input
                id="valInput"
                ref={(e) => (valRef = e)}
                style={{ width: "5em" }}
                value={local.item.successTarget}
                onChange={(e) => (local.item.successTarget = e.target.value)}
              />
              <Button onClick={() => enrollTask(rollWithValue)}>Roll</Button>
            </DialogContent>
          </Dialog>
        </Show>
        <Show when={!needsParam()}>
          {/* TODO */}
          <Button
            style={{ "background-color": themeVars.primary400 }}
            onClick={() => enrollTask(roll)}
          >
            <Text fontSize="bigger">{notation()}</Text>
          </Button>
        </Show>
      </Flex>
      <Flex justify="space">
        <Show when={local.item.successRule !== ""}>
          <Text colorSchema="secondary">
            <i>{local.item.successRule}</i>
          </Text>
        </Show>
        <Show
          when={local.item.successTarget && local.item.successTarget !== ""}
        >
          <Flex align="center" justify="center">
            <BiRegularTargetLock />{" "}
            <Text colorSchema="primary">{local.item.successTarget}</Text>
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};
