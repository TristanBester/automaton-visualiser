import { ReactFlow, Controls, Background, EdgeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodes, nodeTypes } from "./data/nodes";
import { edges, edgeTypes } from "./data/edges";

function Flow() {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes as EdgeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
