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

  const total = createMemo(() => {
    const rl = appSettings().showRollTotal;
    if (!rl) return false;
    return rl;
  });


  const success = createMemo(() => {
    const rl = appSettings().showRollSuccess;
    if (!rl) return false;
    return rl;
  });


  const setRightLayout = (value: boolean) => {
    const newState = { ...appSettings(), rightLayout: value };
    saveToStorage(rollerSettingsKey, newState);
  };

  const setTotal = (value: boolean) => {
    const newState = { ...appSettings(), showRollTotal: value };
    saveToStorage(rollerSettingsKey, newState);
  };

  const setSuccess = (value: boolean) => {
    const newState = { ...appSettings(), showRollSuccess: value };
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
      <Switch
        label="Show roll total"
        checked={total}
        setChecked={setTotal}
      />
      <Switch
        label="Show roll success"
        checked={success}
        setChecked={setSuccess}
      />
    </Flex>
  );
};
