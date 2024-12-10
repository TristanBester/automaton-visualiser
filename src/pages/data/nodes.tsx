import { AnimatedNode } from "../components/nodes/animated";
import {
  CustomNode,
  InternalNode,
  TerminalNode,
} from "../components/nodes/basic";
import { NodeData } from "../types";
import { LAYOUT } from '~/config';
import { STYLES } from '~/config';

export const initialNodes = [
  {
    id: "u0",
    type: "internal",
    position: { 
      x: LAYOUT.INITIAL_NODES.FIRST.X, 
      y: LAYOUT.INITIAL_NODES.FIRST.Y 
    },
    data: { 
      label: "u_0",
      color: STYLES.COLORS.RED,
    } as NodeData,
  },
  {
    id: "u1",
    type: "internal", 
    position: { 
      x: LAYOUT.INITIAL_NODES.SECOND.X, 
      y: LAYOUT.INITIAL_NODES.SECOND.Y 
    },
    data: { 
      label: "u_1",
      color: STYLES.COLORS.BLUE,
    } as NodeData,
  },
  {
    id: "t1",
    type: "terminal",
    position: { 
      x: LAYOUT.INITIAL_NODES.TERMINAL_FIRST.X, 
      y: LAYOUT.INITIAL_NODES.TERMINAL_FIRST.Y 
    },
    data: { label: "" },
  },
  {
    id: "t2", 
    type: "terminal",
    position: { 
      x: LAYOUT.INITIAL_NODES.TERMINAL_SECOND.X, 
      y: LAYOUT.INITIAL_NODES.TERMINAL_SECOND.Y 
    },
    data: { label: "" },
  }
];

export const alternativeNodes = [
  {
    id: "u3",
    type: "internal",
    position: { 
      x: LAYOUT.INITIAL_NODES.ALTERNATIVE.X, 
      y: LAYOUT.INITIAL_NODES.ALTERNATIVE.Y 
    },
    data: { 
      label: "u_3",
      color: STYLES.COLORS.RED,
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
    position: { 
      x: LAYOUT.NODES.LEVEL_1.RED.X, 
      y: LAYOUT.NODES.LEVEL_1.RED.Y 
    },
    data: { 
      label: "Pack Red\\nBlocks",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-green",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_1.GREEN.X, 
      y: LAYOUT.NODES.LEVEL_1.GREEN.Y 
    },
    data: { 
      label: "Pack Green\\nBlocks",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
];

// Graph 2 nodes
export const graph2Nodes = [
  {
    id: "pack-red-block-one",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.RED.X[0], 
      y: LAYOUT.NODES.LEVEL_2.RED.Y 
    },
    data: { 
      label: "Pack Red\\nBlock One",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-two",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.RED.X[1], 
      y: LAYOUT.NODES.LEVEL_2.RED.Y 
    },
    data: { 
      label: "Pack Red\\nBlock Two",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "pack-red-block-three",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.RED.X[2], 
      y: LAYOUT.NODES.LEVEL_2.RED.Y 
    },
    data: { 
      label: "Pack Red\\nBlock Three",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
];

// Graph 2 Green nodes
export const graph2GreenNodes = [
  {
    id: "pack-green-block-one",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.GREEN.X[0], 
      y: LAYOUT.NODES.LEVEL_2.GREEN.Y 
    },
    data: { 
      label: "Pack Green\\nBlock One",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "pack-green-block-two",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.GREEN.X[1], 
      y: LAYOUT.NODES.LEVEL_2.GREEN.Y 
    },
    data: { 
      label: "Pack Green\\nBlock Two",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "pack-green-block-three",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_2.GREEN.X[2], 
      y: LAYOUT.NODES.LEVEL_2.GREEN.Y 
    },
    data: { 
      label: "Pack Green\\nBlock Three",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
];

// Graph 3 - First instance (under "Pack Red Block One")
export const graph3FirstNodes = [
  {
    id: "above-red-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.X[0], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.Y 
    },
    data: { 
      label: "Above Red\\nBlock One",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.X[1], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.X[2], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.Y 
    },
    data: { 
      label: "Deliver Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.X[3], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.X[4], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_1.Y 
    },
    data: { 
      label: "Block Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - Second instance (under "Pack Red Block Two")
export const graph3SecondNodes = [
  {
    id: "above-red-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.X[0], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.Y 
    },
    data: { 
      label: "Above Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.X[1], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.X[2], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.Y 
    },
    data: { 
      label: "Deliver Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.X[3], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.X[4], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_2.Y 
    },
    data: { 
      label: "Block Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - Third instance (under "Pack Red Block Three")
export const graph3ThirdNodes = [
  {
    id: "above-red-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.X[0], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.Y 
    },
    data: { 
      label: "Above Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.X[1], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "deliver-red-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.X[2], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.Y 
    },
    data: { 
      label: "Deliver Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "grasp-red-two-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.X[3], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.Y 
    },
    data: { 
      label: "Grasp Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
  {
    id: "block-red-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.X[4], 
      y: LAYOUT.NODES.LEVEL_3.RED.GROUP_3.Y 
    },
    data: { 
      label: "Block Red",
      color: STYLES.COLORS.RED,
      group: "red"
    } as NodeData,
  },
];

// Graph 3 - Green First instance
export const graph3GreenFirstNodes = [
  {
    id: "above-green-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.X[0], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.Y 
    },
    data: { 
      label: "Above Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.X[1], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.X[2], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.Y 
    },
    data: { 
      label: "Deliver Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.X[3], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-1",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.X[4], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_1.Y 
    },
    data: { 
      label: "Block Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
];

// Graph 3 - Green Second instance
export const graph3GreenSecondNodes = [
  {
    id: "above-green-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.X[0], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.Y 
    },
    data: { 
      label: "Above Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.X[1], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.X[2], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.Y 
    },
    data: { 
      label: "Deliver Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.X[3], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-2",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.X[4], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_2.Y 
    },
    data: { 
      label: "Block Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
];

// Graph 3 - Green Third instance
export const graph3GreenThirdNodes = [
  {
    id: "above-green-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.X[0], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.Y 
    },
    data: { 
      label: "Above Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.X[1], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "deliver-green-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.X[2], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.Y 
    },
    data: { 
      label: "Deliver Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "grasp-green-two-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.X[3], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.Y 
    },
    data: { 
      label: "Grasp Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
  {
    id: "block-green-3",
    type: "internal",
    position: { 
      x: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.X[4], 
      y: LAYOUT.NODES.LEVEL_3.GREEN.GROUP_3.Y 
    },
    data: { 
      label: "Block Green",
      color: STYLES.COLORS.GREEN,
      group: "green"
    } as NodeData,
  },
];
