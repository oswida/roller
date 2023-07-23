import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
  const a = [
    "Siła",
    "Zręczność",
    "Kondycja",
    "Inteligencja",
    "Mądrość",
    "Charyzma",
  ];
  return a.map(
    (it) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        rolls: [
          {
            valType: "target_plus_mod",
            notation: "1d20",
            successRule: "total:ueq",
            comment: `${it}`,
            labels: ["Modyfikator rzutu"],
          },
        ],
      } as CharTemplateItem)
  );
};

const genSavingThrows = () => {
  const a = [
    "Trucizna",
    "Zionięcie",
    "Przemiana",
    "Czary",
    "Magiczne przedmioty",
  ];
  return a.map(
    (it) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: it !== "Magiczne przedmioty" ? "attr" : "attr_wide",
        rolls: [
          {
            valType: "target_plus_mod",
            notation: "1d20",
            successRule: "total:oeq",
            comment: `Obrona: ${it}`,
            labels: ["Modyfikator rzutu"],
          },
        ],
      } as CharTemplateItem)
  );
};

const attrBonus = (value: string) => {
  const num = Number.parseInt(value);
  if (Number.isNaN(num)) return "0";
  switch (num) {
    case 1:
      return "-4";
    case 2:
    case 3:
      return "-3";
    case 4:
    case 5:
      return "-2";
    case 6:
    case 7:
    case 8:
      return "-1";
    case 9:
    case 10:
    case 11:
    case 12:
      return "0";
    case 13:
    case 14:
    case 15:
      return "1";
    case 16:
    case 17:
      return "2";
    case 18:
    case 19:
      return "3";
  }
  return "0";
};

export const csTplWzm6: CharTemplate = {
  id: "wzm-6",
  name: "Wyprawa za Mur (5)",
  game: "Wyprawa za Mur",
  computeDeps: {
    siła: ["premia_sila"],
    zręczność: ["premia_zrecznosc", "kp_premia", "inicjatywa_premia"],
    kondycja: ["premia_kondycja"],
    inteligencja: ["premia_inteligencja"],
    mądrość: ["premia_madrosc"],
    charyzma: ["premia_charyzma"],
    inicjatywa: ["inicjatywa_premia"],
    kp: ["kp_premia"],
  },
  sections: [
    {
      title: "Informacje ogólne",
      items: [
        {
          id: "klasa",
          name: "Klasa",
          itype: "text",
          limit: 1,
        },
        {
          id: "poziom",
          name: "Poziom",
          itype: "text",
          limit: 1,
        },
        {
          id: "swiatopogląd",
          name: "Światopogląd",
          itype: "text",
          limit: 1,
        },
        {
          id: "doswiadczenie",
          name: "Doświadczenie",
          itype: "text",
          limit: 1,
        },
        {
          id: "inicjatywa",
          name: "Inicjatywa",
          itype: "attr",
        },
        {
          id: "inicjatywa_premia",
          name: "Inicjatywa + premia Zr",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            const bonus = attrBonus(values["zręczność"]);
            const num = Number.parseInt(bonus);
            if (Number.isNaN(num)) return "0";
            const num2 = Number.parseInt(values["inicjatywa"].toString());
            if (Number.isNaN(num2)) return "0";
            return `${num + num2}`;
          },
        },
      ],
    },
    {
      title: "Atrybuty",
      items: [
        ...genAttrs(),
        {
          id: "kp",
          name: "Klasa pancerza",
          itype: "attr_wide",
        },
        {
          id: "kp_premia",
          name: "Klasa pancerza + premia Zr",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            const bonus = attrBonus(values["zręczność"]);
            const num = Number.parseInt(bonus);
            if (Number.isNaN(num)) return "0";
            const num2 = Number.parseInt(values["kp"].toString());
            if (Number.isNaN(num2)) return "0";
            return `${num + num2}`;
          },
        },
        {
          id: "pw",
          name: "Wytrzymałość",
          itype: "attr_max",
        },
        {
          id: "pf",
          name: "Punkty fortuny",
          itype: "counter",
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          initialValue: 0,
        },
        {
          id: "premia_atak",
          name: "Premia do ataku",
          itype: "counter",
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          initialValue: 0,
        },
      ],
    },
    {
      title: "Premie",
      items: [
        {
          id: "premia_sila",
          name: "Premia Siły",
          hint: "Walka wręcz, obrażenia wręcz",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["siła"]);
          },
        },
        {
          id: "premia_zrecznosc",
          name: "Premia Zręczności",
          hint: "Strzelanie, klasa pancerza, inicjatywa",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["zręczność"]);
          },
        },
        {
          id: "premia_kondycja",
          name: "Premia Kondycji",
          hint: "Do wytrzymałości na poziom",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["kondycja"]);
          },
        },
        {
          id: "premia_madrosc",
          name: "Premia Mądrości",
          hint: "Do obrony przed kontrolą",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["mądrość"]);
          },
        },
        {
          id: "premia_inteligencja",
          name: "Premia Inteligencji",
          hint: "znanych języków",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["inteligencja"]);
          },
        },
        {
          id: "premia_charyzma",
          name: "Premia Charyzmy",
          hint: "Liczba sojuszników",
          itype: "computed",
          compute: (item: CharTemplateItem, values: Record<string, any>) => {
            return attrBonus(values["charyzma"]);
          },
        },
      ],
    },
    {
      title: "Rzuty obronne",
      items: genSavingThrows(),
    },
    {
      title: "Umiejętności i zdolności",
      items: [
        {
          id: "umiejetnosci",
          name: "Umiejętności",
          itype: "text_list",
        },
        {
          id: "zdolnosci",
          name: "Zdolności klasy",
          itype: "text_list",
        },
      ],
    },
    {
      title: "Broń i ekwipunek",
      items: [
        {
          id: "bron",
          name: "Broń",
          itype: "text_list",
        },
        {
          id: "ekwipunek",
          name: "Ekwipunek",
          itype: "text_list",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "Postać",
          name: "Postać",
          itype: "big_text",
        },
        {
          id: "Sesje",
          name: "Sesje",
          itype: "big_text",
        },
      ],
    },
  ],
};
