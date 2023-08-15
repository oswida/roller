import { CTITextData, CharTemplateItem, CharTemplateItemType } from "~/common";
import { CounterItem } from "~/components/CsViewer/elements/TplCounter";
import { TextCheckItem } from "~/components/CsViewer/elements/TplTextCheck";
import { TextListItem } from "~/components/CsViewer/elements/TplTextList";

export const getFieldValue = (
  name: string,
  itype: CharTemplateItemType,
  values: Record<string, any>,
  checkable?: boolean
) => {
  switch (itype) {
    case "attr":
    case "check":
    case "computed":
    case "resource":
    case "select":
      return values[name];
    case "counter":
      const v = values[name] as CounterItem;
      return v.value;
    case "text":
      if (checkable) {
        const v = values[name] as TextCheckItem;
        if (!v) return values[name];
        return v.text;
      }
      return values[name];
    case "list":
      const dt = values[name] as TextListItem;
      if (!dt) return values[name];
      return dt.text;
    default:
      return values[name];
  }
};

export const getFieldCheck = (
  name: string,
  item: CharTemplateItem,
  values: Record<string, any>
) => {
  switch (item.itype) {
    case "attr":
    case "check":
    case "computed":
    case "resource":
    case "select":
      return false;
    case "counter":
      const v = values[name] as CounterItem;
      return v.checked;
    case "text":
      const data = item.data as CTITextData;
      if (!data) return false;
      if (data.check) {
        const v = values[name] as TextCheckItem;
        if (!v) return false;
        return v.checked;
      }
      return false;
    case "list":
      const dt = values[name] as TextListItem;
      if (!dt) return false;
      return dt.checked;
    default:
      return false;
  }
};
