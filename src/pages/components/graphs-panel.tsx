import React, { useState, useMemo } from 'react';
import { AnimationState } from '../data/animation';
import { ANIMATION_CONFIG } from '~/config';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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

const Graph = ({ title, color, progress, isAnimating, data }: GraphProps) => {
  // Calculate how much of the data to show based on progress
  const currentTime = (progress / 100) * 30; // Convert progress to seconds

  // Filter and transform the data for display
  const displayData = useMemo(() => {
    return data
      .filter(point => point.time <= currentTime)
      .map(point => ({
        time: point.time,
        value: point.value,
        // Add null values for future points to show the full time range
        currentValue: point.time <= currentTime ? point.value : null
      }));
  }, [data, currentTime]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div style={{ width: '100%', height: 120 }}>
        <ResponsiveContainer>
          <LineChart data={displayData} margin={{ top: 5, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="time" 
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}s`}
              fontSize={11}
            />
            <YAxis 
              domain={['dataMin - 5', 'dataMax + 5']} // Add some padding
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
const generateSampleData = (type: 'sine' | 'square' | 'sawtooth'): DataPoint[] => {
  const points: DataPoint[] = [];
  for (let t = 0; t <= 30; t += 0.1) {
    let value = 0;
    switch (type) {
      case 'sine':
        value = Math.sin(t * 0.5) * 50 + 50;
        break;
      case 'square':
        value = Math.floor(t / 5) % 2 === 0 ? 80 : 20;
        break;
      case 'sawtooth':
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
}

export function GraphsPanel({ animationState, isAnimating }: GraphsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Calculate progress percentage
  const progress = (animationState.timeElapsed / (ANIMATION_CONFIG.DURATION.TOTAL / 1000)) * 100;

  // Generate sample data (replace with your actual data)
  const sineData = useMemo(() => generateSampleData('sine'), []);
  const squareData = useMemo(() => generateSampleData('square'), []);
  const sawtoothData = useMemo(() => generateSampleData('sawtooth'), []);

  return (
    <div className="absolute right-4 top-24 z-[1000] flex flex-col gap-4">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-auto flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-gray-50"
      >
        {isExpanded ? 'Hide Graphs' : 'Show Graphs'}
        <span className="text-gray-500">
          {isExpanded ? '▼' : '◀'}
        </span>
      </button>

      {isExpanded && (
        <div className="w-80 flex flex-col gap-4">
          <Graph 
            title="Sine Wave" 
            color="#ff9999" 
            progress={progress}
            isAnimating={isAnimating}
            data={sineData}
          />
          <div className="flex flex-col gap-4">
            <Graph 
              title="Square Wave" 
              color="#90EE90" 
              progress={progress}
              isAnimating={isAnimating}
              data={squareData}
            />
            <Graph 
              title="Sawtooth Wave" 
              color="#90EE90" 
              progress={progress}
              isAnimating={isAnimating}
              data={sawtoothData}
            />
          </div>
        </div>
      )}
    </div>
  );
} 