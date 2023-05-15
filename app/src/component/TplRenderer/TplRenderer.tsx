import { Component, For, Match, Switch, createMemo } from "solid-js";
import { CS_TEMPLATES } from "~/template";
import { Flex } from "../Flex";
import { Text } from "../Text"
import { RadioGroup } from "../RadioGroup";

type Props = {
    tplId: () => string | undefined;
}

export const TplRenderer: Component<Props> = ({ tplId }) => {

    const template = createMemo(() => {
        const id = tplId();
        if (!id) return undefined;
        return CS_TEMPLATES[id];
    });

    return <Flex direction="column">
        <For each={template()?.sections}>
            {(s) => (
                <Flex direction="column">
                    <Text><b>{s.title}</b></Text>
                    <Text><i>{s.description}</i></Text>
                    <For each={s.items}>
                        {(it) => (
                            <>
                                <Switch>
                                    <Match when={it.itype == "radio-line"}>
                                        <RadioGroup variant="line" items={it.details} label={it.title} />
                                    </Match>
                                    <Match when={it.itype == "radio-list"}>
                                        <RadioGroup variant="list" items={it.details} label={it.title} />
                                    </Match>
                                </Switch>
                            </>
                        )}
                    </For>
                </Flex>
            )}
        </For>
    </Flex>
}