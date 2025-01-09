import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  MarkerType,
} from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";

export default function SelfLoopEdge({
  id,
  sourceX,
  sourceY,
  style = {},
  markerEnd,
  label,
}: EdgeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Generate the self-loop path
  const path = generateSelfLoopPath(sourceX, sourceY);

  // Calculate label position
  const labelX = sourceX;
  const labelY = sourceY - 90;

  // Define custom marker end
  const customMarkerEnd = {
    type: MarkerType.ArrowClosed,
    color: style.stroke || "#333",
    width: 20,
    height: 20,
    strokeWidth: 2,
  };

  return (
    <>
      <BaseEdge
        path={path}
        style={{
          ...style,
          strokeWidth: 2,
        }}
        markerEnd={`url(#${MarkerType.ArrowClosed})`}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
            background: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Latex>{`$${label}$`}</Latex>
          {isExpanded && (
            <div
              style={{
                marginTop: "4px",
                paddingTop: "4px",
                borderTop: "1px solid #e5e7eb",
                whiteSpace: "nowrap",
              }}
            >
              <Latex>{`$f_2(x) = x^2$`}</Latex>
            </div>
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

function generateSelfLoopPath(x: number, y: number) {
  // Adjust these values to control the loop shape
  const nodeRadius = 60;
  const verticalOffset = 80;
  const horizontalOffset = 60;
  const bottomCurveOffset = 10; // Controls how much the bottom edges curve inward

  // Shift the entire loop slightly to the left
  const horizontalShift = 7;
  x -= horizontalShift;

  // Calculate handle positions
  const leftX = x - nodeRadius;
  const rightX = x + nodeRadius;

  // Move start points up slightly to avoid node overlap
  y -= 20;

  // Calculate control points for a smooth loop
  const cp1x = rightX + bottomCurveOffset; // Curve start point inward
  const cp1y = y;
  const cp2x = x + horizontalOffset;
  const cp2y = y - verticalOffset;
  const cp3x = x;
  const cp3y = y - verticalOffset;
  const cp4x = x - horizontalOffset;
  const cp4y = y - verticalOffset;
  const cp5x = leftX - bottomCurveOffset; // Curve end point inward
  const cp5y = y;

  return `
    M ${rightX},${y}
    C ${cp1x},${cp1y} ${cp2x},${cp2y} ${cp3x},${cp3y}
    C ${cp4x},${cp4y} ${cp5x},${cp5y} ${leftX},${y}
  `;
}
