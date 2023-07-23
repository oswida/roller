import { Component, Show, createEffect, createSignal } from "solid-js";
import { HandoutInfo, parseMarkdown, updateHdStorage } from "~/common";
import { hdItemTextStyle } from "../styles.css";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  InputArea,
  Text,
} from "~/components";
import { FaSolidPen } from "solid-icons/fa";

type Props = {
  item: HandoutInfo;
};

export const HdItemText: Component<Props> = ({ item }) => {
  const [descDlgOpen, setDescDlgOpen] = createSignal(false);
  const [editContent, setEditContent] = createSignal("");

  const save = () => {
    item.value = editContent();
    updateHdStorage(item);
  };

  createEffect(() => {
    if (!descDlgOpen()) return;
    setEditContent(item.value);
  });

  return (
    <Flex direction="column">
      <Show when={item.value === ""}>
        <Text>...</Text>
      </Show>
      <Show when={item.value !== ""}>
        <div class={hdItemTextStyle} innerHTML={parseMarkdown(item.value)} />
      </Show>

      <Dialog open={descDlgOpen()} onOpenChange={setDescDlgOpen}>
        <DialogTrigger>
          <Button>
            <FaSolidPen size="12px" fill="currentColor" />
            <Text fontSize="smaller">Edit</Text>
          </Button>
        </DialogTrigger>
        <DialogContent title="Handout text">
          <InputArea
            currentValue={() => item.value}
            style={{
              width: "25rem",
              "min-height": "15rem",
              "font-size": "medium",
            }}
            onChange={(e: any) => setEditContent(e.target.value)}
          />
          <Flex gap="large" align="center" justify="center">
            <Button onClick={save}>Save</Button>
            <Button onClick={() => setDescDlgOpen(false)}>Cancel</Button>
          </Flex>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};
