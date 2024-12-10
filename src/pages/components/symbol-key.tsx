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
  return (
    <div className="absolute right-4 top-20 z-10 rounded-lg bg-white/90 p-4 shadow-lg">
      <h3 className="mb-2 font-semibold">Symbol Key</h3>
      <div className="flex flex-col gap-y-1 text-sm">
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
  );
} 