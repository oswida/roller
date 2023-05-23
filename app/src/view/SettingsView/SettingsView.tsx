import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidCircleInfo, FaSolidShareNodes } from "solid-icons/fa";
import { Component, createMemo } from "solid-js";
import toast from "solid-toast";
import { appSettings, rollerSettingsKey, saveToStorage } from "~/common";
import { Flex, Input, Switch, Text } from "~/component";
import { buttonStyle } from "~/component/Button/styles.css";

type Props = {
  onOpenChange: (value: boolean) => void;
};



export const SettingsView: Component<Props> = ({ onOpenChange }) => {
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

  const csAdjustHeight = createMemo(() => {
    const rl = appSettings().csAdjustHeight;
    if (!rl) return false;
    return rl;
  });

  const smallerDice = createMemo(() => {
    const rl = appSettings().smallerDice;
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

  const setSmalldice = (value: boolean) => {
    const newState = { ...appSettings(), smallerDice: value };
    saveToStorage(rollerSettingsKey, newState);
  };

  const setCsAdjustHeight = (value: boolean) => {
    const newState = { ...appSettings(), csAdjustHeight: value };
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
      <Flex style={{ "justify-content": "space-between" }}>
        <Switch
          label="Chat on right"
          checked={rightLayout}
          setChecked={setRightLayout}
        />
        <Switch
          label="Smaller dice"
          checked={smallerDice}
          setChecked={setSmalldice}
        />
      </Flex>
      <Flex style={{ "justify-content": "space-between" }}>
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
      <Flex style={{ "justify-content": "space-between" }}>
        <Switch
          label="Adjust charsheet to height"
          checked={csAdjustHeight}
          setChecked={setCsAdjustHeight}
        />
      </Flex>
      <CopyToClipboard
        text={appSettings().userIdent}
        onCopy={() => {
          toast("User ID copied to clipboard", { icon: <FaSolidCircleInfo /> });
          onOpenChange(false);
        }}
        eventTrigger="onClick"
      >
        <div class={buttonStyle({ variant: "ghost" })} title="Copy room id">
          <FaSolidShareNodes />
          <Text>Copy user ID </Text>
        </div>
      </CopyToClipboard>
    </Flex>
  );
};
