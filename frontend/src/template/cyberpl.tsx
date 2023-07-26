import {
  CTIAttrData,
  CTICheckData,
  CTIContainerData,
  CTISelectData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";

const genAttrs = () => {
  const a = ["Biologia", "Psyche", "Interfejs"];
  return a.map(
    (it) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        data: {
          withMax: true,
        } as CTIAttrData,
        initialValue: 10,
        rolls: [
          {
            valType: "target",
            notation: "1d20",
            successRule: "cairn:standard",
            comment: `${it}`,
          },
          {
            valType: "target",
            notation: "2d20",
            successRule: "cairn:standard",
            comment: `${it}: łatwy`,
            iconColor: "#286623",
          },
          {
            valType: "target",
            notation: "2d20",
            successRule: "cairn:hard",
            comment: `${it}: trudny`,
            iconColor: "#941e18",
          },
        ],
      } as CharTemplateItem)
  );
};

export const csTplCyberPl: CharTemplate = {
  id: "cyber-pl",
  name: "Cyber PL standard",
  game: "Cyber",
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
          initialValue: 3,
          data: {
            withMax: true,
          } as CTIAttrData,
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
      title: "Finanse",
      items: [
        {
          id: "l1",
          itype: "label",
          name: "",
          description: "Abonament",
        },
        {
          id: "f1",
          itype: "row",
          name: "f1",
          data: {
            items: [
              {
                id: "abonament",
                itype: "select",
                name: "",
                data: {
                  options: ["Brązowy", "Srebrny", "Złoty", "Platynowy"],
                } as CTISelectData,
              },
              {
                id: "kredyty",
                name: "Kredyty",
                itype: "attr",
              },
            ],
          } as CTIContainerData,
        },
      ],
    },
    {
      title: "Ekwipunek",
      items: [
        {
          id: "ekwip_0",
          itype: "text",
          name: "Lewa ręka",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_1",
          itype: "text",
          name: "Prawa ręka",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_2",
          itype: "text",
          name: "Ciało 1",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_3",
          itype: "text",
          name: "Ciało 2",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_4",
          itype: "text",
          name: "Plecak 1",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_5",
          itype: "text",
          name: "Plecak 2",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_6",
          itype: "text",
          name: "Plecak 3",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_7",
          itype: "text",
          name: "Plecak 4",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_8",
          itype: "text",
          name: "Plecak 5",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "ekwip_9",
          itype: "text",
          name: "Plecak 6",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
        {
          id: "dodatkowy_ekwip",
          itype: "list",
          name: "Dodatkowe sloty ekwipunku",
          data: {
            check: true,
            checkLabel: "Zmęczenie",
            reverseHide: true,
          } as CTITextData,
          color: "#ff5252",
        },
      ],
    },
    {
      title: "Cybermodyfikacje i programy",
      items: [
        {
          id: "cybermods",
          itype: "list",
          name: "Cybermodyfikacje",
        },
        {
          id: "programs",
          itype: "list",
          name: "Programy",
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
