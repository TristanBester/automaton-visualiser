import { Handle, Position } from "@xyflow/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Latex from "react-latex-next";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.5, x: -100 },
};

export function AnimatedNode() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        // initial={{ x: -1000 }}
        // animate={{ x: 0, backgroundColor: "#00FFFF" }}
        // transition={{ duration: 5 }}
        className={`flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-gray-100 shadow-md`}
        animate={isOpen ? "open" : "closed"}
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
