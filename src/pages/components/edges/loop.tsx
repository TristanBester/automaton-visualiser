import { EdgeProps, getBezierPath } from "@xyflow/react";

export default function LoopEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.5,
    offset: 10,
  });

  return (
    <>
      <defs>
        <marker
          id="large-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>
      <path
        d={edgePath}
        fill="none"
        stroke="#000"
        strokeWidth={1.5}
        className="react-flow__edge-path"
        markerEnd="url(#large-arrow)"
      />
      {label && (
        <text
          x={(sourceX + targetX) / 2}
          y={(sourceY + targetY) / 2 - 10}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="nodrag nopan"
          style={{ fill: "#000", fontSize: "12px" }}
        >
          {label}
        </text>
      )}
    </>
  );
}
