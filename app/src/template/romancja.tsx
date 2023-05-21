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
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Siła: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Siła: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Siła: utrudnienie"
                }]
            }, {
                id: "walka",
                name: "walka",
                rect: [674, 425, 53, 51],
                type: "attr",
                fontSize: 38,
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Walka: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Walka: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Walka: utrudnienie"
                }]
            },
            {
                id: "ruch",
                name: "ruch",
                rect: [674, 536, 53, 51],
                type: "attr",
                fontSize: 38,
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Ruch: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Ruch: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Ruch: utrudnienie"
                }]
            },
            {
                id: "urok",
                name: "urok",
                rect: [674, 646, 53, 51],
                type: "attr",
                fontSize: 38,
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Urok: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Urok: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Urok: utrudnienie"
                }]
            },
            {
                id: "rozum",
                name: "rozum",
                rect: [674, 755, 53, 51],
                type: "attr",
                fontSize: 38,
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Rozum: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Rozum: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Rozum: utrudnienie"
                }]
            },
            {
                id: "duch",
                name: "duch",
                rect: [674, 866, 53, 51],
                type: "attr",
                fontSize: 38,
                rolls: [{
                    type: "target",
                    dice: "2d10",
                    srule: "pio3s:standard",
                    comment: "Duch: standard"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:standard",
                    comment: "Duch: ułatwienie"
                }, {
                    type: "target",
                    dice: "3d10",
                    srule: "pio3s:hard",
                    comment: "Duch: utrudnienie"
                }]
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
                id: "p2",
                rect: [106, 431, 25, 25],
                name: "p2",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "p3",
                rect: [160, 431, 25, 25],
                name: "p3",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "p4",
                rect: [212, 431, 25, 25],
                name: "p4",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "p5",
                rect: [264, 431, 25, 25],
                name: "p5",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "p6",
                rect: [317, 431, 25, 25],
                name: "p6",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "p7",
                rect: [370, 431, 25, 25],
                name: "p7",
                type: "circle-check",
                stroke: "blue"
            },
            {
                id: "b1",
                rect: [53, 517, 25, 25],
                name: "b1",
                type: "circle-check",
                stroke: "yellow"
            },
            {
                id: "b2",
                rect: [106, 517, 25, 25],
                name: "b2",
                type: "circle-check",
                stroke: "yellow"
            },
            {
                id: "b3",
                rect: [160, 517, 25, 25],
                name: "b3",
                type: "circle-check",
                stroke: "yellow"
            },
            {
                id: "b4",
                rect: [214, 517, 25, 25],
                name: "b4",
                type: "circle-check",
                stroke: "yellow"
            },
            {
                id: "b5",
                rect: [268, 517, 25, 25],
                name: "b5",
                type: "circle-check",
                stroke: "yellow"
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
        },
        {
            pos: 2,
            img: "cs/pio3s-romancja-2.webp",
            fields: [{
                id: "notatki2",
                name: "notatki2",
                rect: [54, 284, 686, 784],
                type: "text",
                textAlign: "left",
                fontSize: 19,
            }]
        }
    ]
};