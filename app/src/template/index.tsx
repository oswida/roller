import { CharTemplate } from "~/common";
import { SelectItem } from "~/component";
import { csTplRomancja } from "./romancja";
import { csTplMotwPl_Ekspert, csTplMotwPl_Niebianin, csTplMotwPl_Spiskolog } from "./motwpl";
import { csTplCairnPl } from "./cairnpl";

const newTplList = [csTplRomancja, csTplMotwPl_Spiskolog, csTplCairnPl,
  csTplMotwPl_Niebianin, csTplMotwPl_Ekspert];

export const charTemplates: Record<string, CharTemplate | undefined> = {
  "": undefined,
};

newTplList.forEach((it) => {
  charTemplates[it.id] = it;
});

export const charTemplateItems: SelectItem[] = newTplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));