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
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, startTime: 250 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, startTime: 1700 },
  { nodeId: RED_SEQUENCE.GRASP, startTime: 2400 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, startTime: 3300 },
  { nodeId: RED_SEQUENCE.RELEASE, startTime: 3800 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 4050 },
  // Green sequence
  { nodeId: GREEN_SEQUENCE.MOVE_ABOVE, startTime: 4600 },
  { nodeId: GREEN_SEQUENCE.GRASP_POSITION, startTime: 5000 },
  { nodeId: GREEN_SEQUENCE.GRASP, startTime: 5200 },
  { nodeId: GREEN_SEQUENCE.PACKING_POSITION, startTime: 5900 },
  { nodeId: GREEN_SEQUENCE.RELEASE, startTime: 6000 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 6250 },
  // Blue sequence
  { nodeId: BLUE_SEQUENCE.MOVE_ABOVE, startTime: 6900 },
  { nodeId: BLUE_SEQUENCE.GRASP_POSITION, startTime: 7200 },
  { nodeId: BLUE_SEQUENCE.GRASP, startTime: 7300 },
  { nodeId: BLUE_SEQUENCE.PACKING_POSITION, startTime: 8200 },
  { nodeId: BLUE_SEQUENCE.RELEASE, startTime: 8400 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, startTime: 8600 },
];
