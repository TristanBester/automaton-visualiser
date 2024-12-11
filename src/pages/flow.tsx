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
import { useCallback, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationState, getActiveNodesAtTime, redTaskTimings } from "./data/animation";
import { Container } from "./components/container";
import { LAYOUT, ANIMATION_CONFIG, STYLES, TASK_DESCRIPTIONS, TASK_STATES } from '~/config';
import { SymbolKey } from "./components/symbol-key";
import { ProgressGraph } from "./components/progress-graph";
import { ResizableVideo } from '../components/ResizableVideo';
import { GraphsPanel } from "./components/graphs-panel";

type GraphType = {
  level: 1 | 2 | 3;
  group: "red" | "green" | "blue";
};

// Add new type for task descriptions
type TaskDescription = {
  [key: string]: string;
};

// Add task descriptions mapping
const taskDescriptions: TaskDescription = {
  "above-red-1": "Moving above red block 1",
  "grasp-red-1": "Grasping red block 1",
  "deliver-red-1": "Delivering red block 1",
  "grasp-red-two-1": "Adjusting grip on red block 1",
  "block-red-1": "Placing red block 1",
  
  "above-red-2": "Moving above red block 2",
  "grasp-red-2": "Grasping red block 2",
  "deliver-red-2": "Delivering red block 2",
  "grasp-red-two-2": "Adjusting grip on red block 2",
  "block-red-2": "Placing red block 2",
  
  "above-red-3": "Moving above red block 3",
  "grasp-red-3": "Grasping red block 3",
  "deliver-red-3": "Delivering red block 3",
  "grasp-red-two-3": "Adjusting grip on red block 3",
  "block-red-3": "Placing red block 3",
  
  "above-green-1": "Moving above green block 1",
  "grasp-green-1": "Grasping green block 1",
  "deliver-green-1": "Delivering green block 1",
  "grasp-green-two-1": "Adjusting grip on green block 1",
  "block-green-1": "Placing green block 1",
  
  "above-green-2": "Moving above green block 2",
  "grasp-green-2": "Grasping green block 2",
  "deliver-green-2": "Delivering green block 2",
  "grasp-green-two-2": "Adjusting grip on green block 2",
  "block-green-2": "Placing green block 2",
  
  "above-green-3": "Moving above green block 3",
  "grasp-green-3": "Grasping green block 3",
  "deliver-green-3": "Delivering green block 3",
  "grasp-green-two-3": "Adjusting grip on green block 3",
  "block-green-3": "Placing green block 3",
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
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedVideo, setSelectedVideo] = useState('/videos/1_1_1.mp4');
  const videos = [
    { name: 'Video 1', path: '/videos/1_1_1.mp4' },
    { name: 'Video 2', path: '/videos/3_3_3.mp4' }
  ];

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

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Error loading video:', e);
    console.error('Video source:', e.currentTarget.src);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
    let startTime = Date.now();
    const totalDuration = ANIMATION_CONFIG.DURATION.TOTAL;

    setViewport(LAYOUT.VIEWPORTS.RED, { duration: LAYOUT.TRANSITION_DURATION });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= totalDuration) {
        stopAnimation();
        return;
      }

      const timeInSeconds = elapsed / 1000;
      const newState = getActiveNodesAtTime(timeInSeconds);

      // Check if we're transitioning from red to green phase
      if (!animationState.isGreenPhase && newState.isGreenPhase) {
        setViewport(LAYOUT.VIEWPORTS.GREEN, { duration: LAYOUT.TRANSITION_DURATION });
      }

      setAnimationState(newState);
      const frameId = requestAnimationFrame(animate);
      setAnimationFrameId(frameId);
    };

    const frameId = requestAnimationFrame(animate);
    setAnimationFrameId(frameId);
  };

  const stopAnimation = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // Cancel the animation frame if it exists
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
    }

    setIsAnimating(false);
    setAnimationState({
      graph1Active: null,
      graph2Active: null,
      graph3Active: null,
      timeElapsed: 0,
      isGreenPhase: false
    });
    // Reset viewport to initial position
    setViewport(LAYOUT.VIEWPORTS.RED, { duration: LAYOUT.TRANSITION_DURATION });
  };

  // Clean up animation frame on component unmount
  useEffect(() => {
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationFrameId]);

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
    if (!isAnimating) return STYLES.NODES.DEFAULT;

    // For Graph 1 nodes
    if (nodeId === animationState.graph1Active) {
      return STYLES.NODES.ACTIVE;
    }

    // For Graph 2 nodes
    if (nodeId === animationState.graph2Active) {
      return STYLES.NODES.ACTIVE;
    }

    // For Graph 3 nodes
    if (nodeId === animationState.graph3Active) {
      return STYLES.NODES.ACTIVE;
    }

    // All other nodes should be inactive
    return STYLES.NODES.INACTIVE;
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
      x: LAYOUT.VIEWPORTS.INITIAL.x,
      y: LAYOUT.VIEWPORTS.INITIAL.y,
      zoom: LAYOUT.VIEWPORTS.INITIAL.zoom
    }, { duration: 0 });
  }, []);

  // Fix nodeTypes type error
  const customNodeTypes = nodeTypes as unknown as NodeTypes;

  // Add getCurrentTaskDescription helper
  const getCurrentTaskDescription = () => {
    if (!isAnimating) return TASK_STATES.READY;
    
    const activeTask = animationState.graph3Active;
    if (!activeTask) {
      return animationState.isGreenPhase ? 
        TASK_STATES.PROCESSING_GREEN : 
        TASK_STATES.PROCESSING_RED;
    }
    
    return TASK_DESCRIPTIONS[activeTask] || TASK_STATES.DEFAULT;
  };

  // Calculate progress percentage
  const progress = (animationState.timeElapsed / (ANIMATION_CONFIG.DURATION.TOTAL / 1000)) * 100;

  return (
    <AnimatePresence mode="wait">
      <motion.div style={{ height: "100%", position: "relative" }}>
        {/* Add task description UI element */}
        <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 transform">
          <motion.div 
            className="rounded-lg bg-white px-6 py-3 text-lg font-semibold shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {getCurrentTaskDescription()}
          </motion.div>
        </div>

        <ResizableVideo
          selectedVideo={selectedVideo}
          onVideoChange={setSelectedVideo}
          videos={videos}
          videoRef={videoRef}
          onError={handleVideoError}
        />

        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            className="rounded-md bg-green-500 px-4 py-2 text-white shadow-md hover:bg-green-600 disabled:opacity-50"
            onClick={startAnimation}
            disabled={isAnimating}
          >
            {isAnimating ? 'Animating...' : 'Start Animation'}
          </button>
          {isAnimating && (
            <button
              className="rounded-md bg-red-500 px-4 py-2 text-white shadow-md hover:bg-red-600"
              onClick={stopAnimation}
            >
              Stop
            </button>
          )}
          <div className="rounded-md bg-white px-4 py-2 shadow-md">
            Time: {animationState.timeElapsed.toFixed(1)}s
          </div>
        </div>
        
        <GraphsPanel 
          animationState={animationState}
          isAnimating={isAnimating}
        />

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
          {isAnimating && <ProgressGraph progress={progress} />}

          {/* Level 1 Containers */}
          {(!isAnimating || getContainerVisibility(1, undefined, STYLES.COLORS.RED)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_1.RED.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_1}
              width={LAYOUT.CONTAINER.LEVEL_1.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Red Blocks (15s)"
              color={STYLES.COLORS.RED}
            />
          )}
          {(!isAnimating || getContainerVisibility(1, undefined, STYLES.COLORS.GREEN)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_1.GREEN.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_1}
              width={LAYOUT.CONTAINER.LEVEL_1.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Green Blocks"
              color={STYLES.COLORS.GREEN}
            />
          )}

          {/* Level 2 Containers */}
          {(!isAnimating || getContainerVisibility(2, undefined, STYLES.COLORS.RED)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_2.RED.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_2}
              width={LAYOUT.CONTAINER.LEVEL_2.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Red Sequential Tasks (5s each)"
              color={STYLES.COLORS.RED}
            />
          )}

          {(!isAnimating || getContainerVisibility(2, undefined, STYLES.COLORS.GREEN)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_2.GREEN.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_2}
              width={LAYOUT.CONTAINER.LEVEL_2.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Green Sequential Tasks (5s each)"
              color={STYLES.COLORS.GREEN}
            />
          )}

          {/* Level 3 Containers */}
          {(!isAnimating || getContainerVisibility(3, "one", STYLES.COLORS.RED)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.RED.FIRST.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Red Block One (5s)"
              color={STYLES.COLORS.RED}
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "two", STYLES.COLORS.RED)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.RED.SECOND.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Red Block Two (5s)"
              color={STYLES.COLORS.RED}
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "three", STYLES.COLORS.RED)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.RED.THIRD.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Red Block Three (5s)"
              color={STYLES.COLORS.RED}
            />
          )}

          {/* Level 3 Green Containers */}
          {(!isAnimating || getContainerVisibility(3, "one", STYLES.COLORS.GREEN)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.GREEN.FIRST.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Green Block One (5s)"
              color={STYLES.COLORS.GREEN}
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "two", STYLES.COLORS.GREEN)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.GREEN.SECOND.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Green Block Two (5s)"
              color={STYLES.COLORS.GREEN}
            />
          )}

          {(!isAnimating || getContainerVisibility(3, "three", STYLES.COLORS.GREEN)) && (
            <Container
              x={LAYOUT.CONTAINER.LEVEL_3.GREEN.THIRD.X}
              y={LAYOUT.CONTAINER_Y.LEVEL_3}
              width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
              height={LAYOUT.CONTAINER.HEIGHT}
              label="Pack Green Block Three (5s)"
              color={STYLES.COLORS.GREEN}
            />
          )}
        </ReactFlow>

        <SymbolKey />
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
