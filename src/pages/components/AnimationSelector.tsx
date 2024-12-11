import React from "react";
import { useAnimationContext } from "~/contexts/AnimationContext";

const animations = [
  { id: "1-1-1", label: "Animation 1-1-1" },
  { id: "3-3-3", label: "Animation 3-3-3" },
];

export const AnimationSelector: React.FC = () => {
  const { currentAnimation, setCurrentAnimation } = useAnimationContext();

  return (
    <div className="absolute right-4 top-4 z-50">
      <select
        value={currentAnimation}
        onChange={(e) => setCurrentAnimation(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {animations.map((animation) => (
          <option key={animation.id} value={animation.id}>
            {animation.label}
          </option>
        ))}
      </select>
    </div>
  );
};
