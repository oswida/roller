import { Match, ParentComponent, Switch, createSignal } from "solid-js";
import {
  HandoutInfo,
  appHandouts,
  rollerHandoutKey,
  saveToStorage,
  updateHdStorage,
} from "~/common";
import { hdItemRootStyle } from "./styles.css";
import {
  DialogContent,
  DialogTrigger,
  Flex,
  Text,
  Dialog,
  Button,
  InputArea,
  Alert,
  AlertTrigger,
  AlertContent,
} from "~/components";
import { FaSolidPen, FaSolidXmark } from "solid-icons/fa";
import { HdItemText } from "./element/HdItemText";
import { HdItemImage } from "./element/HdItemImage";

type Props = {
  item: HandoutInfo;
};

export const HdItem: ParentComponent<Props> = ({ item }) => {
  const [descDlgOpen, setDescDlgOpen] = createSignal(false);
  const [editContent, setEditContent] = createSignal("");
  const [delDlgOpen, setDelDlgOpen] = createSignal(false);

  const save = () => {
    item.description = editContent();
    updateHdStorage(item);
  };

  const remove = () => {
    setDelDlgOpen(false);
    const newState = { ...appHandouts() };
    delete newState[item.id];
    saveToStorage(rollerHandoutKey, newState);
  };

  return (
    <div class={hdItemRootStyle}>
      <Flex
        direction="column"
        style={{
          "margin-bottom": "5px",
          "border-bottom": "solid 1px #ffffff33",
          "padding-bottom": "5px",
        }}
      >
        <Flex justify="space" grow>
          <div>
            <Dialog open={descDlgOpen()} onOpenChange={setDescDlgOpen}>
              <DialogTrigger>
                <Button style={{ height: "24px" }}>
                  <FaSolidPen size="12px" fill="currentColor" />
                  <Text fontSize="smaller">Desc</Text>
                </Button>
              </DialogTrigger>
              <DialogContent title="Handout description">
                <InputArea
                  currentValue={() =>
                    item.description ? item.description : ""
                  }
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
          </div>

          <Alert open={delDlgOpen()} onOpenChange={setDelDlgOpen} modal>
            <AlertTrigger title="Delete item">
              <Button variant="icon">
                <FaSolidXmark fill="currentColor" size="16px" />
              </Button>
            </AlertTrigger>
            <AlertContent>
              <Text>Delete {item.name}?</Text>
              <Flex align="center" justify="center" gap="large">
                <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
                <Button onClick={remove}>Delete</Button>
              </Flex>
            </AlertContent>
          </Alert>
        </Flex>
        <Flex justify="end" grow>
          <Text colorSchema="secondary" fontSize="smaller" style={{ flex: 1 }}>
            {item.description}
          </Text>
        </Flex>
      </Flex>

      <Switch>
        <Match when={item.htype === "text"}>
          <HdItemText item={item} />
        </Match>
        <Match when={item.htype === "image"}>
          <HdItemImage item={item} />
        </Match>
      </Switch>
    </div>
  );
};
