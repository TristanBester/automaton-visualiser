import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";
import Latex from "react-latex-next";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.5,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      {label && (
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
      )}
    </>
  );
}
