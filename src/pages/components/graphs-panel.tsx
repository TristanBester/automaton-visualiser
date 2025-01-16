import React, { useState, useMemo, useEffect } from "react";
import { type AnimationState } from "~/pages/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { GraphId } from "~/pages/types";
import { loadCSVData, type DataPoint } from "~/utils/csv-loader";

type GraphProps = {
  title: string;
  color: string;
  progress: number;
  isAnimating: boolean;
  data: DataPoint[];
  videoDuration: number;
};

const Graph = ({
  title,
  color,
  progress,
  isAnimating,
  data,
  videoDuration,
}: GraphProps) => {
  const currentTime = (progress / 100) * videoDuration;

  const displayData = useMemo(() => {
    if (!data.length) return [];

    const maxDataTime = data[data.length - 1].time;
    const timeScale = videoDuration / maxDataTime;

    return data
      .filter((point) => point.time * timeScale <= currentTime)
      .map((point) => ({
        time: point.time * timeScale,
        value: point.value,
        currentValue:
          point.time * timeScale <= currentTime ? point.value : null,
      }));
  }, [data, currentTime, videoDuration]);

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
              domain={[0, videoDuration]}
              ticks={[
                0,
                videoDuration / 3,
                (2 * videoDuration) / 3,
                videoDuration,
              ]}
              tickFormatter={(value) => `${value.toFixed(1)}s`}
              fontSize={11}
            />
            <YAxis domain={["auto", "auto"]} fontSize={11} />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={1}
              strokeOpacity={0.3}
              dot={false}
            />
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

interface GraphsPanelProps {
  animationState: AnimationState;
  isAnimating: boolean;
  graphId: GraphId;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export function GraphsPanel({
  animationState,
  isAnimating,
  graphId,
  videoRef,
}: GraphsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [returnsData, setReturnsData] = useState<DataPoint[]>([]);
  const [valuesData, setValuesData] = useState<DataPoint[]>([]);
  const [rewardsData, setRewardsData] = useState<DataPoint[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Load CSV data when graphId changes
  useEffect(() => {
    const loadData = async () => {
      try {
        const [returns, values, rewards] = await Promise.all([
          loadCSVData(`/returns/${graphId}.csv`),
          loadCSVData(`/values/${graphId}.csv`),
          loadCSVData(`/rewards/${graphId}.csv`),
        ]);

        setReturnsData(returns);
        setValuesData(values);
        setRewardsData(rewards);
        setError(null);
      } catch (err) {
        console.error("Error loading CSV data:", err);
        setError("Failed to load graph data");
      }
    };

    void loadData();
  }, [graphId]);

  // Update progress when video time changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [videoRef]);

  const videoDuration = videoRef.current?.duration || 30;

  if (error) {
    return (
      <div className="absolute right-4 top-24 z-[1000] rounded-lg bg-red-50 p-4 text-red-600">
        {error}
      </div>
    );
  }

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
            title="Rewards"
            color="#90CAF9"
            progress={progress}
            isAnimating={isAnimating}
            data={rewardsData}
            videoDuration={videoDuration}
          />
          <Graph
            title="Values"
            color="#90EE90"
            progress={progress}
            isAnimating={isAnimating}
            data={valuesData}
            videoDuration={videoDuration}
          />
          <Graph
            title="Returns"
            color="#ff9999"
            progress={progress}
            isAnimating={isAnimating}
            data={returnsData}
            videoDuration={videoDuration}
          />
        </div>
      )}
    </div>
  );
}
