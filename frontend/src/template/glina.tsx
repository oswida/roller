import { CharTemplate, CharTemplateItem } from "~/common";

const genAttrs = () => {
  const a = ["Inteligencja", "Osobowość", "Psychika", "Sprawność", "Zmysły"];
  return a.map(
    (it, idx) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        rolls: [
          {
            notation: "2d10+1d6",
            comment: `${it}`,
            valType: "modifier_plus_mod",
            labels: ["Modyfikator rzutu"],
            successRule: "ironsworn:glina",
          },
        ],
      } as CharTemplateItem)
  );
};

const genSledcze = () => {
  const a = [
    "Komunikacja interpersonalna",
    "Książka telefoniczna",
    "Pomoc specjalistów",
    "Praca operacyjno-rozpoznawcza",
    "Przemoc",
    "Robienie w wała",
    "Robota papierkowa",
    "Techniki komputerowe",
  ];

  return a.map(
    (it, idx) =>
      ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr_wide",
        rolls: [
          {
            notation: "2d10+1d6",
            comment: `${it}`,
            valType: "modifier_plus_mod",
            labels: ["Modyfikator rzutu"],
            successRule: "ironsworn:glina",
          },
        ],
      } as CharTemplateItem)
  );
};

export const csTplGlinaBH: CharTemplate = {
  id: "glina",
  name: "Brudny Harry",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: [
        {
          id: "opis",
          name: "Opis",
          itype: "big_text",
          hint: "Wpisz wygląd postaci",
        },
        {
          id: "rodzina",
          name: "Rodzina",
          itype: "big_text",
        },
        {
          id: "slabosc",
          name: "Słabość",
          itype: "big_text",
          hint: "Wybierz jedną z poniższych słabości i wymyśl jej szczegóły.<br> Bunt, choroba, dociekliwość, grzechy ojców, kryzys wiary, lęk, lojalność, miłość, pakt, pokusa, PTSD, pycha, spisek, ucieczka, wojna, wyrok, zbrodnia, zdrada, zemsta, zwątpienie.",
        },
        {
          id: "wazne_miejsce",
          name: "Ważne miejsce",
          itype: "big_text",
          hint: "Opisz jedno ważne dla postaci miejsce w świecie gry",
        },
      ],
    },
    {
      title: "Atrybuty",
      items: [
        ...genAttrs(),
        {
          id: "stopien",
          name: "Stopień służbowy",
          itype: "attr_wide",
        },
      ],
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "witus",
          name: "Wituś",
          itype: "check_circle",
          text: "„Wituś” – uchol",
          hint: "Może wyciągnął cię z opresji lub wie o tobie więcej, niż powinien?",
        },
        {
          id: "wisniewska",
          name: "Wiśniewska",
          itype: "check_circle",
          text: "Wiśniewska-Nowak – dziennikarka śledcza",
          hint: "Może pracowaliście razem lub zawsze depcze ci po piętach?",
        },
        {
          id: "yvette",
          name: "Yvette",
          itype: "check_circle",
          text: "„Yvette” – prostytutka",
          hint: "Może jest twoją wielką miłością lub złożyłeś jej obietnicę, której nie możesz spełnić?",
        },
        {
          id: "tomasz",
          name: "Tomasz",
          itype: "check_circle",
          text: "Tomasz – skorumpowany policjant",
          hint: "Może to twój informator lub facet, któremu zrujnowałeś życie?",
        },
        {
          id: "arrakis",
          name: "Arrakis",
          itype: "check_circle",
          text: "„Arrakis” – artystka",
          hint: "Może fascynuje cię lub obraca się w bardzo nieodpowiednim towarzystwie?",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiez1",
          name: "Więź 1",
          itype: "text",
        },
        {
          id: "wiez2",
          name: "Więź 2",
          itype: "text",
        },
        {
          id: "wiez3",
          name: "Więź 3",
          itype: "text",
        },
      ],
    },
    {
      title: "Ruchy śledcze",
      items: genSledcze(),
    },
    {
      title: "Ruchy archetypu",
      items: [
        {
          id: "szakal",
          name: "Szakal",
          itype: "check_circle",
          text: "Szakal",
          hint: "Masz coś magnetycznego. Potraﬁsz owinąć sobie kogoś wokół palca. Gdy kłamiesz, manipulujesz lub przekupujesz kogoś, otrzymujesz +1 do rzutu.",
        },
        {
          id: "wyjscie_ewaku",
          name: "Wyjście ewakuacyjne",
          itype: "check_circle",
          text: "Wyjście ewakuacyjne",
          hint: "Gdy dochodzi do eskalacji przemocy ﬁzycznej, potraﬁsz wymknąć się, zanim wszystko na dobre się zacznie. Gdy uciekasz, otrzymujesz +1 do rzutu.",
        },
        {
          id: "zly_glina",
          name: "Zły glina",
          itype: "check_circle",
          text: "Zły glina",
          hint: "Uważasz, że ogień należy zwalczać ogniem. Ponosisz mniejsze konsekwencje, gdy wykonałeś ruch „wbrew regułom”.",
        },
        {
          id: "czlowiek_o_wielu_twarzach",
          name: "Człowiek o wielu twarzach",
          itype: "check_circle",
          text: "Człowiek o wielu twarzach",
          hint: "Gdy podszywasz się pod kogoś, dokonujesz lub korzystasz z fałszerstwa, otrzymujesz +1 do rzutu.",
        },
        {
          id: "amant",
          name: "Amant",
          itype: "check_circle",
          text: "Amant",
          hint: "Gdy spędzasz noc z kochankiem lub kochanką, wykonaj rzut + Osobowość.<br>**Triumf**: Usuń 1 stresu oraz zadaj dwa pytania:<br>  - Co wiesz o...?<br>  - Czego chcesz od...?<br>  - Co planuje...?<br>**Fuks**: Zadaj dwa pytania z listy powyżej.<br>**Skucha**: Dopuszczasz tę osobę za blisko, a ona odkrywa twój sekret, nim zdążysz zainterweniować. Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: `Amant`,
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "osobowość",
            },
          ],
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "notatki_sluzbowe",
          name: "Służbowe",
          itype: "big_text",
        },
      ],
    },
  ],
};
