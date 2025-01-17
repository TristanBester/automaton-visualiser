import { type Node } from "@xyflow/react";

// The data shape for our nodes
export interface NodeData extends Record<string, unknown> {
  label: React.ReactNode;
  isActive?: boolean;
  style?: {
    backgroundColor?: string;
    [key: string]: any;
  };
}

// The complete node type including position and id
export interface CustomNode extends Node {
  data: NodeData;
}

// Props type for node components
export type CustomNodeProps = {
  data: NodeData;
  id: string;
};

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

export type GraphId = "returns" | "values" | "rewards" | "1-1-1" | "3-3-3";
