import { FaSolidEye, FaSolidImage } from "solid-icons/fa";
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
      //   if (element) panzoom(element);
    }, 1000);
  });

  return (
    <Flex align="center" justify="center" direction="column">
      <Dialog open={urlDlgOpen()} onOpenChange={setUrlDlgOpen}>
        <DialogTrigger>
          <Show when={item.value !== ""}>
            <img src={item.value} style={{ "max-width": "150px" }} />
          </Show>
          <Show when={item.value === ""}>
            <FaSolidImage fill="currentColor" size={24} />
          </Show>
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
      {/* <Show when={item.value !== ""}> */}
      <Alert open={previewOpen()} onOpenChange={setPreviewOpen}>
        <AlertTrigger>
          <Button>
            <FaSolidEye fill="currentColor" />
          </Button>
        </AlertTrigger>
        <AlertContent title={item.name}>
          <div
            style={{ "max-height": "500px", overflow: "hidden" }}
            id="preview"
          >
            <img src={item.value} />
          </div>
        </AlertContent>
      </Alert>
      {/* </Show> */}
    </Flex>
  );
};
