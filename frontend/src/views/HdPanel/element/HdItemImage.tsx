import { FaSolidImage, FaSolidPen } from "solid-icons/fa";
import { Component, Show, createEffect, createSignal } from "solid-js";
import { HandoutInfo, updateHdStorage } from "~/common";
import {
  Alert,
  AlertContent,
  AlertTrigger,
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Input,
} from "~/components";
import panzoom from "panzoom";

type Props = {
  item: HandoutInfo;
};

export const HdItemImage: Component<Props> = ({ item }) => {
  const [url, setUrl] = createSignal("");
  const [urlDlgOpen, setUrlDlgOpen] = createSignal(false);
  const [previewOpen, setPreviewOpen] = createSignal(false);

  const save = () => {
    item.value = url();
    updateHdStorage(item);
  };

  createEffect(() => {
    if (!previewOpen()) return;
    setTimeout(() => {
      const element = document.getElementById("preview");
      if (element) panzoom(element);
    }, 200);
  });

  return (
    <Flex align="center" justify="center">
      <Dialog open={urlDlgOpen()} onOpenChange={setUrlDlgOpen}>
        <DialogTrigger>
          <Button>
            <FaSolidPen fill="currentColor" />
          </Button>
        </DialogTrigger>
        <DialogContent title="Image">
          <Input
            style={{ "min-width": "15em" }}
            label="Image URL"
            value={item.value}
            onChange={(e: any) => setUrl(e.target.value)}
          />
          <Flex align="center" justify="center" gap="large">
            <Button onClick={() => setUrlDlgOpen(false)}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </Flex>
        </DialogContent>
      </Dialog>

      <Alert open={previewOpen()} onOpenChange={setPreviewOpen}>
        <AlertTrigger>
          <Show when={item.value !== ""}>
            <img src={item.value} style={{ "max-width": "150px" }} />
          </Show>
          <Show when={item.value === ""}>
            <FaSolidImage fill="currentColor" size={24} />
          </Show>
        </AlertTrigger>
        <AlertContent title={item.name}>
          <div
            style={{
              "max-height": "500px",
              overflow: "hidden",
              "max-width": "70vw",
            }}
          >
            <img src={item.value} id="preview" />
          </div>
        </AlertContent>
      </Alert>
    </Flex>
  );
};
