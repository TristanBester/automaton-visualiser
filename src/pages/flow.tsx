import {
  ReactFlow,
  Controls,
  Background,
  EdgeTypes,
  useNodesState,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes, alternativeNodes, nodeTypes } from "./data/nodes";
import { initialEdges, alternativeEdges, edgeTypes } from "./data/edges";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FlowComponent() {
  const [isFirstState, setIsFirstState] = useState(true);
  const [showAlternative, setShowAlternative] = useState(false);
  const { setViewport } = useReactFlow();

  const switchGraph = async (toAlternative: boolean) => {
    // Fade out current graph
    await setViewport({ x: 0, y: 0, zoom: 0.5 }, { duration: 700 });
    
    // Switch graphs
    setShowAlternative(toAlternative);
    if (toAlternative) {
      setNodes(alternativeNodes.map(node => ({
        ...node,
        data: {
          ...node.data,
          color: "#ff0000",
          onClick: () => {} // Empty click handler for u3
        }
      })));
      setEdges(alternativeEdges);
    } else {
      setNodes(initialNodes.map(node => ({
        ...node,
        data: {
          ...node.data,
          color: node.id === "u0" ? "#ff0000" : "#0000ff",
          onClick: () => node.id === "u0" && switchGraph(true)
        }
      })));
      setEdges(initialEdges);
    }

    // Fade in new graph
    setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 700 });
    }, 100);
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      color: node.id === "u0" ? "#ff0000" : "#0000ff",
      onClick: () => node.id === "u0" && switchGraph(true)
    }
  })));

  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    if (!showAlternative) {
      const interval = setInterval(() => {
        setIsFirstState(prev => !prev);
        setNodes(nds => 
          nds.map(node => ({
            ...node,
            data: {
              ...node.data,
              color: node.id === "u0" 
                ? (isFirstState ? "#0000ff" : "#ff0000")
                : (isFirstState ? "#ff0000" : "#0000ff")
            }
          }))
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isFirstState, setNodes, showAlternative]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        style={{ height: "100%", position: "relative" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {showAlternative && (
          <motion.button
            className="absolute left-4 top-4 z-10 rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
            onClick={() => switchGraph(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Back
          </motion.button>
        )}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes as EdgeTypes}
          onNodesChange={onNodesChange}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Flow() {
  return (
    <ReactFlowProvider>
      <FlowComponent />
    </ReactFlowProvider>
  );
}
