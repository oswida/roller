import { RollDefInfo, appSettings, currentRoom, diceBox, rolling, setRolling, setSuccessRule } from "~/common"
import { defItemStyle, defModifierStyle } from "./styles.css"
import { Component, ComponentProps, createMemo } from "solid-js";
import { Flex, Text } from "~/component";
import { DiceRoller } from "dice-roller-parser";
import toast from "solid-toast";
import { FaSolidExclamation } from "solid-icons/fa";

type Props = {
    item: RollDefInfo;
    selected: () => RollDefInfo | undefined;
    changeTab: (value: string) => void;
}

export const DefItem: Component<Props & ComponentProps<"div">> = ({ item, selected, changeTab, ...rest }) => {

    const isSelected = createMemo(() => {
        const sel = selected();
        if (!sel) return false;
        return sel.id == item.id;
    });

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
        changeTab("rolls");
    }

    const notation = createMemo(() => {
        if (!item.modifier) return item.dice;
        const mod = item.modifier && item.modifier > 0 ? `+${item.modifier}` : `${item.modifier}`
        return `${item.dice}${mod}`;
    });

    return <div class={defItemStyle({ sel: isSelected() })} {...rest}>
        <Flex style={{ "justify-content": "space-between" }}>
            <Text fontSize="bigger">{item.name}</Text>
            <div class={defModifierStyle} onClick={roll}>
                <Text fontSize="bigger">{notation()}</Text>
            </div>
        </Flex>
        <Text colorSchema="secondary" ><i>{item.successRule}</i></Text>
    </div>
}