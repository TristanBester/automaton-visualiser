import { Node } from "@xyflow/react";

export interface NodeData {
  label: string;
  color?: string;
  style?: React.CSSProperties;
  group?: string;
  isOpen?: boolean;
  variants?: any;
}

export type GraphId = "1-1-1" | "3-3-3";
