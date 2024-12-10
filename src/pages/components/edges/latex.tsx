import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  MarkerType,
} from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

type LatexEdgeProps = {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  style: React.CSSProperties;
  markerEnd: any;
  label: string;
};

export default function LatexEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style,
  markerEnd,
  label,
}: LatexEdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    curvature: 0,
  });

  const isDownwardEdge = targetY > sourceY;
  const labelOffset = isDownwardEdge ? -20 : -40;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
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
    </>
  );
}
