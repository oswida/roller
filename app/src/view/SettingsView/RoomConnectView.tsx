import {
  appRooms,
  appSettings,
  emptyRoomInfo,
  netLoadRoom,
  rollerRoomsKey,
  rollerSettingsKey,
  saveToStorage,
} from "~/common";
import { Button, Flex, Input } from "~/component";

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
    saveToStorage(rollerRoomsKey, newState);
    const sett = { ...appSettings() };
    sett.currentRoom = inputRef.value;
    saveToStorage(rollerSettingsKey, sett);
    netLoadRoom(inputRef.value);
    onOpenChange(false);
  };

  return (
    <Flex direction="column" gap="medium">
      <Input label="Room identifier" ref={(e) => (inputRef = e)} />
      <Button variant="ghost" onClick={connectRoom}>
        Connect
      </Button>
    </Flex>
  );
};
