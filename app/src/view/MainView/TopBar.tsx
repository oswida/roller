import { Component } from "solid-js";
import { Popover, Text } from "~/component";
import { FaSolidUser } from "solid-icons/fa";
import { topbarStyle } from "./styles.css";
import { appSettings } from "~/common";

export const TopBar: Component = () => {
  return (
    <div class={topbarStyle}>
      <Popover>
        <FaSolidUser />
      </Popover>
      <Text colorSchema="secondary">{appSettings().currentRoom}</Text>
    </div>
  );
};
