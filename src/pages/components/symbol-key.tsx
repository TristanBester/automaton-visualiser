import { useState } from 'react';
import Latex from "react-latex-next";

const symbols = [
  { symbol: "a^{(r)}_{i}", description: "Above red block i" },
  { symbol: "g^{(r)}_{i}", description: "Grasping red block i" },
  { symbol: "t^{(r)}_{i}", description: "Transporting red block i" },
  { symbol: "r^{(r)}_{i}", description: "Releasing red block i" },
  { symbol: "v_L", description: "Lifting vacuum active" },
  { symbol: "g_c", description: "Gripper closed" },
  { symbol: "a_o", description: "Arm operational" },
  { symbol: "a_c", description: "Arm calibrated" },
  { symbol: "\\land", description: "Logical AND" },
  { symbol: "\\lnot", description: "Logical NOT" },
];

export function SymbolKey() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] bg-white rounded-lg shadow-lg w-[90%] max-w-6xl">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2 text-left font-semibold flex justify-between items-center hover:bg-gray-50 rounded-t-lg"
      >
        <span>Symbol Key</span>
        <span className="text-gray-500">
          {isExpanded ? '▼' : '▶'}
        </span>
      </button>
      
      {isExpanded && (
        <div className="p-4 pt-2">
          <div className="grid grid-cols-5 gap-4 text-sm">
            {symbols.map(({ symbol, description }) => (
              <div key={symbol} className="flex items-center gap-2">
                <div className="min-w-[60px]">
                  <Latex>{"$" + symbol + "$"}</Latex>
                </div>
                <span className="text-gray-600">-</span>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 