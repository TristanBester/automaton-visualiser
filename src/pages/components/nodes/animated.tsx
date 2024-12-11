import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Latex from "react-latex-next";
import { type NodeData } from "~/pages/types";
import { useAnimationContext } from "~/contexts/AnimationContext";

const variants = {
  open: { opacity: 1, x: 0, y: 0 },
  closed: {
    opacity: [0.9, 0.1, 0.5, 0.2],
    x: [0, -100, -50, -100],
    y: [0, -100, -50, -100],
  },
};

export function AnimatedNode({ data, id }: NodeProps<NodeData>) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentAnimation } = useAnimationContext();
  const isActive = data.isActive;

  // Reset animation state when animation changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentAnimation]);

  return (
    <>
      <motion.div
        className={`flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 ${
          isActive ? "bg-blue-200" : "bg-gray-100"
        } shadow-md`}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 3, times: [0, 0.1, 0.2, 1.0] }}
        variants={variants}
      >
        <Latex>$u_0$</Latex>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}> click</button>
      </motion.div>
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Left} />
    </>
  );
}
