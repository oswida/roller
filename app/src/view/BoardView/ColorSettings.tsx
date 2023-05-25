// import { FaSolid1, FaSolid2, FaSolid3, FaSolid4, FaSolid5, FaSolidPalette } from "solid-icons/fa"
// import { For } from "solid-js"
// import { drawColors, setWbState, wbState } from "~/common"
// import { Button, Flex, Text } from "~/component"



// export const ColorSettings = () => {

//     const setStrokeColor = (color: string) => {
//         setWbState((prev) => ({ ...prev, stroke: color }));
//     }

//     const setFillColor = (color: string) => {
//         setWbState((prev) => ({ ...prev, fill: color }));
//     }

//     const setStrokeWidth = (width: number) => {
//         setWbState((prev) => ({ ...prev, width: width }));
//     }

//     return <Flex direction="column">
//         <Text fontSize="smaller" colorSchema="secondary">Stroke color </Text>
//         <Flex>
//             <For each={drawColors}>{
//                 (it) => <Button
//                     variant="icon"
//                     title="Stroke color"
//                     toggled={() => wbState().stroke == it}
//                     onClick={() => setStrokeColor(it)}
//                 >
//                     <FaSolidPalette color={it} />
//                 </Button>
//             }
//             </For>
//         </Flex>
//         <Text fontSize="smaller" colorSchema="secondary">Fill color </Text>
//         <Flex>
//             <For each={drawColors}>{
//                 (it) => <Button
//                     variant="icon"
//                     title="Fill color"
//                     toggled={() => wbState().fill == it}
//                     onClick={() => setFillColor(it)}
//                 >
//                     <FaSolidPalette color={it} />
//                 </Button>
//             }
//             </For>
//         </Flex>
//         <Text fontSize="smaller" colorSchema="secondary">Stroke size</Text>
//         <Flex>
//             <Flex>
//                 <Button variant="icon"
//                     onClick={() => setStrokeWidth(1)} toggled={() => wbState().width == 1} >
//                     <FaSolid1 />
//                 </Button>
//                 <Button variant="icon" onClick={() => setStrokeWidth(2)} toggled={() => wbState().width == 2}>
//                     <FaSolid2 />
//                 </Button>
//                 <Button variant="icon" onClick={() => setStrokeWidth(3)} toggled={() => wbState().width == 3}>
//                     <FaSolid3 />
//                 </Button>
//                 <Button variant="icon" onClick={() => setStrokeWidth(4)} toggled={() => wbState().width == 4}>
//                     <FaSolid4 />
//                 </Button>
//                 <Button variant="icon" onClick={() => setStrokeWidth(5)} toggled={() => wbState().width == 5}>
//                     <FaSolid5 />
//                 </Button>
//             </Flex>
//         </Flex>
//     </Flex>
// }