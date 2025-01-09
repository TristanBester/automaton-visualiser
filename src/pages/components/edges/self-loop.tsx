import { EdgeProps } from "@xyflow/react";
import Latex from "react-latex-next";
import { useState } from "react";

export default function SelfLoopEdge({
  sourceX,
  sourceY,
  style = {},
  markerEnd,
  label,
}: EdgeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate control points for the loop
  const radius = 40;
  const offset = 60;

  // Create the path for a circular loop
  const path = `
    M ${sourceX} ${sourceY}
    C ${sourceX - offset} ${sourceY - offset},
      ${sourceX + offset} ${sourceY - offset},
      ${sourceX} ${sourceY}
  `;

  // Calculate label position
  const labelX = sourceX;
  const labelY = sourceY - radius;

  return (
    <>
      <path
        d={path}
        fill="none"
        stroke={style.stroke || "#333"}
        strokeWidth={style.strokeWidth || 2}
        className="react-flow__edge-path"
        markerEnd="url(#arrow)"
      />
      <foreignObject
        x={labelX - 20}
        y={labelY - 15}
        width={isExpanded ? 80 : 40}
        height={isExpanded ? 60 : 30}
        className="nodrag nopan"
        style={{
          overflow: "visible",
          zIndex: 1000,
          pointerEvents: "all",
        }}
      >
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            textAlign: "center",
            background: "white",
            padding: "2px 5px",
            borderRadius: "4px",
            border: "1px solid #e5e7eb",
            display: "inline-block",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            transition: "all 0.2s ease",
            pointerEvents: "all",
            zIndex: 1000,
          }}
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
      </foreignObject>
    </>
  );
}
