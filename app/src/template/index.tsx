import { templateRomancja } from "./romancja"
import { CsTemplate, csTemplateId } from "~/common"
import { templateWzmPL } from "./wzmpl"

export * from "./romancja"



export const csTemplates: Record<csTemplateId, CsTemplate | undefined> = {
    "pio3s-romancja": templateRomancja,
    "wzm-pl": templateWzmPL,
    "": undefined
}