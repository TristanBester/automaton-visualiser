import { Node } from "@xyflow/react";

export type NodeData = {
  label: string;
  color?: string;
  style?: React.CSSProperties;
  group?: string;
};

export type GraphId = "1-1-1" | "3-3-3";
