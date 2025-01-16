import {
  ABSTRACT_NODES,
  AnimationStep,
  BLUE_SEQUENCE,
  GREEN_SEQUENCE,
  RED_SEQUENCE,
} from ".";

export const ANIMATION_3_3_3: AnimationStep[] = [
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 0 },
  // Red sequence
  {
    nodeId: RED_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-red-above",
    startTime: 250,
  },
  {
    nodeId: RED_SEQUENCE.GRASP_POSITION,
    edgeId: "red-above-to-grasp-position",
    startTime: 1670,
  },
  {
    nodeId: RED_SEQUENCE.GRASP,
    edgeId: "red-grasp-position-to-grasp",
    startTime: 2170,
  },
  {
    nodeId: RED_SEQUENCE.PACKING_POSITION,
    edgeId: "red-grasp-to-packing-position",
    startTime: 2470,
  },
  {
    nodeId: RED_SEQUENCE.RELEASE,
    edgeId: "red-packing-position-to-release",
    startTime: 4100,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 4350 },
  // 1
  {
    nodeId: RED_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-red-above",
    startTime: 4500,
  },
  {
    nodeId: RED_SEQUENCE.GRASP_POSITION,
    edgeId: "red-above-to-grasp-position",
    startTime: 5600,
  },
  {
    nodeId: RED_SEQUENCE.GRASP,
    edgeId: "red-grasp-position-to-grasp",
    startTime: 6300,
  },
  {
    nodeId: RED_SEQUENCE.PACKING_POSITION,
    edgeId: "red-grasp-to-packing-position",
    startTime: 7500,
  },
  {
    nodeId: RED_SEQUENCE.RELEASE,
    edgeId: "red-packing-position-to-release",
    startTime: 8000,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 8250 },
  // 2
  {
    nodeId: RED_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-red-above",
    startTime: 8400,
  },
  {
    nodeId: RED_SEQUENCE.GRASP_POSITION,
    edgeId: "red-above-to-grasp-position",
    startTime: 9700,
  },
  {
    nodeId: RED_SEQUENCE.GRASP,
    edgeId: "red-grasp-position-to-grasp",
    startTime: 10400,
  },
  {
    nodeId: RED_SEQUENCE.PACKING_POSITION,
    edgeId: "red-grasp-to-packing-position",
    startTime: 12300,
  },
  {
    nodeId: RED_SEQUENCE.RELEASE,
    edgeId: "red-packing-position-to-release",
    startTime: 12500,
  },

  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 12750 },

  // Green sequence
  {
    nodeId: GREEN_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-green-above",
    startTime: 13000,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP_POSITION,
    edgeId: "green-above-to-grasp-position",
    startTime: 14300,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP,
    edgeId: "green-grasp-position-to-grasp",
    startTime: 14900,
  },
  {
    nodeId: GREEN_SEQUENCE.PACKING_POSITION,
    edgeId: "green-grasp-to-packing-position",
    startTime: 16300,
  },
  {
    nodeId: GREEN_SEQUENCE.RELEASE,
    edgeId: "green-packing-position-to-release",
    startTime: 16700,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 16950 },
  // 1
  {
    nodeId: GREEN_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-green-above",
    startTime: 17100,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP_POSITION,
    edgeId: "green-above-to-grasp-position",
    startTime: 18200,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP,
    edgeId: "green-grasp-position-to-grasp",
    startTime: 18900,
  },
  {
    nodeId: GREEN_SEQUENCE.PACKING_POSITION,
    edgeId: "green-grasp-to-packing-position",
    startTime: 20300,
  },
  {
    nodeId: GREEN_SEQUENCE.RELEASE,
    edgeId: "green-packing-position-to-release",
    startTime: 20700,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 20950 },
  // 3
  {
    nodeId: GREEN_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-green-above",
    startTime: 21100,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP_POSITION,
    edgeId: "green-above-to-grasp-position",
    startTime: 22200,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP,
    edgeId: "green-grasp-position-to-grasp",
    startTime: 22900,
  },
  {
    nodeId: GREEN_SEQUENCE.PACKING_POSITION,
    edgeId: "green-grasp-to-packing-position",
    startTime: 23600,
  },
  {
    nodeId: GREEN_SEQUENCE.RELEASE,
    edgeId: "green-packing-position-to-release",
    startTime: 24500,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 24750 },

  // Blue sequence
  {
    nodeId: BLUE_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-blue-above",
    startTime: 25800,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP_POSITION,
    edgeId: "blue-above-to-grasp-position",
    startTime: 27400,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP,
    edgeId: "blue-grasp-position-to-grasp",
    startTime: 28400,
  },
  {
    nodeId: BLUE_SEQUENCE.PACKING_POSITION,
    edgeId: "blue-grasp-to-packing-position",
    startTime: 30500,
  },
  {
    nodeId: BLUE_SEQUENCE.RELEASE,
    edgeId: "blue-packing-position-to-release",
    startTime: 31500,
  },

  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 31750 },

  // Blue sequence
  {
    nodeId: BLUE_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-blue-above",
    startTime: 32000,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP_POSITION,
    edgeId: "blue-above-to-grasp-position",
    startTime: 34500,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP,
    edgeId: "blue-grasp-position-to-grasp",
    startTime: 35500,
  },
  {
    nodeId: BLUE_SEQUENCE.PACKING_POSITION,
    edgeId: "blue-grasp-to-packing-position",
    startTime: 37500,
  },
  {
    nodeId: BLUE_SEQUENCE.RELEASE,
    edgeId: "blue-packing-position-to-release",
    startTime: 38500,
  },

  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 38750 },

  // Blue sequence
  {
    nodeId: BLUE_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-blue-above",
    startTime: 39000,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP_POSITION,
    edgeId: "blue-above-to-grasp-position",
    startTime: 42500,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP,
    edgeId: "blue-grasp-position-to-grasp",
    startTime: 44000,
  },
  {
    nodeId: BLUE_SEQUENCE.PACKING_POSITION,
    edgeId: "blue-grasp-to-packing-position",
    startTime: 47000,
  },
  {
    nodeId: BLUE_SEQUENCE.RELEASE,
    edgeId: "blue-packing-position-to-release",
    startTime: 47500,
  },
];
