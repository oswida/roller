import { Component, createMemo, createSignal } from "solid-js";
import { Dialog } from "./Dialog";
import { Input } from "../Input";
import { Flex } from "../Flex";
import { Button } from "../Button";

export type InputDialogStateType = {
  open: boolean;
  title: string;
  label: string;
  callback: (value: string) => void;
};

export const [inputDialogState, setInputDialogState] =
  createSignal<InputDialogStateType>({
    open: false,
    title: "",
    label: "",
    callback: (value: string) => {},
  });

export const InputDialog: Component = () => {
  let inputRef: HTMLInputElement;

  const inputLabel = createMemo(() => {
    return inputDialogState().label;
  });

  const accept = () => {
    if (!inputRef) return;
    inputDialogState().callback(inputRef.value);
    setInputDialogState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Dialog
      dialogTitle={() => inputDialogState().title}
      open={() => inputDialogState().open}
      onOpenChange={(value: boolean) =>
        setInputDialogState((prev) => ({ ...prev, open: value }))
      }
    >
      <Flex direction="column" gap="medium">
        <Input
          dynamicLabel={inputLabel}
          ref={(e) => (inputRef = e)}
          style={{ width: "20em" }}
        />
        <Flex gap="large" style={{ "justify-content": "space-around" }}>
          <Button
            onClick={() =>
              setInputDialogState((prev) => ({ ...prev, open: false }))
            }
          >
            Cancel
          </Button>
          <Button onClick={accept}>Accept</Button>
        </Flex>
      </Flex>
    </Dialog>
  );
};
