import { type Node } from "@xyflow/react";

export type NodeData = {
  label: string;
  isActive?: boolean;
  style?: React.CSSProperties;
} & Partial<Node>;

export type GraphId = "1-1-1" | "3-3-3";

export type AnimationState = {
  graph1Active: string | null;
  graph2Active: string | null;
  graph3Active: string | null;
  timeElapsed: number;
  isGreenPhase: boolean;
};
