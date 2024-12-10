import { AnimatedNode } from "../components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../components/nodes/basic";

export type NodeData = {
  label: string;
  color?: string;
  onClick?: () => void;
}

export const initialNodes = [
  {
    id: "u0",
    type: "internal",
    position: { x: 300, y: 150 },
    data: { 
      label: "u_0",
      color: "#ff0000",
    } as NodeData,
  },
  {
    id: "u1",
    type: "internal", 
    position: { x: 700, y: 150 },
    data: { 
      label: "u_1",
      color: "#0000ff",
    } as NodeData,
  },
  {
    id: "t1",
    type: "terminal",
    position: { x: 300, y: 350 },
    data: { label: "" },
  },
  {
    id: "t2", 
    type: "terminal",
    position: { x: 700, y: 350 },
    data: { label: "" },
  }
];

export const alternativeNodes = [
  {
    id: "u3",
    type: "internal",
    position: { x: 400, y: 200 },
    data: { 
      label: "u_3",
      color: "#ff0000",
    } as NodeData,
  }
];

export const nodeTypes = {
  internal: InternalNode,
  terminal: TerminalNode,
  animated: AnimatedNode,
  custom: CustomNode,
};
