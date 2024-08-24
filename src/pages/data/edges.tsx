import { MarkerType } from "@xyflow/react";
import LatexEdge from "../components/edges/latex";
import LoopEdge from "../components/edges/loop";

export const edges = [
  {
    id: "e-1-2",
    source: "1",
    target: "2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#FF0072",
      width: 15,
      height: 15,
    },
    style: { stroke: "#FF0072", strokeWidth: 2 },
    edgeText: "hello",
    label: "$\\langle a, b, \\rangle$",
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e3-3",
    source: "3",
    target: "3",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#FF0072",
      width: 15,
      height: 15,
    },
    animated: true,
  },
];

export const edgeTypes = {
  latex: LatexEdge,
  loop: LoopEdge,
};
