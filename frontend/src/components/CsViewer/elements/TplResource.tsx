import { FaSolidCircleInfo, FaSolidMinus, FaSolidPlus } from "solid-icons/fa";
import { Component, For, Show, createMemo } from "solid-js";
import {
  CharTemplateItem,
  centPublish,
  currentCs,
  isCsOwner,
  netTopic,
  setCurrentCs,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { themeColor } from "~/common/theme.css";
import { charTemplates } from "~/template";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import { actionCompute } from "../actions";
import { csTplIconStyle, tplResourceItemStyle } from "../styles.css";

type Props = {
  item: CharTemplateItem;
  state?: boolean;
  square?: boolean;
};

export const TplResource: Component<Props> = ({ item, state, square }) => {
  const numValue = createMemo(() => {
    const info = currentCs();
    if (!info || !info.values[item.id]) return 0;
    const num = Number.parseInt(info.values[item.id]);
    if (Number.isNaN(num)) return 0;
    return num;
  });

  const incNumValue = (up: boolean) => {
    const info = currentCs();
    if (!info) {
      return;
    }
    let v = numValue();
    if (up) v += 1;
    else v -= 1;
    if (v < 0) v = 0;
    if (v > (item.limit ? item.limit : 1)) v = item.limit ? item.limit : 1;
    info.values[item.id] = v;
    const tpl = charTemplates[info.template];
    if (tpl?.computeDeps && tpl?.computeDeps[item.id]) {
      const v = actionCompute(item.id, info);
      info.values = { ...info.values, ...v };
    }

    updateCsStorage(info);
    setCurrentCs(undefined);
    setCurrentCs({ ...info });
    centPublish(netTopic(topicCsInfo), info);
  };

  return (
    <Flex direction="column" gap="small">
      <Flex style={{ "align-items": "center" }} gap="medium">
        <Text fontSize="smaller" colorSchema="secondary">
          {item.name}
        </Text>
        <Show when={item.hint && item.hint !== ""}>
          <div title={item.hint} style={{ cursor: "help" }}>
            <FaSolidCircleInfo fill={themeColor.accent} />
          </div>
        </Show>
      </Flex>
      <Flex gap="small" style={{ "align-items": "center" }}>
        <Flex direction="column" gap="small" center>
          <Show when={state && item.labels && item.labels[0]}>
            <Text fontSize="smaller">{item.labels ? item.labels[0] : ""}</Text>
          </Show>
          <Show when={isCsOwner(currentCs())}>
            <div class={csTplIconStyle} onClick={() => incNumValue(false)}>
              <FaSolidMinus style={{ fill: "currentcolor" }} />
            </div>
          </Show>
        </Flex>
        <For each={new Array(item.limit).fill(" ")}>
          {(it, idx) => (
            <>
              <Show when={idx() < numValue()}>
                <div
                  class={tplResourceItemStyle({
                    shape: square ? "square" : "circle",
                  })}
                  style={{
                    "background-color": item.color
                      ? item.color
                      : "currentcolor",
                  }}
                >
                  {" "}
                </div>
              </Show>
              <Show when={idx() >= numValue()}>
                <div
                  class={tplResourceItemStyle({
                    shape: square ? "square" : "circle",
                  })}
                  style={{
                    border: `solid 1px ${
                      item.color ? item.color : "currentcolor"
                    }`,
                  }}
                >
                  {" "}
                </div>
              </Show>
            </>
          )}
        </For>
        <Flex direction="column" gap="small" center>
          <Show when={state && item.labels && item.labels.length > 1}>
            <Text fontSize="smaller">{item.labels ? item.labels[1] : ""}</Text>
          </Show>
          <Show when={isCsOwner(currentCs())}>
            <div class={csTplIconStyle} onClick={() => incNumValue(true)}>
              <FaSolidPlus style={{ fill: "currentcolor" }} />
            </div>
          </Show>
        </Flex>
      </Flex>
    </Flex>
  );
};
