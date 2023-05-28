import { CharTemplate } from "~/common";

export const csTplRomancja: CharTemplate = {
    id: "romancja-new",
    name: "Romancja",
    game: "Pio 3S",
    sections: [
        {
            title: "Atrybuty",
            items: [
                {
                    id: "sila",
                    name: "Siła",
                    itype: "attr",
                    rolls: [
                        {
                            valType: "target",
                            notation: "2d10",
                            successRule: "pio3s:standard",
                            comment: "Siła: standard",
                            iconColor: "orange"
                        }
                    ]
                }
            ]
        }
    ]
}