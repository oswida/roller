import {
  CTIAttrData,
  CTICheckData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";

const genAttrs = () => {
  const a = ["Siła", "Zręczność", "Wola"];
  return a.map(
    (it) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        data: { withMax: true } as CTIAttrData,
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
          itype: "attr",
          data: { withMax: true } as CTIAttrData,
        },
        {
          id: "dyskomfort",
          name: "Dyskomfort",
          description: "DYSKOMFORT",
          itype: "check",
          color: "#ff5252",
          data: {
            dotLabel:
              "Jeśli postać ma zaznaczony dyskomfort, nie może odzyskiwać pkt Ochrony ani Zdolności. Jeśli dyskomfort utrzymuje się wiecej niż jeden dzień, należy dodać 1 pkt Zmęczenia za każdy następny dzień w tym stanie.",
          } as CTICheckData,
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
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_1",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_2",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_3",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_4",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_5",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_6",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_7",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_8",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_9",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "dodatkowy_ekwip",
          itype: "text",
          name: "Lewa ręka",
          data: { check: true, checkLabel: "Zmęczenie" } as CTITextData,
          color: "#ff5252",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "Postać",
          name: "Postać",
          itype: "text",
          data: { large: true } as CTITextData,
        },
        {
          id: "Sesje",
          name: "Sesje",
          itype: "text",
          data: { large: true } as CTITextData,
        },
      ],
    },
  ],
};
