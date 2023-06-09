import { TextField } from "@kobalte/core";
import { Component, ComponentProps, Show } from "solid-js";
import { inputFieldStyle, inputRootStyle } from "./styles.css";
import { Flex } from "../Flex";
import { Text } from "../Text";

type Props = {
    label?: string;
    dynamicLabel?: () => string;
    tooltip?: string;
    placeholder?: string;
    currentValue?: () => string;
};

export const InputArea: Component<Props & ComponentProps<"textarea">> = ({
    label,
    tooltip,
    placeholder,
    dynamicLabel,
    currentValue,
    ...rest
}) => {
    return (
        <TextField.Root class={inputRootStyle}>
            <Flex direction="column" gap="small">
                <TextField.Label>
                    <Text fontSize="smaller" colorSchema="secondary">
                        <Show when={label}>{label}</Show>
                        <Show when={dynamicLabel}>{dynamicLabel ? dynamicLabel() : ""}</Show>
                    </Text>
                </TextField.Label>
                <TextField.TextArea
                    class={inputFieldStyle}
                    title={tooltip}
                    placeholder={placeholder}
                    {...rest}
                    value={currentValue ? currentValue() : undefined}
                />
            </Flex>
        </TextField.Root>
    );
};
