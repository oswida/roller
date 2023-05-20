import { CsTemplate } from "~/common";


export const templateRomancja: CsTemplate = {
    game: "Romancja",
    name: "Romancja",
    pageHeight: 794,
    pageWidth: 1123,
    fieldColor: "#fff",
    fieldStroke: "#000000",
    fieldFontSize: 33,
    pages: [
        {
            pos: 1,
            img: "cs/pio3s-romancja.webp",
            fields: [{
                id: "name",
                rect: [329, 206, 409, 40],
                name: "name",
                type: "text",
                fontSize: 33,
            }, {
                id: "sila",
                name: "siła",
                rect: [674, 319, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Siła"
                }
            }, {
                id: "walka",
                name: "walka",
                rect: [674, 425, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Walka"
                }
            },
            {
                id: "ruch",
                name: "ruch",
                rect: [674, 536, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Ruch"
                }
            },
            {
                id: "urok",
                name: "urok",
                rect: [674, 646, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Urok"
                }
            },
            {
                id: "rozum",
                name: "rozum",
                rect: [674, 755, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Rozum"
                }
            },
            {
                id: "duch",
                name: "duch",
                rect: [674, 866, 53, 51],
                type: "attr",
                fontSize: 38,
                roll: {
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Duch"
                }
            },
            {
                id: "h1",
                rect: [54, 345, 25, 25],
                name: "h1",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h2",
                rect: [106, 345, 25, 25],
                name: "h2",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h3",
                rect: [160, 345, 25, 25],
                name: "h3",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h4",
                rect: [212, 345, 25, 25],
                name: "h4",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h5",
                rect: [264, 345, 25, 25],
                name: "h5",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h6",
                rect: [317, 345, 25, 25],
                name: "h6",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "h7",
                rect: [370, 345, 25, 25],
                name: "h7",
                type: "circle-check",
                stroke: "red"
            },
            {
                id: "p1",
                rect: [54, 431, 25, 25],
                name: "p1",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "notatki",
                name: "notatki",
                rect: [51, 630, 447, 440],
                type: "text",
                fontSize: 19,
                textAlign: "left"
            }
            ]
        }
    ]
};