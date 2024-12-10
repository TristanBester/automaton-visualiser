import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  MarkerType,
} from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { LAYOUT } from "~/config";

type LatexEdgeProps = {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  style: React.CSSProperties;
  markerEnd: any;
  label?: string;
};

export default function LatexEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
  markerEnd,
  label = "",
}: LatexEdgeProps) {
  const radius = LAYOUT.NODE.DIAMETER / 2;
  const gap = 5; // Small gap between edge and node

  // Calculate angle between nodes
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const angle = Math.atan2(dy, dx);

  // Find points on circumference of source and target nodes
  const startX = sourceX + (radius + gap) * Math.cos(angle);
  const startY = sourceY + (radius + gap) * Math.sin(angle);
  const endX = targetX - (radius + gap) * Math.cos(angle);
  const endY = targetY - (radius + gap) * Math.sin(angle);

  // Calculate label position
  const labelX = (startX + endX) / 2;
  const labelY = (startY + endY) / 2;
  const isDownwardEdge = targetY > sourceY;
  const labelOffset = isDownwardEdge ? -20 : -40;

  // Create straight path between circumference points
  const edgePath = `M ${startX} ${startY} L ${endX} ${endY}`;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, ${labelOffset}px) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
              fontSize: "12px",
              textAlign: "center",
              width: "max-content",
              background: "white",
              padding: "2px 4px",
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
    </>
  );
}
