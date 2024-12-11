import {
  ABSTRACT_NODES,
  AnimationStep,
  BLUE_SEQUENCE,
  GREEN_SEQUENCE,
  RED_SEQUENCE,
} from ".";

export const ANIMATION_3_3_3: AnimationStep[] = [
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Red sequence
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.RELEASE, duration: 1000 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.RELEASE, duration: 1000 },
  { nodeId: RED_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: RED_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Green sequence
  { nodeId: GREEN_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.RELEASE, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: GREEN_SEQUENCE.RELEASE, duration: 1000 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Blue sequence
  { nodeId: BLUE_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.RELEASE, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.GRASP_POSITION, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.GRASP, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.PACKING_POSITION, duration: 1000 },
  { nodeId: BLUE_SEQUENCE.RELEASE, duration: 1000 },
];
