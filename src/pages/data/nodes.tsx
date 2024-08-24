import { AnimatedNode } from "../components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../components/nodes/basic";

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 0 },
    data: {
      label: "Hello",
      isOpen: false,
      variants: {
        start: { backgroundColor: "#FF0000" },
        end: { backgroundColor: "#00FF00" },
      },
    },
  },
  {
    id: "2",
    type: "animated",
    position: { x: 200, y: 0 },
    data: { label: "Hello", isOpen: false },
  },
  {
    id: "3",
    type: "internal",
    position: { x: 400, y: 0 },
    data: { label: "Hello", isOpen: false },
  },
  {
    id: "4",
    type: "terminal",
    position: { x: 400, y: 200 },
    data: { label: "Hello", isOpen: false },
  },
];

export const nodeTypes = {
  internal: InternalNode,
  terminal: TerminalNode,
  animated: AnimatedNode,
  custom: CustomNode,
};
