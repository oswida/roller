import {
  CTIAttrData,
  CTICheckData,
  CTICounterData,
  CTITextData,
  CharTemplate,
  CharTemplateItem,
} from "~/common";

const genAttrs = () => {
  const a = ["Inteligencja", "Osobowość", "Psychika", "Sprawność", "Zmysły"];
  return [
    ...a.map(
      (it, idx) =>
        ({
          id: it.toLowerCase().normalize(),
          name: it,
          itype: "attr",
          data: {
            wide: true,
          } as CTIAttrData,
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
    ),
    {
      id: "stopien",
      name: "Stop. służb.",
      itype: "attr",
      data: {
        wide: true,
      } as CTIAttrData,
      rolls: [
        {
          notation: "2d10+1d6",
          comment: "Stopień służbowy",
          valType: "modifier_plus_mod",
          labels: ["Modyfikator rzutu"],
          successRule: "ironsworn:glina",
        },
      ],
    } as CharTemplateItem,
  ];
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
        itype: "attr",
        data: {
          wide: true,
        } as CTIAttrData,
      } as CharTemplateItem)
  );
};

const genCounters: CharTemplateItem[] = [
  {
    id: "czas_pracy",
    name: "Czas pracy",
    itype: "counter",
    data: {
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    } as CTICounterData,
    initialValue: "0",
  },
  {
    id: "stres",
    name: "Stres",
    itype: "counter",
    data: {
      options: ["0", "1", "2", "3", "4", "5", "*6"],
    } as CTICounterData,
    initialValue: "0",
  },
  {
    id: "szczescie_psa",
    name: "Szczęście psa",
    itype: "counter",
    data: {
      options: [
        "-6",
        "-5",
        "-4",
        "-3",
        "-2",
        "-1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
      ],
    } as CTICounterData,
    initialValue: 8,
  },
];

const genPostac: CharTemplateItem[] = [
  {
    id: "opis",
    name: "Opis",
    itype: "text",
    data: {
      large: true,
    } as CTITextData,
    hint: "**Twarz**: trójkątna, prostokątna, pociągła, pomarszczona, uśmiechnięta,pochmurna.<br>**Włosy**: rozczochrane, krótkie, blond, siwe, czarne, brak włosów.<br>**Sylwetka**: wyprostowana, zgarbiona, krępa, szczupła, masywna, niska.<br>**Inne**: koszula z podwiniętymi rękawami, rozluźniony krawat, zapach papierosów, kabura na szelkach.",
  },
  {
    id: "rodzina",
    name: "Rodzina",
    itype: "text",
    data: {
      large: true,
    } as CTITextData,
    hint: "**Partner**: stały, okazjonalny, stały + romans.<br>**Dzieci**: tak, nie. Jeżeli tak, to: na wychowaniu, dorosłe.<br>**Rodzice**: żyją, nie żyją.<br>**Stan cywilny**: kawaler, panna, rozwodnik, rozwódka.",
  },
  {
    id: "slabosc",
    name: "Słabość",
    itype: "text",
    data: {
      large: true,
    } as CTITextData,
    hint: "Wybierz jedną z poniższych słabości i wymyśl jej szczegóły.<br> Bunt, choroba, dociekliwość, grzechy ojców, kryzys wiary, lęk, lojalność, miłość, pakt, pokusa, PTSD, pycha, spisek, ucieczka, wojna, wyrok, zbrodnia, zdrada, zemsta, zwątpienie.",
  },
  {
    id: "wazne_miejsce",
    name: "Ważne miejsce",
    itype: "text",
    data: {
      large: true,
    } as CTITextData,
    hint: "Opisz jedno ważne dla postaci miejsce w świecie gry",
  },
  {
    id: "genroll",
    name: "Rzut ogólny",
    description: "Rzut ogólny",
    itype: "label",
    hint: "Użyj tego rzutu jako ogólnego rzutu Gliny",
    rolls: [
      {
        notation: "2d10+1d6",
        comment: "Rzut ogólny",
        valType: "modifier_plus_mod",
        labels: ["Modyfikator rzutu"],
        successRule: "ironsworn:glina",
      },
    ],
  },
];

export const csTplGlinaBH: CharTemplate = {
  id: "glina_bh",
  name: "Brudny Harry",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "witus",
          name: "„Wituś” – uchol",
          itype: "counter",
          hint: "Może wyciągnął cię z opresji lub wie o tobie więcej, niż powinien?",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
        },
        {
          id: "wisniewska",
          name: "Wiśniewska-Nowak – dziennikarka śledcza",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          hint: "Może pracowaliście razem lub zawsze depcze ci po piętach?",
          initialValue: 1,
        },
        {
          id: "yvette",
          name: "„Yvette” – prostytutka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          hint: "Może jest twoją wielką miłością lub złożyłeś jej obietnicę, której nie możesz spełnić?",
          initialValue: 1,
        },
        {
          id: "tomasz",
          name: "Tomasz – skorumpowany policjant",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          hint: "Może to twój informator lub facet, któremu zrujnowałeś życie?",
          initialValue: 1,
        },
        {
          id: "arrakis",
          name: "„Arrakis” – artystka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może fascynuje cię lub obraca się w bardzo nieodpowiednim towarzystwie?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Szakal",
          hint: "Masz coś magnetycznego. Potraﬁsz owinąć sobie kogoś wokół palca. Gdy kłamiesz, manipulujesz lub przekupujesz kogoś, otrzymujesz +1 do rzutu.",
        },
        {
          id: "wyjscie_ewaku",
          name: "Wyjście ewakuacyjne",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Wyjście ewakuacyjne",
          hint: "Gdy dochodzi do eskalacji przemocy ﬁzycznej, potraﬁsz wymknąć się, zanim wszystko na dobre się zacznie. Gdy uciekasz, otrzymujesz +1 do rzutu.",
        },
        {
          id: "zly_glina",
          name: "Zły glina",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Zły glina",
          hint: "Uważasz, że ogień należy zwalczać ogniem. Ponosisz mniejsze konsekwencje, gdy wykonałeś ruch „wbrew regułom”.",
        },
        {
          id: "czlowiek_o_wielu_twarzach",
          name: "Człowiek o wielu twarzach",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Człowiek o wielu twarzach",
          hint: "Gdy podszywasz się pod kogoś, dokonujesz lub korzystasz z fałszerstwa, otrzymujesz +1 do rzutu.",
        },
        {
          id: "amant",
          name: "Amant",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Amant",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaCB: CharTemplate = {
  id: "glina_cb",
  name: "Cyber",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "kwiatkowski",
          name: "Kwiatkowski – oﬁcer wywiadu",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to on zwerbował cię do jednostki lub ma na ciebie haka?",
        },
        {
          id: "lisbeth",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          name: "„Lisbeth Salander” – hakerka",
          hint: "Może pracowaliście kiedyś razem lub jest niczym nieuchwytny duch?",
        },
        {
          id: "morfeusz",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          name: "„Morfeusz” – przedsiębiorca",
          hint: "Może to właściciel klubu nocnego lub handlarz informacjami, które nie powinny wyciekać z policyjnych baz danych?",
        },
        {
          id: "angelina",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          name: "„Angelina” – streamerka",
          hint: "Może to dziewczyna, która wpadła ci w oko, lub kobieta, którą za bardzo podziwiasz?",
        },
        {
          id: "lisowska",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          name: "Lisowska – dziennikarka śledcza",
          hint: "Może pomagałeś jej z Darknetem i innymi technologiami do bezpiecznego kontaktowania się ze źródłami informacji lub jest na tropie twojej pracy dla wywiadu?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "haker",
          name: "Haker",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Haker",
          hint: "Gdy hakujesz komputer lub telefon, przeszukujesz Internet, namierzasz nadajnik lub podsłuchujesz za pomocą urządzeń szpiegowskich, otrzymujesz +1 do rzutu.",
        },
        {
          id: "facet_od_kablowki",
          name: "Facet od kablówki",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Facet od kablówki",
          hint: "Gdy udajesz kogoś innego, by zinﬁltrować organizację, poznać jej infrastrukturę informatyczną lub założyć podsłuch, wykonaj rzut + psychika.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: `Facet od kablówki`,
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "psychika",
            },
          ],
        },
        {
          id: "ziomki_z_elektrody",
          name: "Ziomki z Elektrody",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Ziomki z Elektrody",
          hint: "Gdy kontaktujesz się ze starymi znajomymi, dziennikarzami lub śledczymi spoza ﬁrmy, otrzymujesz +1 do rzutu.",
        },
        {
          id: "kon_trojanski",
          name: "Koń trojański",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Koń trojański",
          hint: "Gdy atakujesz infrastrukturę komputerową, wykonaj rzut + inteligencja.<br>**Triumf**: Wybierz trzy: <br>- Dostajesz informacje, jakich potrzebujesz.<br>-Zmieniasz działanie systemu,np. kontrolujesz go lub niszczysz.<br>- Nie pozostawiasz śladów.<br>- Zostawiasz sobie tylną furtkę.<br>**Fuks** Wybierz dwa z listy powyżej.<br>**Skucha**: Mistrz gry wybiera jedną konsekwencję wobec twojego sprzętu komputerowego.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: `Koń trojański`,
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "inteligencja",
            },
          ],
        },
        {
          id: "darknet",
          name: "Darknet",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Darknet",
          hint: "Za każdym razem, gdy przeszukujesz Darknet, aby pozyskać informacje lub rzadkie przedmioty, wykonaj rzut + zmysły.<br>**Triumf**: Znajdujesz to, czego szukasz.<br>**Fuks**: Znajdujesz to, czego szukasz, ale natykasz się też na coś odrażającego lub strasznego. Otrzymujesz +1 stresu.<br>**Skucha**: Znajdujesz to, czego szukasz, ale natraﬁłeś na coś naprawdę przerażającego. Wykonaj ruch „stań oko w oko z horrorem”.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: `Darknet`,
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "zmysły",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaKR: CharTemplate = {
  id: "glina_kr",
  name: "Karierowicz",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "grabowska",
          name: "Dr Grabowska – lekarka medycyny sądowej",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to wykładowczyni, która cię uczyła, lub osoba, przez którą wylądowałeś właśnie tutaj?",
        },
        {
          id: "wojciechowski",
          name: "Wojciechowski – prokurator",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może twoje wsparcie w ciężkich czasach lub facet, który prowadzi podwójne życie?",
        },
        {
          id: "panix",
          name: "„Pani X” – ktoś wyżej postawiony",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to szara eminencja, która się tobą opiekuje, lub duch, który wciąż miesza ci szyki?",
        },
        {
          id: "emily",
          name: "Emily – celebrytka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to przyjaciółka, która dotarła wysoko, lub osoba, z którą nie chciałbyś się znowu spotkać?",
        },
        {
          id: "anonim",
          name: "Anonim – szantażysta",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może masz na niego haki lub to on pogrywa sobie z tobą?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "po_trupach",
          name: "Po trupach",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Po trupach",
          hint: "Może cię nie lubią, ale osiągasz to, co chcesz, i jesteś w tym cholernie dobry. Gdy przesłuchujesz, pokazujesz cechy przywódcze, negocjujesz, wykonaj rzut + inteligencja zamiast rzut + psychika.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: `Po trupach`,
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "inteligencja",
            },
          ],
        },
        {
          id: "obcy",
          name: "Obcy",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Obcy",
          hint: "Przed swoimi trudno się otworzyć, ale gdy ktoś jest obcy, to usta się nie zamykają. Kiedy okazujesz empatię, nieznajomi obdarzają cię większym zaufaniem. W zamian za +1 do czasu pracy otrzymaj +1 do następnego ruchu związanego z daną osobą.",
        },
        {
          id: "chodz_na_fajke",
          name: "Chodź na fajkę",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Chodź na fajkę",
          hint: "Gdy palisz lub jesz z kimś posiłek, wykonaj rzut + osobowość.<br>**Triumf**: Zadaj dwa pytania. Otrzymujesz +1 do następnego ruchu z udziałem tej osoby.<br>- Czego ode mnie oczekujesz?<br>- Kto jest dla mnie zagrożeniem?<br>- Kogo chronisz?<br>- Dla kogo pracujesz?<br>**Fuks**: Zadaj jedno pytanie z listy powyżej. Otrzymujesz +1 do następnego ruchu z udziałem tej osoby.<br>**Skucha**: Przypadkowo ujawniasz swój sekret lub czuły punkt. Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Chodź na fajkę",
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "osobowość",
            },
          ],
        },
        {
          id: "Telefon do przyjaciela",
          name: "Telefon do przyjaciela",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Telefon do przyjaciela",
          hint: "Gdy znasz kogoś stojącego wyżej w hierarchii, kto potraﬁ pomóc w niespodziewany sposób, wykonaj rzut + osobowość.<br>**Triumf**: Tajemnicza osoba wyciąga cię z kłopotów.<br>**Fuks**: Udaje się, ale pewnym kosztem. Ktoś chce czegoś w zamian. Możesz odmówić, ale otrzymujesz za to +1 stresu.<br>**Skucha**: Nadużyłeś czyjejś cierpliwości. Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Telefon do przyjaciela",
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "osobowość",
            },
          ],
        },
        {
          id: "ciety_jezyk",
          name: "Cięty język",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Cięty język",
          hint: "Potrafisz tak dowalić, że pójdzie komuś w pięty. Gdy uczestniczysz w kłótni, umiesz ośmieszyć lub zgasić przeciwnika w kilku słowach. Wykonaj rzut + osobowość.<br>**Triumf**: Twój cięty język rani jak sztylet. Przeciwnik musi wycofać się ze sceny.<br>**Fuks**: Twój cięty język rani jak sztylet. Przeciwnik wycofa się ze sceny, jeżeli poniesiesz koszt określony przez mistrza gry.<br>**Skucha**: Twój komentarz był ciosem poniżej pasa. Przeciwnik będzie chciał zemsty. Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Cięty język",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaNG: CharTemplate = {
  id: "glina_ng",
  name: "Negocjator",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "sikora",
          name: "Kpt. Sikora – żołnierz",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może współpracujecie przy najtrudniejszych sprawach lub wchodzicie sobie w paradę?",
        },
        {
          id: "gabriela",
          name: "Gabriela – negocjatorka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może jest twoją partnerką w czasie negocjacji lub przewyższa cię kompetencjami i sławą?",
        },
        {
          id: "radzka",
          name: "Radzka – przedsiębiorczyni",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może ocaliłeś jej życie lub w wyniku twojego działania straciła coś cennego?",
        },
        {
          id: "wiktor",
          name: "Wiktor – kierowca taksówki",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to człowiek gotowy cię wysłuchać lub niebezpiecznie zafascynowany twoją pracą?",
        },
        {
          id: "jessica",
          name: "„Jessica” – baristka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może pracuje w miejscu, w którym lubisz spędzać czas, lub połączyła was tajemnicza historia?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "nerwy_ze_stali",
          name: "Nerwy ze stali",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Nerwy ze stali",
          hint: "Twój maksymalny poziom stresu wynosi 6 zamiast standardowego 5",
        },
        {
          id: "zostanmy_przyjaciolmi",
          name: "Zostańmy przyjaciółmi",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Zostańmy przyjaciółmi",
          hint: "Gdy uwodzisz, bratasz się lub okazujesz empatię, otrzymujesz +1 do rzutu",
        },
        {
          id: "druga_szansa",
          name: "Druga szansa",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Druga szansa",
          hint: "Gdy prowadzisz negocjacje z desperatem i coś pójdzie nie po twojej myśli, otrzymujesz drugą szansę, żeby to naprawić. Jeden raz podczas sesji możesz zamienić **skuchę** na **fuks**.",
        },
        {
          id: "mowa_ciala",
          name: "Mowa ciała",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Mowa ciała",
          hint: "Drobne ruchy, tiki, powtarzające się gesty mówią ci więcej o człowieku niż rozmowa z nim. Gdy oceniasz czyjeś zachowanie na podstawie mowy ciała otrzymujesz +1 do rzutu.",
        },
        {
          id: "zimna_krew",
          name: "Zimna krew",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Zimna krew",
          hint: "Gdy mistrz gry wymaga od ciebie wyzwolenia ruchu „wyrzuć z siebie stres”, możesz odmówić zrobienia tego, ale w zamian otrzymujesz +2 stresu.",
        },
      ],
    },
    {
      title: "Notatki",
      items: [
        {
          id: "notatki_sluzbowe",
          name: "Służbowe",
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaPB: CharTemplate = {
  id: "glina_pb",
  name: "Pitbull",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "kowalska",
          name: "Kowalska – koleżanka ze szkoły policyjnej",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to twoja najlepsza kumpela lub babka, przez którą wciąż jesteś w tym samym miejscu?",
        },
        {
          id: "wolszczak",
          name: "Wolszczak – starszy stopniem policjant",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to twój mentor lub ktoś, kogo szczerze nienawidzisz?",
        },
        {
          id: "dziara",
          name: "„Dziara” – przestępca",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to gość, który ma u ciebie spory dług, lub facet, który poluje na twoją głowę?",
        },
        {
          id: "andrzej",
          name: "Andrzej – bankier",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to źródło informacji lub facet, którego rozpracowujesz już naprawdę długo?",
        },
        {
          id: "magdalena",
          name: "Magdalena – chemiczka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to kobieta, z którą się kiedyś umawiałeś, lub szefowa groźnej grupy przestępczej?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "zawziety",
          name: "Zawzięty",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Zawzięty",
          hint: "Gdy wpadniesz na trop, masz dodatkową motywację. Kiedy w ruchu śledczym pada triumf, otrzymujesz +1 do szczęścia psa.",
        },
        {
          id: "tuz_po_szkole",
          name: "Tuż po szkole",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Tuż po szkole",
          hint: "Pamiętasz sporo teorii, a nigdy nie wiadomo, kiedy to się może przydać. Jeden raz podczas sesji, gdy wykonujesz ruch „pomoc specjalistów”, możesz przerzucić skuchę.",
        },
        {
          id: "szybcy_wsciekli",
          name: "Szybcy i wściekli",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Szybcy i wściekli",
          hint: "Gdy uczestniczysz w pościgu pieszym lub brawurowo prowadzisz samochód, otrzymujesz +1 do rzutu.",
        },
        {
          id: "mlody_ma_racje",
          name: "Młody ma rację",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Młody ma rację",
          hint: "Gdy próbujesz zmienić tor myślenia starszych stopniem policjantów, wykonaj rzut + inteligencja.<br>**Triumf**: Policjanci zgadzają się z twoim zdaniem lub zmieniają swoje.<br>**Fuks**: Policjanci zgadzają się z twoim zdaniem lub zmieniają swoje, ale kosztuje cię to dodatkową pracę. Podnieś swój czas pracy o +1.<br>**Skucha**: Twoja opinia zostaje zignorowana, narażasz się na żarty, dodatkową pracę lub tracisz czas",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Młody ma rację",
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "inteligencja",
            },
          ],
        },
        {
          id: "po_godzinach",
          name: "Po godzinach",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Po godzinach",
          hint: "Masz jeszcze tyle energii, żeby pracować po godzinach. Gdy wartość twojego czasu pracy ma przekroczyć +8 i musisz otrzymać stres, wykonaj rzut + psychika.<br>**Triumf**:Nie otrzymujesz stresu za zmęczenie, gdy wyrabiasz nadgodziny.<br>**Fuks**: Nie otrzymujesz stresu za zmęczenie, ale musisz obniżyć o jego równowartość szczęście psa.<br>**Skucha**: Wybierz jedno:<br>- Nie otrzymujesz stresu za zmęczenie, ale obniż znajomość lub więź o -1,<br>- Otrzymujesz +1 stresu więcej, niż powinieneś.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Po godzinach",
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "psychika",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaPZ: CharTemplate = {
  id: "glina_pz",
  name: "Pozorant",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "skwierczynska",
          name: "Skwierczyńska – redaktorka naczelna",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może kupowała od ciebie informacje lub narobiła koło ciebie sporo hałasu?",
        },
        {
          id: "alan",
          name: "Alan – strażnik więzienny",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może dzięki niemu zarabiasz więcej lub to on wydaje ci polecenia?",
        },
        {
          id: "wiktor",
          name: "Wiktor – pracownik archiwum",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może od dawna współpracujecie lub facet widział coś, czego nie powinien?",
        },
        {
          id: "viki",
          name: "„Viki” – handlarka narkotyków",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może sprzedajesz jej informacje lub policjanci pracują nad nią, a ty jesteś umoczony po uszy?",
        },
        {
          id: "anna",
          name: "Anna – paserka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może uratowałeś jej tyłek lub twój sportowy samochód pochodzi z jej dziupli?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "dluznik",
          name: "Twój dłużnik",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Twój dłużnik",
          hint: "Raz na sesję powiedz, kto ma u ciebie dług. Otrzymaj +1 do ruchu wykonywanego z udziałem tej osoby. W przypadku skuchy podczas rzutu na akcję możesz uznać dług za spłacony w zamian za osiągnięcie fuksa.",
        },
        {
          id: "wymyk",
          name: "Wymyk",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Wymyk",
          hint: "gdy atmosfera zaczyna się zagęszczać, potraﬁsz skierować rozmowę na inne tory. Raz podczas sesji, gdy kłamiesz, manipulujesz, przekupujesz kogoś lub oceniasz czyjeś zachowanie (mowa ciała), możesz przerzucić skuchę.",
        },
        {
          id: "chwyc_sie_brzytwy",
          name: "Chwyć się brzytwy",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Chwyć się brzytwy",
          hint: "Gdy wpadniesz w kłopoty w półświatku, powołaj się na jakąś swoją znajomość lub więź. W zamian za wyjście obronną ręką z sytuacji obniż daną znajomość lub więź o -1.",
        },
        {
          id: "tuszowanie",
          name: "Tuszowanie",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Tuszowanie",
          hint: "Otrzymaj +2 stresu i pojaw się w scenie, w której miało cię nie być, a jej konsekwencje mogły cię dotyczyć.",
        },
        {
          id: "znajomi_na_miescie",
          name: "Znajomi na mieście",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Znajomi na mieście",
          hint: "Masz dostęp do niebezpiecznych ludzi i podłych miejsc. Gdy nawiązujesz kontakt z ludźmi lub pojawiasz się w danym miejscu, opisz, kto lub co to jest, i wykonaj rzut + osobowość.<br>- **Triumf**: Zostajesz przyjęty jak swój<br>- **Fuks**: ostaniesz przyjęty jak swój, jeżeli udowodnisz, że jesteś godny zaufania. Musisz dokonać trudnego wyboru: tracisz coś, ktoś chce czegoś w zamian albo otrzymaj +1 stresu.<br>- **Skucha**: Spaliłeś mosty. Masz się komuś więcej nie pokazywać na oczy lub nie pojawiać się w tym miejscu. Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Znajomi na mieście",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};

export const csTplGlinaPF: CharTemplate = {
  id: "glina_pf",
  name: "Profiler",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: genPostac,
    },
    {
      title: "Atrybuty",
      items: genAttrs(),
    },
    {
      title: "Zasoby",
      items: genCounters,
    },
    {
      title: "Znajomości",
      items: [
        {
          id: "l1",
          name: "l1",
          itype: "label",
          description:
            "Wybierz dwie opisane niżej znajomości. Jednej przydziel wartość +1 (dobra relacja), drugiej wartość -1 (chłodna relacja).",
        },
        {
          id: "rzeznik",
          name: "„Rzeźnik z Metropolii” – seryjny morderca",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może pomaga ci tropić innych morderców lub to ty odpowiadasz za jego złapanie czy wciąż go ścigasz?",
        },
        {
          id: "syriusz",
          name: "Syriusz – groźny przestępca",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to człowiek, którego uważasz za niewinnego, lub przestępca ścigany listami gończymi?",
        },
        {
          id: "mocek",
          name: "Mocek – naczelniczka zakładu karnego",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może ułatwia ci kontakt z osadzonymi lub była świadkiem zagrożenia twojego życia, przez co miała kłopoty?",
        },
        {
          id: "stefanczyk",
          name: "Dr Stefańczyk – psycholożka",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może to twoja superwizorka, która cię wspiera, lub konkurentka, z którą wciąż się mierzysz?",
        },
        {
          id: "mateusz",
          name: "Mateusz – policjant z prewencji",
          itype: "counter",
          data: {
            check: true,
            options: ["-1", "0", "1"],
          } as CTICounterData,
          initialValue: 1,
          hint: "Może jest twoim pierwszym kontaktem na miejscu zbrodni lub łączyła was jakaś nietypowa znajomość?",
        },
        {
          id: "znajomosci_dodatkowe",
          name: "Dodatkowe",
          itype: "list",
        },
      ],
    },
    {
      title: "Więzi",
      items: [
        {
          id: "wiezi",
          name: "Więzi",
          hint: "Opisz trzy więzi. Każda z nich jest na poziomie +2.",
          itype: "list",
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
          id: "mapa_smierci",
          name: "Mapa śmierci",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Mapa śmierci",
          hint: "Gdy dokonujesz oględzin miejsca zbrodni lub zwłok, otrzymujesz +1 do rzutu.",
        },
        {
          id: "krok_przed",
          name: "O krok przed",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "O krok przed",
          hint: "Możesz poprosić mistrza gry o stworzenie ścieżki postępu dla poznania modus operandi, podpisu przestępcy lub jego klasyfikacji; powiedz, czego chciałbyś się dowiedzieć, a mistrz gry określi długość ścieżki postępu. Gdy próbujesz zapełnić uruchomioną ścieżkę postępu, otrzymujesz dodatkowe +2 do zdobycia tropu przy triumfie lub dodatkowe +1 do zdobycia tropu przy fuksie.",
        },
        {
          id: "umysl_mordercy",
          name: "Umysł mordercy",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Umysł mordercy",
          hint: "Gdy w czasie roboty papierkowej analizujesz dokumenty opisujące konkretną zbrodnię, potraﬁsz na ich podstawie ocenić, jakie emocje kierowały sprawcą. Mistrz gry powinien ci je opisać.",
        },
        {
          id: "poznaj_wroga",
          name: "Poznaj wroga",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Poznaj wroga",
          hint: "Proﬁler musi dowiedzieć się jak najwięcej o zwy czajach i preferencjach przestępcy, w związku z czym doskonale wie, jakie pytania zadawać w czasie rozmowy na jego temat. Raz podczas sesji możesz przerzucić skuchę, gdy wykonujesz ruch „komunikacja interpersonalna”.",
        },
        {
          id: "tereny_lowieckie",
          name: "Tereny łowieckie",
          itype: "check",
          data: {
            shape: "circle",
          } as CTICheckData,
          description: "Tereny łowieckie",
          hint: "Potraﬁsz określić i zawęzić kategorie miejsc, w których najchętniej działa przestępca. Wykonaj rzut + inteligencja.<br>- **Triumf**: Precyzyjnie określasz teren łowiecki – ogródki działkowe, park, mieszkania oﬁar itd. Mistrz gry go opisuje.<br>- **Fuks**: Określasz trzy prawdopodobne tereny łowieckie, na których najchętniej działa przestępca. Mistrz gry je opisuje.<br>- **Skucha**: Nie umiesz określić terenu łowieckiego przestępcy.<br>- Uruchom ścieżkę postępu. <br>- Wybierz jeden element:<br>  - Otrzymujesz +2 do czasu pracy,<br>   - Otrzymujesz +1 stresu.",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "Tereny łowieckie",
              valType: "modifier_plus_mod",
              labels: ["Modyfikator rzutu"],
              successRule: "ironsworn:glina",
              valField: "inteligencja",
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
          itype: "text",
          data: {
            large: true,
          } as CTITextData,
        },
      ],
    },
  ],
};
