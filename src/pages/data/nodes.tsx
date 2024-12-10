import { AnimatedNode } from "../components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../components/nodes/basic";
import { NodeData } from "../types";
import { LAYOUT } from "../constants";

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

// Constants for layout
const GRAPH3_Y = 400;
const NODE_SPACING = 150;
const GROUP_SPACING = 900;
const GRAPH2_Y = 200;
const BASE_X = 600;
const GREEN_SHIFT = 2000; // New constant for green hierarchy shift

// Graph 1 - Top level (single node)
export const graph1Nodes = [
  {
    id: "pack-red",
    type: "internal",
    position: { x: BASE_X + 700, y: 0 }, // Adjusted x position for two nodes
    data: { 
      label: "Pack Red\\nBlocks",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-green",
    type: "internal",
    position: { x: BASE_X + 3450, y: 0 },
    data: { 
      label: "Pack Green\\nBlocks",
      color: "#90EE90", // Light green color
      group: "green"
    } as NodeData,
  },
];

// Graph 2 nodes
export const graph2Nodes = [
  {
    id: "pack-red-block-one",
    type: "internal",
    position: { x: BASE_X, y: GRAPH2_Y },
    data: { 
      label: "Pack Red\\nBlock One",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-two",
    type: "internal",
    position: { x: BASE_X + 700, y: GRAPH2_Y },
    data: { 
      label: "Pack Red\\nBlock Two",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-three",
    type: "internal",
    position: { x: BASE_X + 1400, y: GRAPH2_Y },
    data: { 
      label: "Pack Red\\nBlock Three",
      color: "#ff9999",
      group: "red"
    } as NodeData,
  },
];

// Graph 2 nodes - Green path
export const graph2GreenNodes = [
  {
    id: "pack-green-block-one",
    type: "internal",
    position: { x: BASE_X + LAYOUT.GREEN_SHIFT, y: GRAPH2_Y },
    data: { 
      label: "Pack Green\\nBlock One",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "pack-green-block-two",
    type: "internal",
    position: { x: BASE_X + LAYOUT.GREEN_SHIFT + 700, y: GRAPH2_Y },
    data: { 
      label: "Pack Green\\nBlock Two",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "pack-green-block-three",
    type: "internal",
    position: { x: BASE_X + LAYOUT.GREEN_SHIFT + 1400, y: GRAPH2_Y },
    data: { 
      label: "Pack Green\\nBlock Three",
      color: "#90EE90",
      group: "green"
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

// Graph 3 - Green First instance
export const graph3GreenFirstNodes = [
  {
    id: "above-green-1",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT, y: GRAPH3_Y },
    data: { 
      label: "Above Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-1",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-1",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-1",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-1",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
];

// Graph 3 - Green Second instance
export const graph3GreenSecondNodes = [
  {
    id: "above-green-2",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Above Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-2",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-2",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-2",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-2",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
];

// Graph 3 - Green Third instance
export const graph3GreenThirdNodes = [
  {
    id: "above-green-3",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Above Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-3",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING * 2 + NODE_SPACING, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-3",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING * 2 + NODE_SPACING * 2, y: GRAPH3_Y },
    data: { 
      label: "Deliver Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-3",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING * 2 + NODE_SPACING * 3, y: GRAPH3_Y },
    data: { 
      label: "Grasp Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-3",
    type: "internal",
    position: { x: 100 + LAYOUT.GREEN_SHIFT + GROUP_SPACING * 2 + NODE_SPACING * 4, y: GRAPH3_Y },
    data: { 
      label: "Block Green",
      color: "#90EE90",
      group: "green"
    } as NodeData,
  },
];
