import { CharTemplate, CsTemplate } from "~/common";
import { SelectItem } from "~/component";
import { templateRomancja2 } from "./romancja2";
import { templateWzmPL } from "./wzmpl";
import { templateCyberPL } from "./cyberpl";
import { csTplRomancja } from "./romancja";

const tplList = [templateRomancja2, templateWzmPL, templateCyberPL];

export const csTemplates: Record<string, CsTemplate | undefined> = {
  "": undefined,
};
tplList.forEach((it) => {
  csTemplates[it.id] = it;
});

export const csTemplateItems: SelectItem[] = tplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));

const newTplList = [csTplRomancja];

export const charTemplates: Record<string, CharTemplate | undefined> = {
  "": undefined,
};

newTplList.forEach((it) => {
  charTemplates[it.id] = it;
});

export const charTemplateItems: SelectItem[] = newTplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));