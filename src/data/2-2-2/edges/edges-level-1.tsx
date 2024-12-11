import { MarkerType } from "@xyflow/react";

const EDGE_LABELS = ["Pack Red\\nBlocks"];

const level1EdgesAllBlocks = [
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
    label: EDGE_LABELS[0],
  },
];

export const level1Edges = {
  all: level1EdgesAllBlocks,
};
