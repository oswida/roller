import { CsTemplate } from "~/common";

export const templateWzmPL: CsTemplate = {
    game: "Wyprawa za Mur",
    name: "Wyprawa za Mur",
    pageWidth: 1000,
    pageHeight: 1414,
    pages: [{
        pos: 1,
        img: "cs/wzm-pl.webp",
        fields: [
            {
                id: "name",
                rect: [155, 62, 341, 29],
                name: "name",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "gracz",
                rect: [188, 113, 311, 29],
                name: "gracz",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "klasa",
                rect: [182, 166, 316, 29],
                name: "klasa",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "poziom",
                rect: [194, 216, 53, 29],
                name: "poziom",
                type: "text",
                fontSize: 25,
            },
            {
                id: "swiatopoglad",
                rect: [711, 63, 199, 29],
                name: "światopogląd",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "doswiadczenie",
                rect: [727, 115, 139, 29],
                name: "doświadczenie",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "premia_atak",
                rect: [748, 165, 105, 29],
                name: "premia do ataku",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "inicjatywa",
                rect: [663, 218, 82, 29],
                name: "inicjatywa",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "kp",
                rect: [539, 337, 72, 66],
                name: "klasa pancerza",
                type: "text",
                fontSize: 55,
                textAlign: "center"
            },
            {
                id: "fortuna",
                rect: [692, 348, 48, 52],
                name: "punkty fortuny",
                type: "text",
                fontSize: 50,
                textAlign: "center"
            },
            {
                id: "wytrzymalosc_akt",
                rect: [879, 302, 51, 51],
                name: "obecne punkty wytrzymałości",
                type: "text",
                fontSize: 50,
                textAlign: "center"
            },
            {
                id: "wytrzymalosc",
                rect: [827, 362, 61, 64],
                name: "punkty wytrzymałości",
                type: "text",
                fontSize: 50,
                textAlign: "center"
            },
            {
                id: "umiejetnosci",
                rect: [522, 542, 395, 98],
                name: "umiejętności",
                type: "text",
                fontSize: 19,
                textAlign: "left"
            },
            {
                id: "zdolnosci_klasy",
                rect: [523, 672, 393, 98],
                name: "zdolności klasy",
                type: "text",
                fontSize: 19,
                textAlign: "left"
            },
            {
                id: "ekwipunek",
                rect: [526, 807, 387, 253],
                name: "ekwipunek",
                type: "text",
                fontSize: 19,
                textAlign: "left"
            },
            {
                id: "notatki",
                rect: [526, 1097, 380, 182],
                name: "notatki",
                type: "text",
                fontSize: 19,
                textAlign: "left"
            },
            {
                id: "bron1nazwa",
                rect: [89, 1066, 257, 34],
                name: "broń 1",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "bron1atak",
                rect: [358, 1066, 31, 31],
                name: "broń 1: atak",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "bron1obr",
                rect: [419, 1066, 65, 31],
                name: "broń 1: obrażenia",
                type: "text",
                fontSize: 26,
                textAlign: "center"
            }, {
                id: "bron2nazwa",
                rect: [89, 1136, 257, 34],
                name: "broń 2",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "bron2atak",
                rect: [358, 1136, 31, 31],
                name: "broń 2: atak",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "bron2obr",
                rect: [419, 1136, 65, 31],
                name: "broń 2: obrażenia",
                type: "text",
                fontSize: 26,
                textAlign: "center"
            },
            {
                id: "bron3nazwa",
                rect: [89, 1206, 257, 34],
                name: "broń 3",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "bron3atak",
                rect: [358, 1206, 31, 31],
                name: "broń 3: atak",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "bron3obr",
                rect: [419, 1206, 65, 31],
                name: "broń 3: obrażenia",
                type: "text",
                fontSize: 26,
                textAlign: "center"
            },
            {
                id: "bron4nazwa",
                rect: [89, 1276, 257, 34],
                name: "broń 4",
                type: "text",
                fontSize: 25,
                textAlign: "left"
            },
            {
                id: "bron4atak",
                rect: [358, 1276, 31, 31],
                name: "broń 4: atak",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "bron4obr",
                rect: [419, 1276, 65, 31],
                name: "broń 4: obrażenia",
                type: "text",
                fontSize: 26,
                textAlign: "center"
            },
            {
                id: "obrona_trucizna",
                rect: [103, 762, 45, 48],
                name: "rzut obronny: trucizna",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "obrona_zioniecie",
                rect: [264, 762, 45, 48],
                name: "rzut obronny: zionięcie",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "obrona_przemiana",
                rect: [420, 762, 45, 48],
                name: "rzut obronny: przemiana",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "obrona_czary",
                rect: [179, 868, 45, 48],
                name: "rzut obronny: czary",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "obrona_przedmioty",
                rect: [342, 868, 45, 48],
                name: "rzut obronny: magiczne przedmioty",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "sila",
                rect: [259, 292, 49, 49],
                name: "siła",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "sila_bonus",
                rect: [326, 299, 34, 34],
                name: "bonus: siła",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "zrecznosc",
                rect: [259, 356, 49, 49],
                name: "zręczność",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "zrecznosc_bonus",
                rect: [326, 363, 34, 34],
                name: "bonus: zręczność",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "kondycja",
                rect: [259, 420, 49, 49],
                name: "kondycja",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "kondycja_bonus",
                rect: [326, 427, 34, 34],
                name: "bonus: kondycja",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "inteligencja",
                rect: [259, 484, 49, 49],
                name: "inteligencja",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "inteligencja_bonus",
                rect: [326, 491, 34, 34],
                name: "bonus: inteligencja",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "madrosc",
                rect: [259, 548, 49, 49],
                name: "mądrość",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "madrosc_bonus",
                rect: [326, 555, 34, 34],
                name: "bonus: mądrość",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            },
            {
                id: "charyzma",
                rect: [259, 612, 49, 49],
                name: "charyzma",
                type: "text",
                fontSize: 42,
                textAlign: "center"
            },
            {
                id: "charyzma_bonus",
                rect: [326, 619, 34, 34],
                name: "bonus: charyzma",
                type: "text",
                fontSize: 28,
                textAlign: "center"
            }
        ]
    }],
    fieldColor: "#fff",
    fieldStroke: "#000",
    fieldFontSize: 25
}