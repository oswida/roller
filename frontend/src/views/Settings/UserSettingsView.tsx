import { CopyToClipboard } from "solid-copy-to-clipboard";
import { FaSolidAsterisk, FaSolidShareNodes, FaSolidUserPlus } from "solid-icons/fa";
import { Component, Show, createEffect, createMemo, createSignal } from "solid-js";
import { diceColorSet, diceMaterialSet, setStateNotify, stateCurrentUser, stateNotify } from "~/common";
import { themeVars } from "~/common/theme.css";
import { Button, Dialog, DialogButtons, DialogContent, DialogTrigger, Flex, Input, Select, SelectItem, Switch, Text, showToast } from "~/components";
import { buttonStyle } from "~/components/Button/styles.css";
import { createUser, updateCurrentUser } from "~/net";
import { dangerLineStyle } from "./style.css";

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
    return diceColorSet.map((it) => ({ id: it, label: it }));
  });

  const materialList = createMemo(() => {
    return diceMaterialSet.map((it) => ({ id: it, label: it }));
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
      { id: "blue", label: "Blue" },
      { id: "blueDark", label: "Blue Dark" },
      { id: "brown", label: "Brown" },
      { id: "brownDark", label: "Brown Dark" },
      { id: "green", label: "Green" },
      { id: "greenDark", label: "Green Dark" },
      { id: "red", label: "Red" },
      { id: "redDark", label: "Red Dark" },
      { id: "teal", label: "Teal" },
      { id: "tealDark", label: "Teal Dark" },
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
      { id: "Alegreya", label: "Alegreya" },
      { id: "Lato", label: "Lato" },
      { id: "Merriweather", label: "Merriweather" },
      { id: "Oxanium", label: "Oxanium" },
      { id: "Quattrocento", label: "Quattrocento" },
      { id: "Roboto", label: "Roboto" },
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

  createEffect(() => {
    if (stateNotify() === "") return;
    showToast({ message: stateNotify(), id: 1 });
    setStateNotify("");
  });

  const [cuAdminUser, setCuAdminUser] = createSignal(false);
  const [cuLogin, setCuLogin] = createSignal("");
  const [cuPass, setCuPass] = createSignal("");
  const [cuPass2, setCuPass2] = createSignal("");

  const create = () => {
    const login = cuLogin().trim();
    const pass = cuPass().trim();
    const pass2 = cuPass2().trim();
    const admin = cuAdminUser();
    if (login === "" || pass === "" || pass2 === "" || pass !== pass2) {
      showToast({ message: "Login and password should not be empty. Passwords should match.", id: 1 });
      return;
    }
    createUser(login, pass, pass2);
  }

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
      <Flex justify="space" align="center" grow>
        <Select
          modal={true}
          label="UI Color Theme"
          options={themes()}
          selected={currentTheme()}
          onChange={themeChange}
          optionValue="id"
          optionTextValue="label"
        />
        <Select
          modal={true}
          label="UI Font"
          options={fonts()}
          selected={currentFont()}
          onChange={fontChange}
          optionValue="id"
          optionTextValue="label"
        />
        <Show when={stateCurrentUser() !== undefined}>
          <CopyToClipboard
            text={stateCurrentUser()!.id}
            onCopy={() => {
              showToast({ message: "User ID copied to clipboard" });
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
      </Flex>

      <Flex justify="space" align="center" grow>
        <Select
          modal={true}
          label="Dice color"
          options={colorList()}
          selected={currentDiceColor()}
          onChange={diceColorChange}
          optionValue="id"
          optionTextValue="label"
        />
        <Select
          label="Dice material"
          options={materialList()}
          selected={currentDiceMaterial()}
          onChange={diceMaterialChange}
          optionValue="id"
          optionTextValue="label"
        />
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

      <Flex justify="space" grow align="end">
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
      </Flex>
      <Flex justify="space" align="end">
        <Switch label="Show roll total"
          checked={stateCurrentUser()?.settings["showRollTotal"]}
          setChecked={(value: boolean) => updateUserSetting("showRollTotal", value)}
        />
        <Switch
          label="Show success"
          checked={stateCurrentUser()?.settings["showRollSuccess"]}
          setChecked={(value: boolean) => updateUserSetting("showRollSuccess", value)}
        />
      </Flex>

      <Show when={stateCurrentUser()?.is_admin}>
        <hr class={dangerLineStyle} />
        <Dialog>
          <DialogTrigger title="Add user">
            <Button>
              <FaSolidUserPlus />
              Add user
            </Button>
          </DialogTrigger>
          <DialogContent title="Add user">
            <Input label="Login" type="text" onInput={(e: any) => setCuLogin(e.target.value)} />
            <Input label="Password" type="password" onInput={(e: any) => setCuPass(e.target.value)} />
            <Input label="Confirm password" type="password" onInput={(e: any) => setCuPass2(e.target.value)} />
            <Switch label="Administrator" checked={cuAdminUser()} setChecked={setCuAdminUser} />
            <DialogButtons>
              <div onClick={create}>Create</div>
              <div>Cancel</div>
            </DialogButtons>
          </DialogContent>
        </Dialog>
      </Show>
    </Flex>
  );
};
