import { CharTemplate, CharTemplateItem } from "~/common";

const genApproaches = () => {
  const a = ["Podstępna", "Pomysłowa", "Siłowa", "Szybka", "Uważna", "Widowiskowa"];
  return a.map(
    (it) =>
    ({
      id: it.toLowerCase().normalize(),
      name: it,
      itype: "attr",
      rolls: [
        {
          valType: "modifier",
          notation: "4df",
          // successRule: "fate:standard",
          comment: `${it}`,
        },
      ],
    } as CharTemplateItem)
  );
};

export const csTplFAEPL: CharTemplate = {
  id: "fae-pl",
  name: "Fate Accelerated PL",
  game: "FATE",
  sections: [
    {
      title: "Postawy",
      items: genApproaches(),
    },
    {
      title: "Stan",
      items: [
        {
          id: "odwiezanie",
          name: "Odświeżanie",
          itype: "attr",
        },
        {
          id: "pkt_losu",
          name: "Punkty losu",
          itype: "attr",
        },
        {
          id: "presja",
          name: "Presja",
          itype: "resource_square",
          limit: 3
        },
        {
          id: "konsekwencja_lagodna",
          name: "Łagodna konsekwencja (2)",
          itype: "text_check",
          limit: 1
        },
        {
          id: "konsekwencja_umiarkowana",
          name: "Umiarkowana konsekwencja (4)",
          itype: "text_check",
          limit: 1
        },
        {
          id: "konsekwencja_dotkliwa",
          name: "Dotkliwa konsekwencja (6)",
          itype: "text_check",
          limit: 1
        }
      ],
    },
    {
      title: "Aspekty",
      items: [
        {
          id: "koncepcja",
          name: "Koncepcja ogólna",
          itype: "text",
        },
        {
          id: "utrapienie",
          itype: "text",
          name: "Utrapienie",
        },
        {
          id: "aspekt_3",
          itype: "text",
          name: "Aspekt 3",
        },
        {
          id: "aspekt_4",
          itype: "text",
          name: "Aspekt 4",
        },
        {
          id: "aspekt_5",
          itype: "text",
          name: "Aspekt 5",
        },
      ],
    },
    {
      title: "Sztuczki",
      items: [
        {
          id: "sztuczki",
          itype: "big_text",
          name: "Sztuczki"
        }
      ]
    },
    {
      title: "Notatki",
      items: [
        {
          id: "rozne",
          itype: "big_text",
          name: "Różne"
        }
      ]
    }
  ],
};
