import { Popover as Pop } from "@kobalte/core";
import { FaSolidXmark } from "solid-icons/fa";
import { ParentComponent } from "solid-js";
import { buttonStyle } from "../Button/styles.css";
import { popoverContentStyle, popoverRootStyle } from "./styles.css";

export const Popover: ParentComponent = ({ children }) => {
  return (
    <Pop.Root class={popoverRootStyle}>
      <Pop.Trigger class={buttonStyle({ variant: "icon" })}>
        {children}
      </Pop.Trigger>
      <Pop.Portal class={popoverRootStyle}>
        <Pop.Content class={popoverContentStyle}>
          <Pop.Arrow />
          <div class="popover__header">
            <Pop.Title class="popover__title">About Kobalte</Pop.Title>
            <Pop.CloseButton class={buttonStyle({ variant: "icon" })}>
              <FaSolidXmark />
            </Pop.CloseButton>
          </div>
          <Pop.Description class="popover__description">
            A UI toolkit for building accessible web apps and design systems
            with SolidJS.
          </Pop.Description>
        </Pop.Content>
      </Pop.Portal>
    </Pop.Root>
  );
};
