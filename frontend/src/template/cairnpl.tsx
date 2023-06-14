import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
  const a = ["Siła", "Zręczność", "Wola"];
  return a.map(
    (it) =>
    ({
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
      ],
    } as CharTemplateItem)
  );
};

export const csTplCairnPl: CharTemplate = {
  id: "cairn-pl",
  name: "Cairn PL",
  game: "Cairn",
  sections: [
    {
      title: "Zdolności",
      items: genAttrs(),
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
          text: "DYSKOMFORT",
          itype: "check",
          color: "#ff5252"
        },
      ],
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
          itype: "text_check",
          name: "Lewa ręka",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_1",
          itype: "text_check",
          name: "Prawa ręka",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_2",
          itype: "text_check",
          name: "Ciało 1",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_3",
          itype: "text_check",
          name: "Ciało 2",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_4",
          itype: "text_check",
          name: "Plecak 1",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_5",
          itype: "text_check",
          name: "Plecak 2",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_6",
          itype: "text_check",
          name: "Plecak 3",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_7",
          itype: "text_check",
          name: "Plecak 4",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_8",
          itype: "text_check",
          name: "Plecak 5",
          hint: "Zmęczenie",
          color: "#ff5252"
        },
        {
          id: "ekwip_9",
          itype: "text_check",
          name: "Plecak 6",
          hint: "Zmęczenie",
          color: "#ff5252"
        }
      ],
    }, {
      title: "Notatki",
      items: [
        {
          id: "Postać",
          name: "Postać",
          itype: "big_text"
        },
        {
          id: "Sesje",
          name: "Sesje",
          itype: "big_text"
        }
      ]
    }
  ],
};
