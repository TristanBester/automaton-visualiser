import { useCallback, useState } from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { cn } from "~/utils";
import { motion } from "framer-motion";
import { NodeData } from "~/pages/types";

export function CustomNode(props: NodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={props.data.isOpen ? "start" : "end"}
      transition={{ duration: 3 }}
      variants={props.data.variants}
    >
      Hello
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}> click</button>
    </motion.div>
  );
}

export function InternalNode({ data }: NodeProps<NodeData>) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 shadow-md transition-all duration-300`}
        style={{ 
          backgroundColor: data.style?.backgroundColor || data.color || '#f3f4f6',
          cursor: 'pointer',
          transform: data.style?.backgroundColor ? 'scale(1.1)' : 'scale(1)',
          boxShadow: data.style?.backgroundColor ? '0 0 15px rgba(255, 235, 59, 0.5)' : undefined,
        }}
        onClick={data.onClick}
      >
        <Latex>{`$${data.label}$`}</Latex>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Left} />
    </motion.div>
  );
}

export function StartNode() {}

export function TerminalNode() {
  return (
    <>
      <div
        className={`h-4 w-4 rounded-full border border-gray-300 bg-black shadow-md`}
      />
      <Handle type="target" position={Position.Left} />
    </>
  );
}
