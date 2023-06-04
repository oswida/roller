import { FaSolidDice, FaSolidXmark, FaSolidCheck, FaSolidCircleInfo } from "solid-icons/fa";
import { Component, For, Show, createMemo, createSignal } from "solid-js";
import { CharTemplateItem, colorType, currentCs, isCsOwner, netPublish, setCurrentCs, topicCsInfo, updateCsStorage } from "~/common";
import { DataBlock } from "../../DataBlock";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { actionRoll } from "../actions";
import { csTplAttrValueStyle, csTplIconStyle } from "../styles.css";
import { Input } from "../../Input";

type Props = {
    item: CharTemplateItem;
}

export const TplAttrMax: Component<Props> = ({ item }) => {
    const [itemEdit, setItemEdit] = createSignal(false);
    const [editVal, setEditVal] = createSignal("");
    const [editValMax, setEditValMax] = createSignal("");

    const value = createMemo(() => {
        const info = currentCs();
        if (!info || !info.values[item.id]) return ["-", "-"];
        return info.values[item.id];
    });

    const applyValue = () => {
        setItemEdit(false);
        let v = editVal();
        let vMax = editValMax();
        const info = currentCs();
        if (!info) {
            return;
        }
        let values = info.values[item.id];
        if (!values || values.length !== 2) {
            values = ["", ""];
        }
        if (v.trim() === "") v = values[0];
        if (vMax.trim() === "") vMax = values[1];

        info.values[item.id] = [v, vMax];
        updateCsStorage(info);
        setEditVal("");
        setEditValMax("");
        setCurrentCs(undefined);
        setCurrentCs({ ...info });
        netPublish(topicCsInfo, info);
    }

    const startEdit = () => {
        if (!isCsOwner(currentCs())) return;
        setItemEdit(true);
    }

    return <Flex gap="medium" style={{ "align-items": "center" }}>
        <Show when={!itemEdit()}>
            <Flex style={{ "justify-content": "space-between", "align-items": "center", flex: 1 }}>

                <DataBlock
                    width="60%"
                    left={<Text title={item.hint}>{item.name}</Text>}
                    leftBackground="accent"
                    rightFunc={() =>
                        <>
                            <Text fontSize="bigger"
                                class={csTplAttrValueStyle}
                                onClick={startEdit}>
                                {value()[0]}
                            </Text>
                            <Text>|</Text>
                            <Text fontSize="bigger"
                                class={csTplAttrValueStyle}
                                onClick={startEdit}>
                                {value()[1]}
                            </Text>
                        </>
                    }
                    rightBackground="accent" />

                <Flex gap="medium">
                    <Show when={item.rolls && item.rolls.length > 0 && isCsOwner(currentCs())}>
                        <Flex>
                            <For each={item.rolls}>
                                {(r) => (
                                    <div
                                        title={r.comment}
                                        onClick={() => actionRoll(r, value()[0])}
                                        class={csTplIconStyle}>
                                        <FaSolidDice
                                            style={{ fill: r.iconColor ? r.iconColor : "currentcolor" }} />
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
                right={
                    <Flex>
                        <Input
                            value={value()[0]}

                            style={{ width: "3em", "text-align": "center", "user-select": "all" }}
                            onChange={(e: any) => setEditVal(e.target.value)} />
                        <Input
                            value={value()[1]}

                            style={{ width: "3em", "text-align": "center", "user-select": "all" }}
                            onChange={(e: any) => setEditValMax(e.target.value)} />
                    </Flex>
                }
                rightBackground="accent" />
            <div class={csTplIconStyle} onClick={applyValue}>
                <FaSolidCheck style={{ fill: "currentcolor" }} />
            </div>

        </Show>

    </Flex>
}