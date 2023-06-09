import { JSXElement, ParentComponent } from "solid-js";
import { AlertDialog } from "@kobalte/core";
import { dialogPositionerStyle, dialogRootStyle, dialogTitleStyle } from "../Dialog/styles.css";
import { dialogHeaderStyle } from "../Dialog/styles.css";
import { dialogOverlayStyle } from "../Dialog/styles.css";
import { dialogContentStyle } from "../Dialog/styles.css";
import { buttonStyle } from "../Button/styles.css";
import { FaSolidXmark } from "solid-icons/fa";

type Props = {
    onOpenChange: (value: boolean) => void;
    open: () => boolean;
    label: string;
    trigger?: JSXElement;
    triggerHint?: string;
}

export const Alert: ParentComponent<Props> = ({ open, onOpenChange, children, label, trigger, triggerHint }) => {
    return <AlertDialog.Root onOpenChange={onOpenChange} open={open()} >
        <AlertDialog.Trigger class={buttonStyle({})} title={triggerHint}>
            {trigger}
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay class={dialogOverlayStyle} />
            <div class={dialogPositionerStyle}>
                <AlertDialog.Content class={dialogRootStyle}>
                    <div class={dialogHeaderStyle}>
                        <AlertDialog.Title class={dialogTitleStyle}>{label}</AlertDialog.Title>
                        <AlertDialog.CloseButton class={buttonStyle({})}>
                            <FaSolidXmark />
                        </AlertDialog.CloseButton>
                    </div>
                    <AlertDialog.Description class={dialogContentStyle}>
                        {children}
                    </AlertDialog.Description>
                </AlertDialog.Content>
            </div>
        </AlertDialog.Portal>
    </AlertDialog.Root>
}