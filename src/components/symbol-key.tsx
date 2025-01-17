import { useState } from "react";
import Latex from "react-latex-next";
import { symbols } from "~/data/symbols";

export function SymbolKey() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="absolute bottom-4 left-1/2 z-[1000] w-[90%] max-w-6xl -translate-x-1/2 rounded-lg bg-white shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between rounded-t-lg px-4 py-2 text-left font-semibold hover:bg-gray-50"
      >
        <span>Symbol Key</span>
        <span className="text-gray-500">{isExpanded ? "▼" : "▶"}</span>
      </button>

      {isExpanded && (
        <div className="p-4 pt-2">
          <div className="grid grid-cols-3 gap-4 text-sm">
            {symbols.map(({ symbol, description }) => (
              <div key={symbol} className="flex items-center gap-2">
                <div className="min-w-[80px]">
                  <Latex>{"$\\langle " + symbol + " \\rangle$"}</Latex>
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
