import { FaSolidCircleInfo, FaSolidEye, FaSolidFloppyDisk, FaSolidPen } from "solid-icons/fa";
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
import { Popover } from "~/components/Popover";
import { Button, Dialog } from "~/components";
import { themeColor } from "~/common/theme.css";

type Props = {
  item: CharTemplateItem;
};

export const TplBigText: Component<Props> = ({ item }) => {
  const [editVal, setEditVal] = createSignal("");
  const [editOpen, setEditOpen] = createSignal(false);
  const [viewOpen, setViewOpen] = createSignal(false);

  const value = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return "--";
    return info.values[item.id] as string;
  });

  const shortValue = createMemo(() => {
    const v = value().split("\n");
    console.log(v);
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
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };


  createEffect(() => {
    if (!editOpen()) return;
    setTimeout(() => {
      document.getElementById("text-value")?.focus();
    }, 200)
  });

  return (
    <div class={tplTextItemStyle}>

      <Flex direction="column" gap="small">
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
            <Show when={item.hint && item.hint !== ""}>
              <div title={item.hint} style={{ cursor: "help" }}>
                <FaSolidCircleInfo fill={themeColor.accent} />
              </div>
            </Show>
          </Flex>
          <Flex>
            <Show when={isCsOwner(currentCs())}>
              <Popover
                modal={true}
                title={item.name}
                open={editOpen}
                onOpenChange={setEditOpen}
                trigger={
                  <div title="Edit">
                    <FaSolidPen style={{ fill: "currentcolor" }} />
                  </div>
                }
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
                  style={{ "min-width": "50em", "font-size": "medium", "min-height": "15em" }} />
              </Popover>
            </Show>
            <Dialog
              style={{ "max-width": "80%" }}
              open={viewOpen}
              onOpenChange={setViewOpen}
              dialogTitle={() => item.name}
              modal={true}
              triggerStyle={{ "background-color": "transparent" }}
              trigger={
                <div class={csTplIconStyle} title="View whole text">
                  <FaSolidEye fill="currentColor" />
                </div>
              }
            >
              <div
                innerHTML={parseMarkdown(value())}
                style={{
                  width: "100%",
                  "text-align": "left",
                  "vertical-align": "top"
                }} />
            </Dialog>

          </Flex>
        </Flex>
        <Text title="Click eye icon to see the whole text">{shortValue()}</Text>
      </Flex>

    </div>
  );
};
