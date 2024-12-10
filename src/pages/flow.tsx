import {
  ReactFlow,
  Controls,
  Background,
  EdgeTypes,
  useNodesState,
  useReactFlow,
  ReactFlowProvider,
  NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { graph1Nodes, graph2Nodes, graph2GreenNodes, graph3FirstNodes, graph3SecondNodes, graph3ThirdNodes, graph3GreenFirstNodes, graph3GreenSecondNodes, graph3GreenThirdNodes, nodeTypes } from "./data/nodes";
import { graph1Edges, graph2Edges, graph2GreenEdges, graph3FirstEdges, graph3SecondEdges, graph3ThirdEdges, graph3GreenFirstEdges, graph3GreenSecondEdges, graph3GreenThirdEdges, edgeTypes } from "./data/edges";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationState, getActiveNodesAtTime, redTaskTimings } from "./data/animation";
import { Container } from "./components/container";
import { LAYOUT } from "./constants";

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
    isGreenPhase: false
  });

  const getNodesForGraph = (graph: GraphType) => {
    if (graph.level === 1) return graph1Nodes;
    if (graph.level === 2) {
      return {
        red: graph2Nodes,
        green: graph2GreenNodes,
        blue: graph2Nodes,
      }[graph.group];
    }
    return {
      red: graph3FirstNodes,
      green: graph3GreenFirstNodes,
      blue: graph3ThirdNodes,
    }[graph.group];
  };

  const getEdgesForGraph = (graph: GraphType) => {
    if (graph.level === 1) return graph1Edges;
    if (graph.level === 2) {
      return {
        red: graph2Edges,
        green: graph2GreenEdges,
        blue: graph2Edges,
      }[graph.group];
    }
    return {
      red: graph3FirstEdges,
      green: graph3GreenFirstEdges,
      blue: graph3ThirdEdges,
    }[graph.group];
  };

  const startAnimation = () => {
    setIsAnimating(true);
    let startTime = Date.now();
    const totalDuration = redTaskTimings.duration * 1000;

    // Set initial viewport for red phase
    setViewport(LAYOUT.VIEWPORTS.RED, { duration: LAYOUT.TRANSITION_DURATION });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= totalDuration) {
        setIsAnimating(false);
        setAnimationState({
          graph1Active: null,
          graph2Active: null,
          graph3Active: null,
          timeElapsed: redTaskTimings.duration,
          isGreenPhase: false
        });
        return;
      }

      const timeInSeconds = elapsed / 1000;
      const newState = getActiveNodesAtTime(timeInSeconds);

      // Check if we're transitioning from red to green phase
      if (!animationState.isGreenPhase && newState.isGreenPhase) {
        setViewport(LAYOUT.VIEWPORTS.GREEN, { duration: LAYOUT.TRANSITION_DURATION });
      }

      setAnimationState(newState);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const getNodeVisibility = (nodeId: string) => {
    if (!isAnimating) return true;

    // Graph 1 is always visible
    if (nodeId === "pack-red" || nodeId === "pack-green") {
      return true;
    }

    const isGreenNode = nodeId.includes("green");
    const isRedNode = nodeId.includes("red");

    // Hide green nodes during red phase and vice versa (except for layer 1)
    if (animationState.isGreenPhase && isRedNode) return false;
    if (!animationState.isGreenPhase && isGreenNode) return false;

    // For Graph 2 - always show all nodes in the active phase
    if (nodeId.startsWith("pack-red-block") || nodeId.startsWith("pack-green-block")) {
      return true;
    }

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
      ...graph2GreenNodes,
      ...graph3FirstNodes,
      ...graph3SecondNodes,
      ...graph3ThirdNodes,
      ...graph3GreenFirstNodes,
      ...graph3GreenSecondNodes,
      ...graph3GreenThirdNodes,
    ];
    setNodes(allNodes);
    
    setEdges([
      ...graph1Edges,
      ...graph2Edges,
      ...graph2GreenEdges,
      ...graph3FirstEdges,
      ...graph3SecondEdges,
      ...graph3ThirdEdges,
      ...graph3GreenFirstEdges,
      ...graph3GreenSecondEdges,
      ...graph3GreenThirdEdges,
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

  const getContainerVisibility = (level: number, group?: string, color?: string) => {
    if (!isAnimating) return true;

    // Level 1 containers are always visible
    if (level === 1) return true;

    // During red phase, hide green containers and vice versa (except for level 1)
    const isGreenContainer = color === "#90EE90";
    const isRedContainer = color === "#ff9999";
    
    if (animationState.isGreenPhase && isRedContainer) return false;
    if (!animationState.isGreenPhase && isGreenContainer) return false;

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
      x: 100,
      y: 300,
      zoom: 0.5
    }, { duration: 0 });
  }, []);

  // Fix nodeTypes type error
  const customNodeTypes = nodeTypes as unknown as NodeTypes;

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
          nodeTypes={customNodeTypes}
          edgeTypes={edgeTypes as EdgeTypes}
          onNodesChange={onNodesChange}
          fitView={false}
          minZoom={0.1}
          maxZoom={1.5}
          zoomOnScroll={!isAnimating}
          panOnScroll={!isAnimating}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={!isAnimating}
          preventScrolling={isAnimating}
          zoomOnPinch={!isAnimating}
          zoomOnDoubleClick={!isAnimating}
        >
          <Background />
          <Controls />

          {/* Level 1 Containers */}
          {(!isAnimating || getContainerVisibility(1, undefined, "#ff9999")) && (
            <Container
              x={LAYOUT.BASE_X + 630}
              y={LAYOUT.BASE_Y}
              width={LAYOUT.CONTAINER_WIDTH}
              height={LAYOUT.CONTAINER_HEIGHT}
              label="Pack Red Blocks (15s)"
              color="#ff9999"
            />
          )}
          {(!isAnimating || getContainerVisibility(1, undefined, "#90EE90")) && (
            <Container
              x={LAYOUT.BASE_X + 3380}
              y={LAYOUT.BASE_Y}
              width={LAYOUT.CONTAINER_WIDTH}
              height={LAYOUT.CONTAINER_HEIGHT}
              label="Pack Green Blocks"
              color="#90EE90"
            />
          )}

          {/* Level 2 Containers */}
          {(!isAnimating || getContainerVisibility(2, undefined, "#ff9999")) && (
            <Container
              x={LAYOUT.BASE_X - 100}
              y={150}
              width={1800}
              height={150}
              label="Red Sequential Tasks (5s each)"
              color="#ff9999"
            />
          )}
          {(!isAnimating || getContainerVisibility(2, undefined, "#90EE90")) && (
            <Container
              x={LAYOUT.BASE_X + LAYOUT.GREEN_SHIFT - 100}
              y={150}
              width={1800}
              height={150}
              label="Green Sequential Tasks (5s each)"
              color="#90EE90"
            />
          )}

          {/* Level 3 Red Containers */}
          {(!isAnimating || getContainerVisibility(3, "one", "#ff9999")) && (
            <Container
              x={50}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block One (5s)"
              color="#ff9999"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "two", "#ff9999")) && (
            <Container
              x={950}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block Two (5s)"
              color="#ff9999"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "three", "#ff9999")) && (
            <Container
              x={1850}
              y={350}
              width={750}
              height={150}
              label="Pack Red Block Three (5s)"
              color="#ff9999"
            />
          )}

          {/* Level 3 Green Containers */}
          {(!isAnimating || getContainerVisibility(3, "one", "#90EE90")) && (
            <Container
              x={LAYOUT.BASE_X + LAYOUT.GREEN_SHIFT - 550}
              y={350}
              width={750}
              height={150}
              label="Pack Green Block One (5s)"
              color="#90EE90"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "two", "#90EE90")) && (
            <Container
              x={LAYOUT.BASE_X + LAYOUT.GREEN_SHIFT + 350}
              y={350}
              width={750}
              height={150}
              label="Pack Green Block Two (5s)"
              color="#90EE90"
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "three", "#90EE90")) && (
            <Container
              x={LAYOUT.BASE_X + LAYOUT.GREEN_SHIFT + 1250}
              y={350}
              width={750}
              height={150}
              label="Pack Green Block Three (5s)"
              color="#90EE90"
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
