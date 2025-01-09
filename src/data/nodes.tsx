import { LAYOUT } from "~/config";
import { STYLES } from "~/config";
import { NodeData } from "~/pages/types";
import { MarkerType } from "@xyflow/react";

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

export const initialEdges = [
  {
    id: "decision-to-red-above",
    source: "decision-node",
    target: "pack-red-blocks-move-above",
    sourceHandle: "source",
    targetHandle: "target",
    type: "latex",
    label: "\\alpha",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
      strokeDasharray: 5,
      animationDuration: "1500ms",
      animation: "dashdraw 1500ms linear infinite",
    },
  },
  {
    id: "red-above-self-loop",
    source: "pack-red-blocks-move-above",
    target: "pack-red-blocks-move-above",
    type: "selfLoop",
    label: "\\beta",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "red-above-to-grasp-position",
    source: "pack-red-blocks-move-above",
    target: "pack-red-blocks-grasp",
    type: "latex",
    label: "\\gamma",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "red-grasp-position-to-grasp",
    source: "pack-red-blocks-grasp",
    target: "pack-red-blocks-grasp-action",
    type: "latex",
    label: "\\delta",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "red-grasp-to-packing-position",
    source: "pack-red-blocks-grasp-action",
    target: "pack-red-blocks-move-to-packing-position",
    type: "latex",
    label: "\\epsilon",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "red-packing-position-to-release",
    source: "pack-red-blocks-move-to-packing-position",
    target: "pack-red-blocks-release",
    type: "latex",
    label: "\\zeta",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "grasp-position-self-loop",
    source: "pack-red-blocks-grasp",
    target: "pack-red-blocks-grasp",
    type: "selfLoop",
    label: "\\theta_1",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "grasp-action-self-loop",
    source: "pack-red-blocks-grasp-action",
    target: "pack-red-blocks-grasp-action",
    type: "selfLoop",
    label: "\\theta_2",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "packing-position-self-loop",
    source: "pack-red-blocks-move-to-packing-position",
    target: "pack-red-blocks-move-to-packing-position",
    type: "selfLoop",
    label: "\\theta_3",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "release-self-loop",
    source: "pack-red-blocks-release",
    target: "pack-red-blocks-release",
    type: "selfLoop",
    label: "\\theta_4",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "decision-to-green-above",
    source: "decision-node",
    target: "pack-green-blocks-move-above",
    sourceHandle: "source",
    targetHandle: "target",
    type: "latex",
    label: "\\alpha_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-above-self-loop",
    source: "pack-green-blocks-move-above",
    target: "pack-green-blocks-move-above",
    type: "selfLoop",
    label: "\\beta_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-above-to-grasp-position",
    source: "pack-green-blocks-move-above",
    target: "pack-green-blocks-grasp",
    type: "latex",
    label: "\\gamma_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-grasp-position-to-grasp",
    source: "pack-green-blocks-grasp",
    target: "pack-green-blocks-grasp-action",
    type: "latex",
    label: "\\delta_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-grasp-to-packing-position",
    source: "pack-green-blocks-grasp-action",
    target: "pack-green-blocks-move-to-packing-position",
    type: "latex",
    label: "\\epsilon_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-packing-position-to-release",
    source: "pack-green-blocks-move-to-packing-position",
    target: "pack-green-blocks-release",
    type: "latex",
    label: "\\zeta_g",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-grasp-position-self-loop",
    source: "pack-green-blocks-grasp",
    target: "pack-green-blocks-grasp",
    type: "selfLoop",
    label: "\\theta_{g1}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-grasp-action-self-loop",
    source: "pack-green-blocks-grasp-action",
    target: "pack-green-blocks-grasp-action",
    type: "selfLoop",
    label: "\\theta_{g2}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-packing-position-self-loop",
    source: "pack-green-blocks-move-to-packing-position",
    target: "pack-green-blocks-move-to-packing-position",
    type: "selfLoop",
    label: "\\theta_{g3}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "green-release-self-loop",
    source: "pack-green-blocks-release",
    target: "pack-green-blocks-release",
    type: "selfLoop",
    label: "\\theta_{g4}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "decision-to-blue-above",
    source: "decision-node",
    target: "pack-blue-blocks-move-above",
    sourceHandle: "source",
    targetHandle: "target",
    type: "latex",
    label: "\\alpha_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-above-self-loop",
    source: "pack-blue-blocks-move-above",
    target: "pack-blue-blocks-move-above",
    type: "selfLoop",
    label: "\\beta_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-above-to-grasp-position",
    source: "pack-blue-blocks-move-above",
    target: "pack-blue-blocks-grasp",
    type: "latex",
    label: "\\gamma_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-grasp-position-to-grasp",
    source: "pack-blue-blocks-grasp",
    target: "pack-blue-blocks-grasp-action",
    type: "latex",
    label: "\\delta_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-grasp-to-packing-position",
    source: "pack-blue-blocks-grasp-action",
    target: "pack-blue-blocks-move-to-packing-position",
    type: "latex",
    label: "\\epsilon_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-packing-position-to-release",
    source: "pack-blue-blocks-move-to-packing-position",
    target: "pack-blue-blocks-release",
    type: "latex",
    label: "\\zeta_b",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-grasp-position-self-loop",
    source: "pack-blue-blocks-grasp",
    target: "pack-blue-blocks-grasp",
    type: "selfLoop",
    label: "\\theta_{b1}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-grasp-action-self-loop",
    source: "pack-blue-blocks-grasp-action",
    target: "pack-blue-blocks-grasp-action",
    type: "selfLoop",
    label: "\\theta_{b2}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-packing-position-self-loop",
    source: "pack-blue-blocks-move-to-packing-position",
    target: "pack-blue-blocks-move-to-packing-position",
    type: "selfLoop",
    label: "\\theta_{b3}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
  {
    id: "blue-release-self-loop",
    source: "pack-blue-blocks-release",
    target: "pack-blue-blocks-release",
    type: "selfLoop",
    label: "\\theta_{b4}",
    labelStyle: {
      fill: "#333",
      fontWeight: 700,
      fontSize: "12px",
    },
    markerEnd: {
      type: MarkerType.Arrow,
    },
    style: {
      stroke: "#333",
      strokeWidth: 2,
    },
  },
];
