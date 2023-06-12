import { CharTemplate, CharTemplateItem } from "~/common";

const hints: Record<string, string> = {
    "Urok": "Manipuluj kimś",
    "Spokój": "Działaj pod presją, Wspieraj",
    "Spryt": "Badaj tajemnicę, Ogarnij problem",
    "Hart": "Daj wycisk, Chroń kogoś",
    "Dziw": "Użyj magii"
}

const genAttrs = () => {
    const a = ["Urok", "Spokój", "Spryt", "Hart", "Dziw"];
    return a.map(it => ({
        id: it.toLowerCase().normalize(),
        name: it,
        itype: "attr",
        hint: hints[it],
        rolls: [
            {
                valType: "modifier",
                notation: "2d6",
                successRule: "pbta:standard",
                comment: `+${it.toUpperCase()}`,
            },
        ]
    } as CharTemplateItem));
}

const genBasicMoves = () => {
    return [
        {
            id: "badaj_tajemnice",
            name: "Badaj tajemnicę",
            itype: "label",
            text: "Badaj tajemnicę",
            hint: "Gdy Badasz jakąś tajemnicę, rzuć +Spryt.\nPrzy 10+ zatrzymaj 2, a przy 7‒9 zatrzymaj 1.\nWydanie jednego zatrzymania pozwala zadać Strażnikowi jedno z następujących pytań: \n• Co tu się stało?\n• Co to za stworzenie?\n• Co ono może zrobić?\n• Co może je zranić?\n• Gdzie poszło?\n• Co chciało zrobić?\n• Co tu jest ukryte?\nPrzy porażce ujawniasz jakąś informację Potworowi lub temu, z kim rozmawiasz. Strażnik może zadać ci jakieś pytania i musisz na nie odpowiedzieć.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "spryt",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+SPRYT [Badaj tajemnicę]`,
                },
            ]
        },
        {
            id: "chron_kogos",
            name: "Chroń kogoś",
            itype: "label",
            text: "Chroń kogoś",
            hint: "Gdy Chronisz inną postać przed obrażeniami, rzuć +Hart.\nPrzy dowolnym sukcesie (wyniku 7 lub więcej) chronisz ją, ale dostajesz część lub wszystkie obrażenia, które miała dostać.\nPrzy 10+ wybierz dodatkowo:\n• otrzymujesz mniej obrażeń (-1 obrażenie);\n• całe nadchodzące zagrożenie skupia się teraz na tobie;\n• zadajesz wrogowi obrażenia;\n• powstrzymujesz wroga.\nPrzy porażce tylko wszystko pogarszasz.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "hart",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+HART [Chroń kogoś]`,
                },
            ]
        },
        {
            id: "daj_wycisk",
            name: "Daj wycisk",
            itype: "label",
            text: "Daj wycisk",
            hint: "Gdy walczysz i Dajesz komuś wycisk, rzuć +Hart.\nPrzy dowolnym sukcesie (wyniku 7 lub więcej) ty i twój przeciwnik zadajecie sobie nawzajem obrażenia. Liczba tych obrażeń wynika z ustalonych elementów opowieści. To zazwyczaj znaczy, że zadajesz przeciwnikowi obrażenia swojej broni, a przeciwnik tobie obrażenia swojego ataku. Możesz przyjąć siedem obrażeń, potem umierasz.\nPrzy 10+ wybierz dodatkowo jedną z opcji:\n• uzyskujesz przewagę – dostajesz jednorazowe +1 lub dajesz je innemu Łowcy;\n• zadajesz wielkie obrażenia (+1 obrażeń);\n• otrzymujesz mniejsze obrażenia (-1 obrażeń).\n• przeciwnik trafia tam, gdzie chcesz, żeby był.\nPrzy porażce to tobie dają wycisk. Otrzymujesz obrażenia lub zostajesz złapany, ale nie zadajesz żadnych obrażeń.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "hart",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+HART [Daj wycisk]`,
                },
            ]
        },
        {
            id: "dzialaj_pod_presja",
            name: "Działaj pod presją",
            itype: "label",
            text: "Działaj pod presją",
            hint: "Gdy działasz pod presją, rzuć +Spokój. Efekty mogą być następujące:\n• przy 10+ robisz to, co chciałeś;\n• przy 7‒9 Strażnik ma dla ciebie gorszy rezultat, trudny wybór lub cenę za sukces;\n• przy porażce wszystko się sypie.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "spokój",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+SPOKÓJ [Działaj pod presją]`,
                },
            ]
        }, {
            id: "manipuluj_kims",
            name: "Manipuluj kimś",
            itype: "label",
            text: "Manipuluj kimś",
            hint: "Gdy dałeś komuś powód, powiedz, co chcesz, by zrobił i rzuć +Urok.\n\nNormalna osoba:\n• przy 10+ zrobi to z powodu, który jej dałeś; jeśli chcesz zbyt wiele, powie ci, za co mogłaby to zrobić (albo że za nic w świecie);\n• przy 7‒9 zrobi to, ale tylko, jeśli zrobisz coś dla niej tu i teraz, by wesprzeć swoją obietnicę; jeśli chcesz zbyt wiele powie ci, co – jeśli cokolwiek – może ją skłonić, by to zrobiła.\n• przy porażce źle do tego podchodzisz: obrażasz lub wkurzasz rozmówcę.\n\nInny Łowca:\n• przy 10+, jeśli zrobi to, o co prosisz, uzyskuje dwie korzyści: zaznacza doświadczenie i dostaje jednorazowe +1;\n• przy 7‒9 zaznacza doświadczenie, jeśli zrobi to, o co prosisz;\n• przy porażce to Łowca ustala, jak bardzo go obraziłeś lub zirytowałeś; zaznacza doświadczenie, jeśli nie zrobi tego, o co prosiłeś.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "urok",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+UROK [Manipuluj kimś]`,
                },
            ]
        }, {
            id: "ogarnij_problem",
            name: "Ogarnij problem",
            itype: "label",
            text: "Ogarnij problem",
            hint: "Gdy się rozglądasz, by Ogarnąć problem, rzuć +Spryt.\nPrzy 10+ zatrzymaj 3, a przy 7‒9 zatrzymaj 1. \nMożesz wydawać zatrzymania, by zadać Strażnikowi jedno z poniższych pytań:\n • Jak najlepiej tam wejść ?\n • Jak najlepiej stąd wyjść ?\n • Czy są tu jakieś zagrożenia, których nie zauważyliśmy ?\n • Co jest największym zagrożeniem ?\n • Jaki słaby punkt mogę wykorzystać ?\n • Jaki jest najlepszy sposób, by chronić ofiary ?\n     Jeśli działasz w zgodzie z odpowiedziami, dostajesz ciągłe +1, póki odpowiedzi mają znaczenie.\nPrzy porażce możesz błędnie odczytać sytuację („Wszystko w porządku! Nic mi nie grozi, gdy pójdę zbadać to samemu!”) lub     ujawnić taktyczne informacje swoim wrogom (a wtedy Strażnik może ci zadać powyższe pytania)",
            rolls: [
                {
                    valType: "modifier",
                    valField: "spryt",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+SPRYT [Ogarnij problem]`,
                },
            ]
        }, {
            id: "uzyj_magii",
            name: "Użyj magii",
            itype: "label",
            text: "Użyj magii",
            hint: "Gdy Używasz magii, powiedz, co starasz się uzyskać i jak rzucasz zaklęcie, po czym rzuć +Dziw.\nEfekty mogą być następujące:\n • przy 10+ magia działa bez problemu – wybierz jej efekt;\n • przy 7‒9 działa, ale niedoskonale ‒ wybierz jej efekt i wadę; Strażnik zdecyduje, jaki efekt ma wada;\n • przy porażce tracisz kontrolę nad magią – to nigdy nie kończy się dobrze.",
            rolls: [
                {
                    valType: "modifier",
                    valField: "dziw",
                    notation: "2d6",
                    successRule: "pbta:standard",
                    comment: `+DZIW [Użyj magii]`,
                },
            ]
        }
    ] as CharTemplateItem[]
}

export const csTplMotwPl_Spiskolog: CharTemplate = {
    id: "motw-pl-spiskolog",
    name: "Potwór tygodnia: Spiskolog",
    game: "Potwór tygodnia",
    sections: [
        {
            title: "Atrybuty",
            items: genAttrs()
        },
        {
            title: "Stan",
            items: [
                {
                    id: "fuks",
                    name: "Fuks",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Zaznacz fuksa, by zmienić wynik rzutu na 12 lub uniknąć obrażeń.",
                    labels: ["Fart", "Zguba"]
                },
                {
                    id: "obrazenia",
                    name: "Obrażenia",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Gdy zaznaczasz 4 lub więcej, zaznacz Niestabilny.",
                    labels: ["Sprawny", "Umierający"]
                },
                {
                    id: "niestabilny",
                    name: "Niestabilny",
                    text: "Niestabilny",
                    itype: "check",

                    hint: "Niestabilne obrażenia pogarszają się z czasem.",
                },
                {
                    id: "doswiadczenie",
                    name: "Doświadczenie",
                    itype: "resource_square",
                    limit: 5,

                    hint: "Za każdym razem gdy wyrzucisz 6 lub mniej, lub gdy każe Ci ruch, zaznacz doświadczenie.",
                },
            ]
        },
        {
            title: "Ruchy podstawowe",
            items: genBasicMoves(),
        },
        {
            title: "Ruchy",
            items: [
                {
                    id: "laczenie_kropek",
                    name: "Łączenie kropek",
                    text: "Łączenie kropek",
                    itype: "check",
                    hint: "Na początku każdej Tajemnicy jeśli szukasz większych spraw, których częścią mogą być obecne wydarzenia, rzuć +Spryt. Przy 10 + zatrzymaj 3, przy 7 - 9 zatrzymaj 1. Wydaj zatrzymane w trakcie Tajemnicy, by zadać Strażnikowi jedno z poniższych pytań: \n• Czy ta osoba jest powiązana z obecnymi wydarzeniami bardziej, niż twierdzi ? \n• Kiedy i gdzie dojdzie do kolejnego kluczowego wydarzenia ? \n• Czego potwór chce od tej osoby ?  \n• Czy to jest powiązane z poprzednimi tajemnicami, które badaliśmy ? \n• Jak ta tajemnica wiąże się z większymi sprawami ? ",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spryt",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPRYT [Łączenie kropek]`,
                        },
                    ]
                },
                {
                    id: "szalony_wzrok",
                    name: "Szalony wzrok",
                    text: "Szalony wzrok",
                    itype: "check",
                    hint: "Dostajesz +1 do Dziwu (do maksymalnie +3)",
                },
                {
                    id: "zrozum_to_ma_sens",
                    name: "Zrozum, to ma sens",
                    text: "Zrozum, to ma sens",
                    itype: "check",
                    hint: "Możesz używać Sprytu zamiast Uroku, gdy kimś manipulujesz.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spryt",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPRYT [Zrozum to ma sens]`,
                        },
                    ]
                },
                {
                    id: "podejrzliwy_umysl",
                    name: "Podejrzliwy umysł",
                    text: "Podejrzliwy umysł",
                    itype: "check",
                    hint: "Wiesz, gdy ktoś cię okłamuje.",
                },
                {
                    id: "latwo_przeoczyć",
                    name: "Łatwo przeoczyć",
                    text: "Łatwo przeoczyć",
                    itype: "check",
                    hint: "Gdy zachowujesz się nieracjonalnie, by czegoś uniknąć, rzuć +Dziw.\nPrzy 10+ uważają cię za osobę niegroźną i nieważną.\nPrzy 7-9 wybierz jedno: niegroźną albo nieważną.\nPrzy porażce skupia się na tobie większość (choć niecałość) uwagi (ale nie cała).",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "dziw",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+DZIW [Łatwo przeoczyć]`,
                        },
                    ]
                },
                {
                    id: "na_przekor",
                    name: "Na przekór",
                    text: "Na przekór",
                    itype: "check",
                    hint: "Gdy poszukasz i dostaniesz czyjąś szczerą poradę co do najlepszego sposobu działania i potem zrobisz coś innego, zaznacz doświadczenie. Gdy zrobisz coś zupełnie przeciwnego względem tej rady, dostajesz też ciągłe +1 do wszystkich ruchów, które wykonujesz robiąc to.",
                },
                {
                    id: "znajomi_z_sieci",
                    name: "Znajomi z sieci",
                    text: "Znajomi z sieci",
                    itype: "check",
                    hint: "Znasz mnóstwo ludzi w Internecie. Gdy kontaktujesz się ze znajomym z Sieci, by pomógł Ci z Tajemnicą, rzuć +Urok.\nPrzy 10+ jest dostępny i pomocny – może coś naprawić, złamać kod, zhakować komputer lub zdobyć dla ciebie jakąś specjalną informację.\nPrzy 7-9 jest gotowy pomóc, ale to zajmie trochę czasu albo ty musisz zrobić część z tego sama.\nPrzy porażce palisz mosty.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "urok",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+UROK [Znajomi z sieci]`,
                        },
                    ]
                },
                {
                    id: "ukradkowy",
                    name: "Ukradkowy",
                    text: "Ukradkowy",
                    itype: "check",
                    hint: "Gdy atakujesz z zasadzki lub z tyłu zadajesz +2 obrażenia",
                },
            ]
        },
        {
            title: "Sprzęt",
            items: [
                {
                    id: "normalne_bronie",
                    name: "Normalne bronie",
                    itype: "label",
                    text: "Normalne bronie"
                },
                {
                    id: "bron_1",
                    name: "rewolwer",
                    text: "Rewolwer kaliber .38",
                    itype: "check",

                    hint: "2-obrażenia z bliska przeładowywany głośny"
                },
                {
                    id: "bron_2",
                    name: "rewolwer 9mm",
                    text: "Rewolwer 9mm",
                    itype: "check",

                    hint: "2-obrażenia z bliska głośny"
                },
                {
                    id: "bron_3",
                    name: "Strzelba myśliwska",
                    text: "Strzelba myśliwska",
                    itype: "check",

                    hint: "2-obrażenia daleka głośna"
                },
                {
                    id: "bron_4",
                    name: "Magnum",
                    text: "Magnum",
                    itype: "check",

                    hint: "3-obrażenia z bliska przeładowywane głośne"
                },
                {
                    id: "bron_5",
                    name: "Shotgun",
                    text: "Shotgun",
                    itype: "check",

                    hint: "3-obrażenia z bliska krwawy"
                },
                {
                    id: "bron_6",
                    name: "Wielki nóż",
                    text: "Wielki nóż",
                    itype: "check",

                    hint: "1-obrażenia wręcz"
                },
                {
                    id: "ukryte_bronie",
                    name: "Ukryte bronie",
                    itype: "label",
                    text: "Ukryte bronie"
                },
                {
                    id: "bron_7",
                    name: "Noże do rzucania",
                    text: "Noże do rzucania",
                    itype: "check",

                    hint: "1-obrażenie z bliska liczne"
                },
                {
                    id: "bron_8",
                    name: "Pistolet kieszonkowy",
                    text: "Pistolet kieszonkowy",
                    itype: "check",

                    hint: "2-obrażenia z bliska głośny przeładowywany"
                },
                {
                    id: "bron_9",
                    name: "Garota",
                    text: "Garota",
                    itype: "check",

                    hint: "3-obrażenia w zwarciu"
                },
                {
                    id: "bron_10",
                    name: "Solidna latarka",
                    text: "Solidna latarka",
                    itype: "check",

                    hint: "1-obrażenie wręcz"
                },
                {
                    id: "bron_11",
                    name: "Ciężkie rękawice/mosiężne kastety",
                    text: "Ciężkie rękawice/mosiężne kastety",
                    itype: "check",

                    hint: "1-obrażenie wręcz"
                },
                {
                    id: "bron_12",
                    name: "Nóż motylkowy/składany",
                    text: "Nóż motylkowy/składany",
                    itype: "check",

                    hint: "1-obrażenie wręcz"
                },
            ]
        },
        {
            title: "Rozwój postaci",
            items: [
                {
                    id: "rozwiniecia",
                    name: "rozwiniecia",
                    itype: "label",
                    text: "Rozwinięcia",
                    hint: "Gdy rozwiniesz się pięć razy możesz wybierać rozwinięcia zaawansowane.\nSą opisane poniżej."
                },
                {
                    id: "rp_1",
                    name: "rp1",
                    text: "Dodaj +1 do Sprytu, maks. +3",
                    itype: "check",

                },
                {
                    id: "rp_2",
                    name: "rp2",
                    text: "Dodaj +1 do Hartu, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_3",
                    name: "rp3",
                    text: "Dodaj +1 do Spokoju, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_4",
                    name: "rp4",
                    text: "Dodaj +1 do Uroku, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_5",
                    name: "rp5",
                    text: "Weź nowy ruch Spiskologa",
                    itype: "check",

                },
                {
                    id: "rp_6",
                    name: "rp6",
                    text: "Weź nowy ruch Spiskologa",
                    itype: "check",

                },
                {
                    id: "rp_7",
                    name: "rp7",
                    text: "Uzyskaj Siedzibę, taką jak ma Ekspert, z dwiema opcjami",
                    itype: "check",

                },
                {
                    id: "rp_8",
                    name: "rp8",
                    text: "Dodaj do swojej Siedziby jeszcze jedną opcję",
                    itype: "check",

                },
                {
                    id: "rp_9",
                    name: "rp9",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rp_10",
                    name: "rp10",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rozwiniecia2",
                    name: "rozwiniecia2",
                    itype: "label",
                    text: "Rozwinięcia zaawansowane",
                },
                {
                    id: "rp_11",
                    name: "rp11",
                    text: "Dodaj +1 do dowolnego współczynnika, maks. +3.",
                    itype: "check",

                },
                {
                    id: "rp_12",
                    name: "rp12",
                    text: "Zmień Rolę tego łowcy",
                    itype: "check",

                },
                {
                    id: "rp_13",
                    name: "rp13",
                    text: "Stwórz innego Łowcę i graj nim razem z tym",
                    itype: "check",

                },
                {
                    id: "rp_14",
                    name: "rp14",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_15",
                    name: "rp15",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_16",
                    name: "rp16",
                    text: "Wyślij tego Łowcę na bezpieczną emeryturę",
                    itype: "check",

                },
            ]
        },
        {
            title: "Notatki",
            items: [
                {
                    id: "notatki_postac",
                    name: "Postać",
                    itype: "text"
                },
                {
                    id: "notatki_gra",
                    name: "Gra",
                    itype: "text"
                }
            ]
        }

    ]
}

export const csTplMotwPl_Niebianin: CharTemplate = {
    id: "motw-pl-niebianin",
    name: "Potwór tygodnia: Niebianin",
    game: "Potwór tygodnia",
    sections: [
        {
            title: "Atrybuty",
            items: genAttrs()
        },
        {
            title: "Stan",
            items: [
                {
                    id: "fuks",
                    name: "Fuks",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Zaznacz fuksa, by zmienić wynik rzutu na 12 lub uniknąć obrażeń.",
                    labels: ["Fart", "Zguba"]
                },
                {
                    id: "obrazenia",
                    name: "Obrażenia",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Gdy zaznaczasz 4 lub więcej, zaznacz Niestabilny.",
                    labels: ["Sprawny", "Umierający"]
                },
                {
                    id: "niestabilny",
                    name: "Niestabilny",
                    text: "Niestabilny",
                    itype: "check",

                    hint: "Niestabilne obrażenia pogarszają się z czasem.",
                },
                {
                    id: "doswiadczenie",
                    name: "Doświadczenie",
                    itype: "resource_square",
                    limit: 5,

                    hint: "Za każdym razem gdy wyrzucisz 6 lub mniej, lub gdy każe Ci ruch, zaznacz doświadczenie.",
                },
            ]
        },
        {
            title: "Ruchy podstawowe",
            items: genBasicMoves(),
        },
        {
            title: "Ruchy",
            items: [
                {
                    id: "szef_spoza_swiata",
                    name: "Szef spoza świata",
                    text: "Szef spoza świata",
                    itype: "check",
                    hint: "na początku każdej Tajemnicy rzuć +Dziw.\nPrzy 10+ twoi Przełożeni zlecają ci zrobienie czegoś prostego.\nPrzy 7-9 zlecają coś skomplikowanego lub trudnego. W obu przypadkach możesz od razu zadać im jedno pytanie z ruchu badaj tajemnicę. Przy porażce wymagają od ciebie zrobienia czegoś okropnego. Jeśli nie osiągniesz tego co miałaś zrobić, nie możesz znów używać tego ruchu, póki nie odpokutujesz swojej porażki.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "dziw",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+DZIW [Szef spoza świata]`,
                        },
                    ]
                },
                {
                    id: "anielskie_skrzydla",
                    name: "Anielskie skrzydła",
                    text: "Anielskie skrzydła",
                    itype: "check",
                    hint: "możesz się natychmiast przenosić do miejsc, w których byłeś oraz osób, które dobrze znasz. Jeśli zabierasz ze sobą osobę lub dwie, rzuć +Dziw.\nPrzy 10+ wszyscy trafiacie tam, gdzie chciałeś.\nPrzy 7-9 nie wychodzi ci. Zostajecie rozdzieleni lub wszyscy lądujecie nie tam, gdzie chciałeś.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "dziw",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+DZIW [Anielskie skrzydła]`,
                        },
                    ]
                },
                {
                    id: "zawsze_pod_reka",
                    name: "Zawsze pod ręką",
                    text: "Zawsze pod ręką",
                    itype: "check",
                    hint: "możesz przechować dowolny mały przedmiot w magicznej przestrzeni, do której nikt inny nie jest w stanie się dostać. Możesz odzyskać cokolwiek, co schowałaś, w dowolnym momencie – pojawia się to w twojej dłoni.",
                },
                {
                    id: "ukojenie",
                    name: "Ukojenie",
                    text: "Ukojenie",
                    itype: "check",
                    hint: "gdy przez kilka sekund mówisz do kogoś spokojnym głosem, możesz go uspokoić, wyciszając panikę, gniew i inne negatywne emocje. Dopóki twój głos jest słyszalny to działa nawet, gdy przyczyna ich emocji wciąż jest obecna.",
                },
                {
                    id: "makladanie_rak",
                    name: "Nakładanie rąk",
                    text: "Nakładanie rąk",
                    itype: "check",
                    hint: "twój dotyk może leczyć rany i choroby. Gdy nakładasz dłonie na kogoś rannego, rzuć +Spokój.\nPrzy 10+ leczysz 2-obrażenia lub choroby oraz stabilizujesz leczonego. \nPrzy 7-9 możesz leczyć jak przy 10+, ale wtedy przejmujesz leczone obrażenia lub chorobę.\nPrzy porażce twoja aura powoduje nowe obrażenia.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spokój",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPOKÓJ [Nakładanie rąk]`,
                        },
                    ]
                },
                {
                    id: "odpedzenie_zla",
                    name: "Odpędzenie zła",
                    text: "Odpędzenie zła",
                    itype: "check",
                    hint: "możesz wygnać pobliską nienaturalną istotę. Rzuć +Hart.\nPrzy 10+ jest wygnana. \nPrzy 7-9 to chwilkę potrwa, nim wygnanie zadziała – istota zdąży zrobić akcję lub dwie. W obu przypadkach odpędzana istota nie odnosi żadnych obrażeń, a ty nie masz kontroli nad tym, dokąd trafia.\nPrzy porażce coś ją tu trzyma. To źle. Ten ruch może być użyty względem nienaturalnych Łowców (np. Potwora).",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "hart",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+HART [Odpędzenie zła]`,
                        },
                    ]
                },
                {
                    id: "ugodzenie",
                    name: "Ugodzenie",
                    text: "Ugodzenie",
                    itype: "check",
                    hint: "Twoje ciało i boska broń zawsze liczą się jako słabość Potwora, z którym walczysz.\nTwoje ataki bez broni zadają 2-obrażenia krwawe w zwarciu/wręcz.",
                },
            ]
        },
        {
            title: "Zadanie",
            items: [
                {
                    id: "zad1",
                    name: "zad1",
                    text: "Masz zwalczać tu machinacje jakiegoś Adwersarza.",
                    itype: "check",
                },
                {
                    id: "zad2",
                    name: "zad2",
                    text: "Zbliża się Koniec.\nMasz prowadzić tych Łowców, by mu zapobiegli.",
                    itype: "check",
                },
                {
                    id: "zad3",
                    name: "zad3",
                    text: "Zbliża się Koniec.\nMasz prowadzić tych Łowców i zapewnić, że na pewno do niego dojdzie.",
                    itype: "check",
                },
                {
                    id: "zad4",
                    name: "zad4",
                    text: "Zostałeś wygnany. Musisz pracować w imię Dobra bez zwracania na siebie uwagi twoich braci i sióstr, bo oni mają obowiązek stracić cię za twoje zbrodnie.",
                    itype: "check",
                },
                {
                    id: "zad5",
                    name: "zad5",
                    text: "Jeden z pozostałych Łowców ma kluczową rolę do odegrania w nadchodzących wydarzeniach. Musisz przygotować go na tę rolę i bronić za wszelką cenę.",
                    itype: "check",
                },
            ]
        },
        {
            title: "Sprzęt",
            items: [
                {
                    id: "boska_bron",
                    name: "Boska broń",
                    itype: "label",
                    text: "Boska broń"
                },
                {
                    id: "bron_1",
                    name: "Gorejący miecz",
                    text: "Gorejący miecz",
                    itype: "check",
                    hint: "3-obrażenia wręcz ognisty święty"
                },
                {
                    id: "bron_2",
                    name: "Młot gromu",
                    text: "Młot gromu",
                    itype: "check",
                    hint: "3-obrażenia wręcz ogłuszający święty"
                },
                {
                    id: "bron_3",
                    name: "Kolczasty bicz",
                    text: "Kolczasty bicz",
                    itype: "check",
                    hint: "3-obrażenia wręcz obszarowy krwawy święty"
                },
                {
                    id: "bron_4",
                    name: "Torba Pięciu Demonów",
                    text: "Torba Pięciu Demonów",
                    itype: "check",
                    hint: "3-obrażenia wręcz magiczna święta"
                },
                {
                    id: "bron_5",
                    name: "Srebrny trójząb",
                    text: "Srebrny trójząb",
                    itype: "check",
                    hint: "3-obrażenia wręcz srebrny święty"
                },
                {
                    id: "boski_pancerz",
                    name: "Boski pancerz",
                    itype: "label",
                    color: "currentcolor",
                    text: "Masz też boski pancerz (1-pancerz święty). Wygląda adekwatnie do twojego niebiańskiego pochodzenia"
                },
                {
                    id: "bron_6",
                    name: "Kieł narwala",
                    text: "Kieł narwala (za zgodą Strażnika)",
                    itype: "check",
                    hint: "3-obrażenia wręcz wolny.\nGdy próbujesz kogoś leczyć takim kłem, rzuć +Dziw. \nPrzy 10+ leczysz 2 obrażenia i neutralizujesz trucizny.\nPrzy 7-9 leczysz jedno obrażenie.\nPrzy porażce kieł już nigdy nie zadziała."
                },

            ]
        },
        {
            title: "Rozwój postaci",
            items: [
                {
                    id: "rozwiniecia",
                    name: "rozwiniecia",
                    itype: "label",
                    text: "Rozwinięcia",
                    hint: "Gdy rozwiniesz się pięć razy możesz wybierać rozwinięcia zaawansowane.\nSą opisane poniżej."
                },
                {
                    id: "rp_1",
                    name: "rp1",
                    text: "Dodaj +1 do Hartu, maks. +3",
                    itype: "check",

                },
                {
                    id: "rp_2",
                    name: "rp2",
                    text: "Dodaj +1 do Spokoju, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_3",
                    name: "rp3",
                    text: "Dodaj +1 do Uroku, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_4",
                    name: "rp4",
                    text: "Dodaj +1 do Sprytu, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_5",
                    name: "rp5",
                    text: "Dodaj +1 do Dziwu, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_6",
                    name: "rp6",
                    text: "Weź nowy ruch Niebianina",
                    itype: "check",

                },
                {
                    id: "rp_7",
                    name: "rp7",
                    text: "Weź nowy ruch Niebianina",
                    itype: "check",

                },
                {
                    id: "rp_8",
                    name: "rp8",
                    text: "Uzyskaj sojusznika – pomniejsze niebiańskie stworzenie zesłane, by pomóc w Twojej misji",
                    itype: "check",

                },
                {
                    id: "rp_9",
                    name: "rp9",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rp_10",
                    name: "rp10",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rozwiniecia2",
                    name: "rozwiniecia2",
                    itype: "label",
                    text: "Rozwinięcia zaawansowane",
                },
                {
                    id: "rp_11",
                    name: "rp11",
                    text: "Dodaj +1 do dowolnego współczynnika, maks. +3.",
                    itype: "check",

                },
                {
                    id: "rp_12",
                    name: "rp12",
                    text: "Zmień Rolę tego łowcy",
                    itype: "check",

                },
                {
                    id: "rp_13",
                    name: "rp13",
                    text: "Stwórz innego Łowcę i graj nim razem z tym",
                    itype: "check",

                },
                {
                    id: "rp_14",
                    name: "rp14",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_15",
                    name: "rp15",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_16",
                    name: "rp16",
                    text: "Wyślij tego Łowcę na bezpieczną emeryturę",
                    itype: "check",

                },
                {
                    id: "rp_17",
                    name: "rp17",
                    text: "Wymaż wypełnienie jednego z pól Fuksa",
                    itype: "check",

                },
                {
                    id: "rp_18",
                    name: "rp18",
                    text: "Zmień swoją misję. Wybierz inną z normalnych opcji lub (za zgodą Strażnika) wymyśl własną.",
                    itype: "check",

                },
            ]
        },
        {
            title: "Notatki",
            items: [
                {
                    id: "notatki_postac",
                    name: "Postać",
                    itype: "text"
                },
                {
                    id: "notatki_gra",
                    name: "Gra",
                    itype: "text"
                }
            ]
        }

    ]
}

export const csTplMotwPl_Ekspert: CharTemplate = {
    id: "motw-pl-ekspert",
    name: "Potwór tygodnia: Ekspert",
    game: "Potwór tygodnia",
    sections: [
        {
            title: "Atrybuty",
            items: genAttrs()
        },
        {
            title: "Stan",
            items: [
                {
                    id: "fuks",
                    name: "Fuks",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Zaznacz fuksa, by zmienić wynik rzutu na 12 lub uniknąć obrażeń.",
                    labels: ["Fart", "Zguba"]
                },
                {
                    id: "obrazenia",
                    name: "Obrażenia",
                    itype: "state_resource_square",
                    limit: 7,

                    hint: "Gdy zaznaczasz 4 lub więcej, zaznacz Niestabilny.",
                    labels: ["Sprawny", "Umierający"]
                },
                {
                    id: "niestabilny",
                    name: "Niestabilny",
                    text: "Niestabilny",
                    itype: "check",

                    hint: "Niestabilne obrażenia pogarszają się z czasem.",
                },
                {
                    id: "doswiadczenie",
                    name: "Doświadczenie",
                    itype: "resource_square",
                    limit: 5,

                    hint: "Za każdym razem gdy wyrzucisz 6 lub mniej, lub gdy każe Ci ruch, zaznacz doświadczenie.",
                },
            ]
        },
        {
            title: "Ruchy podstawowe",
            items: genBasicMoves(),
        },
        {
            title: "Ruchy",
            items: [
                {
                    id: "czytalem_o_tym",
                    name: "Czytałem o tym",
                    text: "Czytałem o tym",
                    itype: "check",
                    hint: "rzucaj +Spryt zamiast +Spokój, gdy działasz pod presją.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spryt",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPRYT [Czytałem o tym]`,
                        },
                    ]
                },
                {
                    id: "raczej_mam_racje",
                    name: "Raczej mam rację",
                    text: "Raczej mam rację",
                    itype: "check",
                    hint: "gdy inny Łowca prosi cię o poradę w sprawie jakiegoś problemu, przedstaw swoją szczerą opinię i radę. Jeśli przyjmą twoją radę dostają ciągłe +1 dopóki się do niej stosują, a ty zaznaczasz doświadczenie.",
                },
                {
                    id: "przygotowany",
                    name: "Przygotowany",
                    text: "Przygotowany",
                    itype: "check",
                    hint: "gdy potrzebujesz czegoś nietypowego lub rzadkiego, rzuć +Spryt.\nPrzy 10+ masz to przy sobie.\nPrzy 7-9 masz to, ale nie przy sobie. Zdobycie tego zajmie trochę czasu.\nPrzy porażce wiesz, gdzie to jest – i jest w bardzo złym miejscu.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spryt",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPRYT [Przygotowany]`,
                        },
                    ]
                },
                {
                    id: "az_tak_nie_bolalo",
                    name: "Aż tak nie bolało",
                    text: "Aż tak nie bolało",
                    itype: "check",
                    hint: "raz na Tajemnicę możesz próbować działać pomimo ran. Rzuć +Spokój.\nPrzy 10+ leczysz 2 obrażenia i stabilizujesz się.\nPrzy 7-9 albo leczysz jedno obrażenie, albo się stabilizujesz.\nPrzy porażce boli jeszcze bardziej: Strażnik może użyć ruchu obrażeń albo uczynić twoje obrażenia niestabilnymi.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spokój",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPOKÓJ [Aż tak nie bolało]`,
                        },
                    ]
                },
                {
                    id: "precyzyjny_cios",
                    name: "Precyzyjny cios",
                    text: "Precyzyjny cios",
                    itype: "check",
                    hint: "gdy zadajesz potworowi obrażenia, możesz celować w czuły punkt. Rzuć +Hart. \nPrzy 10+ zadajesz +2 obrażenia.\nPrzy 7-9 zadajesz +1 obrażenie.\nPrzy porażce wystawiasz się i potwór może cię zaatakować.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "hart",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+HART [Precyzyjny cios]`,
                        },
                    ]
                },
                {
                    id: "wszystko_przewidzialem",
                    name: "Wszystko przewidziałem",
                    text: "Wszystko przewidziałem",
                    itype: "check",
                    hint: "na początku każdej tajemnicy rzuć +Spryt.\nPrzy 10+ zatrzymaj 2, przy 7-9 zatrzymaj 1. Wydawaj je, by być tam, gdzie potrzebujesz być, przygotowany i gotowy. Przy porażce Strażnik zatrzymuje 1 i może je wydać, byś był w najgorszym miejscu, nieprzygotowany i niegotowy.",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "spryt",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+SPRYT [Wszystko przewidziałem]`,
                        },
                    ]
                },
                {
                    id: "mroczna_przeszlosc",
                    name: "Mroczna przeszłość",
                    text: "Mroczna przeszłość",
                    itype: "check",
                    hint: "nim zostałaś jedną z tych dobrych parałaś się najplugawszymi sztukami magicznymi. Gdy błądzisz wśród wspomnień, szukając czegoś związanego z obecną sprawą, rzuć +Dziw.\nPrzy 10+ zadaj Strażnikowi dwa pytania z poniższej listy.\nPrzy 7-9 zadaj jedno.\nPrzy porażce wciąż możesz zadać jedno pytanie, ale jeśli to zrobisz, byłaś osobiście zamieszana w doprowadzenie do sytuacji, z którą się właśnie mierzycie. Pytania to:\n• Gdy zajmowałam się tą istotą (lub jej gatunkiem), czego się nauczyłam?\n• Jakie formy czarnej magii, które mogłyby tu pomóc, znam?\n• Czy znam kogoś, kto może za tym stać?\n• Kto, kogo znam, może nam teraz pomóc?",
                    rolls: [
                        {
                            valType: "modifier",
                            valField: "dziw",
                            notation: "2d6",
                            successRule: "pbta:standard",
                            comment: `+DZIW [Mroczna przeszłość]`,
                        },
                    ]
                },
            ]
        },
        {
            title: "Siedziba",
            items: [
                {
                    id: "s1",
                    name: "Biblioteka wiedzy",
                    text: "Biblioteka wiedzy",
                    itype: "check",
                    hint: "gdy grzebiesz w książkach, dostajesz jednorazowe +1 do badania tajemnicy (o ile stare książki, słowniki i almanachy mogą pomóc)."
                },
                {
                    id: "s2",
                    name: "Biblioteka magii",
                    text: "Biblioteka magii",
                    itype: "check",
                    hint: "gdy przygotowujesz się z pomocą tomów i grymuarów z tej biblioteki, dostajesz jednorazowe +1 do użycia magii."
                },
                {
                    id: "s3",
                    name: "Zaklęcia ochronne",
                    text: "Zaklęcia ochronne",
                    itype: "check",
                    hint: "twoja siedziba jest zabezpieczona przed potworami – nie mogą wejść. Mogą być zdolne w jakiś sposób ominąć tę barierę, ale nie będzie to proste"
                },
                {
                    id: "s4",
                    name: "Zbrojownia",
                    text: "Zbrojownia",
                    itype: "check",
                    hint: "masz zapas magicznych, rzadkich i zabójczych dla potworów broni oraz przedmiotów. Gdy potrzebujesz specjalnej broni, rzuć +Dziw.\nPrzy 10+ masz ją (i to masz jej dużo, jeśli potrzebujesz).\nPrzy 7-9 masz ją, ale masz jej mało.\nPrzy porażce masz nie to, czego szukałeś."
                },
                {
                    id: "s5",
                    name: "Szpitalik",
                    text: "Szpitalik",
                    itype: "check",
                    hint: "możesz leczyć ludzi i masz przestrzeń, w której jedno lub dwójka może dochodzić do siebie. Strażnik powie ci, ile będzie trwała rekonwalescencja danego pacjenta i czy potrzebujesz do niej dodatkowych zasobów lub pomocy."
                },
                {
                    id: "s6",
                    name: "Warsztat",
                    text: "Warsztat",
                    itype: "check",
                    hint: "masz gdzie budować i naprawiać broń, samochody i inne gadżety. Ustal ze Strażnikiem, ile będzie trwała dana budowa bądź naprawa i czy potrzebujesz do nich dodatkowych zasobów lub pomocy."
                },
                {
                    id: "s7",
                    name: "Skrytka",
                    text: "Skrytka",
                    itype: "check",
                    hint: "ten pokój jest izolowany od wszelkich potworów, duchów i magii, jakie znasz. Wszystko, co tu ukryjesz jest nie do znalezienia, nie może używać magii i nie może wyjść."
                },
                {
                    id: "s8",
                    name: "Pokój-schron",
                    text: "Pokój-schron",
                    itype: "check",
                    hint: "z zapasami potrzebnymi do życia i chroniony normalnymi oraz magicznymi środkami. Możesz się tam ukrywać przez kilka dni i praktycznie nic ci nie zagrozi."
                },
                {
                    id: "s9",
                    name: "Magiczna pracownia",
                    text: "Magiczna pracownia",
                    itype: "check",
                    hint: "masz mistyczne laboratorium pełne wszelkich rodzajów dziwnych składników i narzędzi pomocnych w rzucaniu czarów (dzięki ruchowi użycie magii, Wielkiej Magii i dowolnemu innemu magicznemu ruchowi)."
                },
            ]
        },
        {
            title: "Sprzęt",
            items: [
                {
                    id: "bronie_na_potwory",
                    name: "Bronie na potwory",
                    itype: "label",
                    text: "Bronie na potwory"
                },
                {
                    id: "bron_1",
                    name: "Młotek i drewniane kołki",
                    text: "Młotek i drewniane kołki",
                    itype: "check",
                    hint: "3-obrażenia w zwarciu powolny drewniany"
                },
                {
                    id: "bron_2",
                    name: "Srebrny miecz",
                    text: "Srebrny miecz",
                    itype: "check",
                    hint: "2-obrażenia wręcz krwawy srebrny"
                },
                {
                    id: "bron_3",
                    name: "Miecz z zimnego żelaza",
                    text: "Miecz z zimnego żelaza",
                    itype: "check",
                    hint: "2-obrażenia wręcz krwawy żelazny"
                },
                {
                    id: "bron_4",
                    name: "Błogosławiony nóż",
                    text: "Błogosławiony nóż",
                    itype: "check",
                    hint: "2-obrażenia wręcz święty"
                },
                {
                    id: "bron_5",
                    name: "Magiczny sztylet",
                    text: "Magiczny sztylet",
                    itype: "check",
                    hint: "2-obrażenia wręcz magiczny"
                },
                {
                    id: "bron_6",
                    name: "Torba juju",
                    text: "Torba juju",
                    itype: "check",
                    hint: "1-obrażenia na dystans magiczna"
                },
                {
                    id: "bron_7",
                    name: "Miotacz ognia",
                    text: "Miotacz ognia",
                    itype: "check",
                    hint: "3-obrażenia w pobliżu ognisty ciężki niestabilny"
                },
                {
                    id: "bron_8",
                    name: "Magnum",
                    text: "Magnum",
                    itype: "check",
                    hint: "3-obrażenia w pobliżu przeładowanie głośne"
                },
                {
                    id: "bron_9",
                    name: "Shotgun",
                    text: "Shotgun",
                    itype: "check",
                    hint: "3-obrażenia w pobliżu krwawy głośny"
                },
            ]
        },
        {
            title: "Rozwój postaci",
            items: [
                {
                    id: "rozwiniecia",
                    name: "rozwiniecia",
                    itype: "label",
                    text: "Rozwinięcia",
                    hint: "Gdy rozwiniesz się pięć razy możesz wybierać rozwinięcia zaawansowane.\nSą opisane poniżej."
                },
                {
                    id: "rp_1",
                    name: "rp1",
                    text: "Dodaj +1 do Sprytu, maks. +3",
                    itype: "check",

                },
                {
                    id: "rp_2",
                    name: "rp2",
                    text: "Dodaj +1 do Spokoju, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_3",
                    name: "rp3",
                    text: "Dodaj +1 do Uroku, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_4",
                    name: "rp4",
                    text: "Dodaj +1 do Dziwu, maks. +2",
                    itype: "check",

                },
                {
                    id: "rp_5",
                    name: "rp5",
                    text: "Weź nowy ruch Eksperta",
                    itype: "check",

                },
                {
                    id: "rp_6",
                    name: "rp6",
                    text: "Weź nowy ruch Eksperta",
                    itype: "check",

                },
                {
                    id: "rp_7",
                    name: "rp7",
                    text: "Dodaj nową opcję do swojej Siedziby",
                    itype: "check",

                },
                {
                    id: "rp_8",
                    name: "rp8",
                    text: "Dodaj nową opcję do swojej Siedziby",
                    itype: "check",

                },
                {
                    id: "rp_9",
                    name: "rp9",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rp_10",
                    name: "rp10",
                    text: "Weź ruch innej Roli",
                    itype: "check",

                },
                {
                    id: "rozwiniecia2",
                    name: "rozwiniecia2",
                    itype: "label",
                    text: "Rozwinięcia zaawansowane",
                },
                {
                    id: "rp_11",
                    name: "rp11",
                    text: "Dodaj +1 do dowolnego współczynnika, maks. +3.",
                    itype: "check",

                },
                {
                    id: "rp_12",
                    name: "rp12",
                    text: "Zmień Rolę tego łowcy",
                    itype: "check",

                },
                {
                    id: "rp_13",
                    name: "rp13",
                    text: "Stwórz innego Łowcę i graj nim razem z tym",
                    itype: "check",

                },
                {
                    id: "rp_14",
                    name: "rp14",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_15",
                    name: "rp15",
                    text: "Oznacz dwa podstawowe ruchy jako zaawansowane.",
                    itype: "check",

                },
                {
                    id: "rp_16",
                    name: "rp16",
                    text: "Wyślij tego Łowcę na bezpieczną emeryturę",
                    itype: "check",

                },
            ]
        },
        {
            title: "Notatki",
            items: [
                {
                    id: "notatki_postac",
                    name: "Postać",
                    itype: "text"
                },
                {
                    id: "notatki_gra",
                    name: "Gra",
                    itype: "text"
                }
            ]
        }

    ]
}