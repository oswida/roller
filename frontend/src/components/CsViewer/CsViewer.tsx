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
import { Dynamic } from "solid-js/web";

const PORTRAIT_HEIGHT = 72;

export const CsViewer: Component<RefProps> = (props) => {
  const [charPortrait, setCharPortrait] = createSignal("");

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

  const csName = createMemo(() => {
    const cs = currentCs();
    if (!cs) return "";
    return cs.name;
  });

  return (
    <div class={csViewerRootStyle} ref={(e) => props.ref(e)}>
      <Show when={currentCs() && tpl()}>
        <Flex
          gap="large"
          align="center"
          justify="evenly"
          style={{
            "min-height": "fit-content",
            padding: "5px",
            "padding-right": "10px",
          }}
        >
          <Tooltip>
            <TooltipTrigger>
              <Flex align="center" justify="center">
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

          <Dynamic component={Text} colorSchema="secondary" fontSize="bigger">
            {csName()}
          </Dynamic>
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
