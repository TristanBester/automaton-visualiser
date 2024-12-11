import { useCallback, useState } from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { cn } from "~/utils";
import { motion } from "framer-motion";
import { NodeData } from "~/pages/types";
import { LAYOUT } from "~/config";
import { STYLES } from "~/config/styles";

export function CustomNode({ data }: NodeProps<NodeData>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={data.isOpen ? "start" : "end"}
      transition={{ duration: 3 }}
      variants={data.variants}
    >
      Hello
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}> click</button>
    </motion.div>
  );
}

export function InternalNode({ data }: NodeProps<NodeData>) {
  const isActive =
    data?.style?.backgroundColor === STYLES.NODES.ACTIVE.backgroundColor;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
          ...data?.style,
          ...(isActive ? LAYOUT.NODE.ACTIVE : {}),
        }}
      >
        {data?.label}
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </motion.div>
  );
}

export function DecisionNode({ data }: NodeProps<NodeData>) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "relative" }}
    >
      <div
        style={{
          width: LAYOUT.NODE.DIAMETER,
          height: LAYOUT.NODE.DIAMETER,
          ...LAYOUT.NODE.STYLE,
          ...data?.style,
          borderRadius: "0",
          transform: "rotate(45deg)",
        }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>{data?.label}</div>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </motion.div>
  );
}
