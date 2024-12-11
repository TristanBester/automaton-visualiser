import { STYLES } from "~/config";
import { NodeData } from "~/pages/types";

const NODE_Y_POSITION = 550;
const NODE_X_POSITIONS = {
  RED: [0, 700, 1400],
  GREEN: [0 + 4500, 700 + 4500, 1400 + 4500],
};
const NODE_LABELS = {
  RED: [
    "Pack Red\\nBlock One",
    "Pack Red\\nBlock Two",
    "Pack Red\\nBlock Three",
  ],
  GREEN: [
    "Pack Green\\nBlock One",
    "Pack Green\\nBlock Two",
    "Pack Green\\nBlock Three",
  ],
};

const level2NodesRedBlocks = [
  {
    id: "pack-red-block-one",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED[0],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "pack-red-block-two",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED[1],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
];

const level2NodesGreenBlocks = [
  {
    id: "pack-green-block-one",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN[0],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "pack-green-block-two",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN[1],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
];

export const level2Nodes = {
  red: level2NodesRedBlocks,
  green: level2NodesGreenBlocks,
};
