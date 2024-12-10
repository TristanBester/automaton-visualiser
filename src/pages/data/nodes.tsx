import { AnimatedNode } from "../components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../components/nodes/basic";
import { NodeData } from "../types";

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

// Graph 1 - Top level (single node)
export const graph1Nodes = [
  {
    id: "pack-red",
    type: "internal",
    position: { x: 1300, y: 0 },
    data: { 
      label: "Pack Red\\nBlocks",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];

// Constants for layout
const GRAPH3_Y = 400;
const NODE_SPACING = 150; // Increased spacing between nodes
const GROUP_SPACING = 900; // Spacing between groups in Graph 3
const GRAPH2_Y = 200; // Y position for Graph 2 nodes

// Graph 2 - Middle level (three sequential nodes)
export const graph2Nodes = [
  {
    id: "pack-red-block-one",
    type: "internal",
    position: { x: 300, y: GRAPH2_Y }, // Aligned with first Graph 3 group
    data: { 
      label: "Pack Red\\nBlock One",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-two",
    type: "internal",
    position: { x: 1300, y: GRAPH2_Y }, // Aligned with second Graph 3 group
    data: { 
      label: "Pack Red\\nBlock Two",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-three",
    type: "internal",
    position: { x: 2300, y: GRAPH2_Y }, // Aligned with third Graph 3 group
    data: { 
      label: "Pack Red\\nBlock Three",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - First instance (under "Pack Red Block One")
export const graph3FirstNodes = [
  {
    id: "above-red-1",
    type: "internal",
    position: { x: 100, y: GRAPH3_Y },
    data: { 
      label: "Above Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-1",
    type: "internal",
    position: { x: 100 + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-1",
    type: "internal",
    position: { x: 100 + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-1",
    type: "internal",
    position: { x: 100 + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-1",
    type: "internal",
    position: { x: 100 + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - Second instance (under "Pack Red Block Two")
export const graph3SecondNodes = [
  {
    id: "above-red-2",
    type: "internal",
    position: { x: 100 + GROUP_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Above Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-2",
    type: "internal",
    position: { x: 100 + GROUP_SPACING + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-2",
    type: "internal",
    position: { x: 100 + GROUP_SPACING + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-2",
    type: "internal",
    position: { x: 100 + GROUP_SPACING + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-2",
    type: "internal",
    position: { x: 100 + GROUP_SPACING + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - Third instance (under "Pack Red Block Three")
export const graph3ThirdNodes = [
  {
    id: "above-red-3",
    type: "internal",
    position: { x: 100 + GROUP_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Above Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-3",
    type: "internal",
    position: { x: 100 + GROUP_SPACING * 2 + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-3",
    type: "internal",
    position: { x: 100 + GROUP_SPACING * 2 + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-3",
    type: "internal",
    position: { x: 100 + GROUP_SPACING * 2 + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-3",
    type: "internal",
    position: { x: 100 + GROUP_SPACING * 2 + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Red",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];
