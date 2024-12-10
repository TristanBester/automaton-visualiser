import { useCallback, useState } from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { cn } from "~/utils";
import { motion } from "framer-motion";
import { NodeData } from "~/pages/types";
import { LAYOUT } from "~/config";
import { STYLES } from "~/config/styles";

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
  const isActive = data?.style?.backgroundColor === STYLES.NODES.ACTIVE.backgroundColor;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          width: LAYOUT.NODE.DIAMETER,
          height: LAYOUT.NODE.DIAMETER,
          ...LAYOUT.NODE.STYLE,
          ...data?.style,
          ...(isActive ? LAYOUT.NODE.ACTIVE : {}),
        }}
      >
        <Latex>{"$" + data?.label + "$"}</Latex>
      </div>
      <Handle type="source" position={Position.Right} />
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
