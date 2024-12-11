import React from "react";

interface SpeedSelectorProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export const SpeedSelector: React.FC<SpeedSelectorProps> = ({
  speed,
  onSpeedChange,
}) => {
  const speeds = [0.5, 1, 1.5, 2];

  return (
    <select
      value={speed}
      onChange={(e) => onSpeedChange(Number(e.target.value))}
      className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {speeds.map((s) => (
        <option key={s} value={s}>
          {s}x Speed
        </option>
      ))}
    </select>
  );
};
