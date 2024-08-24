import { AnimatedNode } from "../components/nodes/animated";
import { InternalNode, TerminalNode } from "../components/nodes/basic";

export const nodes = [
  {
    id: "1",
    type: "internal",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
  },
  {
    id: "2",
    type: "animated",
    position: { x: 200, y: 0 },
    data: { label: "Hello" },
  },
  {
    id: "3",
    type: "internal",
    position: { x: 400, y: 0 },
    data: { label: "Hello" },
  },
  {
    id: "4",
    type: "terminal",
    position: { x: 400, y: 200 },
    data: { label: "Hello" },
  },
];

export const nodeTypes = {
  internal: InternalNode,
  terminal: TerminalNode,
  animated: AnimatedNode,
};
