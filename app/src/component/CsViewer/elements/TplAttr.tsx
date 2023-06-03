import { FaSolidDice, FaSolidXmark, FaSolidCheck, FaSolidCircleInfo } from "solid-icons/fa";
import { Component, For, Show, createMemo, createSignal } from "solid-js";
import { CharTemplateItem, colorType, currentCs, setCurrentCs, updateCsStorage } from "~/common";
import { DataBlock } from "../../DataBlock";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { actionRoll } from "../actions";
import { csTplAttrValueStyle, csTplIconStyle } from "../styles.css";
import { Input } from "../../Input";

type Props = {
    item: CharTemplateItem;
}

export const TplAttr: Component<Props> = ({ item }) => {
    const [itemEdit, setItemEdit] = createSignal(false);
    const [editVal, setEditVal] = createSignal("");

    const value = createMemo(() => {
        const info = currentCs();
        if (!info || !info.values[item.id]) return "--";
        return info.values[item.id];
    });

    const applyValue = () => {
        setItemEdit(false);
        const v = editVal();
        if (v.trim() === "") {
            return;
        }
        const info = currentCs();
        if (!info) {
            return;
        }
        info.values[item.id] = v;
        updateCsStorage(info);
        setEditVal("");
        setCurrentCs(undefined);
        setCurrentCs({ ...info });
    }

    return <Flex gap="medium" style={{ "align-items": "center" }}>
        <Show when={!itemEdit()}>
            <Flex style={{ "justify-content": "space-between", "align-items": "center", flex: 1 }}>

                <DataBlock
                    width="50%"
                    left={<Text title={item.hint}>{item.name}</Text>}
                    leftBackground="accent"
                    rightFunc={() =>
                        <Text fontSize="bigger"
                            class={csTplAttrValueStyle}
                            onClick={() => setItemEdit(true)}>
                            {value()}
                        </Text>}
                    rightBackground="accent" />

                <Flex gap="medium">
                    <Show when={item.rolls && item.rolls.length > 0}>
                        <Flex>
                            <For each={item.rolls}>
                                {(r) => (
                                    <div
                                        title={r.comment}
                                        onClick={() => actionRoll(r, value())}
                                        class={csTplIconStyle}>
                                        <FaSolidDice style={{ fill: r.iconColor }} />
                                    </div>)}
                            </For>
                        </Flex>
                    </Show>
                    <Show when={item.hint && item.hint !== ""}>
                        <div title={item.hint} style={{ cursor: "help" }}>
                            <FaSolidCircleInfo fill={colorType.accent} />
                        </div>
                    </Show>
                </Flex>
            </Flex>
        </Show>
        <Show when={itemEdit()}>
            <div class={csTplIconStyle} onClick={() => setItemEdit(false)}>
                <FaSolidXmark style={{ fill: colorType.danger }} />
            </div>
            <DataBlock
                left={<Text>{item.name}</Text>}
                leftBackground="accent"
                right={<Input
                    value={value()}

                    style={{ width: "3em", "text-align": "center", "user-select": "all" }}
                    onChange={(e: any) => setEditVal(e.target.value)} />}
                rightBackground="accent" />
            <div class={csTplIconStyle} onClick={applyValue}>
                <FaSolidCheck style={{ fill: "currentcolor" }} />
            </div>

        </Show>

    </Flex>
}