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

export const HdItemText: Component<Props> = (props) => {
  const [descDlgOpen, setDescDlgOpen] = createSignal(false);
  const [editContent, setEditContent] = createSignal("");

  const save = () => {
    props.item.value = editContent();
    updateHdStorage(props.item);
  };

  createEffect(() => {
    if (!descDlgOpen()) return;
    setEditContent(props.item.value);
  });

  return (
    <Flex direction="column">
      <Show when={props.item.value === ""}>
        <Text>...</Text>
      </Show>
      <Show when={props.item.value !== ""}>
        <div
          class={hdItemTextStyle}
          innerHTML={parseMarkdown(props.item.value)}
        />
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
            value={props.item.value}
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
