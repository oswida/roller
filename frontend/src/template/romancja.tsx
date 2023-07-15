import { CharTemplate, CharTemplateItem } from "~/common";

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
            iconColor: "darkgreen",
          },
          {
            valType: "target",
            notation: "3d10",
            successRule: "pio3s:standard",
            comment: `${it}: utrudnienie`,
            iconColor: "darkred",
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
          text: "Rzut przeznaczenia (Fortune Roll)",
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
              iconColor: "#aaaaaa",
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
          limit: 10,
          color: "#ec3c3c",
        },
        {
          id: "zdrowie_psychiczne",
          name: "Zdrowie psychiczne",
          itype: "resource",
          limit: 10,
          color: "#6795f0",
        },
        {
          id: "laska_bogow",
          name: "Łaska bogów",
          itype: "resource",
          limit: 5,
          color: "#deba30",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "talenty_ekwipunek",
          itype: "big_text",
          name: "Talenty i ekwipunek",
        },
        {
          id: "rozne",
          itype: "big_text",
          name: "Różne",
        },
      ],
    },
  ],
};
