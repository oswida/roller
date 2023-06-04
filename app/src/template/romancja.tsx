import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
    const a = ["Siła", "Walka", "Ruch", "Urok", "Rozum", "Duch"];
    return a.map(it => ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        rolls: [
            {
                valType: "target",
                notation: "2d10",
                successRule: "pio3s:standard",
                comment: `${it}: standard`,
                // iconColor: "orange"
            },
            {
                valType: "target",
                notation: "3d10",
                successRule: "pio3s:standard",
                comment: `${it}: ułatwienie`,
                iconColor: "darkgreen"
            },
            {
                valType: "target",
                notation: "3d10",
                successRule: "pio3s:standard",
                comment: `${it}: utrudnienie`,
                iconColor: "darkred"
            }
        ]
    } as CharTemplateItem));
}

export const csTplRomancja: CharTemplate = {
    id: "romancja-new",
    name: "Romancja",
    game: "Pio 3S",
    sections: [
        {
            title: "Atrybuty",
            items: genAttrs()
        },
        {
            title: "Zdrowie",
            items: [
                {
                    id: "zdrowie_fizyczne",
                    name: "Zdrowie fizyczne",
                    itype: "resource",
                    limit: 10,
                    color: "#ec3c3c"
                },
                {
                    id: "zdrowie_psychiczne",
                    name: "Zdrowie psychiczne",
                    itype: "resource",
                    limit: 10,
                    color: "#6795f0"
                },
                {
                    id: "laska_bogow",
                    name: "Łaska bogów",
                    itype: "resource",
                    limit: 5,
                    color: "#deba30"
                }
            ]
        },
        {
            title: "Notatki",
            items: [
                {
                    id: "talenty_ekwipunek",
                    itype: "text",
                    name: "Talenty i ekwipunek",
                },
                {
                    id: "rozne",
                    itype: "text",
                    name: "Różne",
                }
            ]
        }
    ]
}