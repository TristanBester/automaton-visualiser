import { MarkerType } from "@xyflow/react";
import LatexEdge from "../components/edges/latex";
import LoopEdge from "../components/edges/loop";

// Graph 1 edges
export const graph1Edges = [
  {
    id: "e-pack-red-self",
    source: "pack-red",
    target: "pack-red",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "15s",
  },
  {
    id: "e-pack-red-green",
    source: "pack-red",
    target: "pack-green",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
  },
  {
    id: "e-pack-green-self",
    source: "pack-green",
    target: "pack-green",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "15s",
  },
];

// Graph 2 edges
export const graph2Edges = [
  {
    id: "e-red-block-1-2",
    source: "pack-red-block-one",
    target: "pack-red-block-two",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5 Seconds",
  },
  {
    id: "e-red-block-2-3",
    source: "pack-red-block-two",
    target: "pack-red-block-three",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5 Seconds",
  },
  {
    id: "e-pack-red-block-one-self",
    source: "pack-red-block-one",
    target: "pack-red-block-one",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
  {
    id: "e-pack-red-block-two-self",
    source: "pack-red-block-two",
    target: "pack-red-block-two",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
  {
    id: "e-pack-red-block-three-self",
    source: "pack-red-block-three",
    target: "pack-red-block-three",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
];

// Graph 3 - First instance edges
export const graph3FirstEdges = [
  {
    id: "e-above-grasp-1",
    source: "above-red-1",
    target: "grasp-red-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-1",
    source: "grasp-red-1",
    target: "deliver-red-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-1",
    source: "deliver-red-1",
    target: "grasp-red-two-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-1",
    source: "grasp-red-two-1",
    target: "block-red-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-above-red-1-self-1",
    source: "above-red-1",
    target: "above-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-above-red-1-self-2",
    source: "above-red-1",
    target: "above-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-grasp-red-1-self-1",
    source: "grasp-red-1",
    target: "grasp-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-grasp-red-1-self-2",
    source: "grasp-red-1",
    target: "grasp-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-deliver-red-1-self-1",
    source: "deliver-red-1",
    target: "deliver-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-deliver-red-1-self-2",
    source: "deliver-red-1",
    target: "deliver-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-grasp-red-two-1-self-1",
    source: "grasp-red-two-1",
    target: "grasp-red-two-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-grasp-red-two-1-self-2",
    source: "grasp-red-two-1",
    target: "grasp-red-two-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-block-red-1-self-1",
    source: "block-red-1",
    target: "block-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
  {
    id: "e-block-red-1-self-2",
    source: "block-red-1",
    target: "block-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "0.5s",
  },
];

// Graph 3 - Second instance edges
export const graph3SecondEdges = [
  {
    id: "e-above-grasp-2",
    source: "above-red-2",
    target: "grasp-red-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-2",
    source: "grasp-red-2",
    target: "deliver-red-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-2",
    source: "deliver-red-2",
    target: "grasp-red-two-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-2",
    source: "grasp-red-two-2",
    target: "block-red-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
];

// Graph 3 - Third instance edges
export const graph3ThirdEdges = [
  {
    id: "e-above-grasp-3",
    source: "above-red-3",
    target: "grasp-red-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-3",
    source: "grasp-red-3",
    target: "deliver-red-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-3",
    source: "deliver-red-3",
    target: "grasp-red-two-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-3",
    source: "grasp-red-two-3",
    target: "block-red-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
];

export const graph2GreenEdges = [
  {
    id: "e-green-block-1-2",
    source: "pack-green-block-one",
    target: "pack-green-block-two",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5 Seconds",
  },
  {
    id: "e-green-block-2-3",
    source: "pack-green-block-two",
    target: "pack-green-block-three",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5 Seconds",
  },
  {
    id: "e-pack-green-block-one-self",
    source: "pack-green-block-one",
    target: "pack-green-block-one",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
  {
    id: "e-pack-green-block-two-self",
    source: "pack-green-block-two",
    target: "pack-green-block-two",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
  {
    id: "e-pack-green-block-three-self",
    source: "pack-green-block-three",
    target: "pack-green-block-three",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "5s",
  },
];

export const graph2BlueEdges = [
  {
    id: "e-pack-blue-one",
    source: "pack-blue-one-1",
    target: "pack-blue-one-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "next",
  },
];

export const edgeTypes = {
  latex: LatexEdge,
  loop: LoopEdge,
};

// Graph 3 - Green First instance edges
export const graph3GreenFirstEdges = [
  {
    id: "e-above-grasp-green-1",
    source: "above-green-1",
    target: "grasp-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-green-1",
    source: "grasp-green-1",
    target: "deliver-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-green-1",
    source: "deliver-green-1",
    target: "grasp-green-two-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-green-1",
    source: "grasp-green-two-1",
    target: "block-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
];

// Graph 3 - Green Second instance edges
export const graph3GreenSecondEdges = [
  {
    id: "e-above-grasp-green-2",
    source: "above-green-2",
    target: "grasp-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-green-2",
    source: "grasp-green-2",
    target: "deliver-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-green-2",
    source: "deliver-green-2",
    target: "grasp-green-two-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-green-2",
    source: "grasp-green-two-2",
    target: "block-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
];

// Graph 3 - Green Third instance edges
export const graph3GreenThirdEdges = [
  {
    id: "e-above-grasp-green-3",
    source: "above-green-3",
    target: "grasp-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp-deliver-green-3",
    source: "grasp-green-3",
    target: "deliver-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-deliver-grasp2-green-3",
    source: "deliver-green-3",
    target: "grasp-green-two-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
  {
    id: "e-grasp2-block-green-3",
    source: "grasp-green-two-3",
    target: "block-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: "1 Second",
  },
];
