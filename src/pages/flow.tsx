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
import { Container } from "./components/container";
import { LAYOUT, STYLES } from "~/config";
import { SymbolKey } from "./components/symbol-key";
import { ResizableVideo } from "../components/ResizableVideo";
import { GraphsPanel } from "./components/graphs-panel";
import { level1Nodes as level1Nodes111 } from "~/data/1-1-1/nodes/nodes-level-1";
import { level2Nodes as level2Nodes111 } from "~/data/1-1-1/nodes/nodes-level-2";
import { level3Nodes as level3Nodes111 } from "~/data/1-1-1/nodes/nodes-level-3";
import { level1Edges as level1Edges111 } from "~/data/1-1-1/edges/edges-level-1";
import { level2Edges as level2Edges111 } from "~/data/1-1-1/edges/edges-level-2";
import { level3Edges as level3Edges111 } from "~/data/1-1-1/edges/edges-level-3";
import { level1Nodes as level1Nodes333 } from "~/data/3-3-3/nodes/nodes-level-1";
import { level2Nodes as level2Nodes333 } from "~/data/3-3-3/nodes/nodes-level-2";
import { level3Nodes as level3Nodes333 } from "~/data/3-3-3/nodes/nodes-level-3";
import { level1Edges as level1Edges333 } from "~/data/3-3-3/edges/edges-level-1";
import { level2Edges as level2Edges333 } from "~/data/3-3-3/edges/edges-level-2";
import { level3Edges as level3Edges333 } from "~/data/3-3-3/edges/edges-level-3";
import { edgeTypes } from "~/data/edge-types";
import { nodeTypes } from "~/data/node-types";
import { GraphId } from "~/pages/types";
import { ProgressGraph } from "./components/progress-graph";
import { type AnimationState } from "~/data/3-3-3/animation/animation";

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

  // Initialize nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const [selectedGraphId, setSelectedGraphId] = useState<GraphId>("1-1-1");

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

  // Fix the Container component props
  const containerProps = {
    x: LAYOUT.CONTAINER.LEVEL_3.RED.FIRST.X || 0, // Provide default value
    y: LAYOUT.CONTAINER_Y.LEVEL_3,
    width: LAYOUT.CONTAINER.LEVEL_3.WIDTH,
    height: LAYOUT.CONTAINER.HEIGHT,
  };

  // Update nodes and edges when graph changes
  useEffect(() => {
    const getGraphData = (graphId: GraphId) => {
      switch (graphId) {
        case "1-1-1":
          return {
            nodes: {
              level1: level1Nodes111,
              level2: level2Nodes111,
              level3: level3Nodes111,
            },
            edges: {
              level1: level1Edges111,
              level2: level2Edges111,
              level3: level3Edges111,
            },
          };
        case "3-3-3":
          return {
            nodes: {
              level1: level1Nodes333,
              level2: level2Nodes333,
              level3: level3Nodes333,
            },
            edges: {
              level1: level1Edges333,
              level2: level2Edges333,
              level3: level3Edges333,
            },
          };
      }
    };

    const graphData = getGraphData(selectedGraphId);
    const { nodes: graphNodes, edges: graphEdges } = graphData;

    const allNodes = [
      ...graphNodes.level1.all,
      ...graphNodes.level2.red,
      ...graphNodes.level2.green,
      ...(graphNodes.level3.red[0] || []),
      ...(graphNodes.level3.red[1] || []),
      ...(graphNodes.level3.red[2] || []),
      ...(graphNodes.level3.green[0] || []),
      ...(graphNodes.level3.green[1] || []),
      ...(graphNodes.level3.green[2] || []),
    ].filter(Boolean);
    setNodes(allNodes);

    const allEdges = [
      ...graphEdges.level1.all,
      ...graphEdges.level2.red,
      ...graphEdges.level2.green,
      ...(graphEdges.level3.red[0] || []),
      ...(graphEdges.level3.red[1] || []),
      ...(graphEdges.level3.red[2] || []),
      ...(graphEdges.level3.green[0] || []),
      ...(graphEdges.level3.green[1] || []),
      ...(graphEdges.level3.green[2] || []),
    ].filter(Boolean);
    setEdges(allEdges);
  }, [selectedGraphId, setNodes, setEdges]);

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
          fitView={false}
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

          {/* Level 1 Containers */}
          <Container
            x={LAYOUT.CONTAINER.LEVEL_1.RED.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_1}
            width={LAYOUT.CONTAINER.LEVEL_1.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Red Blocks (15s)"
            color={STYLES.COLORS.RED}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_1.GREEN.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_1}
            width={LAYOUT.CONTAINER.LEVEL_1.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Green Blocks"
            color={STYLES.COLORS.GREEN}
          />

          {/* Level 2 Containers */}
          <Container
            x={LAYOUT.CONTAINER.LEVEL_2.RED.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_2}
            width={LAYOUT.CONTAINER.LEVEL_2.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Red Sequential Tasks (5s each)"
            color={STYLES.COLORS.RED}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_2.GREEN.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_2}
            width={LAYOUT.CONTAINER.LEVEL_2.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Green Sequential Tasks (5s each)"
            color={STYLES.COLORS.GREEN}
          />

          {/* Level 3 Containers */}
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.RED.FIRST.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Red Block One (5s)"
            color={STYLES.COLORS.RED}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.RED.SECOND.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Red Block Two (5s)"
            color={STYLES.COLORS.RED}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.RED.THIRD.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Red Block Three (5s)"
            color={STYLES.COLORS.RED}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.GREEN.FIRST.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Green Block One (5s)"
            color={STYLES.COLORS.GREEN}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.GREEN.SECOND.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Green Block Two (5s)"
            color={STYLES.COLORS.GREEN}
          />
          <Container
            x={LAYOUT.CONTAINER.LEVEL_3.GREEN.THIRD.X}
            y={LAYOUT.CONTAINER_Y.LEVEL_3}
            width={LAYOUT.CONTAINER.LEVEL_3.WIDTH}
            height={LAYOUT.CONTAINER.HEIGHT}
            label="Pack Green Block Three (5s)"
            color={STYLES.COLORS.GREEN}
          />
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
      <FlowComponent />
    </ReactFlowProvider>
  );
}
