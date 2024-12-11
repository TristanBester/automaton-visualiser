import { EdgeProps, getSmoothStepPath } from "@xyflow/react";

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
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX: sourceX + 100,
    targetY: sourceY,
    targetPosition,
  });

  return (
    <>
      <path
        d={edgePath}
        fill="none"
        stroke="#000"
        strokeWidth={1.5}
        className="react-flow__edge-path"
        markerEnd={markerEnd}
      />
      {label && (
        <text
          x={sourceX + 50}
          y={sourceY - 10}
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
