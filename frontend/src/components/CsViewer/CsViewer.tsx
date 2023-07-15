import { FaSolidImagePortrait } from "solid-icons/fa";
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
  netTopic,
  setCsExpanded,
  topicCsInfo,
  updateCsOpenSections,
  updateCsStorage,
} from "~/common";
import { charTemplates } from "~/template";
import { Accordion, AccordionOption } from "../Accordion";
import { Button } from "../Button";
import { Dialog, DialogContent, DialogTrigger } from "../Dialog";
import { Flex } from "../Flex";
import { Input } from "../Input";
import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import { CsSection } from "./CsSection";
import { csViewerRootStyle } from "./styles.css";

const PORTRAIT_HEIGHT = 96;

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
    setPortraitOpen(false);
    const cs = currentCs();
    if (!cs) return;
    cs.portraitUrl = charPortrait();
    updateCsStorage(cs);
    centPublish(netTopic(topicCsInfo), cs);
  };

  return (
    <div class={csViewerRootStyle} ref={(e) => ref(e)}>
      <Show when={currentCs() && tpl()}>
        <Flex gap="large" style={{ "min-height": "fit-content" }}>
          <Tooltip text="Click to change character portrait">
            <Dialog open={portraitOpen()} onOpenChange={setPortraitOpen}>
              <DialogTrigger>
                <Switch>
                  <Match when={hasPortrait()}>
                    <img
                      src={currentCs()?.portraitUrl}
                      style={{
                        height: `${PORTRAIT_HEIGHT}px`,
                        "max-height": `${PORTRAIT_HEIGHT}px`,
                      }}
                    />
                  </Match>
                  <Match when={!hasPortrait()}>
                    <Flex center>
                      <Tooltip text="Click to change character portrait">
                        <FaSolidImagePortrait
                          fill="currentColor"
                          style={{
                            height: `${PORTRAIT_HEIGHT}px`,
                            "max-height": `${PORTRAIT_HEIGHT}px`,
                          }}
                        />
                      </Tooltip>
                    </Flex>
                  </Match>
                </Switch>
              </DialogTrigger>
              <DialogContent title="Change portrait URL">
                <Input
                  value={currentCs()?.portraitUrl}
                  onChange={(e) => setCharPortrait(e.target.value)}
                />
                <Flex gap="large" center>
                  <Button onClick={() => setPortraitOpen(false)}>Cancel</Button>
                  <Button onClick={changePortrait}>Save</Button>
                </Flex>
              </DialogContent>
            </Dialog>
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
          value={csExpanded}
          onChange={sectionChange}
        >
          {items()}
        </Accordion>
      </Show>
    </div>
  );
};
