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
import { ResizableVideo } from "~/components/ResizableVideo";
import { GraphsPanel } from "./components/graphs-panel";
import {
  decisionNode,
  detailedNodesRed,
  detailedNodesGreen,
  detailedNodesBlue,
  initialEdges,
} from "~/data/nodes";
import { edgeTypes } from "~/data/edge-types";
import { nodeTypes } from "~/data/node-types";
import { ABSTRACT_NODES } from "~/data/animations";
import { AnimationProvider } from "~/contexts/AnimationContext";
import { useAnimationContext } from "~/contexts/AnimationContext";
import { type AnimationState } from "~/pages/types";
import { SpeedSelector } from "~/components/SpeedSelector";

function FlowComponent() {
  const { setViewport } = useReactFlow();
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number>();
  const VIDEO_PATH = "/videos/3-3-3.mp4";

  // UI element visibility state
  const [showVideo, setShowVideo] = useState(true);
  const [showSymbolKey, setShowSymbolKey] = useState(false);
  const [showGraphsPanel, setShowGraphsPanel] = useState(false);

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) => {
    console.error("Error loading video:", e);
    console.error("Video source:", e.currentTarget.src);
  };

  // Initialize nodes and edges with a useEffect to handle position updates
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Update the useEffect to include detailed nodes
  useEffect(() => {
    setNodes([
      decisionNode,
      ...detailedNodesRed,
      ...detailedNodesGreen,
      ...detailedNodesBlue,
    ]);
    setEdges(initialEdges);
  }, [decisionNode, detailedNodesRed, detailedNodesGreen, detailedNodesBlue]);

  // Add these state variables
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>({
    activeNodeId: null,
    activeEdgeId: null,
    timeElapsed: 0,
    isGreenPhase: false,
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { activeAnimation, currentAnimation, setCurrentAnimation } =
    useAnimationContext();

  const [animationStartTime, setAnimationStartTime] = useState<number | null>(
    null,
  );

  // Add speed state
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Reset animation state when animation changes
  useEffect(() => {
    if (isAnimating) {
      resetAnimation();
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
          isActive: node.id === activeNodeId,
        },
      })),
    );
  };

  // Update the animation step handler to use timestamps
  const handleAnimationStep = () => {
    if (!isAnimating || !activeAnimation || !animationStartTime) return;

    const currentTime = performance.now();
    const elapsedTime = (currentTime - animationStartTime) * playbackSpeed;

    // Find the current step based on elapsed time
    const currentStep = activeAnimation.find((step, index) => {
      const nextStep = activeAnimation[index + 1];
      return (
        elapsedTime >= step.startTime &&
        (!nextStep || elapsedTime < nextStep.startTime)
      );
    });

    // Update states if we found a step
    if (currentStep) {
      updateStates(currentStep.nodeId, currentStep.edgeId || null);
    }

    // Check if animation is complete
    if (elapsedTime >= activeAnimation[activeAnimation.length - 1]?.startTime) {
      resetAnimation();
      return;
    }

    // Request next frame
    animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
  };

  // Update animation controls
  const startAnimation = () => {
    if (!activeAnimation) return;
    setAnimationStartTime(performance.now());
    setIsAnimating(true);
    setShowGraphsPanel(true);
    setHasCompleted(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setAnimationStartTime(null);
    setHasCompleted(true);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    updateNodeStates(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Replace the previous animation effect
  useEffect(() => {
    if (isAnimating) {
      animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
    }
  }, [isAnimating]);

  // Add video end handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      if (isAnimating) {
        resetAnimation();
      }
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [isAnimating]);

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

  // Add speed change handler
  const handleSpeedChange = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  // Update video playback rate when speed changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Update the node and edge states
  const updateStates = (
    activeNodeId: string | null,
    activeEdgeId: string | null,
  ) => {
    // Update nodes
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          isActive: node.id === activeNodeId,
        },
      })),
    );

    // Update edges
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        style: {
          ...edge.style,
          stroke: edge.id === activeEdgeId ? STYLES.COLORS.PURPLE : "#333",
          strokeWidth: edge.id === activeEdgeId ? 3 : 2,
          strokeDasharray: edge.id === activeEdgeId ? 5 : undefined,
          animation:
            edge.id === activeEdgeId
              ? "dashdraw 1500ms linear infinite"
              : undefined,
        },
      })),
    );
  };

  const [hasCompleted, setHasCompleted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div style={{ height: "100%", position: "relative" }}>
        {/* UI element toggle controls */}
        <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
          {/* Animation control buttons */}
          <div className="flex gap-2">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
            >
              Start Animation
            </button>
            <button
              onClick={resetAnimation}
              disabled={!isAnimating}
              className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
            >
              Reset Animation
            </button>
          </div>

          {/* Add speed selector */}
          <SpeedSelector
            speed={playbackSpeed}
            onSpeedChange={handleSpeedChange}
            disabled={isAnimating}
          />
        </div>

        {/* Replace the bottom right buttons with this new structure */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
          <button
            className="w-32 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowGraphsPanel(!showGraphsPanel)}
          >
            {showGraphsPanel ? "Hide Charts" : "Show Charts"}
          </button>
          <button
            className="w-32 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide Video" : "Show Video"}
          </button>
          <button
            className="w-32 rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowSymbolKey(!showSymbolKey)}
          >
            {showSymbolKey ? "Hide Key" : "Show Key"}
          </button>
        </div>

        {/* Video component */}
        {showVideo && (
          <ResizableVideo
            selectedVideo={VIDEO_PATH}
            videoRef={videoRef}
            onError={handleVideoError}
            isAnimating={isAnimating}
          />
        )}

        {/* Graphs panel */}
        {showGraphsPanel && (
          <GraphsPanel
            animationState={animationState}
            isAnimating={isAnimating}
            hasCompleted={hasCompleted}
            videoRef={videoRef}
          />
        )}

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
        </ReactFlow>

        {/* Symbol key */}
        {showSymbolKey && <SymbolKey />}
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
