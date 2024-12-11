import { MarkerType } from "@xyflow/react";

// FIXME ALL graphs share shame edge labels so just define it once.

const LEVEL_3_EDGE_LABELS_RED_ONE = {
  above: [
    "a^{(r)}_{1} \\land v_L",
    "\\lnot (a^{(r)}_{1} \\land v_L)",
    "\\lnot a_o",
  ],
  grasp: [
    "(g^{(r)}_{1} \\land v_L)",
    "\\lnot (g^{(r)}_{1} \\land v_L)",
    "\\lnot a_c",
  ],
  deliver: [
    "(t^{(r)}_{1} \\land g_c)",
    "\\lnot (t^{(r)}_{1} \\land g_c)",
    "\\lnot a_c",
  ],
  block: [
    "(r^{(r)}_{1} \\land v_L)",
    "\\lnot (r^{(r)}_{1} \\land v_L)",
    "\\lnot a_o",
  ],
};

const level3EdgesRedBlockOne = [
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
    label: LEVEL_3_EDGE_LABELS_RED_ONE.above[0],
  },
  {
    id: "e-above-red-1-self-1",
    source: "above-red-1",
    target: "above-red-1",
    type: "loop",
    tooltip: "Guard condition: Not above red block 1 and not lifting",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.above[1],
  },
  {
    id: "e-above-red-1-self-2",
    source: "above-red-1",
    target: "above-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.above[2],
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
    label: LEVEL_3_EDGE_LABELS_RED_ONE.grasp[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_ONE.deliver[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_ONE.block[0],
  },

  {
    id: "e-grasp-red-1-self-1",
    source: "grasp-red-1",
    target: "grasp-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.grasp[1],
  },
  {
    id: "e-grasp-red-1-self-2",
    source: "grasp-red-1",
    target: "grasp-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.grasp[2],
  },
  {
    id: "e-deliver-red-1-self-1",
    source: "deliver-red-1",
    target: "deliver-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.deliver[1],
  },
  {
    id: "e-deliver-red-1-self-2",
    source: "deliver-red-1",
    target: "deliver-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.deliver[2],
  },
  {
    id: "e-grasp-red-two-1-self-1",
    source: "grasp-red-two-1",
    target: "grasp-red-two-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.block[1],
  },
  {
    id: "e-grasp-red-two-1-self-2",
    source: "grasp-red-two-1",
    target: "grasp-red-two-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.block[2],
  },
  {
    id: "e-block-red-1-self-1",
    source: "block-red-1",
    target: "block-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.block[2],
  },
  {
    id: "e-block-red-1-self-2",
    source: "block-red-1",
    target: "block-red-1",
    type: "loop",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_RED_ONE.block[2],
  },
];

const LEVEL_3_EDGE_LABELS_RED_TWO = {
  above: ["a^{(r)}_{2} \\land v_L", "\\lnot a_o"],
  grasp: ["(g^{(r)}_{2} \\land v_L)", "\\lnot a_c"],
  deliver: ["(t^{(r)}_{2} \\land g_c)", "\\lnot a_c"],
  block: ["(r^{(r)}_{2} \\land v_L)", "\\lnot a_o"],
};

const level3EdgesRedBlockTwo = [
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
    label: LEVEL_3_EDGE_LABELS_RED_TWO.above[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_TWO.deliver[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_TWO.deliver[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_TWO.block[0],
  },
];

const LEVEL_3_EDGE_LABELS_RED_THREE = {
  above: ["a^{(r)}_{3} \\land v_L", "\\lnot a_o"],
  grasp: ["(g^{(r)}_{3} \\land v_L)", "\\lnot a_c"],
  deliver: ["(t^{(r)}_{3} \\land g_c)", "\\lnot a_c"],
  block: ["(r^{(r)}_{3} \\land v_L)", "\\lnot a_o"],
};

const level3EdgesRedBlockThree = [
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
    label: LEVEL_3_EDGE_LABELS_RED_THREE.above[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_THREE.deliver[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_THREE.deliver[0],
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
    label: LEVEL_3_EDGE_LABELS_RED_THREE.block[0],
  },
];

const LEVEL_3_EDGE_LABELS_GREEN_ONE = {
  above: ["a^{(g)}_{1} \\land v_L", "\\lnot a_o"],
  grasp: ["(g^{(g)}_{1} \\land v_L)", "\\lnot a_c"],
  deliver: ["(t^{(g)}_{1} \\land g_c)", "\\lnot a_c"],
  block: ["(r^{(g)}_{1} \\land v_L)", "\\lnot a_o"],
};

const level3EdgesGreenBlockOne = [
  {
    id: "e-above-grasp-green-1",
    source: "above-green-1",
    target: "grasp-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_ONE.above[0],
  },
  {
    id: "e-grasp-deliver-green-1",
    source: "grasp-green-1",
    target: "deliver-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_ONE.deliver[0],
  },
  {
    id: "e-deliver-grasp2-green-1",
    source: "deliver-green-1",
    target: "grasp-green-two-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_ONE.deliver[0],
  },
  {
    id: "e-grasp2-block-green-1",
    source: "grasp-green-two-1",
    target: "block-green-1",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_ONE.block[0],
  },
];

const LEVEL_3_EDGE_LABELS_GREEN_TWO = {
  above: ["a^{(g)}_{2} \\land v_L", "\\lnot a_o"],
  grasp: ["(g^{(g)}_{2} \\land v_L)", "\\lnot a_c"],
  deliver: ["(t^{(g)}_{2} \\land g_c)", "\\lnot a_c"],
  block: ["(r^{(g)}_{2} \\land v_L)", "\\lnot a_o"],
};

const level3EdgesGreenBlockTwo = [
  {
    id: "e-above-grasp-green-2",
    source: "above-green-2",
    target: "grasp-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_TWO.above[0],
  },
  {
    id: "e-grasp-deliver-green-2",
    source: "grasp-green-2",
    target: "deliver-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_TWO.deliver[0],
  },
  {
    id: "e-deliver-grasp2-green-2",
    source: "deliver-green-2",
    target: "grasp-green-two-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_TWO.deliver[0],
  },
  {
    id: "e-grasp2-block-green-2",
    source: "grasp-green-two-2",
    target: "block-green-2",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_TWO.block[0],
  },
];

const LEVEL_3_EDGE_LABELS_GREEN_THREE = {
  above: ["a^{(g)}_{3} \\land v_L", "\\lnot a_o"],
  grasp: ["(g^{(g)}_{3} \\land v_L)", "\\lnot a_c"],
  deliver: ["(t^{(g)}_{3} \\land g_c)", "\\lnot a_c"],
  block: ["(r^{(g)}_{3} \\land v_L)", "\\lnot a_o"],
};

const level3EdgesGreenBlockThree = [
  {
    id: "e-above-grasp-green-3",
    source: "above-green-3",
    target: "grasp-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_THREE.above[0],
  },
  {
    id: "e-grasp-deliver-green-3",
    source: "grasp-green-3",
    target: "deliver-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_THREE.deliver[0],
  },
  {
    id: "e-deliver-grasp2-green-3",
    source: "deliver-green-3",
    target: "grasp-green-two-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_THREE.deliver[0],
  },
  {
    id: "e-grasp2-block-green-3",
    source: "grasp-green-two-3",
    target: "block-green-3",
    type: "latex",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#000000",
      width: 15,
      height: 15,
    },
    label: LEVEL_3_EDGE_LABELS_GREEN_THREE.block[0],
  },
];

export const level3Edges = {
  red: [
    level3EdgesRedBlockOne,
    level3EdgesRedBlockTwo,
    level3EdgesRedBlockThree,
  ],
  green: [
    level3EdgesGreenBlockOne,
    level3EdgesGreenBlockTwo,
    level3EdgesGreenBlockThree,
  ],
};
