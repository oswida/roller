import {
  CsField,
  CsInfo,
  netPublish,
  topicCsInfo,
  updateCsStorage,
} from "~/common";
import { csTemplates } from "~/template";
import { addControl } from ".";

export const checkIcon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="background-color:white"><path stroke="darkorange" fill="darkorange" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`;
export var checkImg = document.createElement("img");
checkImg.src = checkIcon;

export const addCheckControl = (
  canvas: fabric.Canvas,
  obj: fabric.Object,
  fld: CsField,
  info: CsInfo
) => {
  const tpl = csTemplates[info.template];
  if (!tpl) return;
  addControl(
    "check",
    obj,
    0.5,
    -0.5,
    -16,
    16,
    () => {
      if (obj.data.disabled) return;
      obj.data.value = !obj.data.value;
      if (obj.data.value) {
        obj.set({
          fill: fld.stroke ? fld.stroke : tpl.fieldStroke,
        });
      } else {
        obj.set({
          fill: "transparent",
        });
      }
      info.values[fld.id] = obj.data;
      updateCsStorage(info);
      if (info.shared) netPublish(topicCsInfo, info);
      canvas.requestRenderAll();
    },
    checkImg
  );
};
