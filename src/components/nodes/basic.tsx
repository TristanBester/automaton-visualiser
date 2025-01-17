import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { type CustomNodeProps } from "~/types";
import { LAYOUT } from "~/config";
import { STYLES } from "~/config/styles";
import { motion, type Variants } from "framer-motion";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { cn } from "~/utils";

const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

export function CustomNode({ data }: CustomNodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      Hello
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}> click</button>
    </motion.div>
  );
}

export function InternalNode({ data }: CustomNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        zIndex: 1,
      }}
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
          backgroundColor: data?.isActive
            ? STYLES.COLORS.YELLOW
            : data?.style?.backgroundColor,
          position: "relative",
          zIndex: 1,
        }}
      >
        {data?.label}
      </div>
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </motion.div>
  );
}

export function DecisionNode({ data }: CustomNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: LAYOUT.NODE.DIAMETER,
          height: LAYOUT.NODE.DIAMETER,
          ...LAYOUT.NODE.STYLE,
          ...data?.style,
          borderRadius: "0",
          transform: "rotate(45deg)",
          backgroundColor: data?.isActive
            ? STYLES.COLORS.YELLOW
            : STYLES.COLORS.PURPLE,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>{data?.label}</div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </motion.div>
  );
}
