import { createSignal } from "solid-js";
import { stateCurrentUser } from "~/common";
import { Button, Flex, Input } from "~/components";
import { loadUserRooms, updateCurrentUser } from "~/net";

export const RoomConnectView = ({
  onOpenChange,
}: {
  onOpenChange: (val: boolean) => void;
}) => {
  const [roomId, setRoomId] = createSignal("");

  const connectRoom = () => {
    onOpenChange(false);
    if (roomId().trim() === "") return;
    const cu = stateCurrentUser();
    if (!cu) return;
    if (!cu.settings["rooms"]) cu.settings["rooms"] = [];
    if (!cu.settings["rooms"].includes(roomId()))
      cu.settings["rooms"].push(roomId());
    updateCurrentUser({ ...cu });
    loadUserRooms(cu.id);
  };

  return (
    <Flex direction="column" gap="medium" align="center">
      <Input label="Room identifier" onInput={(e: any) => setRoomId(e.target.value)} />
      <Button onClick={connectRoom}>Connect</Button>
    </Flex>
  );
};
