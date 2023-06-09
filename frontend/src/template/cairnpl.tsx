import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
    const a = ["Siła", "Zręczność", "Wola"];
    return a.map(it => ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr_max",
        rolls: [
            {
                valType: "target",
                notation: "1d20",
                successRule: "cairn:standard",
                comment: `${it}`,
            },
            // {
            //     valType: "target",
            //     notation: "2d20",
            //     successRule: "cairn:standard",
            //     comment: `${it}: łatwy`,
            //     iconColor: "darkgreen"
            // },
            // {
            //     valType: "target",
            //     notation: "2d20",
            //     successRule: "total:cairn:hard",
            //     comment: `${it}: trudny`,
            //     iconColor: "darkred"
            // },
        ]
    } as CharTemplateItem));
}

export const csTplCairnPl: CharTemplate = {
    id: "cairn-pl",
    name: "Cairn PL",
    game: "Cairn",
    sections: [
        {
            title: "Zdolności",
            items: genAttrs()
        },
        {
            title: "Stan",
            items: [
                {
                    id: "pancerz",
                    name: "Pancerz",
                    itype: "attr",
                },
                {
                    id: "ochrona",
                    name: "Ochrona",
                    itype: "attr_max",
                },
                {
                    id: "dyskomfort",
                    name: "Dyskomfort",
                    text: "Dyskomfort",
                    itype: "check",
                }
            ]
        },
        {
            title: "Ekwipunek",
            items: [
                {
                    id: "zloto",
                    name: "Złoto",
                    itype: "attr",
                },
                {
                    id: "ekwip_0",
                    itype: "text",
                    name: "Lewa ręka",
                },
                {
                    id: "ekwip_0_zm",
                    name: "Zmęczenie: lewa ręka",
                    text: "Zmęczenie: lewa ręka",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_1",
                    itype: "text",
                    name: "Prawa ręka",
                },
                {
                    id: "ekwip_1_zm",
                    name: "Zmęczenie: prawa ręka",
                    text: "Zmęczenie: prawa ręka",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_2",
                    itype: "text",
                    name: "Ciało 1",
                },
                {
                    id: "ekwip_2_zm",
                    name: "Zmęczenie: ciało 1",
                    text: "Zmęczenie: ciało 1",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_3",
                    itype: "text",
                    name: "Ciało 2",
                },
                {
                    id: "ekwip_3_zm",
                    name: "Zmęczenie: ciało 2",
                    text: "Zmęczenie: ciało 2",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_4",
                    itype: "text",
                    name: "Plecak 1",
                },
                {
                    id: "ekwip_4_zm",
                    name: "Zmęczenie: plecak 1",
                    text: "Zmęczenie: plecak 1",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_5",
                    itype: "text",
                    name: "Plecak 2",
                },
                {
                    id: "ekwip_5_zm",
                    name: "Zmęczenie: plecak 2",
                    text: "Zmęczenie: plecak 2",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_6",
                    itype: "text",
                    name: "Plecak 3",
                },
                {
                    id: "ekwip_6_zm",
                    name: "Zmęczenie: plecak 3",
                    text: "Zmęczenie: plecak 3",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_7",
                    itype: "text",
                    name: "Plecak 4",
                },
                {
                    id: "ekwip_7_zm",
                    name: "Zmęczenie: plecak 4",
                    text: "Zmęczenie: plecak 4",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_8",
                    itype: "text",
                    name: "Plecak 5",
                },
                {
                    id: "ekwip_8_zm",
                    name: "Zmęczenie: plecak 5",
                    text: "Zmęczenie: plecak 5",
                    itype: "check",
                    color: "red"
                },
                {
                    id: "ekwip_9",
                    itype: "text",
                    name: "Plecak 6",
                },
                {
                    id: "ekwip_9_zm",
                    name: "Zmęczenie: plecak 6",
                    text: "Zmęczenie: plecak 6",
                    itype: "check",
                    color: "red"
                },
            ]
        }
    ]
}