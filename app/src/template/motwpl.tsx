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

export const csTplMotwPl_Spiskolog: CharTemplate = {
    id: "motw-pl",
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
                    color: "white",
                    hint: "Zaznacz fuksa, by zmienić wynik rzutu na 12 lub uniknąć obrażeń.",
                    labels: ["Fart", "Zguba"]
                },
                {
                    id: "obrazenia",
                    name: "Obrażenia",
                    itype: "state_resource_square",
                    limit: 7,
                    color: "white",
                    hint: "Gdy zaznaczasz 4 lub więcej, zaznacz Niestabilne.",
                    labels: ["Sprawny", "Umierający"]
                },
                {
                    id: "niestabilny",
                    name: "Niestabilny",
                    text: "Niestabilny",
                    itype: "check",
                    color: "white",
                    hint: "Niestabilne obrażenia pogarszają się z czasem.",
                },
                {
                    id: "doswiadczenie",
                    name: "Doświadczenie",
                    itype: "resource_square",
                    limit: 5,
                    color: "white",
                    hint: "Za każdym razem gdy wyrzucisz 6 lub mniej, lub gdy każe Ci ruch, zaznacz doświadczenie.",
                },
            ]
        },
        {
            title: "Ruchy",
            items: [
                {
                    id: "laczenie_kropek",
                    name: "Łączenie kropek",
                    text: "Łączenie kropek",
                    itype: "check",
                    color: "white",
                    hint: "Na początku każdej Tajemnicy jeśli szukasz większych spraw, których częścią mogą być obecne wydarzenia, rzuć + Spryt. Przy 10 + zatrzymaj 3, przy 7 - 9 zatrzymaj 1. Wydaj zatrzymane w trakcie Tajemnicy, by zadać Strażnikowi jedno z poniższych pytań: \n• Czy ta osoba jest powiązana z obecnymi wydarzeniami bardziej, niż twierdzi ? \n• Kiedy i gdzie dojdzie do kolejnego kluczowego wydarzenia ? \n• Czego potwór chce od tej osoby ?  \n• Czy to jest powiązane z poprzednimi tajemnicami, które badaliśmy ? \n• Jak ta tajemnica wiąże się z większymi sprawami ? ",
                },
                {
                    id: "szalony_wzrok",
                    name: "Szalony wzrok",
                    text: "Szalony wzrok",
                    itype: "check",
                    color: "white",
                    hint: "Dostajesz +1 do Dziwu (do maksymalnie +3)",
                },
                {
                    id: "zrozum_to_ma_sens",
                    name: "Zrozum, to ma sens",
                    text: "Zrozum, to ma sens",
                    itype: "check",
                    color: "white",
                    hint: "Możesz używać Sprytu zamiast Uroku, gdy kimś manipulujesz.",
                },
                {
                    id: "podejrzliwy_umysl",
                    name: "Podejrzliwy umysł",
                    text: "Podejrzliwy umysł",
                    itype: "check",
                    color: "white",
                    hint: "Wiesz, gdy ktoś cię okłamuje.",
                },
                {
                    id: "latwo_przeoczyć",
                    name: "Łatwo przeoczyć",
                    text: "Łatwo przeoczyć",
                    itype: "check",
                    color: "white",
                    hint: "Gdy zachowujesz się nieracjonalnie, by czegoś uniknąć, rzuć +Dziw. Przy 10+ uważają cię za osobę niegroźną i nieważną. Przy 7-9 wybierz jedno: niegroźną albo nieważną. Przy porażce skupia się na tobie większość (choć niecałość) uwagi (ale nie cała).",
                },
                {
                    id: "na_przekor",
                    name: "Na przekór",
                    text: "Na przekór",
                    itype: "check",
                    color: "white",
                    hint: "Gdy poszukasz i dostaniesz czyjąś szczerą poradę co do najlepszego sposobu działania i potem zrobisz coś innego, zaznacz doświadczenie. Gdy zrobisz coś zupełnie przeciwnego względem tej rady, dostajesz też ciągłe +1 do wszystkich ruchów, które wykonujesz robiąc to.",
                },
                {
                    id: "znajomi_z_sieci",
                    name: "Znajomi z sieci",
                    text: "Znajomi z sieci",
                    itype: "check",
                    color: "white",
                    hint: "Znasz mnóstwo ludzi w Internecie. Gdy kontaktujesz się ze znajomym z Sieci, by pomógł Ci z Tajemnicą, rzuć <b>+Urok</b>. Przy 10+ jest dostępny i pomocny – może coś naprawić, złamać kod, zhakować komputer lub zdobyć dla ciebie jakąś specjalną informację. Przy 7-9 jest gotowy pomóc, ale to zajmie trochę czasu albo ty musisz zrobić część z tego sama. Przy porażce palisz mosty.",
                },
                {
                    id: "ukradkowy",
                    name: "Ukradkowy",
                    text: "Ukradkowy",
                    itype: "check",
                    color: "white",
                    hint: "Gdy atakujesz z zasadzki lub z tyłu zadajesz +2 obrażenia",
                },
            ]
        }

    ]
}