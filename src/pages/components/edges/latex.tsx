import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";

export default function LatexEdge({
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
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      {label && (
        <text
          x={(sourceX + targetX) / 2}
          y={(sourceY + targetY) / 2}
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
