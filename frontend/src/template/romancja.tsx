import {
  CTIResourceData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";

const genAttrs = () => {
  const a = ["Siła", "Walka", "Ruch", "Urok", "Rozum", "Duch"];
  return a.map(
    (it) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        rolls: [
          {
            valType: "target",
            notation: "2d10",
            successRule: "pio3s:standard",
            comment: `${it}: standard`,
          },
          {
            valType: "target",
            notation: "3d10",
            successRule: "pio3s:standard",
            comment: `${it}: ułatwienie`,
            iconColor: "#1A9935",
          },
          {
            valType: "target",
            notation: "3d10",
            successRule: "pio3s:standard",
            comment: `${it}: utrudnienie`,
            iconColor: "#ED9702",
          },
        ],
      } as CharTemplateItem)
  );
};

export const csTplRomancja: CharTemplate = {
  id: "romancja-new",
  name: "Romancja",
  game: "Pio 3S",
  sections: [
    {
      title: "Atrybuty",
      items: [
        ...genAttrs(),
        {
          id: "fortune_roll",
          name: "Rzut przeznaczenia (Fortune Roll)",
          description: "Rzut przeznaczenia (Fortune Roll)",
          itype: "label",
          hint: "Użyj tego rzutu aby rzucić 1k6",
          rolls: [
            {
              notation: "1d6",
              comment: "Fortune roll",
              valType: "target",
            },
            {
              notation: "1d6",
              comment: "Fortune roll+mod",
              valType: "target_plus_mod",
              labels: ["Modyfikator rzutu"],
              iconColor: "#ED9702",
            },
          ],
        },
      ],
    },
    {
      title: "Zdrowie",
      items: [
        {
          id: "zdrowie_fizyczne",
          name: "Zdrowie fizyczne",
          itype: "resource",
          data: {
            max: 10,
            shape: "circle",
          } as CTIResourceData,
          color: "#ec3c3c",
        },
        {
          id: "zdrowie_psychiczne",
          name: "Zdrowie psychiczne",
          itype: "resource",
          data: {
            max: 10,
            shape: "circle",
          } as CTIResourceData,
          color: "#6795f0",
        },
        {
          id: "laska_bogow",
          name: "Łaska bogów",
          itype: "resource",
          data: {
            max: 5,
            shape: "circle",
          } as CTIResourceData,
          color: "#deba30",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "talenty_ekwipunek",
          itype: "text",
          name: "Talenty i ekwipunek",
          data: {
            large: true,
          } as CTITextData,
        },
        {
          id: "rozne",
          itype: "text",
          name: "Różne",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};
