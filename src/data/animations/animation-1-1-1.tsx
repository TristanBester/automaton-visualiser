import {
  ABSTRACT_NODES,
  AnimationStep,
  BLUE_SEQUENCE,
  GREEN_SEQUENCE,
  RED_SEQUENCE,
} from ".";

export const ANIMATION_1_1_1: AnimationStep[] = [
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 500 },
  // Red sequence
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1500 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, duration: 500 },
  { nodeId: RED_SEQUENCE.GRASP, duration: 500 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, duration: 700 },
  { nodeId: RED_SEQUENCE.RELEASE, duration: 300 },
  // 4s
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 300 },
  // Green sequence
  { nodeId: GREEN_SEQUENCE.MOVE_ABOVE, duration: 700 },
  // 5s
  { nodeId: GREEN_SEQUENCE.GRASP_POSITION, duration: 700 },
  { nodeId: GREEN_SEQUENCE.GRASP, duration: 300 },
  // 6s
  { nodeId: GREEN_SEQUENCE.PACKING_POSITION, duration: 300 },
  { nodeId: GREEN_SEQUENCE.RELEASE, duration: 200 },
  // 6.5s

  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 300 },
  // Blue sequence
  { nodeId: BLUE_SEQUENCE.MOVE_ABOVE, duration: 200 },
  //7s
  { nodeId: BLUE_SEQUENCE.GRASP_POSITION, duration: 800 },
  { nodeId: BLUE_SEQUENCE.GRASP, duration: 200 },
  //8s
  { nodeId: BLUE_SEQUENCE.PACKING_POSITION, duration: 500 },
  { nodeId: BLUE_SEQUENCE.RELEASE, duration: 500 },
];
