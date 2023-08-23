import {
  appRooms,
  netLoadRooms,
  emptyRoomInfo,
  loggedUser,
  netUpdateUser,
  updateLoggedUserSetting,
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
    const rs = emptyRoomInfo(inputRef.value);
    let rooms = loggedUser()?.settings.rooms;
    if (!rooms) rooms = [];
    rooms.push(rs);
    updateLoggedUserSetting("rooms", rooms);
    updateLoggedUserSetting("currentRoom", inputRef.value);
    netLoadRooms([inputRef.value]);
    onOpenChange(false);
  };

  return (
    <Flex direction="column" gap="medium" align="center">
      <Input label="Room identifier" ref={(e) => (inputRef = e)} />
      <Button onClick={connectRoom}>Connect</Button>
    </Flex>
  );
};
