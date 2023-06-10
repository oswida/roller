import { BiRegularTargetLock } from "solid-icons/bi";
import {
  Component,
  ComponentProps,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import toast from "solid-toast";
import { RollDefInfo, enrollTask, rollDef, setChatViewTab } from "~/common";
import { Button, Dialog, Flex, Input, Text } from "~/components";
import { defItemStyle } from "./styles.css";
import { themeColor } from "~/common/theme.css";

type Props = {
  item: RollDefInfo;
  selected: () => RollDefInfo | undefined;
  adjustSize: () => void;
};

export const DefItem: Component<Props & ComponentProps<"div">> = ({
  item,
  selected,
  adjustSize,
  ...rest
}) => {
  const [valOpen, setValOpen] = createSignal(false);
  let valRef: HTMLInputElement;

  const isSelected = createMemo(() => {
    const sel = selected();
    if (!sel) return false;
    return sel.id == item.id;
  });

  const rollWithValue = async () => {
    setValOpen(false);
    await roll();
  };

  const roll = async () => {
    setChatViewTab("rolls");
    adjustSize();
    const res = await rollDef(item, needsParam());
    if (res) toast(JSON.stringify(res));
  };

  const notation = createMemo(() => {
    if (!item.modifier) return item.dice;
    const mod =
      item.modifier && item.modifier > 0
        ? `+${item.modifier}`
        : `${item.modifier}`;
    return `${item.dice}${mod}`;
  });

  const needsParam = createMemo(() => {
    if (item.successTarget && item.successTarget.trim() !== "") return false;
    if (!item.successRule || item.successRule == "") return false;
    if (item.successRule == "pbta:standard") return false;
    return true;
  });

  createEffect(() => {
    if (!valOpen() || !valRef) return;
    document.getElementById("valInput")?.focus();
    valRef.focus();
  });

  return (
    <div class={defItemStyle({ sel: isSelected() })} {...rest}>
      <Flex style={{ "justify-content": "space-between" }}>
        <Text fontSize="bigger">{item.name}</Text>
        <Show when={needsParam()}>
          <Dialog
            open={valOpen}
            onOpenChange={setValOpen}
            trigger={<Text fontSize="bigger">{notation()}</Text>}
            triggerStyle={{ "background-color": themeColor.accent }}
            dialogTitle={() => "Target value"}
          >
            <Input
              id="valInput"
              ref={(e) => (valRef = e)}
              style={{ width: "5em" }}
              value={item.successTarget}
              onChange={(e) => (item.successTarget = e.target.value)}
            />
            <Button onClick={() => enrollTask(rollWithValue)}>Roll</Button>
          </Dialog>
        </Show>
        <Show when={!needsParam()}>
          <Button
            style={{ "background-color": themeColor.accent }}
            onClick={() => enrollTask(roll)}
          >
            <Text fontSize="bigger">{notation()}</Text>
          </Button>
        </Show>
      </Flex>
      <Flex style={{ "justify-content": "space-between" }}>
        <Show when={item.successRule !== ""}>
          <Text colorSchema="secondary">
            <i>{item.successRule}</i>
          </Text>
        </Show>
        <Show when={item.successTarget && item.successTarget !== ""}>
          <Flex center>
            <BiRegularTargetLock />{" "}
            <Text colorSchema="primary">{item.successTarget}</Text>
          </Flex>
        </Show>
      </Flex>
    </div>
  );
};