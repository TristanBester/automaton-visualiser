import { type NodeProps } from "@xyflow/react";
import { AnimatedNode } from "../pages/components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
  DecisionNode,
} from "../pages/components/nodes/basic";
import { NodeData } from "~/pages/types";

export const nodeTypes = {
  internal: InternalNode,
  terminal: TerminalNode,
  animated: AnimatedNode,
  custom: CustomNode,
  decision: DecisionNode,
  abstract: InternalNode,
};
