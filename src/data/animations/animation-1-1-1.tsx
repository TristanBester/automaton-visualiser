import {
  ABSTRACT_NODES,
  AnimationStep,
  BLUE_SEQUENCE,
  GREEN_SEQUENCE,
  RED_SEQUENCE,
} from ".";

export const ANIMATION_1_1_1: AnimationStep[] = [
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
    startTime: 1700,
  },
  {
    nodeId: RED_SEQUENCE.GRASP,
    edgeId: "red-grasp-position-to-grasp",
    startTime: 2400,
  },
  {
    nodeId: RED_SEQUENCE.PACKING_POSITION,
    edgeId: "red-grasp-to-packing-position",
    startTime: 3300,
  },
  {
    nodeId: RED_SEQUENCE.RELEASE,
    edgeId: "red-packing-position-to-release",
    startTime: 3800,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 4050 },
  // Green sequence
  {
    nodeId: GREEN_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-green-above",
    startTime: 4600,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP_POSITION,
    edgeId: "green-above-to-grasp-position",
    startTime: 5000,
  },
  {
    nodeId: GREEN_SEQUENCE.GRASP,
    edgeId: "green-grasp-position-to-grasp",
    startTime: 5200,
  },
  {
    nodeId: GREEN_SEQUENCE.PACKING_POSITION,
    edgeId: "green-grasp-to-packing-position",
    startTime: 5900,
  },
  {
    nodeId: GREEN_SEQUENCE.RELEASE,
    edgeId: "green-packing-position-to-release",
    startTime: 6000,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 6250 },
  // Blue sequence
  {
    nodeId: BLUE_SEQUENCE.MOVE_ABOVE,
    edgeId: "decision-to-blue-above",
    startTime: 6900,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP_POSITION,
    edgeId: "blue-above-to-grasp-position",
    startTime: 7200,
  },
  {
    nodeId: BLUE_SEQUENCE.GRASP,
    edgeId: "blue-grasp-position-to-grasp",
    startTime: 7300,
  },
  {
    nodeId: BLUE_SEQUENCE.PACKING_POSITION,
    edgeId: "blue-grasp-to-packing-position",
    startTime: 8200,
  },
  {
    nodeId: BLUE_SEQUENCE.RELEASE,
    edgeId: "blue-packing-position-to-release",
    startTime: 8400,
  },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 8600 },
];
