import { CsTemplate } from "./types";

export const CstPotworTygodniaSpiskolog: CsTemplate = {
    id: "e063597b-e67a-4135-ba88-1d0dfc127904",
    name: "Potwór tygodnia: Spiskolog",
    sections: [
        {
            title: "Wygląd",
            description: "Wybierz jedno z każdej listy",
            items: [{
                id: "1",
                title: "Osoba",
                itype: "radio-line",
                details: ["mężczyzna", "kobieta", "transgresywny", "zakamuflowany"]
            }, {
                id: "2",
                itype: "radio-line",
                title: "Spojrzenie",
                details: ["dziki wzrok", "rozbiegany wzrok", "skupiony wzrok", "wytężony wzrok",
                    "podejrzliwy wzrok", "wzrok pełen zdziwienia", "czujny wzrok"]
            }]
        },
        {
            title: "Współczynniki",
            description: "wybierz jedną linijkę",
            items: [{
                id: "3",
                itype: "radio-list",
                title: "Współczynniki",
                details: [
                    "Urok +1, Spokój +1, Spryt +2, Hart -1, Dziw =0",
                    "Urok =0, Spokój +1, Spryt +2, Hart -1, Dziw +1",
                    "Urok +1, Spokój -1, Spryt +2, Hart +1, Dziw =0",
                    "Urok +1, Spokój -1, Spryt +2, Hart =0, Dziw +1",
                    "Urok -1, Spokój -1, Spryt +2, Hart =0, Dziw +2"
                ]
            }]
        },
        {
            title: "Ruchy",
            description: "Dysponujesz wszystkimi Podstawowymi Ruchami, wybierz też trzy z Ruchów Spiskologa",
            items: []
        }
    ]
} 