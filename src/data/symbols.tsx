import { Symbol } from "~/types";

export const symbols: Symbol[] = [
  {
    symbol: "A_R",
    description: "Above Red: robot is positioned above the red block",
  },
  {
    symbol: "GP_R",
    description:
      "Grasp Position Red: robot is in position to grasp the red block",
  },
  {
    symbol: "G_R",
    description: "Grasp Red: robot has grasped the red block",
  },
  {
    symbol: "PP_R",
    description:
      "Packing Position Red: robot is in position to pack the red block",
  },
  {
    symbol: "R_R",
    description:
      "Release Red: robot has released the red block in packing position",
  },
  // Green block symbols
  {
    symbol: "A_G",
    description: "Above Green: robot is positioned above the green block",
  },
  {
    symbol: "GP_G",
    description:
      "Grasp Position Green: robot is in position to grasp the green block",
  },
  {
    symbol: "G_G",
    description: "Grasp Green: robot has grasped the green block",
  },
  {
    symbol: "PP_G",
    description:
      "Packing Position Green: robot is in position to pack the green block",
  },
  {
    symbol: "R_G",
    description:
      "Release Green: robot has released the green block in packing position",
  },
  // Blue block symbols
  {
    symbol: "A_B",
    description: "Above Blue: robot is positioned above the blue block",
  },
  {
    symbol: "GP_B",
    description:
      "Grasp Position Blue: robot is in position to grasp the blue block",
  },
  {
    symbol: "G_B",
    description: "Grasp Blue: robot has grasped the blue block",
  },
  {
    symbol: "PP_B",
    description:
      "Packing Position Blue: robot is in position to pack the blue block",
  },
  {
    symbol: "R_B",
    description:
      "Release Blue: robot has released the blue block in packing position",
  },
  // State vector notation
  {
    symbol: "[1, -, -]",
    description: "State vector indicating red block is being processed",
  },
  {
    symbol: "[0, 1, -]",
    description: "State vector indicating green block is being processed",
  },
  {
    symbol: "[0, 0, 1]",
    description: "State vector indicating blue block is being processed",
  },
  {
    symbol: "\\tau",
    description: "Tautology",
  },
];
