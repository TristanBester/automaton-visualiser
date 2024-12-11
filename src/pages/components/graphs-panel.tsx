import React, { useState, useMemo } from "react";
import { type AnimationState } from "~/data/3-3-3/animation/animation";
import { ANIMATION_CONFIG } from "~/config";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { GraphId } from "~/pages/types";

// Define the data point type
interface DataPoint {
  time: number;
  value: number;
}

type GraphProps = {
  title: string;
  color: string;
  progress: number;
  isAnimating: boolean;
  data: DataPoint[]; // Array of {time, value} points
};

const Graph = ({
  title,
  color,
  progress,
  isAnimating,
  data,
  graphId,
}: GraphProps & { graphId: GraphId }) => {
  // Calculate how much of the data to show based on progress
  const maxTime = graphId === "1-1-1" ? 30 : 45; // Adjust time based on graph
  const currentTime = (progress / 100) * maxTime;

  // Filter and transform the data for display
  const displayData = useMemo(() => {
    return data
      .filter((point) => point.time <= currentTime)
      .map((point) => ({
        time: point.time,
        value: point.value,
        // Add null values for future points to show the full time range
        currentValue: point.time <= currentTime ? point.value : null,
      }));
  }, [data, currentTime]);

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-md">
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <div style={{ width: "100%", height: 120 }}>
        <ResponsiveContainer>
          <LineChart
            data={displayData}
            margin={{ top: 5, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="time"
              domain={[0, maxTime]}
              ticks={[0, maxTime / 3, (2 * maxTime) / 3, maxTime]}
              tickFormatter={(value) => `${value}s`}
              fontSize={11}
            />
            <YAxis
              domain={["dataMin - 5", "dataMax + 5"]} // Add some padding
              fontSize={11}
            />
            {/* Show full data as background line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={1}
              strokeOpacity={0.3}
              dot={false}
            />
            {/* Show current progress as main line */}
            <Line
              type="monotone"
              dataKey="currentValue"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Example data generator (replace with your actual data)
const generateSampleData = (
  type: "sine" | "square" | "sawtooth",
  graphId: GraphId,
): DataPoint[] => {
  const points: DataPoint[] = [];
  const maxTime = graphId === "1-1-1" ? 30 : 45; // Adjust time based on graph

  for (let t = 0; t <= maxTime; t += 0.1) {
    let value = 0;
    switch (type) {
      case "sine":
        value = Math.sin(t * 0.5) * 50 + 50;
        break;
      case "square":
        value = Math.floor(t / 5) % 2 === 0 ? 80 : 20;
        break;
      case "sawtooth":
        value = (t % 5) * 20;
        break;
    }
    points.push({ time: t, value });
  }
  return points;
};

interface GraphsPanelProps {
  animationState: AnimationState;
  isAnimating: boolean;
  graphId: GraphId;
}

export function GraphsPanel({
  animationState,
  isAnimating,
  graphId,
}: GraphsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Calculate progress percentage
  const progress =
    (animationState.timeElapsed / (ANIMATION_CONFIG.DURATION.TOTAL / 1000)) *
    100;

  // Generate sample data based on graphId
  const sineData = useMemo(
    () => generateSampleData("sine", graphId),
    [graphId],
  );
  const squareData = useMemo(
    () => generateSampleData("square", graphId),
    [graphId],
  );
  const sawtoothData = useMemo(
    () => generateSampleData("sawtooth", graphId),
    [graphId],
  );

  return (
    <div className="absolute right-4 top-24 z-[1000] flex flex-col gap-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-auto flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-gray-50"
      >
        {isExpanded ? "Hide Graphs" : "Show Graphs"}
        <span className="text-gray-500">{isExpanded ? "▼" : "◀"}</span>
      </button>

      {isExpanded && (
        <div className="flex w-80 flex-col gap-4">
          <Graph
            title="Sine Wave"
            color="#ff9999"
            progress={progress}
            isAnimating={isAnimating}
            data={sineData}
            graphId={graphId}
          />
          <div className="flex flex-col gap-4">
            <Graph
              title="Square Wave"
              color="#90EE90"
              progress={progress}
              isAnimating={isAnimating}
              data={squareData}
              graphId={graphId}
            />
            <Graph
              title="Sawtooth Wave"
              color="#90EE90"
              progress={progress}
              isAnimating={isAnimating}
              data={sawtoothData}
              graphId={graphId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
