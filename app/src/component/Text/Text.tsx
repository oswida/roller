import { ComponentProps, ParentComponent } from "solid-js";
import { textStyle } from "./styles.css";

type Props = {
  colorSchema?: "primary" | "secondary" | "background" | "accent" | "danger";
  fontSize?: "smaller" | "small" | "standard" | "bigger" | "big";
};

export const Text: ParentComponent<Props & ComponentProps<"div">> = ({
  children,
  colorSchema,
  fontSize,
  ...rest
}) => {
  return (
    <div class={textStyle({ colorSchema: colorSchema, fontSize: fontSize })} {...rest}>
      {children}
    </div>
  );
};
