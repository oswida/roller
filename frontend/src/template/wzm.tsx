import {
  CTIAttrData,
  CTIComputedData,
  CTICounterData,
  CTISelectData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";
import { getFieldValue } from "./util";

const InicjatywaKlasa: Record<string, number> = {
  czarodziej: 0,
  czarodziejka: 0,
  wojownik: 1,
  wojowniczka: 1,
  szelma: 2,
};

const AtakPremia: Record<string, number[]> = {
  czarodziej: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  czarodziejka: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5],
  wojownik: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  wojowniczka: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  szelma: [0, 1, 1, 2, 3, 3, 4, 5, 5, 6],
};

const ObronaTrucizna: Record<string, number[]> = {
  czarodziej: [14, 14, 14, 14, 14, 13, 13, 13, 13, 13],
  czarodziejka: [14, 14, 14, 14, 14, 13, 13, 13, 13, 13],
  wojownik: [14, 14, 13, 13, 11, 11, 10, 10, 8, 8],
  wojowniczka: [14, 14, 13, 13, 11, 11, 10, 10, 8, 8],
  szelma: [13, 13, 13, 13, 12, 12, 12, 12, 11, 11],
};

const ObronaZioniecie: Record<string, number[]> = {
  czarodziej: [15, 15, 15, 15, 15, 13, 13, 13, 13, 13],
  czarodziejka: [15, 15, 15, 15, 15, 13, 13, 13, 13, 13],
  wojownik: [17, 17, 16, 16, 14, 14, 13, 13, 11, 11],
  wojowniczka: [17, 17, 16, 16, 14, 14, 13, 13, 11, 11],
  szelma: [16, 16, 16, 16, 15, 15, 15, 15, 14, 14],
};

const ObronaPrzemiana: Record<string, number[]> = {
  czarodziej: [13, 13, 13, 13, 13, 11, 11, 11, 11, 11],
  czarodziejka: [13, 13, 13, 13, 13, 11, 11, 11, 11, 11],
  wojownik: [15, 15, 14, 14, 12, 12, 11, 11, 9, 9],
  wojowniczka: [15, 15, 14, 14, 12, 12, 11, 11, 9, 9],
  szelma: [13, 13, 12, 12, 11, 11, 11, 11, 9, 9],
};

const ObronaCzary: Record<string, number[]> = {
  czarodziej: [12, 12, 12, 12, 12, 10, 10, 10, 10, 10],
  czarodziejka: [12, 12, 12, 12, 12, 10, 10, 10, 10, 10],
  wojownik: [17, 17, 14, 14, 12, 12, 11, 11, 9, 9],
  wojowniczka: [17, 17, 14, 14, 12, 12, 11, 11, 9, 9],
  szelma: [15, 15, 15, 15, 13, 13, 13, 13, 11, 11],
};

const ObronaPrzedmioty: Record<string, number[]> = {
  czarodziej: [11, 11, 11, 11, 11, 9, 9, 9, 9, 9],
  czarodziejka: [11, 11, 11, 11, 11, 9, 9, 9, 9, 9],
  wojownik: [16, 16, 15, 15, 13, 13, 12, 12, 10, 10],
  wojowniczka: [16, 16, 15, 15, 13, 13, 12, 12, 10, 10],
  szelma: [14, 14, 14, 14, 12, 12, 12, 12, 10, 10],
};

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
          valType: "target",
          notation: "1d20",
          successRule: "total:ueq",
          comment: `${it}`,
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:ueq",
          comment: `${it} + mod`,
          iconColor: "#ED9702",
          labels: ["Modyfikator rzutu"],
        }
      ],
    } as CharTemplateItem)
  );
};

const savingValue = (item: CharTemplateItem, values: Record<string, any>, table: Record<string, number[]>) => {
  const num = Number.parseInt(
    getFieldValue("poziom", "counter", values)
  );
  if (Number.isNaN(num)) return "20";
  const kl = getFieldValue("klasa", "select", values).toLowerCase();
  const res = table[kl][num - 1];
  return res ? res : "0";
}

const genSavingThrows = () => {
  return [
    {
      id: "trucizna",
      name: "Trucizna",
      itype: "computed",
      data: {
        compute: (item: CharTemplateItem, values: Record<string, any>) => {
          return savingValue(item, values, ObronaTrucizna);
        },
      } as CTIComputedData,
      rolls: [
        {
          valType: "target",
          notation: "1d20",
          successRule: "total:oeq",
          comment: `Obrona: trucizna`,
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:oeq",
          iconColor: "#ED9702",
          comment: `Obrona: trucizna + mod`,
          labels: ["Modyfikator rzutu"],
        }
      ]
    } as CharTemplateItem,
    {
      id: "zioniecie",
      name: "Zionięcie",
      itype: "computed",
      data: {
        compute: (item: CharTemplateItem, values: Record<string, any>) => {
          return savingValue(item, values, ObronaZioniecie);
        },
      } as CTIComputedData,
      rolls: [
        {
          valType: "target",
          notation: "1d20",
          successRule: "total:oeq",
          comment: `Obrona: zionięcie`,
          labels: ["Modyfikator rzutu"],
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:oeq",
          iconColor: "#ED9702",
          comment: `Obrona: zionięcie + mod`,
          labels: ["Modyfikator rzutu"],
        }
      ]
    } as CharTemplateItem,
    {
      id: "przemiana",
      name: "Przemiana",
      itype: "computed",
      data: {
        compute: (item: CharTemplateItem, values: Record<string, any>) => {
          return savingValue(item, values, ObronaPrzemiana);
        },
      } as CTIComputedData,
      rolls: [
        {
          valType: "target",
          notation: "1d20",
          successRule: "total:oeq",
          comment: `Obrona: przemiana`,
          labels: ["Modyfikator rzutu"],
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:oeq",
          iconColor: "#ED9702",
          comment: `Obrona: przemiana + mod`,
          labels: ["Modyfikator rzutu"],
        }
      ]
    } as CharTemplateItem,
    {
      id: "czary",
      name: "Czary",
      itype: "computed",
      data: {
        compute: (item: CharTemplateItem, values: Record<string, any>) => {
          return savingValue(item, values, ObronaCzary);
        },
      } as CTIComputedData,
      rolls: [
        {
          valType: "target",
          notation: "1d20",
          successRule: "total:oeq",
          comment: `Obrona: czary`,
          labels: ["Modyfikator rzutu"],
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:oeq",
          iconColor: "#ED9702",
          comment: `Obrona: czary + mod`,
          labels: ["Modyfikator rzutu"],
        }
      ]
    } as CharTemplateItem,
    {
      id: "mag_przedmioty",
      name: "Mag. przedmioty",
      itype: "computed",
      data: {
        compute: (item: CharTemplateItem, values: Record<string, any>) => {
          return savingValue(item, values, ObronaPrzedmioty);
        },
      } as CTIComputedData,
      rolls: [
        {
          valType: "target",
          notation: "1d20",
          successRule: "total:oeq",
          comment: `Obrona: mag. przedmioty`,
          labels: ["Modyfikator rzutu"],
        },
        {
          valType: "target_plus_mod",
          notation: "1d20",
          successRule: "total:oeq",
          iconColor: "#ED9702",
          comment: `Obrona: mag. przedmioty + mod`,
          labels: ["Modyfikator rzutu"],
        }
      ]
    } as CharTemplateItem,
  ];
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
    klasa: ["inicjatywa", "premia_atak", "trucizna", "zioniecie", "przemiana", "czary", "mag_przedmioty"],
    zręczność: ["premia_zrecznosc", "kp", "inicjatywa"],
    kondycja: ["premia_kondycja"],
    inteligencja: ["premia_inteligencja"],
    mądrość: ["premia_madrosc"],
    charyzma: ["premia_charyzma"],
    inicjatywa: ["inicjatywa_premia"],
    kp: ["kp_premia"],
    poziom: ["inicjatywa", "premia_atak", "trucizna", "zioniecie", "przemiana", "czary", "mag_przedmioty"],
    zbroja_premia: ["kp"],
  },
  sections: [
    {
      title: "Informacje ogólne",
      items: [
        {
          id: "klasa",
          name: "Klasa",
          itype: "select",
          data: {
            options: [
              "Wojownik",
              "Wojowniczka",
              "Szelma",
              "Czarodziej",
              "Czarodziejka",
            ],
          } as CTISelectData,
        },
        {
          id: "poziom",
          name: "Poziom",
          itype: "counter",
          data: {
            min: 1,
            max: 10,
          } as CTICounterData,
          initialValue: 1,
        },
        {
          id: "swiatopogląd",
          name: "Światopogląd",
          itype: "select",
          data: {
            options: ["Prawo", "Neutralność", "Chaos"],
          } as CTISelectData,
        },
        {
          id: "doswiadczenie",
          name: "Doświadczenie",
          itype: "text",
          data: {
            maxLines: 1,
          } as CTITextData,
        },
        {
          id: "inicjatywa",
          name: "Inicjatywa",
          itype: "computed",
          hint: "Poziom + premia Zr + premia z klasy",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              const num = Number.parseInt(
                getFieldValue("poziom", "counter", values)
              );
              let base = 0;
              if (!Number.isNaN(num)) base = num;
              let bonus_zr = 0;
              const num2 = Number.parseInt(
                attrBonus(getFieldValue("zręczność", "attr", values))
              );
              if (!Number.isNaN(num2)) bonus_zr = num2;
              const bonus_kl =
                InicjatywaKlasa[
                getFieldValue("klasa", "select", values).toLowerCase()
                ];
              return `${base + bonus_zr + bonus_kl}`;
            },
          } as CTIComputedData,
        },
      ],
    },
    {
      title: "Atrybuty",
      items: [
        ...genAttrs(),
        {
          id: "zbroja_premia",
          name: "Premia za zbroję",
          itype: "attr",
          initialValue: 0,
        },
        {
          id: "kp",
          name: "Klasa pancerza",
          itype: "computed",
          hint: "10 + premia zbroi + premia Zr",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              const base = 10;
              let bonus_zr = 0;
              let num = Number.parseInt(attrBonus(values["zręczność"]));
              if (!Number.isNaN(num)) bonus_zr = num;
              let bonus_zb = 0;
              num = Number.parseInt(values["zbroja_premia"].toString());
              if (!Number.isNaN(num)) bonus_zb = num;
              return `${base + bonus_zb + bonus_zr}`;
            },
          } as CTIComputedData,
        },
        {
          id: "pw",
          name: "Wytrzymałość",
          itype: "attr",
          data: {
            withMax: true,
          } as CTIAttrData,
        },
        {
          id: "pf",
          name: "Punkty fortuny",
          itype: "counter",
          data: {
            min: 0,
            max: 10,
          } as CTICounterData,
          initialValue: 0,
        },
        {
          id: "premia_atak",
          name: "Premia do ataku",
          itype: "computed",
          hint: "Zależna od poziomu i klasy",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              const kl = getFieldValue("klasa", "select", values).toLowerCase();
              const pz = Number.parseInt(
                getFieldValue("poziom", "counter", values)
              );
              if (Number.isNaN(pz)) return "0";
              return `${AtakPremia[kl][pz - 1]}`;
            },
          } as CTIComputedData,
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
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["siła"]);
            },
          } as CTIComputedData,
        },
        {
          id: "premia_zrecznosc",
          name: "Premia Zręczności",
          hint: "Strzelanie, klasa pancerza, inicjatywa",
          itype: "computed",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["zręczność"]);
            },
          } as CTIComputedData,
        },
        {
          id: "premia_kondycja",
          name: "Premia Kondycji",
          hint: "Do wytrzymałości na poziom",
          itype: "computed",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["kondycja"]);
            },
          } as CTIComputedData,
        },
        {
          id: "premia_madrosc",
          name: "Premia Mądrości",
          hint: "Do obrony przed kontrolą",
          itype: "computed",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["mądrość"]);
            },
          } as CTIComputedData,
        },
        {
          id: "premia_inteligencja",
          name: "Premia Inteligencji",
          hint: "znanych języków",
          itype: "computed",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["inteligencja"]);
            },
          } as CTIComputedData,
        },
        {
          id: "premia_charyzma",
          name: "Premia Charyzmy",
          hint: "Liczba sojuszników",
          itype: "computed",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return attrBonus(values["charyzma"]);
            },
          } as CTIComputedData,
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
          itype: "list",
        },
        {
          id: "zdolnosci",
          name: "Zdolności klasy",
          itype: "list",
        },
      ],
    },
    {
      title: "Broń i ekwipunek",
      items: [
        {
          id: "bron",
          name: "Broń",
          itype: "list",
        },
        {
          id: "ekwipunek",
          name: "Ekwipunek",
          itype: "list",
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
          data: {
            large: true,
          } as CTITextData,
        },
        {
          id: "Sesje",
          name: "Sesje",
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};
