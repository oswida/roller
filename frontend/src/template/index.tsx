import { CharTemplate } from "~/common";
import { SelectItem } from "~/components";
import { csTplCairnPl } from "./cairnpl";
import {
  csTplMotwPl_Ekspert,
  csTplMotwPl_Niebianin,
  csTplMotwPl_Spiskolog,
} from "./motwpl";
import { csTplRomancja } from "./romancja";
import { csTplFAEPL } from "./faepl";
import { csTplCyberPl } from "./cyberpl";
import {
  csTplGlinaBH,
  csTplGlinaCB,
  csTplGlinaKR,
  csTplGlinaNG,
  csTplGlinaPB,
} from "./glina";

const newTplList = [
  csTplRomancja,
  csTplCairnPl,
  csTplMotwPl_Niebianin,
  csTplMotwPl_Ekspert,
  csTplMotwPl_Spiskolog,
  csTplFAEPL,
  csTplCyberPl,
  csTplGlinaBH,
  csTplGlinaCB,
  csTplGlinaKR,
  csTplGlinaNG,
  csTplGlinaPB,
];

export const charTemplates: Record<string, CharTemplate | undefined> = {
  "": undefined,
};

export const charTemplateGames: Record<string, CharTemplate[]> = {};

newTplList.forEach((it) => {
  charTemplates[it.id] = it;
  if (!charTemplateGames[it.game]) {
    charTemplateGames[it.game] = [];
  }
  charTemplateGames[it.game].push(it);
});

export const charTemplateItems: SelectItem[] = newTplList
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((it) => ({ id: it.id, label: it.name } as SelectItem));

export const charTemplateGameItems: SelectItem[] = Object.keys(
  charTemplateGames
)
  .sort((a, b) => a.localeCompare(b))
  .map((it) => ({ id: it, label: it } as SelectItem));
