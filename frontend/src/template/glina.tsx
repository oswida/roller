import { CharTemplate, CharTemplateItem } from "~/common";

export const csTplGlinaBH: CharTemplate = {
  id: "glina",
  name: "Brudny Harry",
  game: "Glina RPG",
  sections: [
    {
      title: "Postać",
      items: [
        {
          id: "imie",
          name: "Imię",
          itype: "text",
          limit: 1,
          // rolls: [
          //   {
          //     notation: "2d10+1d6",
          //     comment: "PLUS MOD",
          //     valType: "modifier_plus_mod",
          //     labels: ["Action dice modifier"],
          //     successRule: "ironsworn:glina",
          //   },
          // ],
        },
      ],
    },
  ],
};
