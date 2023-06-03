import { Component, For, Match, Show, Switch, createMemo, createSignal } from "solid-js";
import { CharTemplateItem, colorType, currentCs, setCurrentCs, updateCsStorage } from "~/common";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { DataBlock } from "../DataBlock";
import { FaSolidCheck, FaSolidDice, FaSolidMinus, FaSolidPlus, FaSolidXmark } from "solid-icons/fa";
import { csTplAttrValueStyle, csTplIconStyle, tplResourceItemStyle } from "./styles.css";
import { Input } from "../Input";
import { actionRoll } from "./actions";
import { Button } from "../Button";



type Props = {
    item: CharTemplateItem;
}

export const CsItem: Component<Props> = ({ item }) => {
    const [itemEdit, setItemEdit] = createSignal(false);
    const [editVal, setEditVal] = createSignal("");

    const value = createMemo(() => {
        const info = currentCs();
        if (!info || !info.values[item.id]) return "--";
        return info.values[item.id];
    });

    const numValue = createMemo(() => {
        const info = currentCs();
        if (!info || !info.values[item.id]) return 0;
        const num = Number.parseInt(info.values[item.id]);
        if (Number.isNaN(num)) return 0;
        return num;
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

    const startEdit = () => {
        setItemEdit(true);
    }

    const incNumValue = (up: boolean) => {
        const info = currentCs();
        if (!info) {
            return;
        }
        let v = numValue();
        if (up) v += 1; else v -= 1;
        if (v < 0) v = 0;
        if (v > (item.limit ? item.limit : 1)) v = item.limit ? item.limit : 1;
        info.values[item.id] = v;
        updateCsStorage(info);
        setCurrentCs(undefined);
        setCurrentCs({ ...info });
    }

    return <Switch>
        <Match when={item.itype === "attr"}>
            <Flex gap="medium" style={{ "align-items": "center" }}>
                <Show when={!itemEdit()}>
                    <Flex style={{ "justify-content": "space-between", "align-items": "center", flex: 1 }}>
                        <DataBlock
                            width="50%"
                            left={<Text>{item.name}</Text>}
                            leftBackground="accent"
                            rightFunc={() =>
                                <Text fontSize="bigger"
                                    class={csTplAttrValueStyle}
                                    onClick={startEdit}>
                                    {value()}
                                </Text>}
                            rightBackground="accent" />
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
        </Match>

        <Match when={item.itype === "resource"}>
            <Flex direction="column" gap="small">
                <Text fontSize="smaller">{item.name}</Text>
                <Flex gap="small" style={{ "align-items": "center" }}>
                    <div class={csTplIconStyle} onClick={() => incNumValue(false)}>
                        <FaSolidMinus style={{ fill: "currentcolor" }} />
                    </div>
                    <For each={new Array(item.limit).fill(" ")}>{(it, idx) => (
                        <>
                            <Show when={idx() < numValue()}>
                                <div class={tplResourceItemStyle({})}
                                    style={{ "background-color": item.color }}>{" "}</div>
                            </Show>
                            <Show when={idx() >= numValue()}>
                                <div class={tplResourceItemStyle({})}
                                    style={{ "border": `solid 1px ${item.color}` }}>{" "}</div>
                            </Show>
                        </>
                    )}
                    </For>
                    <div class={csTplIconStyle} onClick={() => incNumValue(true)}>
                        <FaSolidPlus style={{ fill: "currentcolor" }} />
                    </div>
                </Flex>
            </Flex>
        </Match>
    </Switch>
}