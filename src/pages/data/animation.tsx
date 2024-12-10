export type AnimationState = {
  graph1Active: string | null;
  graph2Active: string | null;
  graph3Active: string | null;
  timeElapsed: number;
  isGreenPhase: boolean;
};

export type TaskTiming = {
  id: string;
  duration: number;
  subtasks?: TaskTiming[];
};

// Define the hierarchical timing structure
export const redTaskTimings: TaskTiming = {
  id: "pack-red",
  duration: 30,
  subtasks: [
    {
      id: "pack-red-block-one",
      duration: 5,
      subtasks: [
        { id: "above-red-1", duration: 1 },
        { id: "grasp-red-1", duration: 1 },
        { id: "deliver-red-1", duration: 1 },
        { id: "grasp-red-two-1", duration: 1 },
        { id: "block-red-1", duration: 1 },
      ],
    },
    {
      id: "pack-red-block-two",
      duration: 5,
      subtasks: [
        { id: "above-red-2", duration: 1 },
        { id: "grasp-red-2", duration: 1 },
        { id: "deliver-red-2", duration: 1 },
        { id: "grasp-red-two-2", duration: 1 },
        { id: "block-red-2", duration: 1 },
      ],
    },
    {
      id: "pack-red-block-three",
      duration: 5,
      subtasks: [
        { id: "above-red-3", duration: 1 },
        { id: "grasp-red-3", duration: 1 },
        { id: "deliver-red-3", duration: 1 },
        { id: "grasp-red-two-3", duration: 1 },
        { id: "block-red-3", duration: 1 },
      ],
    },
  ],
};

export function getActiveNodesAtTime(time: number): AnimationState {
  const redPhaseDuration = 15;
  const isGreenPhase = time > redPhaseDuration;
  const adjustedTime = isGreenPhase ? time - redPhaseDuration : time;

  const state: AnimationState = {
    graph1Active: null,
    graph2Active: null,
    graph3Active: null,
    timeElapsed: time,
    isGreenPhase
  };

  if (isGreenPhase) {
    state.graph1Active = "pack-green";

    if (adjustedTime <= 5) {
      state.graph2Active = "pack-green-block-one";
      const subTime = adjustedTime;
      if (subTime <= 1) state.graph3Active = "above-green-1";
      else if (subTime <= 2) state.graph3Active = "grasp-green-1";
      else if (subTime <= 3) state.graph3Active = "deliver-green-1";
      else if (subTime <= 4) state.graph3Active = "grasp-green-two-1";
      else state.graph3Active = "block-green-1";
    } 
    else if (adjustedTime <= 10) {
      state.graph2Active = "pack-green-block-two";
      const subTime = adjustedTime - 5;
      if (subTime <= 1) state.graph3Active = "above-green-2";
      else if (subTime <= 2) state.graph3Active = "grasp-green-2";
      else if (subTime <= 3) state.graph3Active = "deliver-green-2";
      else if (subTime <= 4) state.graph3Active = "grasp-green-two-2";
      else state.graph3Active = "block-green-2";
    }
    else if (adjustedTime <= 15) {
      state.graph2Active = "pack-green-block-three";
      const subTime = adjustedTime - 10;
      if (subTime <= 1) state.graph3Active = "above-green-3";
      else if (subTime <= 2) state.graph3Active = "grasp-green-3";
      else if (subTime <= 3) state.graph3Active = "deliver-green-3";
      else if (subTime <= 4) state.graph3Active = "grasp-green-two-3";
      else state.graph3Active = "block-green-3";
    }
  } else {
    state.graph1Active = "pack-red";

    if (time <= 5) {
      state.graph2Active = "pack-red-block-one";
      const subTime = time;
      if (subTime <= 1) state.graph3Active = "above-red-1";
      else if (subTime <= 2) state.graph3Active = "grasp-red-1";
      else if (subTime <= 3) state.graph3Active = "deliver-red-1";
      else if (subTime <= 4) state.graph3Active = "grasp-red-two-1";
      else state.graph3Active = "block-red-1";
    } 
    else if (time <= 10) {
      state.graph2Active = "pack-red-block-two";
      const subTime = time - 5;
      if (subTime <= 1) state.graph3Active = "above-red-2";
      else if (subTime <= 2) state.graph3Active = "grasp-red-2";
      else if (subTime <= 3) state.graph3Active = "deliver-red-2";
      else if (subTime <= 4) state.graph3Active = "grasp-red-two-2";
      else state.graph3Active = "block-red-2";
    }
    else if (time <= 15) {
      state.graph2Active = "pack-red-block-three";
      const subTime = time - 10;
      if (subTime <= 1) state.graph3Active = "above-red-3";
      else if (subTime <= 2) state.graph3Active = "grasp-red-3";
      else if (subTime <= 3) state.graph3Active = "deliver-red-3";
      else if (subTime <= 4) state.graph3Active = "grasp-red-two-3";
      else state.graph3Active = "block-red-3";
    }
  }

  return state;
}

// For debugging
export function logActiveStates() {
  console.log("Animation states at different times:");
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].forEach(time => {
    console.log(`Time ${time}s:`, getActiveNodesAtTime(time));
  });
}
