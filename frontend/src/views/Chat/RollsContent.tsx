import { FaSolidMessage, FaSolidTrash } from "solid-icons/fa";
import {
  Show,
  For,
  createMemo,
  Component,
  createSignal,
  createEffect,
} from "solid-js";
import {
  Host2NetRollInfo,
  RollInfo,
  appRolls,
  appRooms,
  netClearRolls,
  netPublish,
  currentRoom,
  loggedUser,
  netTopic,
  prettyToday,
  setAppRolls,
  setChatViewTab,
  topicRollInfo,
  topicRollUpdate,
  updateRolls,
} from "~/common";
import {
  Flex,
  Button,
  Text,
  Popover,
  Input,
  PopoverTrigger,
  PopoverContent,
} from "~/components";
import { ChatItem } from "./ChatItem";
import { chatListStyle } from "./styles.css";
import toast from "solid-toast";
import { v4 as uuid } from "uuid";

type Props = {
  ref: (e: any) => void;
  adjustSize: () => void;
};

export const RollsContent: Component<Props> = (props) => {
  const [cmOpen, setCmOpen] = createSignal(false);
  let msgInput: HTMLInputElement;

  const items = createMemo(() => {
    const data = appRooms();
    const settings = loggedUser()?.settings;
    if (!data || !settings || settings.currentRoom === "" || !data[settings.currentRoom])
      return [];
    return Object.values(appRolls())
      .sort((a, b) => b.realtstamp - a.realtstamp)
      .filter((it) => {
        if (
          it.private &&
          !it.revealed &&
          it.userId !== loggedUser()?.id
        ) {
          return false;
        }
        return true;
      });
  });

  const clearRolls = () => {
    const room = currentRoom();
    if (!room) return;
    setAppRolls({});
    netClearRolls(room.id);
    netPublish(netTopic(topicRollUpdate), "");
    toast("Rolls cleared", { position: "bottom-right" });
  };

  const ct = (val: string) => {
    setChatViewTab(val);
    props.adjustSize();
  };

  const sendChatMessage = (e: any) => {
    if (!msgInput) return;
    if (e.code == "Enter" || e.key == "Enter") {
      setCmOpen(false);
      const info = {
        id: uuid(),
        userId: loggedUser()?.id,
        user: loggedUser()?.name,
        userColor: loggedUser()?.color,
        result: {},
        diceColor: loggedUser()?.settings.diceColor,
        diceMaterial: loggedUser()?.settings.diceMaterial,
        tstamp: prettyToday(),
        comment: msgInput.value,
        realtstamp: Date.now(),
        private: false,
        revealed: true,
      } as RollInfo;
      netPublish(netTopic(topicRollInfo), Host2NetRollInfo(info));
      updateRolls(info);
      msgInput.value = "";
    }
  };

  createEffect(() => {
    if (!cmOpen()) return;
    setTimeout(() => {
      document.getElementById("chat-message")?.focus();
    }, 300);
  });

  return (
    <>
      <Flex gap="medium" justify="space">
        <Flex style={{ "min-height": "35px" }} align="center">
          <Button toggled style={{ height: "30px" }}>
            <Text colorSchema="background" fontSize="smaller" title="Rolls">
              Rolls
            </Text>
          </Button>

          <Button onClick={() => ct("cs")} style={{ height: "30px" }}>
            <Text fontSize="smaller" title="Roll definitions">
              Defs
            </Text>
          </Button>
        </Flex>

        <Flex justify="end">
          <Popover modal={true} onOpenChange={setCmOpen} open={cmOpen()}>
            <PopoverTrigger title="Send chat message">
              <FaSolidMessage />
            </PopoverTrigger>
            <PopoverContent title="Send chat message">
              <Input
                id="chat-message"
                onFocus={(e) => e.target.select()}
                onKeyPress={sendChatMessage}
                style={{ width: "20em" }}
                value=""
                ref={(e) => (msgInput = e)}
              />
            </PopoverContent>
          </Popover>
          <Show when={loggedUser()?.id == currentRoom()?.owner}>
            <Flex>
              <Button title="Clear rolls" onClick={clearRolls}>
                <FaSolidTrash />
              </Button>
            </Flex>
          </Show>
        </Flex>
      </Flex>

      <div class={chatListStyle} ref={(e: any) => props.ref(e)}>
        <For each={items()}>{(it) => <ChatItem item={it} />}</For>
      </div>
    </>
  );
};
