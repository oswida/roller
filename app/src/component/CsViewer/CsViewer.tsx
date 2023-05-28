import { Component, Show, createMemo, createSignal } from "solid-js";
import { RefProps, csGlobalInputOpen, csGlobalInputParams, currentCs, setCsGlobalInputOpen, setCsGlobalInputParams } from "~/common";
import { Accordion, AccordionOption, Button, Dialog, Flex, Input, Text } from "~/component";
import { charTemplates } from "~/template";
import { csViewerRootStyle } from "./styles.css";
import { CsSection } from "./CsSection";

export const CsViewer: Component<RefProps> = ({ ref }) => {
    const [giValue, setGiValue] = createSignal("");

    const tpl = createMemo(() => {
        const cs = currentCs();
        if (!cs) return undefined;
        return charTemplates[cs.template];
    });

    const items = createMemo(() => {
        const t = tpl();
        const cs = currentCs();
        if (!t || !cs) return [];
        return t.sections.map((it) => ({
            id: it.title,
            title: it.title,
            content: <CsSection item={it} />
        } as AccordionOption));
    });

    const acceptGlobalInput = () => {
        setCsGlobalInputOpen(false);
        csGlobalInputParams().callback(giValue());
        setCsGlobalInputParams((prev) => ({ ...prev, callback: () => { }, title: "", value: "" }))
    }

    return <div class={csViewerRootStyle} ref={(e) => ref(e)}>
        <Show when={currentCs() && tpl()}>
            <Accordion collapsible multiple>
                {items()}
            </Accordion>
        </Show>
        <Show when={csGlobalInputOpen()}>
            <Dialog
                dialogTitle={() => csGlobalInputParams().title}
                modal={true}
                open={csGlobalInputOpen}
                onOpenChange={setCsGlobalInputOpen}
            >
                <Input
                    value={csGlobalInputParams().value}
                    onChange={(e) => setGiValue(e.target.value)} />
                <Flex style={{ "margin-top": "15px" }} gap="large" center>
                    <Button onClick={() => setCsGlobalInputOpen(false)}>Cancel</Button>
                    <Button onClick={acceptGlobalInput}>Accept</Button>
                </Flex>
            </Dialog>
        </Show>
    </div>
}