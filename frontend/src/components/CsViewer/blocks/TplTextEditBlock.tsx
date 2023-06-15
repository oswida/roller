import { FaSolidXmark, FaSolidFloppyDisk } from "solid-icons/fa";
import { Component, Show, createSignal } from "solid-js";
import { CharTemplateItem } from "~/common"
import { Flex, Text, Input } from "~/components";
import { InputArea } from "~/components/Input";
import { csTplIconStyle } from "../styles.css";
import { TplHintBlock } from "./TplHintBlock";

type Props = {
    item: CharTemplateItem;
    onEditToggle: (value: boolean) => void;
    value: () => string;
    setValue: (value: string) => void;
}

export const TplTextEditBlock: Component<Props> = ({ item, onEditToggle, value, setValue }) => {
    const [editVal, setEditVal] = createSignal("");

    const keyPress = (e: any) => {
        if ((e.code == "Enter" || e.key == "Enter") && item.limit == 1) {
            applyValue();
        }
    }

    const applyValue = () => {
        onEditToggle(false);
        const v = editVal();
        setValue(v);
        setEditVal("");
    }

    return <Flex direction="column" gap="small">
        <Flex
            style={{
                "align-items": "center",
                "justify-content": "space-between",
            }}
        >
            <Flex>
                <Text fontSize="smaller" colorSchema="secondary">
                    {item.name}
                </Text>
                <TplHintBlock hint={item.hint} />
            </Flex>
            <Flex>
                <div
                    onClick={() => onEditToggle(false)}
                    title="Cancel"
                    class={csTplIconStyle}
                >
                    <FaSolidXmark style={{ fill: "currentcolor" }} />
                </div>
                <div onClick={applyValue} title="Save" class={csTplIconStyle}>
                    <FaSolidFloppyDisk style={{ fill: "currentcolor" }} />
                </div>
            </Flex>
        </Flex>
        <Show when={item.limit && item.limit == 1}>
            <Input
                id={item.id}
                onFocus={(e) => e.target.select()}
                onChange={(e: any) => setEditVal(e.target.value)}
                onKeyPress={keyPress}
                value={value()}
                style={{
                    width: "280px",
                }}
            />
        </Show>
        <Show when={!item.limit || item.limit != 1}>
            <InputArea
                id={item.id}
                onFocus={(e) => e.target.select()}
                onChange={(e: any) => setEditVal(e.target.value)}
                onKeyPress={keyPress}
                value={value()}
                style={{
                    "min-height": "10em",
                    "font-size": "medium",
                    width: "280px",
                }}
            />
        </Show>
    </Flex>
}