import { MarkerType } from "@xyflow/react";

const EDGE_LABELS = {
  RED: ["Pack Red\\nBlock One", "Pack Red\\nBlock Two"],
  GREEN: ["Pack Green\\nBlock One", "Pack Green\\nBlock Two"],
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
    label: EDGE_LABELS.RED[1],
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
    label: EDGE_LABELS.GREEN[1],
  },
];

export const level2Edges = {
  red: level2EdgesRedBlocks,
  green: level2EdgesGreenBlocks,
};
