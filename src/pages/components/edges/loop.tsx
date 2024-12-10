import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  MarkerType,
} from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { LAYOUT } from "~/config";
import { useState } from "react";

type LoopEdgeProps = {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: any;
  targetPosition: any;
  style: React.CSSProperties;
  markerEnd: string;
  label?: string;
  tooltip?: string;
};

export default function LoopEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  tooltip = "Self-loop transition"  // Default tooltip text
}: LoopEdgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const radius = LAYOUT.NODE.DIAMETER / 2;
  const arcRadius = radius * 0.8;  // Size of the loop arc
  const horizontalOffset = radius * 0.5 - 47;  // Translate connection points horizontally
  const gap = 5;  // Small gap between edge and node
  
  // Determine if this is the second loop (should be below)
  const isSecondLoop = id.endsWith('self-2');
  
  // Calculate exit and entry points on the node circumference
  const exitAngle = isSecondLoop ? Math.PI / 3 : -Math.PI / 3;  // 60 degrees
  const entryAngle = isSecondLoop ? Math.PI * 2/3 : -Math.PI * 2/3;  // 120 degrees
  
  // Add horizontal offset to connection points
  const exitX = sourceX + (radius + gap) * Math.cos(exitAngle) + horizontalOffset;
  const exitY = sourceY + (radius + gap) * Math.sin(exitAngle);
  const entryX = sourceX + (radius + gap) * Math.cos(entryAngle) + horizontalOffset;
  const entryY = sourceY + (radius + gap) * Math.sin(entryAngle);
  
  // Create path between circumference points
  const path = `
    M ${exitX} ${exitY}
    A ${arcRadius} ${arcRadius} 0 1 ${isSecondLoop ? 1 : 0} ${entryX} ${entryY}
  `;

  // Position label next to the arc (also offset)
  const labelAngle = (exitAngle + entryAngle) / 2;
  const labelDistance = radius * 1.5;
  const labelX = sourceX + labelDistance * Math.cos(labelAngle) + horizontalOffset;
  const labelY = sourceY + labelDistance * Math.sin(labelAngle);

  return (
    <>
      <BaseEdge 
        path={path}
        style={{
          ...style,
          strokeWidth: 2,
          cursor: 'help',  // Show help cursor on hover
        }}
        markerEnd={markerEnd}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
              fontSize: "16px",
              textAlign: "center",
              width: "max-content",
              background: "transparent",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {label.split("\\n").map((line, i) => (
              <div key={i}>
                <Latex>{"$" + line + "$"}</Latex>
              </div>
            ))}
          </div>
        </EdgeLabelRenderer>
      )}
      {showTooltip && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY - 30}px)`,
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              pointerEvents: "none",
            }}
          >
            {tooltip}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

function generateParabolaCurve(x1: number, y1: number, x2: number, y2: number) {
  // Move curve so not behind node
  y1 -= 20;
  y2 -= 20;

  const innerShift = 10;
  x1 = x1 - innerShift;
  x2 = x2 + innerShift;

  // Calculate the midpoint between the start and end points
  const verticalStretch = 75;
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2 - verticalStretch;

  // Calculate the control point position
  // The control point is offset vertically by controlPointDistance from the midpoint
  const cpX = midX;
  const cpY = midY;

  // Generate the path string
  const path = `M${x1},${y1} Q${cpX},${cpY} ${x2},${y2}`;

  return path;
}
