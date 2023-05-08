import { Component, createMemo } from "solid-js";
import { appSettings, rollerSettingsKey, saveToStorage } from "~/common";
import { Flex, Input, Switch } from "~/component";

export const SettingsView: Component = () => {
  const updateName = (value: string) => {
    const data = { ...appSettings() };
    data.userName = value;
    saveToStorage(rollerSettingsKey, data);
  };

  const rightLayout = createMemo(() => {
    const rl = appSettings().rightLayout;
    if (!rl) return false;
    return rl;
  });

  const setRightLayout = (value: boolean) => {
    const newState = { ...appSettings(), rightLayout: value };
    saveToStorage(rollerSettingsKey, newState);
  };

  return (
    <Flex direction="column" gap="medium">
      <Input
        label="User name"
        title="User name"
        value={appSettings().userName}
        onChange={(e) => updateName(e.target.value)}
      />
      <Switch
        label="Chat on right"
        checked={rightLayout}
        setChecked={setRightLayout}
      />
    </Flex>
  );
};
