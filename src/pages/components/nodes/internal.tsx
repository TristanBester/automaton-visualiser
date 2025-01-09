import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { NodeData } from "~/pages/types";

export const InternalNode = memo(({ data }: NodeProps<NodeData>) => {
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
        width: "120px",
        height: "120px",
        border: "2px solid rgba(0, 0, 0, 0.1)",
        backgroundColor: data?.isActive ? data?.style?.backgroundColor : "#fff",
        cursor: "pointer",
        padding: "10px",
        textAlign: "center",
        lineHeight: "1.2",
        ...data?.style,
      }}
    >
      <Handle type="target" position={Position.Left} />
      {data?.label}
      <Handle type="source" position={Position.Right} />
    </div>
  );
});

InternalNode.displayName = "InternalNode";
