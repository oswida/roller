import { FaSolidXmark, FaSolidFloppyDisk, FaSolidPen, FaSolidLock, FaSolidCircleInfo } from "solid-icons/fa";
import { Component, Show, createMemo, createSignal } from "solid-js";
import { CharTemplateItem, colorType, currentCs, isCsOwner, netPublish, setCurrentCs, topicCsInfo, updateCsStorage } from "~/common";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { InputArea } from "../../Input";
import { csTplIconStyle } from "../styles.css";

type Props = {
    item: CharTemplateItem;
}

export const TplLabel: Component<Props> = ({ item }) => {

    return <Flex>
        <Text style={{ color: item.color ? item.color : colorType.secondary }}>{item.text}</Text>
        <Show when={item.hint && item.hint !== ""}>
            <div title={item.hint} style={{ cursor: "help" }}>
                <FaSolidCircleInfo fill={colorType.accent} />
            </div>
        </Show>
    </Flex>

}