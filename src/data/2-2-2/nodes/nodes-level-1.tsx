import { LAYOUT } from "~/config";
import { STYLES } from "~/config";
import { NodeData } from "~/pages/types";

const NODE_Y_POSITION = 0;
const NODE_X_POSITIONS = {
  RED: [700],
  GREEN: [5200],
};
const NODE_LABELS = {
  RED: ["Pack Red\\nBlocks"],
  GREEN: ["Pack Green\\nBlocks"],
};

export const level1NodesAllBlocks = [
  {
    id: "pack-red",
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
    id: "pack-green",
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
];

export const level1Nodes = {
  all: level1NodesAllBlocks,
};
