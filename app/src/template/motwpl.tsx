import { CsTemplate } from "~/common";

export const templateMotwpl: CsTemplate = {
    game: "Potwór tygodnia",
    name: "Potwór tygodnia: czaromiot",
    pageHeight: 966,
    pageWidth: 1366,
    fieldColor: "#eee",
    fieldStroke: "#000000",
    fieldFontSize: 25,
    pages: [{
        pos: 1,
        img: "cs/motwpl-czaromiot-1.webp",
        fields: [{
            id: "urok",
            name: "Urok",
            rect: [70, 303, 23, 27],
            type: "attr",
            roll: {
                dice: "2d6",
                type: "mod",
                srule: "pbta:standard",
            }
        }, {
            id: "wrozba",
            name: 'wrozba',
            rect: [919, 68, 11, 11],
            type: "rect-check"
        }]
    }, {
        pos: 2,
        img: "cs/motwpl-czaromiot-2.webp",
        fields: []
    }]
}
