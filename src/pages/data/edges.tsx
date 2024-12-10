import { MarkerType } from "@xyflow/react";
import LatexEdge from "../components/edges/latex";

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
    label: "15 Seconds",
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
    id: "e-pack-green-one",
    source: "pack-green-one-1",
    target: "pack-green-one-2",
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
};
