import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ANIMATION_CONFIG } from "~/config";
import { GraphId } from "~/pages/types";

type ProgressGraphProps = {
  progress: number; // 0 to 100
  graphId: GraphId; // Add this prop
};

export function ProgressGraph({ progress, graphId }: ProgressGraphProps) {
  // Create data points for the graph
  const data = Array.from({ length: 101 }, (_, i) => ({
    time: i,
    value: i <= progress ? i : null,
  }));

  const maxTime = graphId === "1-1-1" ? 30 : 45; // Adjust time based on graph

  return (
    <div className="absolute right-4 top-24 z-10 rounded-lg bg-white/90 p-4 shadow-lg">
      <h3 className="mb-2 font-semibold">Animation Progress</h3>
      <div style={{ width: 250, height: 150 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, bottom: 20, left: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(value) =>
                `${((value * maxTime) / 100).toFixed(1)}s`
              }
              fontSize={11}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(value) => `${value}%`}
              fontSize={11}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              connectNulls
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
