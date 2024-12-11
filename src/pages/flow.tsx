import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useReactFlow,
  ReactFlowProvider,
  type Edge,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LAYOUT, STYLES } from "~/config";
import { SymbolKey } from "./components/symbol-key";
import { ResizableVideo } from "../components/ResizableVideo";
import { GraphsPanel } from "./components/graphs-panel";
import {
  decisionNode,
  abstractNodes,
  detailedNodesRed,
  detailedNodesGreen,
  detailedNodesBlue,
} from "~/data/nodes";
import { edgeTypes } from "~/data/edge-types";
import { nodeTypes } from "~/data/node-types";
import { GraphId } from "~/pages/types";
import { ProgressGraph } from "./components/progress-graph";
import { ABSTRACT_NODES } from "~/data/animations";
import { AnimationSelector } from "./components/AnimationSelector";
import { AnimationProvider } from "~/contexts/AnimationContext";
import { useAnimationContext } from "~/contexts/AnimationContext";
import { type AnimationState } from "~/pages/types";

function FlowComponent() {
  const { setViewport } = useReactFlow();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedVideo, setSelectedVideo] = useState("/videos/1_1_1.mp4");
  const videos = useMemo(
    () => [
      { name: "1-1-1 Video", path: "/videos/1_1_1.mp4" },
      { name: "3-3-3 Video", path: "/videos/3_3_3.mp4" },
    ],
    [],
  );

  // UI element visibility state
  const [showVideo, setShowVideo] = useState(false);
  const [showSymbolKey, setShowSymbolKey] = useState(false);
  const [showGraphsPanel, setShowGraphsPanel] = useState(false);

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) => {
    console.error("Error loading video:", e);
    console.error("Video source:", e.currentTarget.src);
  };

  // Add back the selectedGraphId state
  const [selectedGraphId, setSelectedGraphId] = useState<GraphId>("1-1-1");

  // Initialize nodes and edges with a useEffect to handle position updates
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Update the useEffect to include detailed nodes
  useEffect(() => {
    setNodes([
      decisionNode,
      ...abstractNodes,
      ...detailedNodesRed,
      ...detailedNodesGreen,
      ...detailedNodesBlue,
    ]);
  }, [
    decisionNode,
    abstractNodes,
    detailedNodesRed,
    detailedNodesGreen,
    detailedNodesBlue,
  ]);

  // Add graph selection options
  const graphOptions: { id: GraphId; label: string }[] = [
    { id: "1-1-1", label: "1-1-1 Graph" },
    { id: "3-3-3", label: "3-3-3 Graph" },
  ];

  // Update video when graph changes
  useEffect(() => {
    const videoPath = `/videos/${selectedGraphId}.mp4`;
    setSelectedVideo(videoPath);
  }, [selectedGraphId]);

  // Add these state variables
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [animationState, setAnimationState] = useState<AnimationState>({
    graph1Active: null,
    graph2Active: null,
    graph3Active: null,
    timeElapsed: 0,
    isGreenPhase: false,
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { activeAnimation, currentAnimation, setCurrentAnimation } =
    useAnimationContext();

  // Sync graph selection with animation selection
  useEffect(() => {
    setSelectedGraphId(currentAnimation as GraphId);
  }, [currentAnimation]);

  // Sync animation selection with graph selection
  useEffect(() => {
    setCurrentAnimation(selectedGraphId);
  }, [selectedGraphId, setCurrentAnimation]);

  // Reset animation state when animation changes
  useEffect(() => {
    if (isAnimating) {
      stopAnimation();
    }
    setCurrentStepIndex(0);
    updateNodeStates(null);
  }, [currentAnimation]);

  // Function to update node active states
  const updateNodeStates = (activeNodeId: string | null) => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          isActive:
            // Direct match
            node.id === activeNodeId ||
            // Parent node activation logic
            (activeNodeId?.includes("pack-red-blocks") &&
              node.id === ABSTRACT_NODES.RED) ||
            (activeNodeId?.includes("pack-green-blocks") &&
              node.id === ABSTRACT_NODES.GREEN) ||
            (activeNodeId?.includes("pack-blue-blocks") &&
              node.id === ABSTRACT_NODES.BLUE),
        },
      })),
    );
  };

  // Update the animation step handler to use the current animation
  const handleAnimationStep = async () => {
    if (!isAnimating || !activeAnimation) return;

    if (currentStepIndex >= activeAnimation.length) {
      setIsAnimating(false);
      updateNodeStates(null);
      return;
    }

    const step = activeAnimation[currentStepIndex];
    if (!step) return;

    updateNodeStates(step.nodeId);
    await new Promise((resolve) => setTimeout(resolve, step.duration));
    setCurrentStepIndex((prev) => prev + 1);
  };

  // Animation effect
  useEffect(() => {
    if (isAnimating) {
      handleAnimationStep();
    }
  }, [isAnimating, currentStepIndex]);

  // Add animation controls
  const startAnimation = () => {
    if (!activeAnimation) return;
    setCurrentStepIndex(0);
    setIsAnimating(true);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setCurrentStepIndex(0);
    updateNodeStates(null);
  };

  // Initialize viewport once at mount
  useEffect(() => {
    setViewport(
      {
        x: LAYOUT.VIEWPORTS.INITIAL.x,
        y: LAYOUT.VIEWPORTS.INITIAL.y,
        zoom: LAYOUT.VIEWPORTS.INITIAL.zoom,
      },
      { duration: 0 },
    );
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div style={{ height: "100%", position: "relative" }}>
        {/* UI element toggle controls */}
        <div className="absolute left-4 top-4 z-10 flex gap-2">
          <button
            className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide Video" : "Show Video"}
          </button>
          <button
            className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowSymbolKey(!showSymbolKey)}
          >
            {showSymbolKey ? "Hide Key" : "Show Key"}
          </button>
          <button
            className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowGraphsPanel(!showGraphsPanel)}
          >
            {showGraphsPanel ? "Hide Charts" : "Show Charts"}
          </button>
        </div>

        {/* Add graph selector */}
        <div className="absolute left-4 top-4 z-[1000]">
          <select
            value={selectedGraphId}
            onChange={(e) => setSelectedGraphId(e.target.value as GraphId)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold shadow-md"
          >
            {graphOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Video component */}
        {showVideo && (
          <ResizableVideo
            selectedVideo={selectedVideo}
            onVideoChange={setSelectedVideo}
            videos={videos}
            videoRef={videoRef}
            onError={handleVideoError}
          />
        )}

        {/* Graphs panel */}
        {showGraphsPanel && (
          <GraphsPanel
            animationState={animationState}
            isAnimating={isAnimating}
            graphId={selectedGraphId}
          />
        )}

        {/* Progress graph */}
        <ProgressGraph progress={progress} graphId={selectedGraphId} />

        {/* Main flow diagram */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          fitView={true}
          minZoom={0.1}
          maxZoom={1.5}
          zoomOnScroll={true}
          panOnScroll={true}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={true}
          zoomOnPinch={true}
          zoomOnDoubleClick={true}
        >
          <Background />
          <Controls />
          <AnimationSelector />
        </ReactFlow>

        {/* Symbol key */}
        {showSymbolKey && <SymbolKey />}

        {/* Add animation controls */}
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}>
          <button
            onClick={startAnimation}
            disabled={isAnimating}
            className="mr-2 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
          >
            Start Animation
          </button>
          <button
            onClick={stopAnimation}
            disabled={!isAnimating}
            className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
          >
            Stop Animation
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Flow() {
  return (
    <ReactFlowProvider>
      <AnimationProvider>
        <FlowComponent />
      </AnimationProvider>
    </ReactFlowProvider>
  );
}
