import {
  CTIComputedData,
  CharTemplateItemRoll,
  CsInfo,
  RollDefInfo,
  enrollTask,
  rollDef,
  setChatViewTab,
} from "~/common";
import { charTemplates } from "~/template";

export const actionRoll = (
  tplName: string | undefined,
  roll: CharTemplateItemRoll,
  value: string,
  mods?: number
) => {
  const num = Number.parseInt(value.trim());
  if (Number.isNaN(num)) return;
  switch (roll.valType) {
    case "modifier":
    case "modifier_plus_mod":
      const info: RollDefInfo = {
        id: "",
        dice: roll.notation,
        modifier: mods ? num + mods : num,
        name: "",
        successRule: roll.successRule ? roll.successRule : "",
        successTarget: "",
      };
      setChatViewTab("rolls");
      enrollTask(() => rollDef(info, false, `${roll.comment} (${tplName})`));
      break;
    case "target":
    case "target_plus_mod":
      const info2: RollDefInfo = {
        id: "",
        dice: roll.notation,
        modifier: 0,
        name: "",
        successRule: roll.successRule ? roll.successRule : "",
        successTarget: mods ? `${num + mods}` : `${num}`,
        comment: mods ? `${roll.comment} ${mods}` : roll.comment
      };
      setChatViewTab("rolls");
      enrollTask(() => rollDef(info2, false, `${info2.comment} (${tplName})`));
      break;
  }
};

export const actionCompute = (changedId: string, cs: CsInfo) => {
  const tpl = charTemplates[cs.template];
  const result: Record<string, any> = {};
  if (!tpl || !tpl.computeDeps) return {};
  const list = tpl.computeDeps[changedId];
  if (!list || list.length === 0) return {};
  list.forEach((it) => {
    const items = tpl.sections
      .flatMap((s) => s.items)
      .filter((tt) => tt.id === it);
    if (items.length > 0) {
      const data = items[0].data as CTIComputedData;
      if (!data) return;
      const r = data.compute(items[0], cs.values);
      console.log("actionCompute", r);
      result[items[0].id] = r;
    }
  });
  return result;
};
