import { FaSolidDice } from "solid-icons/fa";
import { Component, For, Show } from "solid-js";
import { CharTemplateItem, CharTemplateItemRoll, currentCs, isCsOwner } from "~/common";
import { Flex } from "~/components";
import { csTplIconStyle } from "../styles.css";
import { actionRoll } from "../actions";

type Props = {
    item: CharTemplateItem;
    value?: () => any;
}

export const TplRollBlock: Component<Props> = ({ item, value }) => {

    const fieldValue = (roll: CharTemplateItemRoll) => {
        const cs = currentCs();
        if (!cs || !cs.values || !roll.valField) return 0;
        return cs.values[roll.valField];
    }

    return <Show
        when={
            item.rolls && item.rolls.length > 0 && isCsOwner(currentCs())
        }
    >
        <Flex>
            <For each={item.rolls}>
                {(r) => (
                    <div
                        title={r.comment}
                        onClick={() => actionRoll(currentCs()?.name, r, value ? value() : fieldValue(r))}
                        class={csTplIconStyle}
                    >
                        <FaSolidDice
                            style={{
                                fill: r.iconColor ? r.iconColor : "currentcolor",
                            }}
                        />
                    </div>
                )}
            </For>
        </Flex>
    </Show>
}