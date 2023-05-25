import { CsTemplate } from "~/common";
import { SelectItem } from "~/component";
import { templateRomancja } from "./romancja";
import { templateWzmPL } from "./wzmpl";
import { templateCyberPL } from "./cyberpl";

const tplList = [templateRomancja, templateWzmPL, templateCyberPL];

export const csTemplates: Record<string, CsTemplate | undefined> = {
  "": undefined,
};
tplList.forEach((it) => {
  csTemplates[it.id] = it;
});

export const csTemplateItems: SelectItem[] = tplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));
