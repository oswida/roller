import { Component, onCleanup, onMount } from "solid-js";
import { TOPBAR_HEIGHT } from "~/common";
import { Flex } from "~/component";
import { BoardLeftPane, BoardView } from "~/view/BoardView";
import { CsView } from "~/view/CsView";
import { CsLeftPane } from "~/view/CsView/CsLeftPane";

export const BoardPanel: Component = () => {
  let boardRef: HTMLDivElement;
  let listRef: HTMLDivElement;

  const adjustSize = () => {
    if (!boardRef || !listRef) {
      return;
    }
    boardRef.style.height = `calc(100vh - ${TOPBAR_HEIGHT}px)`;
    listRef.style.height = `calc(100vh - ${TOPBAR_HEIGHT}px - 90px)`;
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

  return (
    <Flex>
      <BoardLeftPane ref={(e: any) => (listRef = e)} adjustSize={adjustSize} />
      <BoardView ref={(e: any) => (boardRef = e)} />
    </Flex>
  );
};
