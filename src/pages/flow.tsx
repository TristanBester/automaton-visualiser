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
  abstractNodes,
  detailedNodesRed,
  detailedNodesGreen,
  detailedNodesBlue,
} from "~/data/nodes";
import { edgeTypes } from "~/data/edge-types";
import { nodeTypes } from "~/data/node-types";
import { GraphId } from "~/pages/types";
import { ABSTRACT_NODES } from "~/data/animations";
import { AnimationSelector } from "./components/AnimationSelector";
import { AnimationProvider } from "~/contexts/AnimationContext";
import { useAnimationContext } from "~/contexts/AnimationContext";
import { type AnimationState } from "~/pages/types";
import { VideoSelector } from "~/components/VideoSelector";
import { SpeedSelector } from "~/components/SpeedSelector";

// Add this helper function near the top of the file
const getGraphIdFromPath = (path: string): GraphId => {
  const id =
    path.split("/").pop()?.split(".")[0]?.replace(/_/g, "-") ?? "1-1-1";
  return id as GraphId;
};

function FlowComponent() {
  const { setViewport } = useReactFlow();
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number>();
  const [selectedVideo, setSelectedVideo] = useState("/videos/1_1_1.mp4");
  const videos = useMemo(
    () => [
      { name: "1-1-1", path: "/videos/1_1_1.mp4" },
      { name: "3-3-3", path: "/videos/3_3_3.mp4" },
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

  // Add these state variables
  const [isAnimating, setIsAnimating] = useState(false);
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

  const [isPaused, setIsPaused] = useState(false);
  const [animationStartTime, setAnimationStartTime] = useState<number | null>(
    null,
  );

  // Add speed state
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Handle both video and animation selection
  const handleSelectionChange = (videoPath: string) => {
    setSelectedVideo(videoPath);
    // Extract animation ID from video path (e.g., "3-3-3" from "/videos/3_3_3.mp4")
    const animationId = videoPath
      .split("/")
      .pop()
      ?.split(".")[0]
      ?.replace(/_/g, "-");
    if (animationId) {
      setCurrentAnimation(animationId);
    }
  };

  // Sync animation selection with graph selection
  useEffect(() => {
    setCurrentAnimation(selectedVideo);
  }, [selectedVideo, setCurrentAnimation]);

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

    // Update node states if we found a step
    if (currentStep) {
      updateNodeStates(currentStep.nodeId);
    }

    // Check if animation is complete
    if (elapsedTime >= activeAnimation[activeAnimation.length - 1].startTime) {
      stopAnimation();
      return;
    }

    // Request next frame
    animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
  };

  // Update animation controls
  const startAnimation = () => {
    if (!activeAnimation) return;
    if (isPaused) {
      const pausedTime = performance.now() - (animationStartTime || 0);
      setAnimationStartTime(performance.now() - pausedTime);
      setIsPaused(false);
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      setAnimationStartTime(performance.now());
      setIsAnimating(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
    animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
  };

  const pauseAnimation = () => {
    setIsPaused(true);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setIsPaused(false);
    setAnimationStartTime(null);
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
    if (isAnimating && !isPaused) {
      animationFrameRef.current = requestAnimationFrame(handleAnimationStep);
    }
  }, [isAnimating, isPaused]);

  // Add video end handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      if (isAnimating) {
        stopAnimation();
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

  return (
    <AnimatePresence mode="wait">
      <motion.div style={{ height: "100%", position: "relative" }}>
        {/* UI element toggle controls */}
        <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
          {/* First row of buttons */}
          <div className="flex gap-2">
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

          {/* Animation selector */}
          <VideoSelector
            selectedVideo={selectedVideo}
            onVideoChange={handleSelectionChange}
            videos={videos}
          />

          {/* Show video button */}
          <button
            className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide Video" : "Show Video"}
          </button>

          {/* Animation control buttons */}
          <div className="flex gap-2">
            <button
              onClick={startAnimation}
              disabled={isAnimating && !isPaused}
              className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
            >
              {isPaused ? "Resume" : "Start Animation"}
            </button>
            {isAnimating && !isPaused && (
              <button
                onClick={pauseAnimation}
                className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600"
              >
                Pause
              </button>
            )}
            <button
              onClick={stopAnimation}
              disabled={!isAnimating && !isPaused}
              className="rounded-md bg-gray-500 px-4 py-2 text-white shadow-md hover:bg-gray-600 disabled:opacity-50"
            >
              Stop Animation
            </button>
          </div>

          {/* Add speed selector */}
          <SpeedSelector
            speed={playbackSpeed}
            onSpeedChange={handleSpeedChange}
          />
        </div>

        {/* Video component */}
        {showVideo && (
          <ResizableVideo
            selectedVideo={selectedVideo}
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
            graphId={getGraphIdFromPath(selectedVideo)}
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
