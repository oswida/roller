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
            },
            {
                id: "h1",
                rect: [54, 345, 25, 25],
                name: "h1",
                type: "circle-check",
                stroke: "red"
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