import { SelectItem } from "~/component"
import { templateRomancja } from "./romancja"
import { CsTemplate, csTemplateId } from "~/common"

export * from "./romancja"



export const csTemplates: Record<csTemplateId, CsTemplate | undefined> = {
    "pio3s-romancja": templateRomancja,
    "": undefined
}