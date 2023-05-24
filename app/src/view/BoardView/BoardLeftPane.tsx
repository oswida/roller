import { Component, For, Match, Show, Switch, createMemo, createSignal } from "solid-js";
import { boardLeftPaneStyle, boardListStyle } from "./styles.css";
import { Alert, Button, Dialog, Flex, Input, Popover, Text } from "~/component";
import { appBoards, appSettings, currentBoard, deleteBoardStorage, emptyBoardInfo, netPublish, setBoardLoaded, setCurrentBoard, topicBoardInfo, updateBoardStorage, wbState } from "~/common";
import { FaSolidBrush, FaSolidFileExport, FaSolidFileImport, FaSolidFill, FaSolidPalette, FaSolidPen, FaSolidPlus, FaSolidShapes, FaSolidShareNodes, FaSolidToolbox, FaSolidTrash } from "solid-icons/fa";
import { BoardItem } from "./BoardItem";
import toast from "solid-toast";
import { ColorSettings } from "./ColorSettings";
import { ToolSettings } from "./ToolSettings";

type Props = {
  ref: (e: any) => void;
  adjustSize: () => void;
};

export const BoardLeftPane: Component<Props> = ({ ref, adjustSize }) => {
  const [crDialogOpen, setCrDialogOpen] = createSignal(false);
  const [editDialogOpen, setEditDialogOpen] = createSignal(false);
  const [delDialogOpen, setDelDialogOpen] = createSignal(false);
  const [shareDialogOpen, setShareDialogOpen] = createSignal(false);
  const [selBoardName, setSelBoardName] = createSignal("");
  const [selBoardBkg, setSelBoardBkg] = createSignal("");

  let pane: HTMLDivElement;

  const deleteBoard = () => {
    setDelDialogOpen(false);
    const board = currentBoard();
    if (!board) return;
    deleteBoardStorage(board.id);
    setCurrentBoard(undefined);
    // TODO: publish
  }

  const shareBoard = () => {
    setShareDialogOpen(false);
    const board = currentBoard();
    if (!board) return;
    board.shared = !board.shared;
    updateBoardStorage(board);
    netPublish(topicBoardInfo, board);
  }

  const createBoard = () => {
    setCrDialogOpen(false);
    if (selBoardName().trim() === "") return;
    const info = emptyBoardInfo();
    info.name = selBoardName();
    info.bkguri = selBoardBkg();
    updateBoardStorage(info);
    toast("New board created");
    //TODO: publish
  }

  const updateBoard = () => {
    setEditDialogOpen(false);
    const board = currentBoard();
    if (!board) return;
    if (selBoardName().trim() !== "") {
      board.name = selBoardName();
    }
    if (selBoardBkg().trim() !== "") {
      board.bkguri = selBoardBkg();
    }
    updateBoardStorage(board);
    //TODO: publish
  }

  const items = createMemo(() => {
    return Object.values(appBoards()).sort((a, b) => a.name.localeCompare(b.name));
  });

  const exportBoard = () => {

  }

  const importBoard = () => {

  }

  return <div class={boardLeftPaneStyle} ref={(e) => (pane = e)}>
    <Flex style={{ "justify-content": "space-between" }}>
      <Text>Boards</Text>
      <Flex>
        <Show when={currentBoard()}>
          <Flex style={{ "margin-right": "10px" }}>
            <Alert
              label="Delete board"
              open={delDialogOpen}
              onOpenChange={setDelDialogOpen}
              trigger={<FaSolidTrash />}
              triggerHint="Delete selected board"
            >
              <Text>
                Delete {currentBoard()?.name} {"?"}
              </Text>
              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setDelDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={deleteBoard}>Delete</Button>
              </Flex>
            </Alert>
          </Flex>
          <Show when={currentBoard()?.owner == appSettings().userIdent}>
            <Alert
              label="Share charsheet"
              open={shareDialogOpen}
              onOpenChange={setShareDialogOpen}
              trigger={<FaSolidShareNodes />}
              triggerHint="Share selected charsheet"
            >
              <Switch>
                <Match when={currentBoard()?.shared}>
                  <Text>
                    Stop sharing {currentBoard()?.name} {"?"}
                  </Text>
                </Match>
                <Match when={!currentBoard()?.shared}>
                  <Text>
                    Share {currentBoard()?.name} {"?"}
                  </Text>
                </Match>
              </Switch>

              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setShareDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={shareBoard}>Accept</Button>
              </Flex>
            </Alert>
            <Dialog
              trigger={<FaSolidPen />}
              triggerHint="Edit board"
              open={editDialogOpen}
              onOpenChange={setEditDialogOpen}
              dialogTitle={() => "Edit board"}
            >
              <Input
                label="Name"
                value={currentBoard()?.name}
                onChange={(e) => setSelBoardName(e.target.value)}
              />
              <Input
                label="Background URI"
                value={currentBoard()?.bkguri}
                onChange={(e) => setSelBoardBkg(e.target.value)}
              />
              <Flex gap="large" style={{ "margin-top": "10px" }}>
                <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
                <Button onClick={updateBoard}>Update</Button>
              </Flex>
            </Dialog>
          </Show>
        </Show>
        <Dialog
          trigger={<FaSolidPlus />}
          triggerHint="Create board"
          open={crDialogOpen}
          onOpenChange={setCrDialogOpen}
          dialogTitle={() => "Create board"}
        >
          <Input
            label="Name"
            onChange={(e) => setSelBoardName(e.target.value)}
          />
          <Input
            label="Background URI"
            onChange={(e) => setSelBoardBkg(e.target.value)}
          />
          <Flex gap="large" style={{ "margin-top": "10px" }}>
            <Button onClick={() => setCrDialogOpen(false)}>Cancel</Button>
            <Button onClick={createBoard}>Create</Button>
          </Flex>
        </Dialog>
      </Flex>
    </Flex>

    {/* Board list */}
    <div class={boardListStyle} ref={(e: any) => ref(e)}>
      <For each={items()}>
        {(it) => (
          <BoardItem
            onClick={() => { setCurrentBoard(it); setBoardLoaded(false); }}
            item={it}
            adjustSize={adjustSize}
            selected={currentBoard}
          />
        )}
      </For>
    </div>

    {/* Tools panel */}

    <Flex style={{ "justify-content": "space-between" }} center>
      <Flex gap="medium">
        <Popover trigger={<FaSolidPalette />} title="Colors & Width">
          <ColorSettings />
        </Popover>
        <Popover trigger={<FaSolidShapes />} title="Draw tools">
          <ToolSettings />
        </Popover>
      </Flex>
      <Flex gap="medium">
        <Text fontSize="small">Fill</Text>
        <FaSolidFill style={{ fill: wbState().fill }} />
        <Text fontSize="small">Stroke</Text>
        <FaSolidBrush style={{ fill: wbState().stroke }} />
      </Flex>
      <Flex gap="medium">
        <Button onClick={exportBoard} title="Export board">
          <FaSolidFileExport />
        </Button>
        <Button onClick={importBoard} title="Import board">
          <FaSolidFileImport />
        </Button>
      </Flex>
    </Flex>


  </div>
};
