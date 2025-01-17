import {
  AnimatedNode,
} from "~/components/nodes/animated";
import {
  InternalNode,
  DecisionNode,
} from "~/components/nodes/basic";
import { NodeData } from "~/types";

export const nodeTypes = {
  abstract: InternalNode,
  decision: DecisionNode,
  animated: AnimatedNode,
};
