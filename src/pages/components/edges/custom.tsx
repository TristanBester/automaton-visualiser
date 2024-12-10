import { BaseEdge, EdgeLabelRenderer } from "@xyflow/react";
import { LAYOUT } from "~/config";

type CustomEdgeProps = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  label?: string;
  style?: React.CSSProperties;
  markerEnd?: string;
};

export default function CustomEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
  style = {},
  markerEnd,
}: CustomEdgeProps) {
  const radius = LAYOUT.NODE.DIAMETER / 2;
  const gap = 5; // Small gap between edge and node

  // Calculate angle between nodes
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const angle = Math.atan2(dy, dx);

  // Find points on circumference of source and target nodes
  const startX = sourceX + (radius + gap) * Math.cos(angle) - 10000;
  const startY = sourceY + (radius + gap) * Math.sin(angle);
  const endX = targetX - (radius + gap) * Math.cos(angle);
  const endY = targetY - (radius + gap) * Math.sin(angle);

  // Create path between circumference points
  const path = `
    M ${startX} ${startY}
    L ${endX} ${endY}
  `;

  return (
    <BaseEdge 
      path={path}
      style={{
        ...style,
        strokeWidth: 2,
      }}
      markerEnd={markerEnd}
    />
  );
} 