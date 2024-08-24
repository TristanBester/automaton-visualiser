import { useCallback, useState } from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { cn } from "~/utils";
import { motion } from "framer-motion";

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

export function InternalNode() {
  return (
    <>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md`}
      >
        <Latex>$u_0$</Latex>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Left} />
    </>
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
