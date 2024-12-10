export const ANIMATION_CONFIG = {
  DURATION: {
    RED_PHASE: 15000,    // 15 seconds
    GREEN_PHASE: 15000,  // 15 seconds
    TOTAL: 30000        // 30 seconds total
  },
  TASK_DURATION: {
    STANDARD: 1000,     // 1 second
    BLOCK: 5000,        // 5 seconds
    LOOP: 500          // 0.5 seconds
  },
  TRANSITION_TIMING: {
    RED_TO_GREEN: 15000  // 15 seconds
  }
} as const; 