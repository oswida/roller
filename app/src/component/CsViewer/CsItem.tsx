import { Component, For, Match, Show, Switch, createMemo } from "solid-js";
import { CharTemplateItem, CsGlobalInputParamsType, CsInfo, appCs, currentCs, setCsGlobalInputOpen, setCsGlobalInputParams, updateCsStorage } from "~/common";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { DataBlock } from "../DataBlock";
import { FaSolidDice, FaSolidPen } from "solid-icons/fa";
import { csTplIconStyle } from "./styles.css";
import { Dialog } from "../Dialog";
import { Button } from "../Button";
import { charTemplates } from "~/template";
import { Dynamic } from "solid-js/web";



type Props = {
    item: CharTemplateItem;
}

export const CsItem: Component<Props> = ({ item }) => {

    const editField = () => {
        const info = currentCs();
        if (!info) return;
        switch (item.itype) {
            case "attr":
                setCsGlobalInputParams({
                    title: item.name,
                    value: info.values[item.id],
                    callback: (v: string) => {
                        info.values[item.id] = v;
                        updateCsStorage(info);
                    }
                } as CsGlobalInputParamsType);
                setCsGlobalInputOpen(true);
                break;
        }
    }

    const value = createMemo(() => {
        const info = currentCs();
        if (!info) return;
        return info.values[item.id];
    });


    return <Switch>
        <Match when={item.itype === "attr"}>
            <Flex gap="medium" style={{ "align-items": "center" }}>
                <DataBlock
                    left={<Text>{item.name}</Text>}
                    leftBackground="accent"
                    right={<Dynamic component={Text}>{value()}</Dynamic>}
                    rightBackground="accent" />
                <div class={csTplIconStyle} onClick={editField}><FaSolidPen /></div>
                <Show when={item.rolls && item.rolls.length > 0}>
                    <For each={item.rolls}>
                        {(r) => (
                            <div title={r.comment} class={csTplIconStyle}>
                                <FaSolidDice style={{ fill: r.iconColor }} />
                            </div>)}
                    </For>
                </Show>
            </Flex>
        </Match>
    </Switch>
}