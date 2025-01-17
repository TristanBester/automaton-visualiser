import { EdgeProps, getBezierPath } from "@xyflow/react";
import { useCallback } from "react";
import Latex from "react-latex-next";

export default function LatexEdge({
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
    
    // Calculate the angle of the line between source and target
    const angle = Math.atan2(targetY - sourceY, targetX - sourceX);
    
    // Offset perpendicular to the edge line
    const offset = 40; // pixels to offset the label
    const offsetX = -Math.sin(angle) * offset;
    const offsetY = Math.cos(angle) * offset;

    return { x: midX + offsetX, y: midY + offsetY };
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