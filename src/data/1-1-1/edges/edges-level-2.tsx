import { MarkerType } from "@xyflow/react";

const EDGE_LABELS = {
  RED: ["Pack Red\\nBlock One"],
  GREEN: ["Pack Green\\nBlock One"],
};

const level2EdgesRedBlocks = [
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
    label: EDGE_LABELS.RED[0],
  },
];

const level2EdgesGreenBlocks = [
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
    label: EDGE_LABELS.GREEN[0],
  },
];

export const level2Edges = {
  red: level2EdgesRedBlocks,
  green: level2EdgesGreenBlocks,
};
