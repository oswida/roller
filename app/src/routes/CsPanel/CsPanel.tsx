import { Component, onCleanup, onMount } from "solid-js";
import { TOPBAR_HEIGHT } from "~/common";
import { Flex } from "~/component";
import { CsView } from "~/view/CsView";

export const CsPanel: Component = () => {
  let csRef: HTMLDivElement;

  const adjustSize = () => {
    if (!csRef) {
      return;
    }
    // const delta = TOPBAR_HEIGHT + 60; // 40 - button height
    // if (csRef) csRef.style.height = `calc(100vh - ${delta}px)`;
    // if (csRef) csRef.style.height = `calc(100vh - ${delta}px)`;
    csRef.style.height = `calc(100vh - ${TOPBAR_HEIGHT}px)`;
  };

  const handler = (event: Event) => {
    adjustSize();
  };

  onMount(() => {
    window.addEventListener("resize", handler);
    adjustSize();
  });

  onCleanup(() => {
    window.removeEventListener("resize", handler);
  });


  return <Flex>
    <div>List</div>
    <CsView ref={(e: any) => csRef = e} />
  </Flex>;
};
