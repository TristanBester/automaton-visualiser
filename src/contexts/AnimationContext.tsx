import React, { createContext, useContext, useState } from "react";
import { type AnimationStep } from "~/data/animations";
import { ANIMATION_3_3_3 } from "~/data/animations/animation-3-3-3";

type AnimationContextType = {
  activeAnimation: AnimationStep[];
  currentAnimation: string;
  setCurrentAnimation: (id: string) => void;
};

const defaultContext: AnimationContextType = {
  activeAnimation: ANIMATION_3_3_3,
  currentAnimation: "3-3-3",
  setCurrentAnimation: () => undefined,
};

const AnimationContext = createContext<AnimationContextType>(defaultContext);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [activeAnimation] = useState(defaultContext.activeAnimation);
  const [currentAnimation] = useState(defaultContext.currentAnimation);
  const setCurrentAnimation = () => {}; // No-op since we don't need to change animations

  const value = {
    activeAnimation,
    currentAnimation,
    setCurrentAnimation,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider",
    );
  }
  return context;
}
