import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidCircleInfo, FaSolidShareNodes } from "solid-icons/fa";
import { Component, Show, createMemo } from "solid-js";
import toast from "solid-toast";
import {

  diceColorSet,
  diceMaterialSet,
  loggedUser,
  netUpdateUser,
  setLoggedUser,
} from "~/common";
import { Flex, Input, Select, SelectItem, Switch, Text } from "~/components";
import { buttonStyle } from "~/components/Button/styles.css";

type Props = {
  onOpenChange: (value: boolean) => void;
};

export const UserSettingsView: Component<Props> = ({ onOpenChange }) => {

  const updateName = (value: string) => {
    const lu = loggedUser();
    if (!lu) return;
    lu.name = value;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
  };

  const boolSetting = (name: string) => {
    const lu = loggedUser();
    if (!lu) return false;
    const rl = lu.settings[name];
    if (!rl) return false;
    return rl as boolean;
  }

  const setSetting = (name: string, value: any) => {
    const lu = loggedUser();
    if (!lu) return;
    lu.settings[name] = value;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
  };


  const colorList = createMemo(() => {
    return diceColorSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const materialList = createMemo(() => {
    return diceMaterialSet.map((it) => ({ id: it, label: it } as SelectItem));
  });

  const currentDiceColor = createMemo(() => {
    const lu = loggedUser();
    if (!lu) return undefined;
    const r = colorList().filter((it) => it.id == lu.settings.diceColor);
    if (r.length > 0) return r[0];
    return undefined;
  });

  const currentDiceMaterial = createMemo(() => {
    const lu = loggedUser();
    if (!lu) return undefined;
    const r = materialList().filter(
      (it) => it.id == lu.settings.diceMaterial
    );
    if (r.length > 0) return r[0];
    return undefined;
  });

  const diceColorChange = (value: SelectItem) => {
    const lu = loggedUser();
    if (!lu) return;
    lu.settings.diceColor = value.id;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
  };

  const diceMaterialChange = (value: SelectItem) => {
    const lu = loggedUser();
    if (!lu) return;
    lu.settings.diceMaterial = value.id;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
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
    const lu = loggedUser();
    if (!lu) return;
    lu.settings.appTheme = value.id;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
  };

  const currentTheme = createMemo(() => {
    const r = themes().filter((it) => it.id == loggedUser()?.settings.appTheme);
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
    const lu = loggedUser();
    if (!lu) return;
    lu.settings.appFont = value.id;
    setLoggedUser({ ...lu });
    netUpdateUser(lu.name, lu.color, lu.settings);
  };

  const currentFont = createMemo(() => {
    const r = fonts().filter((it) => it.id == loggedUser()?.settings.appFont);
    if (r.length > 0) return r[0];
    return undefined;
  });

  return (
    <Flex direction="column" gap="medium">
      <Flex justify="space" align="end">
        <Input
          label="User name"
          title="User name"
          value={loggedUser()?.name}
          onChange={(e) => updateName(e.target.value)}
        />
        <Show when={loggedUser() !== undefined}>
          <CopyToClipboard
            text={loggedUser()!.id}
            onCopy={() => {
              toast("User ID copied to clipboard", {
                icon: <FaSolidCircleInfo />,
              });
              onOpenChange(false);
            }}
            eventTrigger="onClick"
          >
            <div class={buttonStyle({})} title="Copy user id">
              <FaSolidShareNodes style={{ fill: "currentcolor" }} />
              <Text>Copy user ID </Text>
            </div>
          </CopyToClipboard>
        </Show>
      </Flex>
      <Flex justify="evenly" grow>
        <Select
          modal={true}
          label="UI Color Theme"
          labelLeft
          options={themes}
          selected={currentTheme}
          onChange={themeChange}
        />
        <Select
          modal={true}
          label="UI Font"
          labelLeft
          options={fonts}
          selected={currentFont}
          onChange={fontChange}
        />
      </Flex>

      <Flex justify="evenly" grow>
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

      <Flex justify="space" grow>
        <Switch
          label="Stronger roll"
          checked={() => boolSetting("strongerRoll")}
          setChecked={(value: boolean) => setSetting("strongerRoll", value)}
        />
        <Switch
          label="Smaller dice"
          checked={() => boolSetting("smallerDice")}
          setChecked={(value: boolean) => setSetting("smallerDice", value)}
        />
      </Flex>
      <Flex justify="space">
        <Switch label="Show roll total"
          checked={() => boolSetting("showRollTotal")}
          setChecked={(value: boolean) => setSetting("showRollTotal", value)}
        />
        <Switch
          label="Show roll success"
          checked={() => boolSetting("showRollSuccess")}
          setChecked={(value: boolean) => setSetting("showRollSuccess", value)}
        />
      </Flex>
    </Flex>
  );
};
