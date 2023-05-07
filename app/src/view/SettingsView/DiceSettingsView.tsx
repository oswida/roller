import { Component, createMemo } from "solid-js";
import {
  appSettings,
  diceColorSet,
  diceMaterialSet,
  rollerSettingsKey,
  saveToStorage,
} from "~/common";
import { Flex, Text, Select } from "~/component";

export const DiceSettingsView: Component = () => {
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
    <Flex direction="column">
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
  );
};
