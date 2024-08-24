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
import { useEffect, useState } from "react";

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [isInitialState, setIsInitialState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("doing the thing");
      // @ts-ignore
      setNodes((prev) => {
        return prev.map((node) => {
          if (node.id === "1") {
            return {
              ...node,
              data: {
                ...node.data,
                isOpen: !node.data.isOpen,
              },
            };
          }
          return node;
        });
      });
    }, 3000);
  }, []);

  const handleChange = () => {
    // @ts-ignore
    setNodes((prev) => {
      return prev.map((node) => {
        if (node.id === "1") {
          return {
            ...node,
            data: {
              ...node.data,
              isOpen: !node.data.isOpen,
            },
          };
        }
        return node;
      });
    });
  };

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes as EdgeTypes}
      >
        <Background />
        <button className="absolute left-0 top-0 z-10" onClick={handleChange}>
          Log nodes
        </button>
      </ReactFlow>
    </div>
  );
}

export default Flow;
