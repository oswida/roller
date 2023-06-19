import { CharTemplate, CharTemplateItem } from "~/common";

export const csTplGlina: CharTemplate = {
  id: "glina",
  name: "Glina",
  game: "Glina RPG",
  sections: [
    {
      title: "Test",
      items: [
        {
          id: "test",
          name: "test",
          itype: "attr",
          rolls: [
            {
              notation: "2d10+1d6",
              comment: "PLUS MOD",
              valType: "modifier_plus_mod",
              labels: ["Action dice modifier"],
              successRule: "ironsworn:glina",
            },
          ],
        },
      ],
    },
  ],
};
