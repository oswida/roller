import { CharTemplate, CsTemplate } from "~/common";
import { SelectItem } from "~/component";
import { csTplRomancja } from "./romancja";
import { csTplMotwPl_Spiskolog } from "./motwpl";

const newTplList = [csTplRomancja, csTplMotwPl_Spiskolog];

export const charTemplates: Record<string, CharTemplate | undefined> = {
  "": undefined,
};

newTplList.forEach((it) => {
  charTemplates[it.id] = it;
});

export const charTemplateItems: SelectItem[] = newTplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));