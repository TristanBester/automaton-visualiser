import { type Node } from "@xyflow/react";

export interface NodeData {
  id: string;
  label: React.ReactNode;
  isActive?: boolean;
  style?: {
    backgroundColor?: string;
    [key: string]: any;
  };
}

export type AnimationState = {
  activeNodeId: string | null;
  activeEdgeId: string | null;
  timeElapsed: number;
  isGreenPhase: boolean;
};

export interface Symbol {
  symbol: string;
  description: string;
}
