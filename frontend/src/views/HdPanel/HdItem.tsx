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
      <Flex style={{ "justify-content": "flex-end", flex: 1 }}>
        <Text colorSchema="secondary" fontSize="smaller" style={{ flex: 1 }}>
          {item.description}
        </Text>
        <div>
          <Dialog open={descDlgOpen()} onOpenChange={setDescDlgOpen}>
            <DialogTrigger>
              <FaSolidPen size="16px" fill="currentColor" />
            </DialogTrigger>
            <DialogContent title="Handout description">
              <InputArea
                currentValue={() => (item.description ? item.description : "")}
                style={{
                  width: "25rem",
                  "min-height": "15rem",
                  "font-size": "medium",
                }}
                onChange={(e: any) => setEditContent(e.target.value)}
              />
              <Flex gap="large" center>
                <Button onClick={save}>Save</Button>
                <Button onClick={() => setDescDlgOpen(false)}>Cancel</Button>
              </Flex>
            </DialogContent>
          </Dialog>
        </div>
      </Flex>

      <Switch>
        <Match when={item.htype === "text"}>
          <HdItemText item={item} />
        </Match>
      </Switch>

      <Flex
        style={{
          "margin-top": "5px",
          "border-top": "solid 1px #ffffff33",
          "padding-top": "5px",
        }}
      >
        <Alert open={delDlgOpen()} onOpenChange={setDelDlgOpen} modal>
          <AlertTrigger title="Delete item">
            <Button style={{ width: "20px", height: "20px" }}>
              <FaSolidXmark fill="currentColor" size="16px" />
            </Button>
          </AlertTrigger>
          <AlertContent>
            <Text>Delete {item.name}?</Text>
            <Flex center gap="large">
              <Button onClick={() => setDelDlgOpen(false)}>Cancel</Button>
              <Button onClick={remove}>Delete</Button>
            </Flex>
          </AlertContent>
        </Alert>
      </Flex>
    </div>
  );
};
