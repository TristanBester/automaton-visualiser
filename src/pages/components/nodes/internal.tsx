import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { NodeData } from "~/pages/types";

export const InternalNode = memo(({ data }: NodeProps<NodeData>) => {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "3px",
        width: 150,
        fontSize: "12px",
        color: "#222",
        textAlign: "center",
        borderWidth: "1px",
        borderStyle: "solid",
        backgroundColor: data.color || "#fff",
        borderColor: "#222",
        ...data.style,
      }}
    >
      <Handle type="target" position={Position.Left} />
      {data.label}
      <Handle type="source" position={Position.Right} />
    </div>
  );
});

InternalNode.displayName = "InternalNode";
