export const LAYOUT = {
  BASE_X: 600,
  BASE_Y: -20,
  CONTAINER_WIDTH: 200,
  CONTAINER_HEIGHT: 100,
  CONTAINER_SPACING: 800,
  GREEN_SHIFT: 2750,
  VIEWPORTS: {
    RED: {
      x: 100,
      y: 300,
      zoom: 0.5
    },
    GREEN: {
      x: -1300,
      y: 300,
      zoom: 0.5
    }
  },
  TRANSITION_DURATION: 150
} as const; 