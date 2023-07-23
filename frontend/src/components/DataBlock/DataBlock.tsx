import { ComponentProps, JSX, ParentComponent } from "solid-js";
import { dataLabelStyle, dataValueStyle, dataBlockStyle } from "./styles.css";
import { themeTokenType } from "~/common/theme.css";
import { createFlexVariants } from "~/common";

type DataLabelProps = {
  colorSchema?: themeTokenType;
  backgroundSchema?: themeTokenType;
  scale?:
    | "flex1"
    | "flex2"
    | "flex3"
    | "flex4"
    | "flex5"
    | "flex6"
    | "flex7"
    | "flex8"
    | "flex9"
    | "flex10";
};

export const DataLabel: ParentComponent<DataLabelProps> = (props) => {
  return (
    <div
      class={dataLabelStyle({
        colorSchema: props.colorSchema,
        backgroundSchema: props.backgroundSchema,
        scale: props.scale,
      })}
    >
      {props.children}
    </div>
  );
};

type DataValueProps = {
  colorSchema?: themeTokenType;
  backgroundSchema?: themeTokenType;
  scale?:
    | "flex1"
    | "flex2"
    | "flex3"
    | "flex4"
    | "flex5"
    | "flex6"
    | "flex7"
    | "flex8"
    | "flex9"
    | "flex10";
};

export const DataValue: ParentComponent<DataValueProps> = (props) => {
  return (
    <div
      class={dataValueStyle({
        colorSchema: props.colorSchema,
        backgroundSchema: props.backgroundSchema,
        scale: props.scale,
      })}
    >
      {props.children}
    </div>
  );
};

export const DataBlock: ParentComponent<ComponentProps<"div">> = ({
  children,
  ...rest
}) => {
  return (
    <div class={dataBlockStyle} {...rest}>
      {children}
    </div>
  );
};

// export const DataBlock: Component<Props> = ({
//   left,
//   right,
//   leftBackground,
//   rightBackground,
//   leftFunc,
//   rightFunc,
//   widthLeft,
//   widthRight,
//   width,
// }) => {
//   const leftElement = createMemo(() => {
//     if (left) return left;
//     if (leftFunc) return leftFunc();
//     return undefined;
//   });

//   const rightElement = createMemo(() => {
//     if (right) return right;
//     if (rightFunc) return rightFunc();
//     return undefined;
//   });

//   return (
//     <Flex
//       justify="space"
//       align="center"
//       style={{ width: width, "min-height": "fit-content" }}
//       gap="none"
//     >
//       <Show when={left || leftFunc}>
//         <div
//           style={{
//             width: widthLeft
//               ? widthLeft
//               : right || rightFunc
//               ? "50%"
//               : undefined,
//           }}
//           class={datablockStyle({
//             position: "left",
//             background: leftBackground,
//           })}
//         >
//           {leftElement()}
//         </div>
//       </Show>
//       <Show when={right || rightFunc}>
//         <div
//           style={{
//             width: widthRight
//               ? widthRight
//               : left || leftFunc
//               ? "50%"
//               : undefined,
//           }}
//           class={datablockStyle({
//             position: "right",
//             background: rightBackground,
//           })}
//         >
//           {rightElement()}
//         </div>
//       </Show>
//     </Flex>
//   );
// };
