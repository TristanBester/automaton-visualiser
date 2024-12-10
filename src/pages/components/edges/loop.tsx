import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  getSmoothStepPath,
  MarkerType,
} from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

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
  label
}: LoopEdgeProps) {
  const offset = 50;
  const controlOffset = 80;

  // Calculate control points for a more circular loop
  const controlX = sourceX - controlOffset;
  const controlY = sourceY - controlOffset;

  const path = `M ${sourceX} ${sourceY} 
                C ${controlX} ${controlY},
                  ${controlX} ${controlY},
                  ${sourceX} ${sourceY}`;

  const labelX = sourceX - controlOffset;
  const labelY = sourceY - controlOffset - 10;

  return (
    <>
      <BaseEdge id={id} path={path} style={style} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
            fontSize: "12px",
            textAlign: "center",
            width: "max-content",
            background: "white",
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          {label?.split("\\n").map((line, i) => (
            <div key={i}>
              <Latex>{"$" + line + "$"}</Latex>
            </div>
          ))}
        </div>
      </EdgeLabelRenderer>
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
