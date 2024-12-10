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
import { Container } from "./components/container";

type GraphType = {
  level: 1 | 2 | 3;
  group: "red" | "green" | "blue";
};

function FlowComponent() {
  const [currentGraph, setCurrentGraph] = useState<GraphType>({ level: 1, group: "red" });
  const { setViewport } = useReactFlow();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
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

  const getNodeVisibility = (nodeId: string) => {
    if (!isAnimating) return true;

    // Graph 1 is always visible during animation
    if (nodeId === "pack-red") return true;

    // For Graph 2 - always show all nodes in Graph 2
    if (nodeId.startsWith("pack-red-block")) return true;

    // For Graph 3
    const nodeNumber = nodeId.split("-").pop();
    const currentBlock = animationState.graph2Active?.split("-").pop();
    const isInActiveGroup = 
      (currentBlock === "one" && nodeNumber === "1") ||
      (currentBlock === "two" && nodeNumber === "2") ||
      (currentBlock === "three" && nodeNumber === "3");

    return isInActiveGroup;
  };

  const getNodeStyle = (nodeId: string) => {
    if (!isAnimating) {
      return {
        backgroundColor: undefined,
        opacity: 1,
      };
    }

    const isActive = 
      nodeId === animationState.graph1Active ||
      nodeId === animationState.graph2Active ||
      nodeId === animationState.graph3Active;

    // For Graph 2, reduce opacity of inactive nodes but keep them visible
    if (nodeId.startsWith("pack-red-block")) {
      return {
        backgroundColor: isActive ? '#FFEB3B' : '#E0E0E0',
        opacity: isActive ? 1 : 0.6,
      };
    }

    return {
      backgroundColor: isActive ? '#FFEB3B' : '#E0E0E0',
      opacity: isActive ? 1 : 0.6,
    };
  };

  // Initialize all nodes and edges once at component mount
  useEffect(() => {
    const allNodes = [
      ...graph1Nodes,
      ...graph2Nodes,
      ...graph3FirstNodes,
      ...graph3SecondNodes,
      ...graph3ThirdNodes,
    ];
    setNodes(allNodes);
    
    setEdges([
      ...graph1Edges,
      ...graph2Edges,
      ...graph3FirstEdges,
      ...graph3SecondEdges,
      ...graph3ThirdEdges,
    ]);
  }, []); // Only run once at mount

  // Update node styles and visibility during animation
  useEffect(() => {
    if (!nodes.length) return;
    
    setNodes(nodes => 
      nodes.map(node => ({
        ...node,
        hidden: !getNodeVisibility(node.id),
        data: {
          ...node.data,
          style: getNodeStyle(node.id),
        }
      }))
    );
  }, [animationState, isAnimating]);

  const [nodes, setNodes, onNodesChange] = useNodesState(
    graph1Nodes
  );

  const [edges, setEdges] = useState(graph1Edges);

  const getContainerVisibility = (level: number, group?: string) => {
    if (!isAnimating) return true;

    if (level === 1) {
      return animationState.graph1Active !== null;
    }

    if (level === 2) {
      return animationState.graph2Active !== null;
    }

    // For level 3 containers
    if (level === 3 && group) {
      const currentGroup = animationState.graph2Active?.split("-").pop();
      return (
        (group === "one" && currentGroup === "one") ||
        (group === "two" && currentGroup === "two") ||
        (group === "three" && currentGroup === "three")
      );
    }

    return false;
  };

  // Initialize viewport once at mount
  useEffect(() => {
    setViewport({
      x: -400,
      y: -100,
      zoom: 0.35
    }, { duration: 0 });
  }, []); // Empty dependency array means run once at mount

  return (
    <AnimatePresence mode="wait">
      <motion.div style={{ height: "100%", position: "relative" }}>
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
          fitView={false}
          minZoom={0.1}
          maxZoom={1.5}
          zoomOnScroll={true}
          panOnScroll={true}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={true}
          preventScrolling={false}
          zoomOnPinch={true}
          zoomOnDoubleClick={true}
        >
          <Background />
          <Controls />

          {(!isAnimating || getContainerVisibility(1)) && (
            <Container
              x={1225}
              y={-20}
              width={200}
              height={100}
              label="Pack Red Blocks (15s)"
            />
          )}

          {(!isAnimating || getContainerVisibility(2)) && (
            <Container
              x={200}
              y={150}
              width={2300}
              height={150}
              label="Sequential Tasks (5s each)"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "one")) && (
            <Container
              x={50}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block One (5s)"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "two")) && (
            <Container
              x={950}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block Two (5s)"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "three")) && (
            <Container
              x={1850}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block Three (5s)"
            />
          )}
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
