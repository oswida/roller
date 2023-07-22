import {
  FaSolidCircleInfo,
  FaSolidEye,
  FaSolidFloppyDisk,
  FaSolidPen,
} from "solid-icons/fa";
import {
  Component,
  Show,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import {
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  parseMarkdown,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { Flex } from "../../Flex";
import { InputArea } from "../../Input";
import { Text } from "../../Text";
import { csTplIconStyle, tplTextItemStyle } from "../styles.css";
import { Popover, PopoverContent, PopoverTrigger } from "../../Popover";
import { Dialog, DialogContent, DialogTrigger } from "../../Dialog";
import { Button } from "../../Button";
import { TplHintBlock } from "../blocks/TplHintBlock";

type Props = {
  item: CharTemplateItem;
};

export const TplBigText: Component<Props> = ({ item }) => {
  const [editVal, setEditVal] = createSignal("");
  const [editOpen, setEditOpen] = createSignal(false);
  const [viewOpen, setViewOpen] = createSignal(false);

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return "";
    return info.values[item.id] as string;
  });

  const shortValue = createMemo(() => {
    const v = value().split("\n");
    if (!v) return "";
    if (v[0].length > 50) {
      return v[0].substring(0, 50) + " ...";
    }
    return v[0] + " ...";
  });

  const applyValue = () => {
    setEditOpen(false);
    const v = editVal();
    const info = currentCs();
    if (!info) {
      return;
    }
    info.values[item.id] = v;
    updateCsStorage(info);
    setEditVal("");
    // setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  createEffect(() => {
    if (!editOpen()) return;
    setTimeout(() => {
      document.getElementById("text-value")?.focus();
    }, 200);
  });

  return (
    <div class={tplTextItemStyle}>
      <Flex direction="column" gap="small">
        <Flex align="center" justify="space">
          <Flex>
            <Text fontSize="smaller" colorSchema="secondary">
              {item.name}
            </Text>
            <TplHintBlock hint={item.hint} />
          </Flex>
          <Flex>
            <Show when={isCsOwner(currentCs())}>
              <Popover
                modal={true}
                open={editOpen()}
                onOpenChange={setEditOpen}
              >
                <PopoverTrigger title="Edit">
                  <FaSolidPen style={{ fill: "currentcolor" }} />
                </PopoverTrigger>
                <PopoverContent
                  title={item.name}
                  headerActions={
                    <Button title="Save" onClick={applyValue}>
                      <FaSolidFloppyDisk fill="currentColor" />
                    </Button>
                  }
                >
                  <InputArea
                    onChange={(e) => setEditVal(e.target.value)}
                    value={value()}
                    onFocus={(e) => e.target.select()}
                    id="text-value"
                    style={{
                      "min-width": "50em",
                      "font-size": "medium",
                      "min-height": "15em",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </Show>
            <Dialog open={viewOpen()} onOpenChange={setViewOpen} modal>
              <DialogTrigger>
                <div class={csTplIconStyle} title="View whole text">
                  <FaSolidEye fill="currentColor" />
                </div>
              </DialogTrigger>
              <DialogContent
                title={item.name ? item.name : ""}
                style={{ "max-width": "80%" }}
              >
                <div
                  innerHTML={parseMarkdown(value())}
                  style={{
                    width: "100%",
                    "text-align": "left",
                    "vertical-align": "top",
                  }}
                />
              </DialogContent>
            </Dialog>
          </Flex>
        </Flex>
        <Text title="Click eye icon to see the whole text">{shortValue()}</Text>
      </Flex>
    </div>
  );
};
