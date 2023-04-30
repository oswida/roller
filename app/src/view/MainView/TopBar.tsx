import { FaSolidUser } from "solid-icons/fa";
import { Component, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  appSettings,
  currentRoomName,
  diceColorSet,
  diceMaterialSet,
  rollerSettingsKey,
  saveToStorage,
  storageSize,
} from "~/common";
import { Flex, Popover, Select, Text } from "~/component";
import { SettingsView } from "../SettingsView";
import { topbarStyle } from "./styles.css";

export const TopBar: Component = () => {
  const username = createMemo(() => {
    return appSettings().userName;
  });

  const currentDiceColor = createMemo(() => {
    return appSettings().diceColor;
  });

  const diceColorChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceColor = value;
    saveToStorage(rollerSettingsKey, data);
  };

  const currentDiceMaterial = createMemo(() => {
    return appSettings().diceMaterial;
  });

  const diceMaterialChange = (value: string) => {
    const data = { ...appSettings() };
    data.diceMaterial = value;
    saveToStorage(rollerSettingsKey, data);
  };

  return (
    <div class={topbarStyle}>
      <Flex gap="medium" center>
        <Popover trigger={<FaSolidUser />} title="Settings">
          <SettingsView />
        </Popover>
        <Dynamic component={"Text"}>{username()}</Dynamic>
      </Flex>
      <Flex gap="medium">
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
      <Dynamic component={"Text"} colorSchema="secondary">
        {currentRoomName()}
      </Dynamic>
      <Text colorSchema="secondary" fontSize="small">
        {storageSize()} kB
      </Text>
    </div>
  );
};
