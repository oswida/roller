let isDragging = false;
let lastPosX = 0;
let lastPosY = 0;

export const initEvents = (canvas: () => fabric.Canvas | undefined) => {
  const cnv = canvas();
  if (!cnv) return;

  cnv.on("mouse:wheel", function (opt) {
    if (opt.e.shiftKey || opt.e.altKey) {
      const cnv = canvas();
      if (!cnv) return;
      var delta = opt.e.deltaY;
      var zoom = cnv.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      cnv.setZoom(zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    }
  });

  cnv.on("mouse:down", function (opt) {
    const cnv = canvas();
    if (!cnv) return;
    var evt = opt.e;
    if (evt.shiftKey === true || opt.button == 3) {
      isDragging = true;
      lastPosX = evt.clientX;
      lastPosY = evt.clientY;
      cnv.selection = false;
    }
  });
  cnv.on("mouse:move", function (opt) {
    const cnv = canvas();
    if (!cnv) return;
    if (isDragging) {
      var e = opt.e;
      var vpt = cnv.viewportTransform;
      if (!vpt) return;
      vpt[4] += e.clientX - lastPosX;
      vpt[5] += e.clientY - lastPosY;
      cnv.requestRenderAll();
      lastPosX = e.clientX;
      lastPosY = e.clientY;
    }
  });
  cnv.on("mouse:up", function (_opt) {
    const cnv = canvas();
    if (!cnv) return;
    if (isDragging) {
      if (cnv.viewportTransform)
        cnv.setViewportTransform(cnv.viewportTransform);
      isDragging = false;
      lastPosX = 0;
      lastPosY = 0;
    }
    cnv.selection = true;
  });
};
