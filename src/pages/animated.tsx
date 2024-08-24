import { Handle, Position } from "@xyflow/react"
import { motion } from "framer-motion"
import React, { useState } from "react"
import Latex from "react-latex-next"


// export default function AnimatedThing() {
//     return (
//         <motion.div
//             initial={{ x: -100 }}
//             animate={{ x: 100, backgroundColor: "#000" }}
//             transition={{ duration: 5 }}
//         >
//             <h1>Animated Thing</h1>
//         </motion.div>
//     )
// }


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.5, x: -100},
  }

export function AnimatedNode() {

    const [isOpen, setIsOpen] = useState(false)

    
    return (
        <>
            <motion.div
                // initial={{ x: -1000 }}
                // animate={{ x: 0, backgroundColor: "#00FFFF" }}
                // transition={{ duration: 5 }}
                className={`w-16 h-16 rounded-full bg-gray-100 shadow-md border border-gray-300 flex items-center justify-center`}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <Latex>$u_0$</Latex>
                <button onClick={() => setIsOpen(isOpen => !isOpen)}> click</button>
            </motion.div>
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="target" position={Position.Left} />
        </>
    )
}
