import {
  appRooms,
  centLoadRooms,
  emptyRoomInfo,
  loggedUser,
  netUpdateUser,
} from "~/common";
import { Button, Flex, Input } from "~/components";

export const RoomConnectView = ({
  onOpenChange,
}: {
  onOpenChange: (val: boolean) => void;
}) => {
  let inputRef: HTMLInputElement;

  const connectRoom = () => {
    if (!inputRef) return;
    const newState = { ...appRooms() };
    newState[inputRef.value] = emptyRoomInfo(inputRef.value);
    const lu = loggedUser();
    if (!lu) return;
    if (!lu.settings) lu.settings = {};
    if (!lu.settings.rooms) lu.settings.rooms = [];
    lu.settings.currentRoom = inputRef.value;
    netUpdateUser(lu.name, lu.color, lu.settings);
    centLoadRooms([inputRef.value]);
    onOpenChange(false);
  };

  return (
    <Flex direction="column" gap="medium" align="center">
      <Input label="Room identifier" ref={(e) => (inputRef = e)} />
      <Button onClick={connectRoom}>Connect</Button>
    </Flex>
  );
};
