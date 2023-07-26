import { FaSolidEye, FaSolidFloppyDisk, FaSolidPen } from "solid-icons/fa";
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
import { Button } from "../../Button";
import { Dialog, DialogContent, DialogTrigger } from "../../Dialog";
import { Flex } from "../../Flex";
import { InputArea } from "../../Input";
import { Popover, PopoverContent, PopoverTrigger } from "../../Popover";
import { Text } from "../../Text";
import { TplHintBlock } from "../blocks/TplHintBlock";
import { csTplIconStyle, tplTextItemStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
};

export const TplBigText: Component<Props> = (props) => {
  const [editVal, setEditVal] = createSignal("");
  const [editOpen, setEditOpen] = createSignal(false);
  const [viewOpen, setViewOpen] = createSignal(false);

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[props.item.id]) return "";
    return info.values[props.item.id] as string;
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
    info.values[props.item.id] = v;
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
      setEditVal(value());
    }, 200);
  });

  return (
    <div class={tplTextItemStyle}>
      <Flex direction="column" gap="small" grow>
        <Flex align="center" justify="space" grow>
          <Flex>
            <Text fontSize="smaller" colorSchema="secondary">
              {props.item.name}
            </Text>
            <TplHintBlock hint={props.item.hint} />
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
                  title={props.item.name}
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
                title={props.item.name ? props.item.name : ""}
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
