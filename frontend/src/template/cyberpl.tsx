import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
  const a = ["Biologia", "Psyche", "Interfejs"];
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
        {
          valType: "target",
          notation: "2d20",
          successRule: "cairn:standard",
          comment: `${it}: łatwy`,
          iconColor: "#286623"
        },
        {
          valType: "target",
          notation: "2d20",
          successRule: "cairn:hard",
          comment: `${it}: trudny`,
          iconColor: "#941e18"
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
          id: "abonament",
          name: "Abonament",
          itype: "text",
          limit: 1,
        },
        {
          id: "kredyty",
          name: "Kredyty",
          itype: "attr",
        },
        {
          id: "ekwip_0",
          itype: "text_check",
          name: "Lewa ręka",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_1",
          itype: "text_check",
          name: "Prawa ręka",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_2",
          itype: "text_check",
          name: "Ciało 1",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_3",
          itype: "text_check",
          name: "Ciało 2",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_4",
          itype: "text_check",
          name: "Plecak 1",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_5",
          itype: "text_check",
          name: "Plecak 2",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_6",
          itype: "text_check",
          name: "Plecak 3",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_7",
          itype: "text_check",
          name: "Plecak 4",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_8",
          itype: "text_check",
          name: "Plecak 5",
          labels: ["Zmęczenie"],
          color: "#ff5252"
        },
        {
          id: "ekwip_9",
          itype: "text_check",
          name: "Plecak 6",
          labels: ["Zmęczenie"],
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
