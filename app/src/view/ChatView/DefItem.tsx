import { RollDefInfo, appSettings, colorType, currentRoom, diceBox, rolling, setChatViewTab, setRolling, setSuccessRule, setSuccessTarget } from "~/common"
import { defItemStyle, defModifierStyle } from "./styles.css"
import { Component, ComponentProps, Show, createMemo, createSignal } from "solid-js";
import { Flex, Text, Dialog, Button, Input } from "~/component";
import toast from "solid-toast";
import { FaSolidExclamation } from "solid-icons/fa";
import { BiRegularTargetLock } from "solid-icons/bi";


type Props = {
    item: RollDefInfo;
    selected: () => RollDefInfo | undefined;
    adjustSize: () => void;
}

export const DefItem: Component<Props & ComponentProps<"div">> = ({ item, selected, adjustSize, ...rest }) => {
    const [valOpen, setValOpen] = createSignal(false);

    const isSelected = createMemo(() => {
        const sel = selected();
        if (!sel) return false;
        return sel.id == item.id;
    });

    const rollWithValue = async () => {
        setValOpen(false);
        await roll();
    }

    const roll = async () => {
        if (rolling() || !currentRoom() || currentRoom()?.id == "") return;
        const db = diceBox();
        if (!db) return;
        setSuccessRule(item.successRule);
        const st = Number.parseInt(item.successTarget);
        if (Number.isNaN(st) && needsParam()) {
            toast("Incorrect success target");
            return;
        }
        setSuccessTarget(st);
        setRolling(true);
        const s = appSettings();
        await db.updateConfig({
            theme_colorset: s.diceColor,
            theme_texture: s.diceMaterial,
        });
        const mod = item.modifier && item.modifier > 0 ? `+${item.modifier}` : `${item.modifier}`
        const dice = item.modifier ? `${item.dice}${mod}` : item.dice;
        try {
            await db.roll(dice);
        } catch (e) {
            toast("Unexpected error during roll", { icon: <FaSolidExclamation /> })
            setRolling(false);
        }
        setChatViewTab("rolls");
        adjustSize();
    }

    const notation = createMemo(() => {
        if (!item.modifier) return item.dice;
        const mod = item.modifier && item.modifier > 0 ? `+${item.modifier}` : `${item.modifier}`
        return `${item.dice}${mod}`;
    });

    const needsParam = createMemo(() => {
        if (item.successTarget && item.successTarget.trim() !== "") return false;
        if (!item.successRule || item.successRule == "") return false;
        if (item.successRule == "pbta:standard") return false;
        return true;
    });

    return <div class={defItemStyle({ sel: isSelected() })} {...rest}>
        <Flex style={{ "justify-content": "space-between" }}>
            <Text fontSize="bigger">{item.name}</Text>
            <Show when={needsParam()}>
                <Dialog
                    open={valOpen}
                    onOpenChange={setValOpen}
                    trigger={<Text fontSize="bigger">{notation()}</Text>}
                    triggerStyle={{ "background-color": colorType.accent }}
                    dialogTitle={() => "Target value"}>
                    <Input style={{ width: "5em" }}
                        value={item.successTarget}
                        onChange={(e) => item.successTarget = e.target.value}
                    />
                    <Button onClick={rollWithValue}>Roll</Button>
                </Dialog>
            </Show>
            <Show when={!needsParam()}>
                <Button style={{ "background-color": colorType.accent }} onClick={roll}>
                    <Text fontSize="bigger">{notation()}</Text>
                </Button>
            </Show>
        </Flex>
        <Flex style={{ "justify-content": "space-between" }}>
            <Show when={item.successRule !== ""}>
                <Text colorSchema="secondary" ><i>{item.successRule}</i></Text>
            </Show>
            <Show when={item.successTarget && item.successTarget !== ""}>
                <Flex center >
                    <BiRegularTargetLock />{" "}
                    <Text colorSchema="primary">{item.successTarget}</Text>
                </Flex>
            </Show>
        </Flex>
    </div>
}