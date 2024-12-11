import { type NodeProps } from "@xyflow/react";
import { AnimatedNode } from "../pages/components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../pages/components/nodes/basic";
import { NodeData } from "~/pages/types";

export const nodeTypes = {
  internal: (props: NodeProps<NodeData>) => <InternalNode {...props} />,
  terminal: (props: NodeProps) => <TerminalNode {...props} />,
  animated: (props: NodeProps) => <AnimatedNode {...props} />,
  custom: (props: NodeProps) => <CustomNode {...props} />,
};
