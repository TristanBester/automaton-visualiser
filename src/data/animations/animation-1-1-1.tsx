import {
  ABSTRACT_NODES,
  AnimationStep,
  BLUE_SEQUENCE,
  GREEN_SEQUENCE,
  RED_SEQUENCE,
} from ".";

export const ANIMATION_1_1_1: AnimationStep[] = [
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Red sequence
  { nodeId: RED_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Green sequence
  { nodeId: GREEN_SEQUENCE.MOVE_ABOVE, duration: 1000 },
  // Decision node
  { nodeId: ABSTRACT_NODES.DECISION, duration: 1000 },
  // Blue sequence
  { nodeId: BLUE_SEQUENCE.MOVE_ABOVE, duration: 1000 },
];
