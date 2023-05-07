import { FaSolidClipboardUser, FaSolidPlug, FaSolidUser } from "solid-icons/fa";
import { Component, Show, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  appSettings,
  currentRoom,
  diceColorSet,
  diceMaterialSet,
  mqttConnectionStatus,
  rollerSettingsKey,
  saveToStorage,
  storageSize,
} from "~/common";
import { Dialog, Flex, Popover, Select, Text } from "~/component";
import { SettingsView } from "../../view/SettingsView";
import { RoomSettingsView } from "../../view/SettingsView/RoomSettingsView";
import { topbarStyle } from "./styles.css";

export const TopBar: Component = () => {
  const username = createMemo(() => {
    return appSettings().userName;
  });
  const currentDiceColor = createMemo(() => {
    return appSettings().diceColor;
  });

  const currentDiceMaterial = createMemo(() => {
    return appSettings().diceMaterial;
  });

  const diceColorChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceColor = value;
    saveToStorage(rollerSettingsKey, data);
  };

  const diceMaterialChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceMaterial = value;
    saveToStorage(rollerSettingsKey, data);
  };

  return (
    <div class={topbarStyle}>
      <Flex gap="medium" center>
        <Popover
          trigger={<FaSolidUser style={{ height: "1.5em", width: "1.5em" }} />}
          title="Settings"
        >
          <SettingsView />
        </Popover>
        <Dynamic component={"Text"}>{username()}</Dynamic>
        <Dialog
          title="Room settings"
          trigger={
            <FaSolidClipboardUser style={{ height: "1.5em", width: "1.5em" }} />
          }
        >
          <RoomSettingsView />
        </Dialog>
        <Dynamic component={"Text"} colorSchema="secondary">
          {currentRoom()?.name}
        </Dynamic>
        <Flex>
          <Text fontSize="small" colorSchema="secondary">
            Color set
          </Text>
          <Select
            options={diceColorSet}
            selected={currentDiceColor}
            onChange={diceColorChange}
          ></Select>
          <Text fontSize="small" colorSchema="secondary">
            Material
          </Text>
          <Select
            options={diceMaterialSet}
            selected={currentDiceMaterial}
            onChange={diceMaterialChange}
          ></Select>
        </Flex>
        {/* <Dialog
          title="Dice settings"
          trigger={
            <FaSolidPalette style={{ height: "1.5em", width: "1.5em" }} />
          }
        >
          <DiceSettingsView />
        </Dialog> */}
        {/* <Dynamic component={"Text"} colorSchema="secondary">
          {currentDiceColor()} {currentDiceMaterial()}
        </Dynamic> */}
      </Flex>

      {/* <Flex gap="medium">
        <Text fontSize="small" colorSchema="secondary">
          Color set
        </Text>
        <Select
          options={diceColorSet}
          selected={currentDiceColor}
          onChange={diceColorChange}
        ></Select>
        <Text fontSize="small" colorSchema="secondary">
          Material
        </Text>
        <Select
          options={diceMaterialSet}
          selected={currentDiceMaterial}
          onChange={diceMaterialChange}
        ></Select>
      </Flex> */}

      <Show when={mqttConnectionStatus()}>
        <FaSolidPlug />
      </Show>
      <Text colorSchema="secondary" fontSize="small">
        {storageSize()} kB
      </Text>
    </div>
  );
};
