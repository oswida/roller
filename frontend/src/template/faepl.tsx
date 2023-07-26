import {
  CTIAttrData,
  CTIContainerData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";

const genApproaches = () => {
  const a = [
    "Podstępna",
    "Pomysłowa",
    "Siłowa",
    "Szybka",
    "Uważna",
    "Widowiskowa",
  ];
  const h = [
    "gdy stosujesz zmyłkę, działasz ukradkiem lub oszukujesz",
    "gdy wymagane jest szybkie myślenie, rozwiązywanie problemów lub branie pod uwagę złożonych zmiennych",
    "gdy używasz brutalnej siły",
    "gdy działasz szybko i zręcznie",
    "gdy poświęcasz czas, aby wykonać czynności prawidłowo, przywiązując wagę do szczegółów",
    "gdy działasz ze stylem i polotem",
  ];
  return a.map(
    (it, idx) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        hint: h[idx],
        data: {
          wide: true,
        } as CTIAttrData,
        rolls: [
          {
            valType: "modifier",
            notation: "4df",
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
          data: {
            wide: true,
          } as CTIAttrData,
        },
        {
          id: "pkt_losu",
          name: "Punkty losu",
          itype: "attr",
          data: {
            wide: true,
          } as CTIAttrData,
        },
        {
          id: "presja",
          name: "presja",
          itype: "row",
          data: {
            items: [
              {
                id: "presja_1",
                name: "Presja (1)",
                description: "Presja (1)",
                itype: "check",
              },
              {
                id: "presja_2",
                name: "Presja (2)",
                description: "Presja (2)",
                itype: "check",
              },
              {
                id: "presja_3",
                name: "Presja (3)",
                description: "Presja (3)",
                itype: "check",
              },
            ],
          } as CTIContainerData,
        },
        {
          id: "konsekwencja_lagodna",
          name: "Łagodna konsekwencja (2)",
          itype: "text",
          data: {
            check: true,
            maxLines: 1,
          } as CTITextData,
        },
        {
          id: "konsekwencja_umiarkowana",
          name: "Umiarkowana konsekwencja (4)",
          itype: "text",
          data: {
            check: true,
            maxLines: 1,
          } as CTITextData,
        },
        {
          id: "konsekwencja_dotkliwa",
          name: "Dotkliwa konsekwencja (6)",
          itype: "text",
          data: {
            check: true,
            maxLines: 1,
          } as CTITextData,
        },
      ],
    },
    {
      title: "Aspekty",
      items: [
        {
          id: "koncepcja",
          name: "Koncepcja ogólna",
          itype: "text",
          hint: "To pojedyncza fraza lub zdanie, które zgrabnie podsumowuje bohatera – opisuje, kim jest, czym się zajmuje, jak się zachowuje. Myśląc o koncepcji ogólnej, spróbuj sobie wyobrazić, w jaki sposób ten aspekt może ci pomóc oraz jak może uprzykrzyć ci życie",
        },
        {
          id: "utrapienie",
          itype: "text",
          name: "Utrapienie",
          hint: "To może być jakaś osobista słabość lub powracający wróg bądź też ważne zobowiązanie – wszystko to, co może skomplikować ci życie.",
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
          itype: "list",
          name: "Sztuczki",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
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
