import { Component, Show, createMemo, onMount } from "solid-js";
import { RefProps, csExpanded, currentCs, setCsExpanded, updateCsStorage } from "~/common";
import { Accordion, AccordionOption } from "~/component";
import { charTemplates } from "~/template";
import { csViewerRootStyle } from "./styles.css";
import { CsSection } from "./CsSection";

export const CsViewer: Component<RefProps> = ({ ref }) => {

    const tpl = createMemo(() => {
        const cs = currentCs();
        if (!cs) return undefined;
        return charTemplates[cs.template];
    });

    const items = createMemo(() => {
        const t = tpl();
        const cs = currentCs();
        if (!t || !cs) return [];
        const items = t.sections.map((it) => ({
            id: it.title,
            title: it.title,
            content: <CsSection item={it} />
        } as AccordionOption));
        return items;
    });

    const sectionChange = (value: string[]) => {
        setCsExpanded(value);
        const info = currentCs();
        if (!info) return;
        info.openSections = value;
        updateCsStorage(info);
    }

    return <div class={csViewerRootStyle} ref={(e) => ref(e)}>
        <Show when={currentCs() && tpl()}>
            <Accordion
                collapsible
                multiple
                colorSchema="accent"
                backgroundSchema="ghost"
                value={csExpanded}
                onChange={sectionChange}>
                {items()}
            </Accordion>
        </Show>
    </div>
}