import { BaseEdge, getBezierPath, Position } from "@xyflow/react";
import { LAYOUT } from "~/config";

type CustomEdgeProps = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  label?: string;
  style?: React.CSSProperties;
  markerEnd?: string;
};

export default function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  label,
  style = {},
  markerEnd,
}: CustomEdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.2,
    offset: 10,
  });

  return (
    <>
      <defs>
        <marker
          id="large-arrow"
          viewBox="0 0 10 10"
          refX="7"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>
      <BaseEdge
        path={edgePath}
        style={{
          ...style,
          strokeWidth: 2,
        }}
        markerEnd="url(#large-arrow)"
      />
    </>
  );
}
