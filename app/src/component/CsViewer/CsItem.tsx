import { Component, For, Match, Show, Switch, createMemo, createSignal } from "solid-js";
import { CharTemplateItem, colorType, currentCs, setCurrentCs, updateCsStorage } from "~/common";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { DataBlock } from "../DataBlock";
import { FaSolidCheck, FaSolidDice, FaSolidPen, FaSolidXmark } from "solid-icons/fa";
import { csTplAttrValueStyle, csTplIconStyle } from "./styles.css";
import { Dynamic } from "solid-js/web";
import { Input } from "../Input";
import { Button } from "../Button";
import { actionRoll } from "./actions";



type Props = {
    item: CharTemplateItem;
}

export const CsItem: Component<Props> = ({ item }) => {
    const [itemEdit, setItemEdit] = createSignal(false);
    const [editVal, setEditVal] = createSignal("");

    const value = createMemo(() => {
        const info = currentCs();
        if (!info) return;
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

    const startEdit = () => {
        setItemEdit(true);
    }

    return <Switch>
        <Match when={item.itype === "attr"}>
            <Flex gap="medium" style={{ "align-items": "center" }}>
                <Show when={!itemEdit()}>
                    <Flex style={{ "justify-content": "space-between", "align-items": "center", flex: 1 }}>
                        <DataBlock
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
                                        <Button title={r.comment} onClick={() => actionRoll(r, value())} >
                                            <FaSolidDice style={{ fill: r.iconColor }} />
                                        </Button>)}
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
    </Switch>
}