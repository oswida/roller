import { RollDefInfo, appSettings, colorType, currentRoom, diceBox, rolling, setChatViewTab, setRolling, setSuccessRule, setSuccessTarget } from "~/common"
import { defItemStyle, defModifierStyle } from "./styles.css"
import { Component, ComponentProps, Show, createMemo, createSignal } from "solid-js";
import { Flex, Text, Dialog, Button, Input } from "~/component";
import toast from "solid-toast";
import { FaSolidExclamation } from "solid-icons/fa";


type Props = {
    item: RollDefInfo;
    selected: () => RollDefInfo | undefined;
    adjustSize: () => void;
}

export const DefItem: Component<Props & ComponentProps<"div">> = ({ item, selected, adjustSize, ...rest }) => {

    const [tgtValue, setTgtValue] = createSignal("");
    const [valOpen, setValOpen] = createSignal(false);

    const isSelected = createMemo(() => {
        const sel = selected();
        if (!sel) return false;
        return sel.id == item.id;
    });

    const rollWithValue = async () => {
        setValOpen(false);
        if (rolling() || !currentRoom() || currentRoom()?.id == "") return;
        const v = tgtValue();
        if (v == "" || v == undefined) {
            toast(`Target value cannot be empty (${v})`);
            return;
        }
        const num = Number.parseInt(v.trim());
        if (Number.isNaN(num)) {
            toast(`Target value has to be a number ${v}`);
            return;
        }
        setSuccessTarget(num);
        setTgtValue("");
        await roll();
    }

    const roll = async () => {
        if (rolling() || !currentRoom() || currentRoom()?.id == "") return;
        const db = diceBox();
        if (!db) return;
        setRolling(true);
        setSuccessRule(item.successRule);
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
                        value={tgtValue()}
                        onChange={(e) => setTgtValue(e.target.value)}
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
        <Text colorSchema="secondary" ><i>{item.successRule}</i></Text>
    </div>
}