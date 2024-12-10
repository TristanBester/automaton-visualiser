import { MarkerType } from "@xyflow/react";
import LatexEdge from "../components/edges/latex";
import LoopEdge from "../components/edges/loop";

// Original graph edges
export const initialEdges = [
  // Self-loop on u0
  {
    id: "e-u0-u0-1",
    source: "u0",
    target: "u0",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_A, [1], [1], 0\\rangle\\n\\langle p_A, [0], [1], 0\\rangle",
    animated: true,
  },
  // u0 to u1
  {
    id: "e-u0-u1",
    source: "u0",
    target: "u1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_B, [1], [0], 0\\rangle",
  },
  // u0 to terminal
  {
    id: "e-u0-t1",
    source: "u0",
    target: "t1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_B, [1], [0], 0\\rangle",
  },
  // Self-loop on u1
  {
    id: "e-u1-u1",
    source: "u1",
    target: "u1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_C, [1], [-1], 0\\rangle",
    animated: true,
  },
  // u1 to terminal
  {
    id: "e-u1-t2",
    source: "u1",
    target: "t2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_B, [1], [0], 0\\rangle\\n\\langle \\tau, [0], [0], 0\\rangle",
  },
];

// Alternative graph edges
export const alternativeEdges = [
  {
    id: "e-u3-u3",
    source: "u3",
    target: "u3",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "\\langle p_C, [1], [-1], 0\\rangle",
    animated: true,
  }
];

export const edgeTypes = {
  latex: LatexEdge,
  loop: LoopEdge,
};
