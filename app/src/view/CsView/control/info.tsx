import { CsField, CsInfo } from "~/common";
import { csTemplates } from "~/template";
import { addControl } from ".";

export const infoIcon = `data:image/svg+xml,<svg fill="darkorange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="background-color:white" width="24px" height="24px"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 128c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32 14.3-32 32-32zm40 256h-80c-13.2 0-24-10.7-24-24s10.75-24 24-24h16v-64h-8c-13.25 0-24-10.75-24-24s10.8-24 24-24h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24s-10.7 24-24 24z"></path></svg>`;
export var infoImg = document.createElement("img");
infoImg.src = infoIcon;

export const addInfoControl = (
  canvas: fabric.Canvas,
  obj: fabric.Object,
  fld: CsField,
  info: CsInfo
) => {
  const tpl = csTemplates[info.template];
  if (!tpl) return;
  addControl(
    "info",
    obj,
    -0.5,
    0.5,
    16,
    16,
    () => {
      canvas.requestRenderAll();
    },
    infoImg
  );
};
