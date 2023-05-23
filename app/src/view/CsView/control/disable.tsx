import {
  CsField,
  CsInfo,
  netPublish,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { csTemplates } from "~/template";
import { addControl } from ".";

export const disableIcon2 = `data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" style="background-color:white"><path stroke="darkorange" fill="darkorange" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.946 7.946 0 0 1 12 20c-4.411 0-8-3.589-8-8zm14.312 4.897L7.103 5.688A7.948 7.948 0 0 1 12 4c4.411 0 8 3.589 8 8a7.954 7.954 0 0 1-1.688 4.897z"></path></svg>`;

export const disableIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="background-color:white"><path  stroke="darkorange" fill="darkorange" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
export var disableImg = document.createElement("img");
disableImg.src = disableIcon2;

export const addDisableControl = (
  canvas: fabric.Canvas,
  obj: fabric.Object,
  fld: CsField,
  info: CsInfo
) => {
  const tpl = csTemplates[info.template];
  if (!tpl) return;
  addControl(
    "disable",
    obj,
    0.5,
    0.5,
    16,
    16,
    () => {
      obj.data.disabled = !obj.data.disabled;
      if (obj.data.disabled) {
        obj.set({
          fill: "grey",
        });
        obj.setControlVisible("check", false);
      } else {
        obj.setControlVisible("check", true);
        obj.set({
          fill: obj.data.value
            ? fld.stroke
              ? fld.stroke
              : tpl.fieldStroke
            : "transparent",
        });
      }
      info.values[fld.id] = obj.data;
      updateCsStorage(info);
      if (info.shared) netPublish(topicCsInfo, info);
      canvas.requestRenderAll();
    },
    disableImg
  );
};
