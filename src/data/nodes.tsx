import { STYLES } from "~/config";
import { type CustomNode } from "~/types";
import { MarkerType } from "@xyflow/react";

const DELTA_X = 750;
const DELTA_Y = -750;

export const decisionNode: CustomNode = {
  id: "decision-node",
  type: "decision",
  position: {
    x: 0,
    y: -15,
  },
  data: {
    label: "Decision Node",
  },
};

const DETAILED_NODE_DELTA_X = 400;

const commonNodeStyle = {
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 600,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "2px solid rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  padding: "10px",
  textAlign: "center",
  lineHeight: "1.2",
} as const;

export const detailedNodesRed: CustomNode[] = [
  {
    id: "pack-red-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: DELTA_Y,
    },
    data: {
      label: "Above Red",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.RED,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-red-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: DELTA_Y,
    },
    data: {
      label: "Grasp Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.RED,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-red-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: DELTA_Y,
    },
    data: {
      label: "Grasp",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.RED,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-red-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: DELTA_Y,
    },
    data: {
      label: "Packing Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.RED,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-red-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: DELTA_Y,
    },
    data: {
      label: "Release",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.RED,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
];

export const detailedNodesGreen: CustomNode[] = [
  {
    id: "pack-green-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: 0,
    },
    data: {
      label: "Above Green",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.GREEN,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-green-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: -0,
    },
    data: {
      label: "Grasp Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.GREEN,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-green-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: 0,
    },
    data: {
      label: "Grasp",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.GREEN,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-green-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: 0,
    },
    data: {
      label: "Packing Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.GREEN,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-green-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: 0,
    },
    data: {
      label: "Release",
      style: {
        ...commonNodeStyle,
        backgroundColor: STYLES.COLORS.GREEN,
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
];

export const detailedNodesBlue: CustomNode[] = [
  {
    id: "pack-blue-blocks-move-above",
    type: "abstract",
    position: {
      x: DELTA_X,
      y: -DELTA_Y,
    },
    data: {
      label: "Above Blue",
      style: {
        ...commonNodeStyle,
        backgroundColor: "#87CEEB",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-blue-blocks-grasp",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 1,
      y: -DELTA_Y,
    },
    data: {
      label: "Grasp Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: "#87CEEB",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-blue-blocks-grasp-action",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 2,
      y: -DELTA_Y,
    },
    data: {
      label: "Grasp",
      style: {
        ...commonNodeStyle,
        backgroundColor: "#87CEEB",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-blue-blocks-move-to-packing-position",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 3,
      y: -DELTA_Y,
    },
    data: {
      label: "Packing Position",
      style: {
        ...commonNodeStyle,
        backgroundColor: "#87CEEB",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
  },
  {
    id: "pack-blue-blocks-release",
    type: "abstract",
    position: {
      x: DELTA_X + DETAILED_NODE_DELTA_X * 4,
      y: -DELTA_Y,
    },
    data: {
      label: "Release",
      style: {
        ...commonNodeStyle,
        backgroundColor: "#87CEEB",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      },
    },
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
    label: "\\langle \\tau, [1, -, -] \\rangle",
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
    label: "\\langle \\neg A_R, [1, -, -] \\rangle",
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
    label: "\\langle A_R, [1, -, -] \\rangle",
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
    label: "\\langle  GP_R, [1, -, -] \\rangle",
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
    label: "\\langle G_R, [1, -, -] \\rangle",
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
    label: "\\langle PP_R, [1, -, -] \\rangle",
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
    label: "\\langle \\neg GP_R, [1, -, -] \\rangle",
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
    label: "\\langle \\neg G_R, [1, -, -] \\rangle",
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
    label: "\\langle \\neg PP_R, [1, -, -] \\rangle",
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
    label: "\\langle \\neg R_R, [1, -, -] \\rangle",
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
    label: "\\langle \\tau, [0, 1, -] \\rangle",
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
    label: "\\langle \\neg A_G, [0, 1, -] \\rangle",
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
    label: "\\langle A_G, [0, 1, -] \\rangle",
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
    label: "\\langle GP_G, [0, 1, -] \\rangle",
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
    label: "\\langle G_G, [0, 1, -] \\rangle",
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
    label: "\\langle PP_G, [0, 1, -] \\rangle",
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
    label: "\\langle \\neg GP_G, [0, 1, -] \\rangle",
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
    label: "\\langle \\neg G_G, [0, 1, -] \\rangle",
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
    label: "\\langle \\neg PP_G, [0, 1, -] \\rangle",
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
    label: "\\langle \\neg R_G, [0, 1, -] \\rangle",
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
    label: "\\langle \\tau, [0, 0, 1] \\rangle",
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
    label: "\\langle \\neg A_B, [0, 0, 1] \\rangle",
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
    label: "\\langle A_B, [0, 0, 1] \\rangle",
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
    label: "\\langle GP_B, [0, 0, 1] \\rangle",
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
    label: "\\langle G_B, [0, 0, 1] \\rangle",
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
    label: "\\langle PP_B, [0, 0, 1] \\rangle",
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
    label: "\\langle \\neg GP_B, [0, 0, 1] \\rangle",
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
    label: "\\langle \\neg G_B, [0, 0, 1] \\rangle",
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
    label: "\\langle \\neg PP_B, [0, 0, 1] \\rangle",
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
    label: "\\langle \\neg R_B, [0, 0, 1] \\rangle",
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
