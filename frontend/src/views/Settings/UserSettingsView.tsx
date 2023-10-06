import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidAsterisk, FaSolidCircleInfo, FaSolidShareNodes } from "solid-icons/fa";
import { Component, Show, createMemo } from "solid-js";
import { diceColorSet, diceMaterialSet, setStateCurrentUser, stateCurrentUser } from "~/common";
import { updateCurrentUser } from "~/common/user";
import { Button, Dialog, DialogContent, DialogTrigger, Flex, Input, Select, SelectItem, Switch, Text, showToast } from "~/components";
import { buttonStyle } from "~/components/Button/styles.css";

type Props = {
  onOpenChange: (value: boolean) => void;
};

export const UserSettingsView: Component<Props> = ({ onOpenChange }) => {

  const updateName = (value: string) => {
    const lu = stateCurrentUser();
    if (!lu) return;
    lu.name = value;
    updateCurrentUser({ ...lu });
  };

  const updateUserSetting = (name: string, value: unknown) => {
    const lu = stateCurrentUser();
    if (!lu || !lu.settings) return;
    lu.settings[name] = value;
    updateCurrentUser({ ...lu });
  }

  const colorList = createMemo(() => {
    return diceColorSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const materialList = createMemo(() => {
    return diceMaterialSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const currentDiceColor = createMemo(() => {
    const lu = stateCurrentUser();
    if (!lu) return undefined;
    const r = colorList().filter((it) => it.id == lu.settings.diceColor);
    if (r.length > 0) return r[0];
    return undefined;
  });

  const currentDiceMaterial = createMemo(() => {
    const lu = stateCurrentUser();
    if (!lu) return undefined;
    const r = materialList().filter(
      (it) => it.id == lu.settings.diceMaterial
    );
    if (r.length > 0) return r[0];
    return undefined;
  });

  const diceColorChange = (value: SelectItem) => {
    const lu = stateCurrentUser();
    if (!lu) return;
    lu.settings.diceColor = value.id;
    updateCurrentUser({ ...lu });
  };

  const diceMaterialChange = (value: SelectItem) => {
    const lu = stateCurrentUser();
    if (!lu) return;
    lu.settings.diceMaterial = value.id;
    updateCurrentUser({ ...lu });
  };


  const themes = createMemo(() => {
    return [
      { id: "blue", label: "Blue" } as SelectItem,
      { id: "blueDark", label: "Blue Dark" } as SelectItem,
      { id: "brown", label: "Brown" } as SelectItem,
      { id: "brownDark", label: "Brown Dark" } as SelectItem,
      { id: "green", label: "Green" } as SelectItem,
      { id: "greenDark", label: "Green Dark" } as SelectItem,
      { id: "red", label: "Red" } as SelectItem,
      { id: "redDark", label: "Red Dark" } as SelectItem,
      { id: "teal", label: "Teal" } as SelectItem,
      { id: "tealDark", label: "Teal Dark" } as SelectItem,
    ];
  });

  const themeChange = (value: SelectItem) => {
    updateUserSetting("appTheme", value.id);
  };

  const currentTheme = createMemo(() => {
    const r = themes().filter((it) => it.id == stateCurrentUser()?.settings.appTheme);
    if (r.length > 0) return r[0];
    return undefined;
  });

  const fonts = createMemo(() => {
    return [
      { id: "Alegreya", label: "Alegreya" } as SelectItem,
      { id: "Lato", label: "Lato" } as SelectItem,
      { id: "Merriweather", label: "Merriweather" } as SelectItem,
      { id: "Oxanium", label: "Oxanium" } as SelectItem,
      { id: "Quattrocento", label: "Quattrocento" } as SelectItem,
      { id: "Roboto", label: "Roboto" } as SelectItem,
    ];
  });

  const fontChange = (value: SelectItem) => {
    updateUserSetting("appFont", value.id);
  };

  const currentFont = createMemo(() => {
    const r = fonts().filter((it) => it.id == stateCurrentUser()?.settings.appFont);
    if (r.length > 0) return r[0];
    return undefined;
  });

  return (
    <Flex direction="column" gap="medium">
      <Flex align="center" justify="center" grow>
        <Input
          label="User name"
          title="User name"
          value={stateCurrentUser()?.name}
          style={{ width: "15em" }}
          onChange={(e) => updateName(e.target.value)}
        />
      </Flex>
      <Flex align="center" style={{ "margin-bottom": "10px" }} justify="space" grow>
        <Show when={stateCurrentUser() !== undefined}>
          <CopyToClipboard
            text={stateCurrentUser()!.id}
            onCopy={() => {
              showToast({ message: "User ID copied to clipboard" });
              // toast("User ID copied to clipboard", {
              //   icon: <FaSolidCircleInfo />,
              // });
              onOpenChange(false);
            }}
            eventTrigger="onClick"
          >
            <div class={buttonStyle({})} title="Copy user id">
              <FaSolidShareNodes style={{ fill: "currentcolor" }} />
              <Text>User ID </Text>
            </div>
          </CopyToClipboard>
        </Show>
        <Dialog>
          <DialogTrigger>
            <Button title="Change password" >
              <FaSolidAsterisk />
              Password
            </Button>
          </DialogTrigger>
          <DialogContent title="Change user password">
            <Input label="Old password" type="password" />
            <Input label="New password" type="password" />
            <Input label="Repeat new password" type="password" />
          </DialogContent>
        </Dialog>
      </Flex>
      <Flex justify="space" grow>
        <Select
          modal={true}
          label="UI Color Theme"
          options={themes}
          selected={currentTheme}
          onChange={themeChange}
        />
        <Select
          modal={true}
          label="UI Font"
          options={fonts}
          selected={currentFont}
          onChange={fontChange}
        />
      </Flex>

      <Flex justify="space" grow>
        <Select
          modal={true}
          label="Dice color"
          options={colorList}
          selected={currentDiceColor}
          onChange={diceColorChange}
        />
        <Select
          label="Dice material"
          options={materialList}
          selected={currentDiceMaterial}
          onChange={diceMaterialChange}
        />
      </Flex>

      <Flex justify="space" grow direction="column" align="end">
        <Switch
          label="Stronger roll"
          checked={stateCurrentUser()?.settings["strongerRoll"]}
          setChecked={(value: boolean) => updateUserSetting("strongerRoll", value)}
        />
        <Switch
          label="Smaller dice"
          checked={stateCurrentUser()?.settings["smallerDice"]}
          setChecked={(value: boolean) => updateUserSetting("smallerDice", value)}
        />
        {/* </Flex>
      <Flex justify="space"> */}
        <Switch label="Show roll total"
          checked={stateCurrentUser()?.settings["showRollTotal"]}
          setChecked={(value: boolean) => updateUserSetting("showRollTotal", value)}
        />
        <Switch
          label="Show roll success"
          checked={stateCurrentUser()?.settings["showRollSuccess"]}
          setChecked={(value: boolean) => updateUserSetting("showRollSuccess", value)}
        />
      </Flex>
    </Flex>
  );
};
