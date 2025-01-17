import { EdgeProps } from "@xyflow/react";
import { useCallback } from "react";
import Latex from "react-latex-next";

export default function SelfLoopEdge({
  id,
  sourceX,
  sourceY,
  style = {},
  markerEnd,
  label,
  labelStyle,
}: EdgeProps) {
  const radius = 100;
  const centerX = sourceX;
  const centerY = sourceY - radius;

  const edgePath = `M ${sourceX-60} ${sourceY} 
    C ${sourceX - radius * 2.5} ${sourceY - radius - 25}, 
      ${sourceX + radius * 2.5} ${sourceY - radius - 25}, 
      ${sourceX+60} ${sourceY}`;

  const getLabelPosition = useCallback(() => {
    return { x: centerX, y: centerY - radius/4 };
  }, [centerX, centerY, radius]);

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