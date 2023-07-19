import { FaSolidImagePortrait, FaSolidXmark } from "solid-icons/fa";
import {
  Component,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import {
  RefProps,
  centPublish,
  csExpanded,
  currentCs,
  importImage,
  isCsOwner,
  netTopic,
  setCsExpanded,
  topicCsInfo,
  updateCsOpenSections,
  updateCsStorage,
} from "~/common";
import { charTemplates } from "~/template";
import { Accordion, AccordionOption } from "../Accordion";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import { CsSection } from "./CsSection";
import { csViewerRootStyle } from "./styles.css";

const PORTRAIT_HEIGHT = 72;

export const CsViewer: Component<RefProps> = ({ ref }) => {
  const [charPortrait, setCharPortrait] = createSignal("");
  const [portraitOpen, setPortraitOpen] = createSignal(false);

  createEffect(() => {
    const cs = currentCs();
    if (!cs) return;
    if (cs.portraitUrl) setCharPortrait(cs.portraitUrl);
  });

  const tpl = createMemo(() => {
    const cs = currentCs();
    if (!cs) return undefined;
    return charTemplates[cs.template];
  });

  const items = createMemo(() => {
    const t = tpl();
    const cs = currentCs();
    if (!t || !cs) return [];
    const items = t.sections.map(
      (it) =>
        ({
          id: it.title,
          title: it.title,
          content: <CsSection item={it} />,
        } as AccordionOption)
    );
    return items;
  });

  const sectionChange = (value: string[]) => {
    setCsExpanded(value);
    const info = currentCs();
    if (!info) return;
    updateCsOpenSections(info, value);
  };

  const hasPortrait = createMemo(() => {
    const cs = currentCs();
    if (!cs) return false;
    return (
      cs.portraitUrl !== undefined &&
      cs.portraitUrl !== null &&
      cs.portraitUrl.trim() !== ""
    );
  });

  const changePortrait = () => {
    importImage(
      (data: any) => {
        const cs = currentCs();
        if (!cs) return;
        cs.portraitUrl = data;
        updateCsStorage(cs);
        centPublish(netTopic(topicCsInfo), cs);
      },
      undefined,
      PORTRAIT_HEIGHT
    );
  };

  const deletePortrait = () => {
    const cs = currentCs();
    if (!cs) return;
    cs.portraitUrl = undefined;
    updateCsStorage(cs);
    centPublish(netTopic(topicCsInfo), cs);
  };

  return (
    <div class={csViewerRootStyle} ref={(e) => ref(e)}>
      <Show when={currentCs() && tpl()}>
        <Flex
          gap="large"
          style={{
            "min-height": "fit-content",
            "align-items": "center",
            "justify-content": "space-evenly",
            padding: "5px",
            "padding-right": "10px",
          }}
        >
          <Tooltip>
            <TooltipTrigger>
              <Flex center>
                <Switch>
                  <Match when={currentCs()?.portraitUrl}>
                    <div
                      onClick={
                        isCsOwner(currentCs()) ? changePortrait : undefined
                      }
                    >
                      <img src={currentCs()?.portraitUrl} />
                    </div>
                  </Match>
                  <Match when={!currentCs()?.portraitUrl}>
                    <div
                      onClick={
                        isCsOwner(currentCs()) ? changePortrait : undefined
                      }
                    >
                      <FaSolidImagePortrait fill="currentColor" size={24} />
                    </div>
                  </Match>
                </Switch>
                <Show when={currentCs()?.portraitUrl && isCsOwner(currentCs())}>
                  <Tooltip>
                    <TooltipTrigger>
                      <FaSolidXmark
                        fill="currentColor"
                        size={16}
                        onClick={deletePortrait}
                      />
                    </TooltipTrigger>
                    <TooltipContent>Delete character portrait</TooltipContent>
                  </Tooltip>
                </Show>
              </Flex>
            </TooltipTrigger>
            <TooltipContent>Click to change character portrait</TooltipContent>
          </Tooltip>

          <Text colorSchema="secondary" fontSize="bigger">
            {currentCs()?.name}
          </Text>
        </Flex>
        <Accordion
          collapsible
          multiple
          colorSchema="accent"
          backgroundSchema="ghost"
          value={csExpanded()}
          onChange={sectionChange}
        >
          {items()}
        </Accordion>
      </Show>
    </div>
  );
};
