import { EdgeProps, getBezierPath } from "@xyflow/react";
import { useCallback } from "react";
import Latex from "react-latex-next";

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
  labelStyle,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const getLabelPosition = useCallback(() => {
    const midX = (sourceX + targetX) / 2;
    const midY = (sourceY + targetY) / 2;
    return { x: midX, y: midY };
  }, [sourceX, sourceY, targetX, targetY]);

  const labelPos = getLabelPosition();

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {label && (
        <foreignObject
          width={200}
          height={100}
          x={labelPos.x - 100}
          y={labelPos.y - 50}
          className="edge-foreignobject"
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <div
            style={{
              ...labelStyle,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            {typeof label === "string" && <Latex>{`$${label}$`}</Latex>}
          </div>
        </foreignObject>
      )}
    </>
  );
} 