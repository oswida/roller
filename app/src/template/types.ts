import { CstPotworTygodniaSpiskolog } from "./motw-pl";


export type CsItem = {
    id: string;
    title: string;
    itype: "radio-line" | "radio-list";
    details: string[];
}

export type CsSection = {
    title: string;
    description: string;
    items: CsItem[];
}

export type CsTemplate = {
    id: string;
    name: string;
    sections: CsSection[];
}


export const CS_TEMPLATES: Record<string, CsTemplate> = {
    "e063597b-e67a-4135-ba88-1d0dfc127904": CstPotworTygodniaSpiskolog
}