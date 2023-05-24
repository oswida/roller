import {
    FaRegularCircle, FaRegularSquare, FaSolidA,
    FaSolidArrowPointer, FaSolidEraser, FaSolidLinesLeaning, FaSolidPenFancy
} from "solid-icons/fa"
import { FiTriangle } from "solid-icons/fi"
import { For } from "solid-js"
import { setWbState, wbState } from "~/common"
import { Button, Flex, Text } from "~/component"



export const ToolSettings = () => {

    const setDrawTool = (tool: string) => {
        setWbState((prev) => ({ ...prev, tool: tool }));
    }

    return <Flex direction="column">
        <Text fontSize="smaller" colorSchema="secondary">Tools</Text>
        <Flex>
            <Button
                variant="icon"
                title="Select object"
                onClick={() => setDrawTool("select")}
                toggled={() => wbState().tool === "select"}>
                <FaSolidArrowPointer />
            </Button>
            <Button
                variant="icon"
                title="Insert text"
                onClick={() => setDrawTool("text")}
                toggled={() => wbState().tool === "text"}>
                <FaSolidA />
            </Button>
            <Button variant="icon" title="Insert circle"
                onClick={() => setDrawTool("circle")}
                toggled={() => wbState().tool === "circle"}>
                <FaRegularCircle />
            </Button>
            <Button variant="icon" title="Insert triangle"
                onClick={() => setDrawTool("triangle")}
                toggled={() => wbState().tool === "triangle"}>
                <FiTriangle />
            </Button>
            <Button variant="icon" title="Insert rectangle"
                onClick={() => setDrawTool("rectangle")}
                toggled={() => wbState().tool === "rectangle"}>
                <FaRegularSquare />
            </Button>
            <Button variant="icon" title="Insert line"
                onClick={() => setDrawTool("line")}
                toggled={() => wbState().tool === "line"}>
                <FaSolidLinesLeaning />
            </Button>
            <Button variant="icon" title="Free draw"
                onClick={() => setDrawTool("freedraw")}
                toggled={() => wbState().tool === "freedraw"}>
                <FaSolidPenFancy />
            </Button>

        </Flex>
    </Flex>
}