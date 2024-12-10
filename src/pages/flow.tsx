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
import { graph1Nodes, graph2Nodes, graph3FirstNodes, graph3SecondNodes, graph3ThirdNodes, nodeTypes } from "./data/nodes";
import { graph1Edges, graph2Edges, graph3FirstEdges, graph3SecondEdges, graph3ThirdEdges, edgeTypes } from "./data/edges";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationState, getActiveNodesAtTime, redTaskTimings } from "./data/animation";

type GraphType = {
  level: 1 | 2 | 3;
  group: "red" | "green" | "blue";
};

function FlowComponent() {
  const [currentGraph, setCurrentGraph] = useState<GraphType>({ level: 1, group: "red" });
  const { setViewport } = useReactFlow();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>({
    graph1Active: null,
    graph2Active: null,
    graph3Active: null,
    timeElapsed: 0,
  });

  const getNodesForGraph = (graph: GraphType) => {
    if (graph.level === 1) return graph1Nodes;
    if (graph.level === 2) {
      return {
        red: graph2Nodes,
        green: graph2Nodes,
        blue: graph2Nodes,
      }[graph.group];
    }
    return {
      red: graph3FirstNodes,
      green: graph3SecondNodes,
      blue: graph3ThirdNodes,
    }[graph.group];
  };

  const getEdgesForGraph = (graph: GraphType) => {
    if (graph.level === 1) return graph1Edges;
    if (graph.level === 2) {
      return {
        red: graph2Edges,
        green: graph2Edges,
        blue: graph2Edges,
      }[graph.group];
    }
    return {
      red: graph3FirstEdges,
      green: graph3SecondEdges,
      blue: graph3ThirdEdges,
    }[graph.group];
  };

  const startAnimation = () => {
    switchGraph({ level: 1, group: "red" });
    
    setIsAnimating(true);
    let startTime = Date.now();
    const totalDuration = redTaskTimings.duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= totalDuration) {
        setIsAnimating(false);
        setAnimationState({
          graph1Active: null,
          graph2Active: null,
          graph3Active: null,
          timeElapsed: redTaskTimings.duration,
        });
        return;
      }

      const timeInSeconds = elapsed / 1000;
      setAnimationState(getActiveNodesAtTime(timeInSeconds));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const getNodeStyle = (nodeId: string) => {
    const isActive = 
      nodeId === animationState.graph1Active ||
      nodeId === animationState.graph2Active ||
      nodeId === animationState.graph3Active;

    return {
      backgroundColor: isActive ? '#FFEB3B' : undefined,
    };
  };

  const mapNodesToIncludeAnimation = (nodes: typeof graph1Nodes) =>
    nodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        style: getNodeStyle(node.id),
        onClick: () => {}
      }
    }));

  const switchGraph = async (toGraph: GraphType) => {
    await setViewport({ x: 0, y: 0, zoom: 0.5 }, { duration: 700 });
    
    setCurrentGraph(toGraph);
    
    const newNodes = mapNodesToIncludeAnimation(getNodesForGraph(toGraph));
    setNodes(newNodes);
    setEdges(getEdgesForGraph(toGraph));

    setTimeout(() => {
      setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 700 });
    }, 100);
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(
    mapNodesToIncludeAnimation(graph1Nodes)
  );

  const [edges, setEdges] = useState(graph1Edges);

  useEffect(() => {
    const currentNodes = getNodesForGraph(currentGraph);
    setNodes(mapNodesToIncludeAnimation(currentNodes));
  }, [animationState, currentGraph]);

  useEffect(() => {
    const nodes = [
      ...graph1Nodes,
      ...graph2Nodes,
      ...graph3FirstNodes,
      ...graph3SecondNodes,
      ...graph3ThirdNodes,
    ];
    setNodes(mapNodesToIncludeAnimation(nodes));

    setEdges([
      ...graph1Edges,
      ...graph2Edges,
      ...graph3FirstEdges,
      ...graph3SecondEdges,
      ...graph3ThirdEdges,
    ]);

    setTimeout(() => {
      setViewport({ 
        x: -100,  // Shift view left to show all nodes
        y: -50,   // Shift view up slightly
        zoom: 0.3 // Zoom out more to show the wider layout
      }, { 
        duration: 700 
      });
    }, 100);
  }, [animationState]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        style={{ height: "100%", position: "relative" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            className="rounded-md bg-green-500 px-4 py-2 text-white shadow-md hover:bg-green-600"
            onClick={startAnimation}
            disabled={isAnimating}
          >
            {isAnimating ? 'Animating...' : 'Start Animation'}
          </button>
          <div className="rounded-md bg-white px-4 py-2 shadow-md">
            Time: {animationState.timeElapsed.toFixed(1)}s
          </div>
        </div>
        
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-2 text-sm text-gray-500">
          <div>Graph 1 (Top)</div>
          <div>Graph 2 (Bottom Left)</div>
          <div>Graph 3 (Bottom Right)</div>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes as EdgeTypes}
          onNodesChange={onNodesChange}
          fitView
          zoomOnScroll={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
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
