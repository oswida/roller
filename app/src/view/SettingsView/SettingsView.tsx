import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidCircleInfo, FaSolidShareNodes } from "solid-icons/fa";
import { Component, createMemo } from "solid-js";
import toast from "solid-toast";
import { appSettings, diceColorSet, diceMaterialSet, rollerSettingsKey, saveToStorage } from "~/common";
import { Flex, Input, Select, SelectItem, Switch, Text } from "~/component";
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

  const colorList = createMemo(() => {
    return diceColorSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const materialList = createMemo(() => {
    return diceMaterialSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const currentDiceColor = createMemo(() => {
    const r = colorList().filter((it) => it.id == appSettings().diceColor);
    if (r.length > 0) return r[0];
    return undefined;
  });

  const currentDiceMaterial = createMemo(() => {
    const r = materialList().filter(
      (it) => it.id == appSettings().diceMaterial
    );
    if (r.length > 0) return r[0];
    return undefined;
  });

  const diceColorChange = (value: SelectItem) => {
    const data = { ...appSettings() };
    data.diceColor = value.id;
    saveToStorage(rollerSettingsKey, data);
  };

  const diceMaterialChange = (value: SelectItem) => {
    const data = { ...appSettings() };
    data.diceMaterial = value.id;
    saveToStorage(rollerSettingsKey, data);
  };

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


  return (
    <Flex direction="column" gap="medium">
      <Flex style={{ "justify-content": "space-between", "align-items": "end" }}>
        <Input
          label="User name"
          title="User name"
          value={appSettings().userName}
          onChange={(e) => updateName(e.target.value)}
        />
        <CopyToClipboard
          text={appSettings().userIdent}
          onCopy={() => {
            toast("User ID copied to clipboard", { icon: <FaSolidCircleInfo /> });
            onOpenChange(false);
          }}
          eventTrigger="onClick"
        >
          <div class={buttonStyle({ variant: "ghost" })} title="Copy user id">
            <FaSolidShareNodes style={{ fill: "currentcolor" }} />
            <Text>Copy user ID </Text>
          </div>
        </CopyToClipboard>
      </Flex>
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
      <Flex style={{ "justify-content": "space-evenly" }}>
        <Select
          modal={true}
          label="Dice color"
          labelLeft
          options={colorList}
          selected={currentDiceColor}
          onChange={diceColorChange}
        />
        <Select
          label="Dice material"
          labelLeft
          options={materialList}
          selected={currentDiceMaterial}
          onChange={diceMaterialChange}
        />
      </Flex>

    </Flex>
  );
};
