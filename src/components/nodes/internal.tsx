import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { type CustomNodeProps } from "~/types";
import { LAYOUT } from "~/config";

export const InternalNode = memo(({ data }: CustomNodeProps) => {
  const radius = LAYOUT.NODE.DIAMETER / 2;
  const backgroundColor = data.isActive ? data.style?.backgroundColor : "#fff";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: 600,
        color: "#333",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
        borderRadius: "50%",
        width: `${LAYOUT.NODE.DIAMETER}px`,
        height: `${LAYOUT.NODE.DIAMETER}px`,
        border: "2px solid rgba(0, 0, 0, 0.1)",
        zIndex: 1,
        position: "relative",
        backgroundColor,
        cursor: "pointer",
        padding: "10px",
        textAlign: "center",
        lineHeight: "1.2",
        ...(data.style || {}),
      }}
    >
      <Handle type="target" position={Position.Left} style={{ left: -4 }} />
      {data.label}
      <Handle type="source" position={Position.Right} style={{ right: -4 }} />
    </div>
  );
});

InternalNode.displayName = "InternalNode";
