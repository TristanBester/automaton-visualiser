export const STYLES = {
  NODES: {
    ACTIVE: {
      backgroundColor: '#FFEB3B',
      opacity: 1
    },
    INACTIVE: {
      backgroundColor: '#E0E0E0',
      opacity: 0.6
    },
    DEFAULT: {
      backgroundColor: undefined,
      opacity: 1
    }
  },
  EDGES: {
    DEFAULT: {
      strokeWidth: 2,
      stroke: '#000'
    }
  },
  COLORS: {
    RED: '#ff9999',
    GREEN: '#90EE90'
  },
  CONTAINERS: {
    BACKGROUNDS: {
      RED: 'rgba(255, 153, 153, 0.05)',
      GREEN: 'rgba(144, 238, 144, 0.05)'
    }
  }
} as const; 