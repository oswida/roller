import { CTIComputedData, CharTemplate, CharTemplateItem } from "~/common";

export const csTplTest: CharTemplate = {
  id: "test",
  name: "Test",
  game: "Test",
  sections: [
    {
      title: "Main",
      items: [
        {
          id: "comp2",
          itype: "computed",
          name: "Computed",
          hint: "comp hint",
          data: {
            compute: (item: CharTemplateItem, values: Record<string, any>) => {
              return "0";
            },
          } as CTIComputedData,
        },
      ],
    },
  ],
};
