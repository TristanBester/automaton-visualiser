export const ABSTRACT_NODES = {
  DECISION: "decision-node",
} as const;

export type AnimationStep = {
  nodeId: string;
  edgeId?: string;
  startTime: number;
};

export const RED_SEQUENCE = {
  MOVE_ABOVE: "pack-red-blocks-move-above",
  GRASP_POSITION: "pack-red-blocks-grasp",
  GRASP: "pack-red-blocks-grasp-action",
  PACKING_POSITION: "pack-red-blocks-move-to-packing-position",
  RELEASE: "pack-red-blocks-release",
} as const;

export const GREEN_SEQUENCE = {
  MOVE_ABOVE: "pack-green-blocks-move-above",
  GRASP_POSITION: "pack-green-blocks-grasp",
  GRASP: "pack-green-blocks-grasp-action",
  PACKING_POSITION: "pack-green-blocks-move-to-packing-position",
  RELEASE: "pack-green-blocks-release",
} as const;

export const BLUE_SEQUENCE = {
  MOVE_ABOVE: "pack-blue-blocks-move-above",
  GRASP_POSITION: "pack-blue-blocks-grasp",
  GRASP: "pack-blue-blocks-grasp-action",
  PACKING_POSITION: "pack-blue-blocks-move-to-packing-position",
  RELEASE: "pack-blue-blocks-release",
} as const;

export const SEQUENCES = {
  RED: RED_SEQUENCE,
  GREEN: GREEN_SEQUENCE,
  BLUE: BLUE_SEQUENCE,
} as const;

export const ALL_NODES = {
  ABSTRACT: ABSTRACT_NODES,
  SEQUENCES,
} as const;
