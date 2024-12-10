const Y_LEVELS = {
  GRAPH_1: 0,
  GRAPH_2: 600,
  GRAPH_3: 1200,
} as const;

// Helper function to generate X positions for a sequence of nodes
const generateXPositions = (startX: number, count: number, spacing: number) => {
  return Array.from({ length: count }, (_, i) => startX + i * spacing);
};

// Helper functions
const generateContainerPositions = (startX: number, count: number, spacing: number) => {
  return Array.from({ length: count }, (_, i) => startX + i * spacing);
};

// Base positions and spacing
const BASE = {
  X: 0,
  NODE_SPACING: 250,
  GROUP_SPACING: 900,
  GREEN_SHIFT: 4500,
  LEVEL_2_SPACING: 700,
  CONTAINER_SPACING: 1500,
} as const;

// Generate X positions for each level
const LEVEL_2_RED = generateXPositions(BASE.X, 3, BASE.LEVEL_2_SPACING);
const LEVEL_2_GREEN = generateXPositions(BASE.X + BASE.GREEN_SHIFT, 3, BASE.LEVEL_2_SPACING);

const LEVEL_3_RED_1 = generateXPositions(BASE.X - 1300, 5, BASE.NODE_SPACING);
const LEVEL_3_RED_2 = generateXPositions(BASE.X + 200, 5, BASE.NODE_SPACING);
const LEVEL_3_RED_3 = generateXPositions(BASE.X + 1700, 5, BASE.NODE_SPACING);

const LEVEL_3_GREEN_1 = generateXPositions(BASE.X + BASE.GREEN_SHIFT - 1300, 5, BASE.NODE_SPACING);
const LEVEL_3_GREEN_2 = generateXPositions(BASE.X + BASE.GREEN_SHIFT + 200, 5, BASE.NODE_SPACING);
const LEVEL_3_GREEN_3 = generateXPositions(BASE.X + BASE.GREEN_SHIFT + 1700, 5, BASE.NODE_SPACING);

// Generate container X positions
const CONTAINER_LEVEL_3_RED = generateContainerPositions(-1400, 3, BASE.CONTAINER_SPACING);
const CONTAINER_LEVEL_3_GREEN = generateContainerPositions(-1400 + BASE.GREEN_SHIFT, 3, BASE.CONTAINER_SPACING);

export const LAYOUT = {
  BASE_X: BASE.X,
  BASE_Y: -20,
  Y_LEVELS,
  
  // Node positions for each graph level
  NODES: {
    LEVEL_1: {
      RED: {
        X: BASE.X + 700,
        Y: Y_LEVELS.GRAPH_1
      },
      GREEN: {
        X: BASE.X + 5220,
        Y: Y_LEVELS.GRAPH_1
      }
    },
    LEVEL_2: {
      RED: {
        X: LEVEL_2_RED,
        Y: Y_LEVELS.GRAPH_2
      },
      GREEN: {
        X: LEVEL_2_GREEN,
        Y: Y_LEVELS.GRAPH_2
      }
    },
    LEVEL_3: {
      RED: {
        GROUP_1: {
          X: LEVEL_3_RED_1,
          Y: Y_LEVELS.GRAPH_3,
        },
        GROUP_2: {
          X: LEVEL_3_RED_2,
          Y: Y_LEVELS.GRAPH_3,
        },
        GROUP_3: {
          X: LEVEL_3_RED_3,
          Y: Y_LEVELS.GRAPH_3,
        }
      },
      GREEN: {
        GROUP_1: {
          X: LEVEL_3_GREEN_1,
          Y: Y_LEVELS.GRAPH_3,
        },
        GROUP_2: {
          X: LEVEL_3_GREEN_2,
          Y: Y_LEVELS.GRAPH_3,
        },
        GROUP_3: {
          X: LEVEL_3_GREEN_3,
          Y: Y_LEVELS.GRAPH_3,
        }
      }
    }
  },
  
  // Container positions and dimensions
  CONTAINER_Y: {
    LEVEL_1: -120,
    LEVEL_2: 475,
    LEVEL_3: 1070,
  },
  
  // Container dimensions and positions for each level
  CONTAINER: {
    HEIGHT: 300,
    LEVEL_1: {
      WIDTH: 400,
      RED: {
        X: BASE.X + 540,
      },
      GREEN: {
        X: BASE.X + 5050,
      }
    },
    LEVEL_2: {
      WIDTH: 1800,
      RED: {
        X: BASE.X - 140,
      },
      GREEN: {
        X: BASE.X + BASE.GREEN_SHIFT - 140,
      }
    },
    LEVEL_3: {
      WIDTH: 1300,
      RED: {
        FIRST: {
          X: CONTAINER_LEVEL_3_RED[0],
        },
        SECOND: {
          X: CONTAINER_LEVEL_3_RED[1],
        },
        THIRD: {
          X: CONTAINER_LEVEL_3_RED[2],
        }
      },
      GREEN: {
        FIRST: {
          X: CONTAINER_LEVEL_3_GREEN[0],
        },
        SECOND: {
          X: CONTAINER_LEVEL_3_GREEN[1],
        },
        THIRD: {
          X: CONTAINER_LEVEL_3_GREEN[2],
        }
      }
    }
  },
  
  CONTAINER_SPACING: 800,
  NODE_SPACING: BASE.NODE_SPACING,
  GROUP_SPACING: BASE.GROUP_SPACING,
  GREEN_SHIFT: BASE.GREEN_SHIFT,
  
  VIEWPORTS: {
    RED: {
      x: 500,
      y: 300,
      zoom: 0.3
    },
    GREEN: {
      x: -800,
      y: 300,
      zoom: 0.3
    },
    INITIAL: {
      x: 1300,
      y: -700,
      zoom: 0.9
    }
  },
  
  TRANSITION_DURATION: 150,
  
  // Initial demo nodes positions
  INITIAL_NODES: {
    FIRST: {
      X: 300,
      Y: 150
    },
    SECOND: {
      X: 700,
      Y: 150
    },
    TERMINAL_FIRST: {
      X: 300,
      Y: 350
    },
    TERMINAL_SECOND: {
      X: 700,
      Y: 350
    },
    ALTERNATIVE: {
      X: 400,
      Y: 200
    }
  },
  
  NODE: {
    DIAMETER: 150,
    STYLE: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: '1px solid #ccc',
      fontSize: '16px',
      backgroundColor: '#f3f4f6',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-in-out',
    },
    ACTIVE: {
      transform: 'scale(1.2)',
      boxShadow: '0 0 25px rgba(255, 235, 59, 0.8), 0 0 50px rgba(255, 235, 59, 0.4)',
      zIndex: 10,
    }
  },
} as const; 