export const TASK_DESCRIPTIONS = {
  "above-red-1": "Moving above red block 1",
  "grasp-red-1": "Grasping red block 1",
  "deliver-red-1": "Delivering red block 1",
  "grasp-red-two-1": "Adjusting grip on red block 1",
  "block-red-1": "Placing red block 1",
  
  "above-red-2": "Moving above red block 2",
  "grasp-red-2": "Grasping red block 2",
  "deliver-red-2": "Delivering red block 2",
  "grasp-red-two-2": "Adjusting grip on red block 2",
  "block-red-2": "Placing red block 2",
  
  "above-red-3": "Moving above red block 3",
  "grasp-red-3": "Grasping red block 3",
  "deliver-red-3": "Delivering red block 3",
  "grasp-red-two-3": "Adjusting grip on red block 3",
  "block-red-3": "Placing red block 3",
  
  "above-green-1": "Moving above green block 1",
  "grasp-green-1": "Grasping green block 1",
  "deliver-green-1": "Delivering green block 1",
  "grasp-green-two-1": "Adjusting grip on green block 1",
  "block-green-1": "Placing green block 1",
  
  "above-green-2": "Moving above green block 2",
  "grasp-green-2": "Grasping green block 2",
  "deliver-green-2": "Delivering green block 2",
  "grasp-green-two-2": "Adjusting grip on green block 2",
  "block-green-2": "Placing green block 2",
  
  "above-green-3": "Moving above green block 3",
  "grasp-green-3": "Grasping green block 3",
  "deliver-green-3": "Delivering green block 3",
  "grasp-green-two-3": "Adjusting grip on green block 3",
  "block-green-3": "Placing green block 3",
} as const;

export const TASK_STATES = {
  READY: "Ready to start",
  PROCESSING_RED: "Processing red blocks...",
  PROCESSING_GREEN: "Processing green blocks...",
  DEFAULT: "Processing..."
} as const; 