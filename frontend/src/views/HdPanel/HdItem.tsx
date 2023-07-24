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

export const HdItem: ParentComponent<Props> = (props) => {
  const [descDlgOpen, setDescDlgOpen] = createSignal(false);
  const [editContent, setEditContent] = createSignal("");
  const [delDlgOpen, setDelDlgOpen] = createSignal(false);

  const save = () => {
    props.item.description = editContent();
    updateHdStorage(props.item);
  };

  const remove = () => {
    setDelDlgOpen(false);
    const newState = { ...appHandouts() };
    delete newState[props.item.id];
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
                  value={props.item.description ? props.item.description : ""}
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
              <Text>Delete {props.item.name}?</Text>
              <Flex align="center" justify="center" gap="large">
                <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
                <Button onClick={remove}>Delete</Button>
              </Flex>
            </AlertContent>
          </Alert>
        </Flex>
        <Flex justify="end" grow>
          <Text colorSchema="secondary" fontSize="smaller" style={{ flex: 1 }}>
            {props.item.description}
          </Text>
        </Flex>
      </Flex>

      <Switch>
        <Match when={props.item.htype === "text"}>
          <HdItemText item={props.item} />
        </Match>
        <Match when={props.item.htype === "image"}>
          <HdItemImage item={props.item} />
        </Match>
      </Switch>
    </div>
  );
};
