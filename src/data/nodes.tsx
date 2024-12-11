import { LAYOUT } from "~/config";
import { STYLES } from "~/config";
import { NodeData } from "~/pages/types";

const DELTA_X = 750;
const DELTA_Y = -750;

export const decisionNode = {
  id: "decision-node",
  type: "decision",
  position: {
    x: 0,
    y: 0,
  },
  data: {
    label: "Decision Node",
  } as NodeData,
};

export const abstractNodes = [
  {
    id: "pack-red-blocks",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: DELTA_Y,
    },
    data: {
      label: "Pack Red Blocks",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "4px",
        width: "200px",
        height: "150px",
      },
    } as NodeData,
  },
  {
    id: "pack-green-blocks",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: 0,
    },
    data: {
      label: "Pack Green Blocks",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "4px",
        width: "200px",
        height: "150px",
      },
    } as NodeData,
  },
  {
    id: "pack-blue-blocks",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: -DELTA_Y,
    },
    data: {
      label: "Pack Blue Blocks",
      style: {
        backgroundColor: "#87CEEB", // Light blue color
        borderRadius: "4px",
        width: "200px",
        height: "150px",
      },
    } as NodeData,
  },
];

const DETAILED_NODE_DELTA_X = 200;
export const detailedNodesRed = [
  {
    id: "pack-red-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: DELTA_Y - 200,
    },
    data: {
      label: "Above Red",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-red-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: DELTA_Y - 200,
    },
    data: {
      label: "Grasp Position",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-red-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: DELTA_Y - 200,
    },
    data: {
      label: "Grasp",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-red-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: DELTA_Y - 200,
    },
    data: {
      label: "Packing Position",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-red-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: DELTA_Y - 200,
    },
    data: {
      label: "Release",
      style: {
        backgroundColor: STYLES.COLORS.RED,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
];

export const detailedNodesGreen = [
  {
    id: "pack-green-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: -200,
    },
    data: {
      label: "Above Green",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-green-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: -200,
    },
    data: {
      label: "Grasp Position",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-green-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: -200,
    },
    data: {
      label: "Grasp",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-green-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: -200,
    },
    data: {
      label: "Packing Position",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-green-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: -200,
    },
    data: {
      label: "Release",
      style: {
        backgroundColor: STYLES.COLORS.GREEN,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
];

export const detailedNodesBlue = [
  {
    id: "pack-blue-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: -DELTA_Y - 200,
    },
    data: {
      label: "Above Blue",
      style: {
        backgroundColor: "#87CEEB",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-blue-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: -DELTA_Y - 200,
    },
    data: {
      label: "Grasp Position",
      style: {
        backgroundColor: "#87CEEB",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-blue-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: -DELTA_Y - 200,
    },
    data: {
      label: "Grasp",
      style: {
        backgroundColor: "#87CEEB",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-blue-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: -DELTA_Y - 200,
    },
    data: {
      label: "Packing Position",
      style: {
        backgroundColor: "#87CEEB",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
  {
    id: "pack-blue-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: -DELTA_Y - 200,
    },
    data: {
      label: "Release",
      style: {
        backgroundColor: "#87CEEB",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      },
    } as NodeData,
  },
];
