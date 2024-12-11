import { STYLES } from "~/config";
import { NodeData } from "~/pages/types";

function generateXPositions(startX: number, spacing: number, count: number) {
  return Array.from({ length: count }, (_, i) => startX + i * spacing);
}

const NODE_Y_POSITION = 1150;
const NODE_X_POSITIONS = {
  RED_ONE: generateXPositions(-1350, 250, 5),
  RED_TWO: generateXPositions(-1350 + 1500, 250, 5),
  RED_THREE: generateXPositions(-1350 + 3000, 250, 5),
  GREEN_ONE: generateXPositions(-1350 + 4500, 250, 5),
  GREEN_TWO: generateXPositions(-1350 + 1500 + 4500, 250, 5),
  GREEN_THREE: generateXPositions(-1350 + 3000 + 4500, 250, 5),
};
const NODE_LABELS = {
  RED_ONE: ["u_1", "u_2", "u_3", "u_4", "u_5"],
  RED_TWO: ["u_1", "u_2", "u_3", "u_4", "u_5"],
  RED_THREE: ["u_1", "u_2", "u_3", "u_4", "u_5"],
  GREEN_ONE: ["u_1", "u_2", "u_3", "u_4", "u_5"],
  GREEN_TWO: ["u_1", "u_2", "u_3", "u_4", "u_5"],
  GREEN_THREE: ["u_1", "u_2", "u_3", "u_4", "u_5"],
};

const level3NodesRedBlockOne = [
  {
    id: "above-red-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_ONE[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_ONE[0],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_ONE[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_ONE[1],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "deliver-red-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_ONE[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_ONE[2],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-two-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_ONE[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_ONE[3],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "block-red-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_ONE[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_ONE[4],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
];

const level3NodesRedBlockTwo = [
  {
    id: "above-red-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_TWO[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_TWO[0],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_TWO[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_TWO[1],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "deliver-red-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_TWO[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_TWO[2],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-two-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_TWO[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_TWO[3],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "block-red-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_TWO[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_TWO[4],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
];

const level3NodesRedBlockThree = [
  {
    id: "above-red-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_THREE[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_THREE[0],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_THREE[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_THREE[1],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "deliver-red-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_THREE[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_THREE[2],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "grasp-red-two-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_THREE[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_THREE[3],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
  {
    id: "block-red-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.RED_THREE[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.RED_THREE[4],
      color: STYLES.COLORS.RED,
      group: "red",
    } as NodeData,
  },
];

const level3NodesGreenBlockOne = [
  {
    id: "above-green-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_ONE[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_ONE[0],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_ONE[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_ONE[1],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "deliver-green-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_ONE[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_ONE[2],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-two-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_ONE[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_ONE[3],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "block-green-1",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_ONE[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_ONE[4],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
];

const level3NodesGreenBlockTwo = [
  {
    id: "above-green-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_TWO[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_TWO[0],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_TWO[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_TWO[1],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "deliver-green-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_TWO[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_TWO[2],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-two-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_TWO[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_TWO[3],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "block-green-2",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_TWO[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_TWO[4],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
];

const level3NodesGreenBlockThree = [
  {
    id: "above-green-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_THREE[0],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_THREE[0],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_THREE[1],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_THREE[1],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "deliver-green-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_THREE[2],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_THREE[2],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "grasp-green-two-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_THREE[3],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_THREE[3],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
  {
    id: "block-green-3",
    type: "internal",
    position: {
      x: NODE_X_POSITIONS.GREEN_THREE[4],
      y: NODE_Y_POSITION,
    },
    data: {
      label: NODE_LABELS.GREEN_THREE[4],
      color: STYLES.COLORS.GREEN,
      group: "green",
    } as NodeData,
  },
];

export const level3Nodes = {
  red: [
    level3NodesRedBlockOne,
    level3NodesRedBlockTwo,
    level3NodesRedBlockThree,
  ],
  green: [
    level3NodesGreenBlockOne,
    level3NodesGreenBlockTwo,
    level3NodesGreenBlockThree,
  ],
};
