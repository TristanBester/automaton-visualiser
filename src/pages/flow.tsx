import {
  ReactFlow,
  Controls,
  Background,
  EdgeTypes,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes, nodeTypes } from "./data/nodes";
import { edges, edgeTypes } from "./data/edges";
import { useCallback, useEffect, useState } from "react";

function Flow() {
  const [isFirstState, setIsFirstState] = useState(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      color: node.id === "u0" ? "#ff0000" : "#0000ff", // Initial colors
    }
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstState(prev => !prev);
      setNodes(nds => 
        nds.map(node => ({
          ...node,
          data: {
            ...node.data,
            color: node.id === "u0" 
              ? (isFirstState ? "#0000ff" : "#ff0000")  // u0: red -> blue
              : (isFirstState ? "#ff0000" : "#0000ff")  // u1: blue -> red
          }
        }))
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [isFirstState, setNodes]);

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes as EdgeTypes}
        onNodesChange={onNodesChange}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
